import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import * as THREE from "three";
import { ThreeCanvas } from "@remotion/three";
import {
  edges,
  nodeById,
  nodes,
  repositories,
  selectedSymbolId,
} from "../data/graphDemo";
import type { GraphVisualState } from "../three/graphState";
import {
  FOV,
  clusterEm,
  clusterLabelOpacity,
  edgeGutter,
  edgeRadius,
  graphOffset,
  lookOf,
  nodeMetrics,
  plateFrame,
  selectedLineRatio,
} from "../three/graphFrame";
import { master, projectPoint } from "../three/projection";
import { CameraRig } from "../three/CameraRig";
import { GraphEdge } from "../three/GraphEdge";
import { GraphLabel } from "../three/GraphLabel";
import { GraphNode } from "../three/GraphNode";
import { brand, graph } from "../brand/tokens";

/**
 * The graph, drawn from a visual state. Shared by scenes 03 and 04.
 *
 * It exists because those two scenes are one continuous shot. Scene 04 opens on
 * the frame scene 03 closes on, with the same camera, the same eight plates and
 * the same seven tubes, and only then begins to name and subtract. Two
 * independent renderers would have to be kept identical by hand across every
 * future edit, and the first frame of scene 04 would stop matching the last
 * frame of scene 03 the moment one of them drifted.
 *
 * Everything that varies between the scenes is in `GraphVisualState`. What
 * belongs to a scene and not to the graph - the code bed underneath, the
 * residual image of the previous scene, a caption - stays in the scene.
 *
 * **Nothing in the graph is DOM any more.** Labels were absolutely positioned
 * text placed by `projectPoint` from the camera pose, which is the one thing
 * that was holding the shot flat: a DOM rectangle can be moved and scaled and
 * cannot foreshorten, so the plates could not be turned far enough to read as
 * surfaces without the type sliding off them, and the camera was bounded by
 * flat label rectangles overlapping rather than by what the geometry does.
 * Node names, repository names and the anchor's inherited selection field are
 * now all in the scene, sharing their plate's transform, sorted by the depth
 * buffer. `projectPoint` survives here for one job that is genuinely
 * screen-space - the centre of the vignette - and for the camera itself.
 */

