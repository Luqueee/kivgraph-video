import React from "react";
import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { continueRender, delayRender } from "remotion";
import { fontMonoSdf } from "../brand/fonts";

/**
 * A graph label, in the scene rather than over it.
 *
 * The labels used to be DOM elements placed by `projectPoint` from the camera
 * pose, and that one fact set the ceiling on how three-dimensional this shot
 * could look. A DOM rectangle cannot foreshorten: it can be moved and scaled
 * and nothing else. So the plates it had to stay glued to could not be turned
 * more than a few degrees before the type visibly stopped lying on them, and
 * the camera was bounded by flat label rectangles colliding in screen space
 * instead of by what the geometry actually does. The picture read as 2D
 * because its type was 2D and everything else had been dragged down to it.
 *
 * As SDF text it is geometry. A label is a child of its plate's group and adds
 * no transform of its own but a lift off the front face, so it takes whatever
 * the plate takes: the perspective of wherever that plate sits in a sixteen
 * unit cascade, the keystone an off-axis camera gives it, occlusion by
 * anything in front of it, and any orientation the plates are ever given.
 * Nothing places it: it *is* placed, by the same camera matrix as the plate.
 *
 * What that costs is the thing this file mostly exists to pay. troika parses
 * the font and rasterises its glyph atlas off the main thread, so a label is
 * not there on the frame it is asked for; it is there a few milliseconds
 * later. Remotion captures a frame the moment it believes the page is
 * finished, which without a gate yields frames with missing or half-built
 * glyphs - and, far worse, yields them unpredictably, so a render that looked
 * right once cannot be trusted to be right again. Every label therefore holds
 * a `delayRender` handle until troika reports it has synced.
 *
 * **And then draws the canvas again, which is the half that is easy to miss.**
 * Under a render `ThreeCanvas` runs at `frameloop: "never"` and draws exactly
 * once per Remotion frame, from an effect. That effect fires while troika is
 * still typesetting in its worker, so the one draw of the frame happens before
 * a single glyph exists; when the sync lands, drei asks for a redraw through
 * `invalidate()`, and `invalidate()` is precisely the call that does nothing
 * at `frameloop: "never"`. The gate alone therefore buys a frame that is held
 * open around an image that will never contain the text - eight plates, seven
 * tubes and no type, which is what the first render of this change produced.
 * `advance()` is the redraw that `invalidate()` cannot be: it draws the scene
 * synchronously, and only then is the handle given back.
 */

/**
 * Outline width, in em, that brings troika's ink up to Chrome's. Measured; see
 * the `outlineWidth` prop below for why this exists at all.
 */
const stemDarkening = "0.75%";

/** Render handles held while troika is building a label, by gate key. */
const holding = new Map<string, number>();

/**
 * The typeset shape each mounted label has actually built, by gate key.
 *
 * This is the whole state the gate needs, and getting it wrong is what a first
 * attempt got wrong: it held a handle on *every* render pass and relied on
 * troika's sync to give each one back. React does not render once per frame -
 * the frame that draws the canvas re-renders this component - and the pass
 * whose handle nobody released took the render down with a thirty-second
 * timeout on the third frame of the dissolve, every time.
 *
 * Held against the shape instead, the gate closes only when there is something
 * to wait for. Nothing else can hang it, however many times React renders.
 */
const built = new Map<string, string>();

const releaseGate = (gate: string) => {
  const handle = holding.get(gate);

  if (handle === undefined) {
    return;
  }

  holding.delete(gate);
  continueRender(handle);
};

/**
 * Holds the frame open while troika typesets, and gives it back exactly once
 * however the label leaves.
 *
 * `shape` is every property that sends troika back to the worker - the string,
 * the em and the tracking; the font and the anchors are constants here. When
 * it is unchanged the glyphs on the mesh are already the right glyphs, the
 * draw `ThreeCanvas` does at the end of the frame includes them, and there is
 * nothing to wait for. When it changes, or the label has just mounted, the
 * mesh has no glyphs for these props and the frame must not be captured until
 * it does.
 *
 * The handle is taken **in the render phase**, and that is a requirement
 * rather than a shortcut. `<Text>` calls `troikaMesh.sync()` from its own
 * layout effect, and a child's layout effect runs before its parent's, so a
 * handle taken in an effect here would be taken after the very sync that was
 * supposed to release it.
 *
 * It is keyed and idempotent because a render attempt can be thrown away:
 * drei's `<Text>` suspends on the first frame while the font is parsed, which
 * discards this component's render and runs it again from the boundary. A
 * handle taken in `useState` would be taken twice and released once. That
 * suspense is also *why* the render phase is the safe place: the handle is
 * already held when `<Text>` suspends, so the frame cannot be captured during
 * the font parse either.
 */
const useLabelGate = (gate: string, shape: string) => {
  if (built.get(gate) !== shape && !holding.has(gate)) {
    holding.set(gate, delayRender(`troika label: ${gate}`));
  }

  /**
   * A label that leaves mid-typeset still has to give the frame back, and it
   * has to forget what it built: the next mount is a new mesh with no glyphs
   * on it, and a gate that believed otherwise would let a frame through empty.
   * Nodes and repository names cross the visibility floor as an ordinary part
   * of the scene, so this is not an edge case.
   */
  React.useEffect(
    () => () => {
      built.delete(gate);
      releaseGate(gate);
    },
    [gate],
  );
};

