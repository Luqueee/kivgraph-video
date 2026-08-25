import React from "react";
import * as THREE from "three";
import { plateTilt, plateTiltOrder } from "./graphFrame";
import { GraphLabel } from "./GraphLabel";

/**
 * A node's body: a thin rounded plate with real depth, and a hairline around
 * its front face.
 *
 * Not a box, not a sphere, not a chip. The node *is* its label; this is the
 * surface the label sits on, and its whole job is to give that label a
 * position in space rather than on the screen. It earns its place in three
 * ways, all of which need geometry and none of which need decoration: the
 * plate foreshortens as the camera moves off-axis, its side face appears and
 * disappears with the viewing angle, and it takes the key light as a face
 * rather than as a fill. A textured quad would do none of that.
 *
 * Materially it is the darkest thing on screen after the background - closer to
 * a surface catching a little light than to a lit object. The lighting rig is
 * doing the work; the material stays out of its way.
 *
 * **The label is printed on it, not floated over it.** It is a child of this
 * group, on the front face, sharing the plate's transform down to the last
 * digit - so it turns when the plate turns, foreshortens by the same amount,
 * keystones the same way, and is occluded by whatever occludes the plate. That
 * is the whole reason the plate can now be turned at all: while the label was
 * a screen-space rectangle the plate had to stay nearly parallel to the image
 * plane or the type would visibly stop lying on it.
 */

/**
 * How finely a corner arc is polygonised.
 *
 * One constant, used by the extrusion *and* by the contour, because the
 * contour is not an approximation of the plate's outline - it has to be the
 * plate's outline. `shape.getPoints(n)` is exactly what `ExtrudeGeometry`
 * calls with `curveSegments`, so the two are the same polygon by construction
 * and the hairline cannot bulge outside the face it traces. At `4` they were
 * different polygons and disagreed by `0.1 px` at the corners; at `12` the arc
 * is within `0.01 px` of true at the nearest plate.
 */
const CURVE_SEGMENTS = 12;

/**
 * How far in front of the front face a printed thing sits, in world units.
 *
 * The face is at local `z = 0` - `ExtrudeGeometry` builds forward from `z = 0`,
 * so the mesh is pushed back by its own depth to put it there - and these are
 * the only lifts in the file besides the contour's `0.001`. They exist to
 * break the tie in the depth buffer, and they are as small as that allows:
 * `24 bit` depth over `near 0.1 / far 120` resolves about `5e-5` units at the
 * nearest plate, so `0.0016` is thirty times the precision it needs and the
 * parallax it introduces is `0.15 px` at the most oblique pose the camera
 * reaches. Anything larger and the type starts to float.
 */
const FIELD_LIFT = 0.0016;
const LABEL_LIFT = 0.0032;

const roundedRect = (width: number, height: number, radius: number) => {
  const shape = new THREE.Shape();
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const r = Math.min(radius, halfWidth, halfHeight);

  shape.moveTo(-halfWidth + r, -halfHeight);
  shape.lineTo(halfWidth - r, -halfHeight);
  shape.quadraticCurveTo(halfWidth, -halfHeight, halfWidth, -halfHeight + r);
  shape.lineTo(halfWidth, halfHeight - r);
  shape.quadraticCurveTo(halfWidth, halfHeight, halfWidth - r, halfHeight);
  shape.lineTo(-halfWidth + r, halfHeight);
  shape.quadraticCurveTo(-halfWidth, halfHeight, -halfWidth, halfHeight - r);
  shape.lineTo(-halfWidth, -halfHeight + r);
  shape.quadraticCurveTo(-halfWidth, -halfHeight, -halfWidth + r, -halfHeight);
  shape.closePath();

  return shape;
};

