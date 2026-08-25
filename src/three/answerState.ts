import { Easing, interpolate } from "remotion";
import { cutDistance } from "./graphFrame";
import { getSemanticState } from "./semanticState";
import type { GraphVisualState } from "./graphState";
import type { Look } from "./projection";

/**
 * Scene 06's visual state, derived from the scene-local frame and nothing else.
 *
 * Scene-local frames 0-90 (master 0880-0970).
 *
 * The scene closes the loop scene 02 opened. Its one piece of 3D work is the
 * inverse of the film's most important transition: scene 03 grew the prompt's
 * selected token into a graph, and this returns the graph's last surviving node
 * to that token. Everything after that is 2D answer text.
 *
 * The return is not new geometry. `graphFrame.ts` already defines the pose at
 * which the anchor lands on `selectedTokenRect` - `cutDistance` with the group
 * offset by `graphOffset` - and already defines `grow`, which at `0` makes the
 * anchor's plate *exactly* that rectangle. So the travel is the reveal's own two
 * parameters run backwards, and it is exact at both ends by construction rather
 * than by tuning. Reproducing the shape in DOM instead would be an
 * approximation of a lit plate, and `AGENTS.md` §23 forbids covering a
 * continuity failure with an effect.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/**
 * Uneased, for the two cross-fades only.
 *
 * A cross-fade between two renderings of the same rectangle has to sum to one
 * at every frame or the shape dips or doubles halfway through. Two eased ramps
 * do not sum to one; two linear ones do.
 */
const linear = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

/**
 * The frame scene 05 hands over: the split view settled, its right column
 * contracted to one node, everything else already gone.
 *
 * 150 is that scene's last frame and every ramp in it clamps, so this is the
 * image the cut arrives on. Sampled rather than restated for the same reason
 * every other scene samples its predecessor: a copy goes stale the first time
 * the scene before it is retuned.
 */
const inherited = getSemanticState(150);

/**
 * Where the anchor has to end up: the pose at which `graphOffset` puts it on the
 * prompt token.
 *
 * Identical to scene 03's first pose in `graphState.ts`, and stated through
 * `cutDistance` rather than as the literal `9` so there is one definition of the
 * distance the match cut is built on.
 */
const tokenLook: Look = { eye: [0, 0, cutDistance], target: [0, 0, 0] };

/**
 * The travel: 20 frames for 201 px left and 74 px up.
 *
 * The glyphs barely change size - 216 px wide at `0879` against the token's
 * 213.8 - because the right column's scale was set to the token's own type in
 * the first place. What actually changes is the plate: 261 x 72 px with a
 * node's padding at one end, 213.8 x 47.5 px with the prompt's line box and no
 * padding at the other.
 */
const arrival = 20;

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export const getAnswerState = (frame: number): GraphVisualState => {
  const t = ramp(frame, 0, arrival);
  const from = inherited.look;

  return {
    look: {
      eye: [
        lerp(from.eye[0], tokenLook.eye[0], t),
        lerp(from.eye[1], tokenLook.eye[1], t),
        lerp(from.eye[2], tokenLook.eye[2], t),
      ],
      target: [
        lerp(from.target[0], tokenLook.target[0], t),
        lerp(from.target[1], tokenLook.target[1], t),
        lerp(from.target[2], tokenLook.target[2], t),
      ],
    },

    /**
     * Inherited whole. Only the anchor is present by now - scene 05's
     * contraction took the two callers and their tubes with it - so there is
     * nothing here to schedule.
     */
    nodes: inherited.nodes,
    nodeAccent: inherited.nodeAccent,
    edges: inherited.edges,
    edgeGain: inherited.edgeGain,
    edgeSettle: inherited.edgeSettle,
    labels: inherited.labels,

    pulse: 0,

    /** Already flat, and it stays flat: the plate is becoming a text field. */
    flatten: 1,

    /**
     * The whole return trip, in one number. At `1` the plate has the padding
     * every node has; at `0` it is the prompt's line box with no padding and no
     * thickness, which is `selectedTokenRect`.
     */
    grow: 1 - t,

    residual: 0,
  };
};