export const GraphWorld: React.FC<{ state: GraphVisualState }> = ({
  state,
}) => {
  /**
   * Graph-local to world: the offset that lands the anchor on the token, with
   * the cascade's depth scaled by whatever is left of it.
   *
   * `flatten` runs `0 -> 1` and multiplies every `z` toward zero, so the four
   * hop planes converge onto the anchor's. One expression for both renderers:
   * plates, tubes and type all reach the screen through this function, so they
   * cannot come out of the collapse disagreeing about where a node is.
   */
  const depth = 1 - state.flatten;
  const world = (p: readonly [number, number, number]) =>
    [
      p[0] + graphOffset[0],
      p[1] + graphOffset[1],
      p[2] * depth + graphOffset[2],
    ] as const;

  /**
   * The vignette's centre, and the only screen-space measurement the graph
   * still takes. Everything else the camera used to be asked about is now
   * answered by the camera itself.
   */
  const anchorAtScreen = projectPoint(world([0, 0, 0]), state.look, FOV);

  /**
   * Edge endpoints, clipped to the plates they connect.
   *
   * The animation reads as impact leaving `withRetry()`, so the dataset's
   * `caller -> callee` is traversed backwards: the tube grows from the node
   * already on screen toward the one arriving.
   *
   * A relation runs between two centres, and each end is cut where that run
   * crosses the plate it points at. **The crossing is solved in the plate's
   * own plane.** The run is resolved onto `plateFrame.right` and
   * `plateFrame.up`, the same axes `nodeMetrics` measures `halfWidth` and
   * `halfHeight` along, and the rectangle it is tested against is that
   * rectangle grown by `edgeGutter`. A ray against two slabs: the smaller of
   * the two ratios is the side the run leaves through, and the point it leaves
   * at lies on the plate's own front face.
   *
   * What that replaces was a ratio of world-axis extents with the gutter added
   * to it as a parametric fraction and the whole thing capped at `0.45`, and
   * it got two things wrong at once. It measured the plate against `x` and `y`
   * while the plate stands turned by `plateTilt`; and it left the endpoint
   * wherever the run happened to be at that fraction, which at the long
   * crossings was `0.514` units clear of the plate's plane - a float that
   * perspective then throws sideways in proportion to how far the node sits
   * from the lens axis. The visible gap that produced ran from `0.6 px` to
   * `37.3 px` over seven edges: one tube touching its plate while another
   * stopped a third of a plate short of it, and neither by design.
   *
   * Solved in-plane, the endpoint is coplanar with the contour the gap is read
   * against, so the gap *is* `edgeGutter` on every edge at both ends, and the
   * only thing left that varies is the plate's own perspective: `2.7 - 9.0 px`
   * over the five poses of the camera path.
   */
  const drawnEdges = edges.flatMap((edge) => {
    const draw = state.edges[edge.id] ?? 0;

    if (draw <= 0.012) {
      return [];
    }

    const inner = nodeById(edge.to);
    const outer = nodeById(edge.from);
    const settle = state.edgeSettle[edge.id] ?? 0;
    const a = world(inner.position);
    const b = world(outer.position);

    /** The run, resolved onto the axes every plate shares. */
    const runRight =
      (b[0] - a[0]) * plateFrame.right[0] +
      (b[1] - a[1]) * plateFrame.right[1] +
      (b[2] - a[2]) * plateFrame.right[2];
    const runUp =
      (b[0] - a[0]) * plateFrame.up[0] +
      (b[1] - a[1]) * plateFrame.up[1] +
      (b[2] - a[2]) * plateFrame.up[2];

    /**
     * Where the run crosses one plate's grown rectangle, as a world point on
     * that plate's face. `sign` is `+1` at the near end, where the run leaves
     * toward the far node, and `-1` at the far end, where it is followed back.
     *
     * The two quantities are the fraction of the run that reaches the plate's
     * vertical edges and the fraction that reaches its horizontal ones, and
     * the smaller of them is the side the run actually leaves through - which
     * is the whole of why a tube now arrives at an edge and not at a corner. A
     * run parallel to either pair divides by zero and gets `Infinity`, which
     * is the true answer - it never reaches them - and `Math.min` drops it.
     *
     * The anchor is measured at its current `grow`, not at its final size:
     * while the selection field is still becoming a plate the first two edges
     * are already drawing, and an edge clipped to a rectangle the plate has
     * not grown into yet would hang in the middle of it.
     */
    const arrival = (node: typeof inner, centre: typeof a, sign: number) => {
      const box = nodeMetrics(
        node,
        node.id === selectedSymbolId ? state.grow : 1,
      );
      const toLeftRight = (box.halfWidth + edgeGutter) / Math.abs(runRight);
      const toTopBottom = (box.halfHeight + edgeGutter) / Math.abs(runUp);
      const reach = Math.min(toLeftRight, toTopBottom) * sign;
      let right = runRight * reach;
      let up = runUp * reach;

      /**
       * Growing the rectangle grows its corners with it, so a run that leaves
       * near one can end up aiming diagonally off it - which is where the tube
       * into `Policy.Do()` used to arrive, and a rounded corner is the one
       * part of the contour that has no direction to meet. Clamping the free
       * coordinate to the flat span of the side the run leaves through, its
       * half extent less the plate's corner radius, puts the tube on a
       * straight edge. It slides the point *along* that side and never toward
       * it, so the clearance is untouched.
       */
      if (toLeftRight < toTopBottom) {
        const flat = box.halfHeight - box.corner;

        up = Math.max(-flat, Math.min(flat, up));
      } else {
        const flat = box.halfWidth - box.corner;

        right = Math.max(-flat, Math.min(flat, right));
      }

      /**
       * No component along the plate's normal. `GraphNode` extrudes backwards
       * from the node's own plane, so that plane is the plate's front face and
       * the plane its contour is drawn in: an endpoint placed in it is exactly
       * as far from the contour as it is in the plate's own surface. It is
       * also why nothing here needs to know a plate's thickness, or how much
       * of that thickness the flatten has taken away.
       */
      return [
        centre[0] + plateFrame.right[0] * right + plateFrame.up[0] * up,
        centre[1] + plateFrame.right[1] * right + plateFrame.up[1] * up,
        centre[2] + plateFrame.right[2] * right + plateFrame.up[2] * up,
      ] as const;
    };

    return [
      {
        id: edge.id,
        from: arrival(inner, a, 1),
        to: arrival(outer, b, -1),
        /** Siblings take opposite sides, so one plate emits two strokes. */
        bow: b[1] >= a[1] ? 1 : -1,
        draw,
        cross: outer.repository !== inner.repository,
        settle,
        gain: state.edgeGain[edge.id] ?? 1,
      },
    ];
  });

  return (
    <AbsoluteFill>
      <ThreeCanvas
        width={master.width}
        height={master.height}
        camera={{ fov: FOV, near: 0.1, far: 120 }}
        /**
         * Tone mapping off, sRGB out.
         *
         * React Three Fiber defaults to ACES Filmic, which is the right choice
         * for a scene lit in physical units and the wrong one here: this shot
         * lives entirely in the bottom 12% of the range, where ACES has its
         * steepest compression. With it on, a plate authored as `#171a1f`
         * rendered at `#080a0d` - darker than the background it was supposed
         * to sit on. Measured, not inferred; it is why three rounds of raising
         * the lights had no effect.
         *
         * The video is authored in sRGB from `src/brand/tokens.ts` and every
         * other scene is DOM. A film curve between the tokens and the frame
         * would mean the graph's greys are not the site's greys, and the match
         * cut's colours could not be guaranteed.
         */
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        style={{ position: "absolute", inset: 0 }}
      >
        <CameraRig look={state.look} />

        {/**
         * Soft ambient plus one key from the camera's left and a dim fill from
         * behind the graph, so a plate's far edge separates from the
         * background instead of dissolving into it. Two lights and no shadows:
         * enough for form, not enough to look like a product render.
         *
         * The intensities are set by measurement, not taste. At the first
         * values tried, a plate landed five levels above `brand.background` -
         * technically present, invisible in the file, and invisible on any
         * display that is not a reference monitor in a dark room. A surface
         * that cannot be seen is not restraint. These land the anchor's lit
         * face around `#2a2e35` and a far plate around `#15171b`: still the
         * darkest thing in the frame after the background, still well below
         * the type, and unmistakably an object.
         *
         * **The key came down off its perch, and `plateTilt` is why.** It used
         * to stand at `[-6, 9, 11]`, `39°` off the plates' normal and high
         * above them. That was survivable while the plates were nearly
         * parallel to the screen; once they pitch back `17°` into it, the key
         * strikes the top rim of the extrusion almost square, and the rim came
         * out at `1.94` against a front face of `1.59` - the side of the plate
         * brighter than the plate. Measured, and visible in a still as a thick
         * light stripe along two edges of the anchor with the hairline lost
         * inside it.
         *
         * **And then it went back up, because `plateTilt` did not survive.**
         * The plates are upright now - `plateTilt` is the identity basis - so
         * the pitch that made a raking key strike the top rim square is gone,
         * and with it the reason the key was flattened. What was left was a key
         * `22°` off the plates' own normal, which is very close to lighting a
         * flat surface head-on: the front face was well lit and the chamfer the
         * extrusion actually has was not, so the plates read as rectangles of
         * grey rather than as objects with a thickness.
         *
         * `[-6, 5, 8]` puts it back over the graph and to the left, `43°` off
         * the normal, which is what makes the side face pick up light at all.
         * The old failure cannot come back the same way: it needed the plates
         * pitched into the key, and they are not.
         *
         * The superseded value and its reasoning are kept below, because it was
         * correct for the geometry of its day and the next agent to find a rim
         * brighter than a face should recognise the shape of it.
         *
         * A key near the plates' own normal fixed it in one move, back when the
         * plates were pitched. From
         * `[-4, 0, 9]` - level, `24°` to the left, `22°` off the normal - the
         * front face still measures `1.838`, the same number as before to
         * within a fifth of a percent, so every grey the scene was signed off
         * on is untouched. The three rims that can ever be seen fall to
         * `0.94 / 0.95 / 0.98`: about half the face, and within a hundredth of
         * each other. That is what turns the extrusion from a band into an
         * even chamfer, and it is the whole of the fix - no colour moved.
         *
         * The ambient came down `0.72 -> 0.60` with the key up to compensate,
         * because ambient is the one term that lights the rims as brightly as
         * the face and it sets the floor under how dark an edge can go. The
         * fill is nudged from `[9, -4, -7]` to `[9, -1, -5]` and up to `0.45`
         * for the same reason it always existed: it is the only light reaching
         * the rims the key leaves black, and levelling them is what keeps the
         * chamfer one thickness the whole way round. Neither light touches the
         * front face - the fill is behind the plates by construction - so the
         * face's value is `ambient + key` and nothing else, and it can be held
         * exactly while the edges are retuned.
         *
         * Only the plates are lit. The tubes are `meshBasicMaterial`, so none
         * of this reaches them.
         */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[-6, 5, 8]} intensity={1.34} />
        <directionalLight position={[9, -1, -5]} intensity={0.45} />

        {/**
         * There is no geometry for a repository.
         *
         * A faint base plane was built and shipped for one render. Correctly
         * exposed it is a rectangle with four corners around each cluster -
         * a container, which is the one thing a repository must not be here.
         * `checkout-service` is not a box the impact enters; it is a place the
         * impact is already in by the time you see it. Depth, distance and two
         * floating labels say that, and they say it without drawing a wall.
         */}
        {drawnEdges.map((edge) => (
          <GraphEdge
            key={edge.id}
            from={edge.from}
            to={edge.to}
            bow={edge.bow}
            draw={edge.draw}
            radius={
              edgeRadius.active +
              (edgeRadius.idle - edgeRadius.active) * edge.settle
            }
            /**
             * Accent while the relation is being established, neutral once it
             * is part of the structure - the storyboard's rule that accent
             * means "real and active", spent one edge at a time.
             *
             * At full strength and full opacity a resolving edge measured
             * `#2153c3` across 6 px, which is a beam, not a relationship. The
             * accent is therefore carried at 62% over a dark frame: present
             * enough to be the brightest thing moving, quiet enough to stay a
             * line.
             */
            colour={interpolateColors(
              edge.settle,
              [0, 1],
              [brand.accent, edge.cross ? graph.edgeCross : graph.edgeLocal],
            )}
            /**
             * A settled relation is quieter than a resolving one but it is not
             * decoration, and it used to be treated as decoration: a local edge
             * *lost* opacity as it settled, ending at `0.56`, which put the
             * structure of the graph below its own labels at any size the film
             * is embedded at. Both now gain instead, and the crossings gain
             * most - they are the only cross-repository edges in the film and a
             * settled crossing is supposed to weigh more than any local edge.
             */
            opacity={
              edge.draw *
              edge.gain *
              (edge.cross
                ? 0.62 + 0.26 * edge.settle
                : 0.62 + 0.1 * edge.settle)
            }
          />
        ))}

        {nodes.map((node) => {
          const presence = state.nodes[node.id] ?? 0;

          if (presence < 0.004) {
            return null;
          }

          const anchor = node.id === selectedSymbolId;
          const metrics = nodeMetrics(node, anchor ? state.grow : 1);
          const look = lookOf(node.id);
          const affected = state.nodeAccent[node.id] ?? 0;

          /**
           * The anchor's own surface carries the pulse: its face brightens from
           * the elevated surface toward `borderStrong` and its hairline gains
           * alpha, then both return. One node's material, for twenty frames,
           * and no light is touched.
           */
          const anchorFace = interpolateColors(
            state.grow,
            [0, 1],
            [brand.selection, brand.surfaceElevated],
          );

          return (
            <GraphNode
              key={node.id}
              position={world(node.position)}
              halfWidth={metrics.halfWidth}
              halfHeight={metrics.halfHeight}
              /**
               * The extrusion goes with the depth. A plate keeps its real
               * thickness while the camera can turn against it; once the rig is
               * frontal and the shells are coplanar there is no angle left for a
               * side face to be seen from, and a plate that still had one would
               * be claiming a depth the frame no longer has.
               */
              thickness={metrics.thickness * (1 - 0.82 * state.flatten)}
              corner={metrics.corner}
              /**
               * The anchor begins as the prompt's selection field and becomes a
               * lifted surface; every other node is the same dark plate until
               * the change reaches it, when its face lifts one surface step.
               *
               * The accent is spent on hairlines and nowhere else, and even
               * there at low alpha - a full-strength `brand.accent` border
               * turns the node into a button, which is a control the viewer
               * expects to press rather than a symbol under discussion. What
               * marks the selected node is that it is the brightest surface,
               * the largest type and the only edge in the frame carrying any
               * hue at rest; what marks an affected one is that its label went
               * accent and its plate came up with it.
               */
              face={
                anchor
                  ? interpolateColors(
                      state.pulse,
                      [0, 1],
                      [anchorFace, brand.borderStrong],
                    )
                  : interpolateColors(
                      affected,
                      [0, 1],
                      [brand.surface, brand.surfaceElevated],
                    )
              }
              rim={
                anchor
                  ? brand.accent
                  : interpolateColors(
                      affected,
                      [0, 1],
                      [brand.borderStrong, brand.accent],
                    )
              }
              opacity={
                presence *
                (look.plate + (1 - look.plate) * affected) *
                (anchor ? 1 : 0.94)
              }
              rimOpacity={
                presence *
                (anchor
                  ? state.grow * (0.32 + 0.28 * state.pulse)
                  : look.plate * (0.55 + 0.45 * affected))
              }
              sheen={anchor ? state.grow : 0}
              label={{
                gate: node.id,
                text: node.label,
                em: metrics.em,
                colour: anchor
                  ? brand.accentText
                  : interpolateColors(
                      affected,
                      [0, 1],
                      [brand.textSecondary, brand.accentText],
                    ),
                /**
                 * Affected labels climb out of their shell's luminance step
                 * toward full presence. At hop 3 the falloff crushes the
                 * tubes, so the mark has to be carried by the type at least as
                 * much as by the geometry.
                 */
                opacity: presence * (look.label + (1 - look.label) * affected),
              }}
              /**
               * The field the prompt drew, withdrawing as the plate underneath
               * it arrives, and it is now the same rectangle rather than a
               * second renderer's copy of it. It has to be in the scene: with
               * the label in the canvas, a DOM field over the canvas would
               * cover the very type it used to sit behind.
               *
               * At `grow 0` this is exactly `selectedTokenRect` - the label's
               * own box at the prompt's line ratio - so it is also exactly the
               * plate, which has no padding and no thickness yet. The `1 px`
               * bleed the DOM span carried on each side is gone with it, and
               * with it the plate's known `1 px` overhang.
               */
              field={
                anchor
                  ? {
                      halfWidth: metrics.labelHalfWidth,
                      halfHeight: (metrics.em * selectedLineRatio) / 2,
                      colour: brand.selection,
                      opacity: presence * (1 - state.grow),
                    }
                  : undefined
              }
            />
          );
        })}

        {/**
         * A repository name is the one label with no plate under it, so it is
         * the one label whose orientation is not inherited from anything. It
         * stands upright in world space, like the plates: what makes it read
         * as type in the space rather than as an overlay on top of the space
         * is that it is in the scene at all - it takes the perspective of
         * wherever in the cascade it sits, and it is occluded by anything in
         * front of it.
         */}
        {repositories.map((repository) => {
          const opacity =
            (state.labels[repository.id] ?? 0) * clusterLabelOpacity;

          if (opacity < 0.004) {
            return null;
          }

          return (
            <GraphLabel
              key={repository.id}
              gate={repository.id}
              text={repository.label}
              em={clusterEm}
              colour={brand.textMuted}
              opacity={opacity}
              letterSpacing={0.06}
              position={world(repository.labelPosition)}
            />
          );
        })}
      </ThreeCanvas>

      {/**
       * Scene 01's radial falloff, transposed. The periphery is crushed so the
       * frame reads as a crop of something larger, and so a label entering at
       * the edge arrives out of darkness rather than appearing on a flat field.
       */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(128% 120% at ${
            (anchorAtScreen.x / master.width) * 100
          }% ${(anchorAtScreen.y / master.height) * 100}%, rgba(${
            brand.backgroundRgb
          }, 0) 0%, rgba(${brand.backgroundRgb}, 0) 30%, rgba(${
            brand.backgroundRgb
          }, 0.5) 68%, rgba(${brand.backgroundRgb}, 0.92) 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
