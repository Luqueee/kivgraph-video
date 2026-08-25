import { Easing, interpolate } from "remotion";
import { edges, nodes, repositories, selectedSymbolId } from "../data/graphDemo";
import type { GraphVisualState } from "./graphState";
import type { Look } from "./projection";

/**
 * Scene 04's visual state, derived from the scene-local frame and nothing else.
 *
 * Scene-local frames 0-90 (master 0630-0720).
 *
 * This scene reveals nothing. It inherits the whole graph from scene 03, names
 * the fact the viewer has already seen, and then takes away everything that is
 * not that fact. Every value below therefore starts at exactly the value scene
 * 03 left, and the only question each one answers is what happens to it next.
 */

const ramp = (
  frame: number,
  from: number,
  to: number,
  easing = Easing.bezier(0.22, 1, 0.36, 1),
) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

/**
 * The pose scene 03 holds from its local 268 onward.
 *
 * Written here rather than imported so that the two scenes' agreement is a
 * checked fact - master 0629 and 0630 are rendered as a pair and compared - and
 * not an accident of a shared mutable default.
 */
export const restLook: Look = {
  eye: [7.0, 3.2, 10.0],
  target: [8.0, 0.0, -2.4],
};

/**
 * The turn: the rig swings up and to the right around the cascade, so the
 * structure is seen from a materially different angle by the time it settles.
 *
 * ```text
 *              eye                   target              obliquity  smallest label
 *   local 0    ( 7.00, 3.20, 10.00)  (8.0, 0.0, -2.4)      15.1°        16.0 px
 *   local 89   (11.86, 7.53,  8.69)  (9.5, 1.5, -2.4)      30.3°        16.0 px
 * ```
 *
 * `20.6°` of total rotation of the view direction: azimuth `-4.6° -> +12.0°`,
 * elevation `14.4° -> 28.0°`. Every plate is seen at a new angle, the near end of
 * the cascade crosses the frame against the far group, and the far group's
 * plates go from near-frontal to visibly foreshortened.
 *
 * **It is an orbit at constant radius, and that is not a stylistic choice.** The
 * eye stays 12.84 units from the target against 12.845 at rest - three
 * thousandths of a unit - because the layout has no room for anything else. Two
 * hard constraints, both measured against the shipped geometry rather than
 * assumed:
 *
 * - **containment.** `STORYBOARD.md` §13: no label is ever cut. The binding
 *   object is not a node but the `checkout-service` cluster label at the top
 *   right. A first attempt at this scene swung the eye laterally to
 *   `(11.2, 4.0, 9.2)` and pushed `CheckoutService.PlaceOrder()` **10 px past
 *   the right edge** - caught on a render, not in review;
 * - **type size.** `STORYBOARD.md` §7's `Labels 16-20 px` bracket.
 *   `RefundHandler.Handle()` sits at exactly `16.0 px` at rest, so the layout was
 *   tuned hard against that floor and a camera move has nothing to spend. A
 *   craned pose that read beautifully took it to `14.3 px`.
 *
 * A grid over azimuth, elevation and target offset found **no pose at all** that
 * cleared both at every frame of the move. What ships is the resolution of that:
 * the landing pose holds the full `16 px` floor, because Scenes 05 and 06 live
 * there and key still 0800 has to be legible downscaled to README width, while
 * frames *in transit* are allowed down to `15 px` - seen for a fraction of a
 * second, and nobody stops on them. That distinction is the only relaxation
 * available and it is deliberate.
 *
 * The target moves `+1.5` on `x` and `+1.5` on `y`, which is what recentres the
 * frame and buys back the azimuth the first attempt could not afford. It is a
 * recentre, not a change of subject: more than a unit or two and the shot stops
 * being about the same thing.
 *
 * The x axis keeps `98.3%` of its length, so the chain's 16 world units do not
 * compress. `up` is world up on every frame; the rig never rolls.
 *
 * Three mechanisms were measured when this scene's job was to *name* the
 * crossing rather than to show it, and all three measurements are still true:
 * rig translation gave 9 px of parallax differential, eye-only 1-4 px, and a
 * change in the eye's `z` 24 px - the strongest, and rejected then because it
 * changed apparent size at the moment the crossings became the subject. This
 * turn is that third mechanism spent as rotation rather than as approach, which
 * is how it buys the viewpoint change without the apparent-size cost.
 *
 * Eased into and out of rest, so velocity as well as position is continuous at
 * 0630 and at 0720. It does not return: a move that comes back to where it
 * started is a tremor, not a gesture. Scene 05 reads the landing through
 * `getCrossRepoState(90)` and holds it still for 120 frames.
 *
 * It settles on local **89**, not 90. 90 is one frame past the end of a 90-frame
 * sequence and never renders, so a curve settling there leaves the rig a
 * hundredth of a unit out of position on the last frame anybody sees - invisible
 * on the frame and impossible to hide at the seam, which measured 47.9 dB PSNR
 * instead of the ~63 dB that means antialiasing only. Now: 0719/0720 identical.
 */