type Props = {
  position: readonly [number, number, number];
  halfWidth: number;
  halfHeight: number;
  thickness: number;
  corner: number;
  face: string;
  rim: string;
  opacity: number;
  rimOpacity: number;
  /**
   * How sharply the plate returns the key light, 0 -> 1.
   *
   * This is how the selected node is brighter than the others without being a
   * different colour or a different object. Every plate is the same dark
   * surface; the anchor is simply better finished, so the key leaves a
   * stronger sheen across it. Elevation and material, not a highlight painted
   * on.
   */
  sheen: number;
  /**
   * The type on the front face. Not optional: a node with no label is not a
   * node, it is a rectangle.
   *
   * `em` comes from `nodeMetrics` and nowhere else - the same call that sized
   * the plate this label is printed on and clipped every edge that arrives at
   * it. Re-deriving it here would let the type and the surface under it drift
   * apart by exactly the amount nobody would think to check.
   */
  label: {
    /** Stable identity, for the label's render handle. The node's id. */
    gate: string;
    text: string;
    em: number;
    colour: string;
    opacity: number;
  };
  /**
   * The selection field the prompt drew, withdrawing as the plate arrives.
   * Only the anchor has one; every other node is a plate from the start.
   *
   * It is a flat unlit quad rather than the plate's own face because the plate
   * is *lit*, at about `1.84x` on its front face, and the match cut needs this
   * rectangle to be `brand.selection` and not `brand.selection` multiplied by
   * a lighting rig. It has square corners, like the field in the prompt, and
   * unlike the plate under it.
   *
   * It sits at the label's box, not at the plate's: the plate grows its
   * padding over the same eighty frames the field fades out, and a highlight
   * that swelled as it withdrew would be a highlight becoming an object by
   * accident rather than by design.
   */
  field?: {
    halfWidth: number;
    halfHeight: number;
    colour: string;
    opacity: number;
  };
};

