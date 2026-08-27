import { Easing, interpolate } from "remotion";
import { answerLift } from "../components/AgentPrompt";
import { settledBed } from "../components/CodeWorld";
import { cutDistance, FOV } from "./graphFrame";
import { getSemanticState } from "./semanticState";
import type { GraphVisualState } from "./graphState";
import { pxPerUnit } from "./projection";
import type { Look } from "./projection";

/**
 * Scene 06's visual state, derived from the scene-local frame and nothing else.
 *
 * Scene-local frames 0-180 (master 1400-1580).
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
 * The frame scene 05 hands over: the split view gone, one node left.
 *
 * 200 is that scene's last frame and every ramp in it clamps, so this is the
 * image the cut arrives on. Sampled rather than restated for the same reason
 * every other scene samples its predecessor: a copy goes stale the first time
 * the scene before it is retuned - which it now has been, four times.
 */
const inherited = getSemanticState(200);

/**
 * Where the anchor has to end up: the pose at which `graphOffset` puts it on the
 * prompt token.
 *
 * Identical to scene 03's first pose in `graphState.ts`, and stated through
 * `cutDistance` rather than as the literal `9` so there is one definition of the
 * distance the match cut is built on.
 */
/**
 * `answerLift` in world units at the cut distance.
 *
 * Moving the camera down in world `y` puts the subject higher in the frame, so
 * the sign carries straight through: a lift of `-260 px` on screen is a camera
 * offset of `-2.02` units here.
 */
const liftUnits = answerLift / pxPerUnit(FOV, cutDistance);

/**
 * The pose the anchor lands on, offset by scene 06's lift.
 *
 * **The lift is applied to the camera and not to the canvas, and that is not a
 * style preference.** The first build translated the `<AbsoluteFill>` holding
 * `GraphWorld` by `answerLift * travelProgress`, which is zero at frame 0 and
 * should therefore have left `0970` untouched. It did not: a transform on the
 * element resamples the WebGL texture whether or not it moves anything, and
 * frame `0970` came out 51 dB from the same frame without the wrapper. That is
 * antialiasing noise rather than a visible shift, but it is noise on the one
 * frame in the film whose whole job is to be identical to the frame before it.
 *
 * Offsetting the pose instead costs nothing: the travel is already a camera lerp
 * from the inherited pose to this one, so the symbol travels 201 px left and
 * 334 px up as a single motion rather than travelling 74 and then being moved.
 * At `t = 0` the pose is exactly the inherited one, so `0969` and `0970` match
 * exactly as they did before the lift existed.
 */
const tokenLook: Look = {
  eye: [0, liftUnits, cutDistance],
  target: [0, liftUnits, 0],
};

/**
 * The travel: 24 frames for 201 px left and 74 px up.
 *
 * The glyphs barely change size - 216 px wide at the handover against the
 * token's 213.8 - because the right column's scale was set to the token's own
 * type in the first place. What actually changes is the plate: 261 x 72 px with
 * a node's padding at one end, 213.8 x 47.5 px with the prompt's line box and
 * no padding at the other.
 */
const arrival = 24;

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
export const symbolFade = (frame: number) =>
  1 - linear(frame, arrival, arrival + 6);

export const tokenPresence = (frame: number) =>
  linear(frame, arrival, arrival + 6);

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
export const selectSettle = (frame: number) =>
  lerp(1, 0.85, ramp(frame, arrival, arrival + 12));

/**
 * The three answer blocks.
 *
 * Opacity and an 8 px upward settle, 16 frames each, overlapping by four so the
 * three beats read as one cascade rather than three separate events. Blocks, not
 * characters: character-by-character typing would read as the agent composing
 * prose, which is a chat gesture. This is a result being returned.
 *
 * The windows are late and the hold behind them is long, and a measurement is
 * why. On the old 90-frame cut the path sentence settled with 34 frames left:
 * 73 characters in 0.57 s, which is 129 characters per second against the 25-40
 * that on-screen technical text can actually be read at. The answer is the
 * payload of the entire film and it was the fastest thing in it.
 *
 * Now: the lead settles at local 46, the counts at 62, the path at 80 and the
 * label at 94, and the frame is static from there to 180. That leaves the path
 * sentence 100 frames - 1.67 s, or 44 characters per second - and the label 86.
 */
const block = (frame: number, from: number) => {
  const progress = ramp(frame, from, from + 16);

  return { opacity: progress, offsetY: 8 * (1 - progress) };
};

export const answerBlocks = (frame: number) => ({
  lead: block(frame, 30),
  counts: block(frame, 46),
  path: block(frame, 64),
});

/** Attribution, last and quietest. Settled at local 94. */
export const labelOpacity = (frame: number) => ramp(frame, 80, 94);

/**
 * The code bed's light, coming back.
 *
 * This is the open decision `06-agent-answer.md` recorded, and the two frames
 * either side of the cut settle it. The bed has to *start* at the values scene
 * 05 holds, or the background steps at 0910 and the cut stops being a match. It
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
const bedFrom = settledBed;

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