const landing: Look = {
  eye: [11.86, 7.53, 8.69],
  target: [9.5, 1.5, -2.4],
};

const turnAt = (frame: number) =>
  interpolate(frame, [0, 89], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.3, 1),
  });

const lookAt = (frame: number): Look => {
  const t = turnAt(frame);
  const between = (
    from: readonly [number, number, number],
    to: readonly [number, number, number],
  ) =>
    [0, 1, 2].map(
      (component) => from[component] + (to[component] - from[component]) * t,
    ) as unknown as readonly [number, number, number];

  return {
    eye: between(restLook.eye, landing.eye),
    target: between(restLook.target, landing.target),
  };
};

/**
 * The nodes the claim is made of: the changed symbol, the public pair the impact
 * has to travel through, and the three consumers in the other repository.
 *
 * `Policy.Do()` and `Once()` are deliberately not here. They are the reason the
 * impact escapes `internal/retry` at all, and they are still on screen - but
 * they are not part of the sentence "this reaches another codebase", and this
 * scene's whole method is subtraction.
 */
const onTheClaim = new Set<string>([
  selectedSymbolId,
  "payments.clientCharge",
  "payments.clientRefund",
  "checkout.reconciliationRun",
  "checkout.placeOrder",
  "checkout.refundHandle",
]);

const isCrossing = (edge: (typeof edges)[number]) =>
  nodes.find((node) => node.id === edge.from)?.repository !==
  nodes.find((node) => node.id === edge.to)?.repository;

/** How far suppressed structure recedes. Not to zero: it is still true. */
const suppressedNode = 0.22;
const suppressedEdge = 0.18;

/**
 * How far a crossing is pulled back toward the state it drew in.
 *
 * `edgeSettle` runs `0 -> 1` from "resolving, accented, slightly thicker" to
 * "settled structure". Winding the crossings back to 0.35 lifts them toward
 * accent and thickens them a little, which is the storyboard's rule applied
 * honestly: accent marks an active relationship, and for these ninety frames
 * these three relationships are the only active thing in the video.
 *
 * Not back to 0. A crossing that looked exactly as it did while drawing would
 * read as drawing again, and this scene must not appear to reveal anything.
 */
const crossingLift = 0.35;

export const getCrossRepoState = (frame: number): GraphVisualState => {
  /**
   * The subtraction now happens **under the veil**, and that is the point of
   * the veil.
   *
   * Dimming six plates and three tubes in plain sight was a change the eye had
   * to hunt for: ninety frames in which the picture was ninety-five per cent
   * the picture from before the cut. Behind a darkened frame the same
   * subtraction is a cut - the veil comes up over the whole graph, the word is
   * read, and what comes back when the veil lifts is the isolated claim. The
   * work is identical; only its visibility changed.
   *
   * Both windows therefore finish before the veil starts lifting at local 66,
   * so nothing is seen moving into place: the graph that returns has already
   * finished being subtracted.
   */
  const boundary = ramp(frame, 18, 44);
  const isolate = ramp(frame, 38, 70);
  const recede = Math.max(boundary * 0.45, isolate);

  return {
    look: lookAt(frame),

    nodes: Object.fromEntries(
      nodes.map((node) => [
        node.id,
        onTheClaim.has(node.id) ? 1 : 1 - (1 - suppressedNode) * recede,
      ]),
    ),

    /** Nothing is drawn in this scene. Every edge is already complete. */
    edges: Object.fromEntries(edges.map((edge) => [edge.id, 1])),

    edgeGain: Object.fromEntries(
      edges.map((edge) => [
        edge.id,
        isCrossing(edge) ? 1 : 1 - (1 - suppressedEdge) * isolate,
      ]),
    ),

    edgeSettle: Object.fromEntries(
      edges.map((edge) => [
        edge.id,
        isCrossing(edge) ? 1 - (1 - crossingLift) * isolate : 1,
      ]),
    ),

    /**
     * Nothing is marked as affected here, and the anchor does not pulse. This
     * scene isolates the claim; scene 05 is the one that fires it.
     */
    nodeAccent: {},
    pulse: 0,

    /** Depth is this scene's only instrument for the boundary. It stays. */
    flatten: 0,

    labels: Object.fromEntries(
      repositories.map((repository) => [repository.id, 1]),
    ),

    /**
     * The only instrument this scene has for the repository boundary.
     *
     * There is no boundary object to strengthen - the boundary *is* the step in
     * depth - so naming both sides more firmly is the honest way to make the
     * frame read as two places rather than as one chain. See the scene document
     * for what this beat cannot do.
     */
    clusterGain: 1 + 0.5 * boundary,

    /** The anchor's plate finished forming in scene 03 and never changes here. */
    grow: 1,

    /** Nothing is dissolving. Scene 03 owned the only cross-fade. */
    residual: 0,
  };
};