export const GraphNode: React.FC<Props> = ({
  position,
  halfWidth,
  halfHeight,
  thickness,
  corner,
  face,
  rim,
  opacity,
  rimOpacity,
  sheen,
  label,
  field,
}) => {
  const shape = React.useMemo(
    () => roundedRect(halfWidth * 2, halfHeight * 2, corner),
    [halfWidth, halfHeight, corner],
  );

  /**
   * The outline is the front face's own contour, not a second, larger plate.
   * A plate behind a plate would need its own sorting and would thicken as the
   * camera turned; a contour is exactly one pixel of edge wherever it is seen
   * from, which is what a hairline means.
   *
   * **What it is not is the plate's silhouette, and that is where the band
   * came from.** A turned plate shows its side face on the two rims facing the
   * lens, and that strip projects *outside* the front face's contour - so on
   * those two edges the silhouette is the rim's outer boundary and the
   * hairline sits inside it, with a lit strip of side face between the two. On
   * the other two edges the contour *is* the silhouette and reads as intended.
   * One plate, two kinds of edge: that asymmetry is what was being seen as an
   * uneven band rather than as a contour.
   *
   * It cannot be removed without removing the thickness, so it is bounded at
   * both ends instead. Its *width* is held to `0.2 - 3.4 px` by
   * `plateThickness`, and by dropping the anchor's old `2.1` depth multiplier
   * that made the near plate's strip `6.1 px` on its own. Its *value* is held
   * down by the lighting rig in `GraphWorld`: the key now sits close enough to
   * the plates' own normal that every rim lands at about half the front face,
   * and within a hundredth of the other rims. A consistently dark chamfer
   * falling away outside a bright crease is what an edge looks like. A strip
   * lit to `92%` of the face, which is what the old key at `[-6, 9, 11]` did
   * to the top rim, is a band.
   */
  const outline = React.useMemo(() => {
    const points = shape.getPoints(CURVE_SEGMENTS);

    return new THREE.BufferGeometry().setFromPoints(
      points.map((p) => new THREE.Vector3(p.x, p.y, 0.001)),
    );
  }, [shape]);

  /** Never zero: an extrusion of depth 0 is a degenerate solid. */
  const depth = Math.max(thickness, 0.0015);

  /**
   * Three things can be on this node, and they fade on three curves: the
   * hierarchy dims a far plate harder than it dims that plate's type, and the
   * anchor's field withdraws while its plate is still arriving. So each is
   * asked for separately, and the node as a whole leaves only once none of
   * them is left. The old single test on the plate's opacity would have taken
   * an affected node's label down with it - `nodeAccent` raises type to full
   * presence while the plate it sits on stays at `0.94`.
   */
  const showPlate = opacity >= 0.004;
  const showLabel = label.opacity >= 0.004;
  const shownField = field && field.opacity >= 0.004 ? field : null;

  if (!showPlate && !showLabel && !shownField) {
    return null;
  }
  return (
    <group
      position={[position[0], position[1], position[2]]}
      /**
       * Whatever orientation the plates share, asked for rather than assumed.
       *
       * It is `plateTilt` and it is currently the identity: every plate stands
       * upright, and each one foreshortens by its own amount anyway because it
       * sits somewhere different in a sixteen-unit cascade under an off-axis
       * camera. That per-plate difference is what reads as depth; a single
       * angle applied to all eight read as a broken camera, and once the label
       * rode the plate it also rolled the baseline. The argument, and any
       * future angle, live in `plateTilt` - the label inherits this transform
       * and the edge clipping derives its axes from the same constant, so the
       * three cannot come out of a change disagreeing.
       */
      rotation={[plateTilt[0], plateTilt[1], plateTilt[2], plateTiltOrder]}
    >
      {showPlate ? (
        <>
          {/**
           * The extrusion runs *backwards* from the node's own plane: the
           * front face sits at local `z = 0`, the body behind it.
           *
           * `ExtrudeGeometry` builds from `z = 0` forward, which put the front
           * face a whole thickness in front of the point the label is placed
           * at. At the settle camera that is `3.9 px` of parallax between the
           * label and the surface it is supposed to be printed on - the text
           * visibly swims over the plate as the rig moves. Pushing the mesh
           * back by its own depth makes the node's position mean the front
           * face, which is what a label sitting on a plate requires, and it
           * costs one translation. It is also the plane `GraphWorld` clips
           * every arriving edge into.
           */}
          <mesh position={[0, 0, -depth]}>
            <extrudeGeometry
              args={[
                shape,
                {
                  depth,
                  bevelEnabled: false,
                  curveSegments: CURVE_SEGMENTS,
                },
              ]}
            />
            <meshStandardMaterial
              color={face}
              /**
               * Every plate shares one normal and the lights are directional,
               * so the diffuse term is a single constant across the whole
               * frame: on its own it draws a flat fill, however dark. The only
               * thing that varies over a face, and between one plate and
               * another, is the view-dependent specular - so the matte end of
               * the ladder came down from `0.92` to `0.78`, where a plate
               * picks up a broad, weak sheen that shifts as the camera passes
               * it and brightens toward its grazing edge. It is worth a few
               * percent of value and it is the whole difference between a
               * filled rectangle and a surface.
               */
              roughness={0.78 - 0.34 * sheen}
              /**
               * Near zero, always. A metallic surface reflects its
               * environment, and this scene has no environment map, so raising
               * metalness to get a sheen reflects black instead - measured:
               * the anchor came out darker than the plates it was supposed to
               * lead. The highlight has to come from roughness against a real
               * light.
               */
              metalness={0.02}
              transparent
              opacity={opacity}
              depthWrite={opacity > 0.98}
            />
          </mesh>
          <lineLoop geometry={outline}>
            <lineBasicMaterial color={rim} transparent opacity={rimOpacity} />
          </lineLoop>
        </>
      ) : null}

      {shownField ? (
        <mesh position={[0, 0, FIELD_LIFT]}>
          <planeGeometry
            args={[shownField.halfWidth * 2, shownField.halfHeight * 2]}
          />
          <meshBasicMaterial
            color={shownField.colour}
            transparent
            opacity={shownField.opacity}
            /**
             * The field is the one surface in the graph that must arrive at
             * the frame as the token it came from: unlit, so no light touches
             * it, and writing no depth, so the type printed a thousandth of a
             * unit in front of it is never in a fight with it.
             */
            depthWrite={false}
          />
        </mesh>
      ) : null}

      {showLabel ? (
        <GraphLabel
          gate={label.gate}
          text={label.text}
          em={label.em}
          colour={label.colour}
          opacity={label.opacity}
          position={[0, 0, LABEL_LIFT]}
        />
      ) : null}
    </group>
  );
};