/**
 * The 3D symbol leaving and the DOM token arriving, as one cross-fade.
 *
 * They are the same rectangle in the same place by the time this runs, so the
 * only difference between them is the rasteriser: troika in the canvas, Chrome
 * in the row. That difference is what `stemDarkening` in `GraphLabel.tsx` exists
 * to remove, and this is the frame it was measured for.
 *
 * Six frames, uneased, starting at the travel's last frame.
 */
export const symbolFade = (frame: number) => 1 - linear(frame, arrival, arrival + 6);

export const tokenPresence = (frame: number) => linear(frame, arrival, arrival + 6);

/**
 * The selection field's own settle, 1 -> 0.85.
 *
 * `GraphWorld` draws the anchor's field at full opacity when `grow` is `0`,
 * because scene 03 needed it to cover the 0.85 field the DOM was still drawing
 * underneath. Running that backwards, the DOM has to start at the opacity the
 * canvas was at and settle to the 0.85 scene 02 established, or the field steps
 * 15% darker in one frame on a 214 x 47 px block. Twelve frames makes it a
 * settle instead of a step.
 */
export const selectSettle = (frame: number) => lerp(1, 0.85, ramp(frame, arrival, arrival + 12));

/**
 * The three answer blocks.
 *
 * Opacity and an 8 px upward settle, 14 frames each, overlapping by six so the
 * three beats read as one cascade rather than three separate events. Blocks, not
 * characters: character-by-character typing would read as the agent composing
 * prose, which is a chat gesture. This is a result being returned.
 *
 * The last of them settles at local 56 and the label at 60, which is master
 * 0940 - the frame the storyboard reviews and the frame the scene must be
 * finished by.
 */
const block = (frame: number, from: number) => {
  const progress = ramp(frame, from, from + 14);

  return { opacity: progress, offsetY: 8 * (1 - progress) };
};

export const answerBlocks = (frame: number) => ({
  lead: block(frame, 26),
  counts: block(frame, 34),
  path: block(frame, 42),
});

/** Attribution, centred on 0940 so that reviewed frame shows it legible. */
export const labelOpacity = (frame: number) => ramp(frame, 48, 60);


/**
 * The code bed's light, coming back.
 *
 * This is the open decision `06-agent-answer.md` recorded, and the two frames
 * either side of the cut settle it. The bed has to *start* at the values scene
 * 05 holds, or the background steps at 0880 and the cut stops being a match. It
 * cannot *stay* there: those levels were dimmed for a split view that filled the
 * frame, and under a single prompt in the lower third they leave the top half of
 * the image dead for ninety frames.
 *
 * So it returns to the values scene 02 held while it asked the question - the
 * same file, the same light, the question now answered. It rises over the same
 * twenty frames as the symbol's travel, which is what makes it read as coming
 * back to the agent rather than as a lamp being turned up.
 *
 * `symbol` tracks `signature` rather than scene 02's `1`: there the lit token
 * was the subject, here it would be a highlight competing with the answer, and
 * the accent budget is already spent on the two numerals and the tool marker.
 */
const bedFrom = {
  symbol: 0.062,
  signature: 0.062,
  body: 0.03,
  context: 0.026,
  neighbours: 0.022,
} as const;

const bedTo = {
  symbol: 0.15,
  signature: 0.15,
  body: 0.07,
  context: 0.06,
  neighbours: 0.05,
} as const;

export const bedLevels = (frame: number) => {
  const t = ramp(frame, 0, arrival);

  return {
    main: {
      symbol: lerp(bedFrom.symbol, bedTo.symbol, t),
      signature: lerp(bedFrom.signature, bedTo.signature, t),
      body: lerp(bedFrom.body, bedTo.body, t),
      context: lerp(bedFrom.context, bedTo.context, t),
    },
    neighbours: lerp(bedFrom.neighbours, bedTo.neighbours, t),
  };
};