type Props = {
  /**
   * Stable identity of this label, and the key its render handle is held
   * under. A node id or a repository id: never the text, which is not
   * guaranteed unique and would let one label release another's hold.
   */
  gate: string;
  text: string;
  /** Em of the type, in world units. From `nodeMetrics` or `clusterEm`. */
  em: number;
  colour: string;
  opacity: number;
  /** Tracking, as a multiple of the em, exactly as CSS `letterSpacing`. */
  letterSpacing?: number;
  /**
   * Where the label sits in its parent. A node label is a child of its plate's
   * group and only lifts off the front face; a repository name has no plate
   * and gives its own place in the graph. There is no `rotation`: a label
   * takes its orientation from what it is printed on, and adds nothing.
   */
  position?: readonly [number, number, number];
};

export const GraphLabel: React.FC<Props> = ({
  gate,
  text,
  em,
  colour,
  opacity,
  letterSpacing = 0,
  position,
}) => {
  const advance = useThree((state) => state.advance);
  const shape = `${text}|${em}|${letterSpacing}`;

  useLabelGate(gate, shape);

  /**
   * Sync landed: draw, then let the frame go.
   *
   * The draw is skipped when the gate was not holding, which is every frame
   * after the one a label arrives on. There is nothing to redraw then - the
   * mesh already carries these glyphs and `ThreeCanvas` draws the scene at the
   * end of the frame anyway - and eight labels each forcing a full scene draw
   * per frame would be eight draws bought for nothing.
   *
   * The timestamp is `0`, not `performance.now()` which is what `ThreeCanvas`
   * passes its own draw. It reaches only `state.clock`, and nothing in this
   * project reads a clock - there is no `useFrame` anywhere, every value in
   * the scene is a function of the Remotion frame - so a wall-clock read here
   * would buy nothing and would put the one non-deterministic input in the
   * whole graph inside its render path.
   *
   * The release is in a `finally` because it is the one thing here that must
   * not be skipped. A draw that throws - a lost context, an exhausted GPU
   * under concurrent tabs - would otherwise leave the handle held, and
   * Remotion would report a thirty-second timeout on a label instead of the
   * failure that actually happened.
   */
  const syncedAndDrawn = React.useCallback(() => {
    const waiting = holding.has(gate);

    built.set(gate, shape);

    if (!waiting) {
      return;
    }

    try {
      advance(0);
    } finally {
      releaseGate(gate);
    }
  }, [advance, gate, shape]);

  return (
    <Text
      /**
       * `anchorX: center` with `anchorY: middle` is not an approximation of
       * what the DOM labels did - it is the same arithmetic. CSS centres the
       * font's ascent/descent box in the line box, which puts the baseline
       * `(ascent - descent) / 2` below the centre; troika's `middle` offsets
       * the block by half its height, which for one line at `lineHeight:
       * normal` puts the baseline in exactly the same place. For JetBrains
       * Mono, `1020 / -300` over `1000`, that is `0.36 em` below centre in
       * both renderers, so the type sits where it always sat.
       */
      anchorX="center"
      anchorY="middle"
      font={fontMonoSdf}
      fontSize={em}
      letterSpacing={letterSpacing}
      position={
        position ? [position[0], position[1], position[2]] : [0, 0, 0]
      }
      color={colour}
      /**
       * `fillOpacity`, not the material's `opacity`: it is applied inside the
       * glyph shader, after the signed-distance edge, so a fading label keeps
       * its antialiasing instead of dissolving its own outline. troika forces
       * the derived material transparent, and discards any fragment the SDF
       * leaves fully clear, so an invisible glyph quad never punches a hole in
       * whatever is drawn behind it.
       */
      fillOpacity={opacity}
      /**
       * Stem darkening, and the reason it is not fake bold.
       *
       * Both renderers draw JetBrains Mono at weight 400, and troika still lays
       * down measurably less ink than Chrome does. The cause is the blend model,
       * not the weight and not the resolution: troika's SDF gives linear alpha
       * coverage, Chrome gamma-corrects its text, and the deficit is invariant
       * to `sdfGlyphSize` - `-20.83%` measured at 64 and `-20.88%` at 256, which
       * is what rules resolution out. Left uncorrected, the graph's type is
       * lighter than the same typeface on the Kivgraph web, and `src/brand`
       * mirrors that design system 1:1.
       *
       * The correction is an outline in the fill's own colour and opacity, which
       * is what a rasteriser's stem darkening does: it thickens the stroke
       * without changing the letterform or claiming a weight the family does not
       * ship. Raising `fontWeight` would be the fake, and it is also unavailable
       * - troika renders the variable font's default instance.
       *
       * The value is measured, not chosen: integrated glyph coverage over the
       * match-cut token rectangle, tuned until troika's ink matches the DOM's.
       * Being in `em` it is invariant to distance, so every label in the cascade
       * gets the same correction rather than the near ones getting more.
       */
      outlineWidth={stemDarkening}
      outlineColor={colour}
      outlineOpacity={opacity}
      onSync={syncedAndDrawn}
    >
      {text}
    </Text>
  );
};
