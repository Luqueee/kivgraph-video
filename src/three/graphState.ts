import { Easing, interpolate } from "remotion";
import { edges, nodes, repositories } from "../data/graphDemo";
import type { Look } from "./projection";

/**
 * Scene 03's visual state, derived from the scene-local frame and nothing else.
 *
 * `src/data/graphDemo.ts` says what the graph *is*; this file says how much of
 * it is on screen at a given moment and where the camera is standing. The split
 * exists so the topology can be checked against the real codebase without
 * reading animation code, and so the choreography can be retimed without
 * touching the dataset.
 *
 * Scene-local frames 0-360 (master 0700-1060).
 */

/** How far a value has travelled between two frames, clamped and eased. */
const ramp = (
  frame: number,
  from: number,
  to: number,
  easing = Easing.bezier(0.33, 0, 0.2, 1),
) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

/**
 * When each node arrives and each edge finishes drawing, in scene-local frames.
 *
 * Every hop waits for its parent: an edge starts only once the node it leaves
 * has arrived, and a node starts only once the edge reaching it is most of the
 * way across. If two hops land together the structure reads as a picture
 * instead of a consequence, and the scene loses its only argument.
 *
 * The three `checkout-service` windows are not choreography. Each one begins on
 * the exact frame at which the camera has already carried that node inside the
 * frame with 45 px to spare - 238, 251 and 253, measured against the rig below
 * rather than chosen. The second repository is revealed by the camera opening
 * space; opacity only follows it in. A node that faded up while still crossing
 * the frame edge would be a label sliced in half, which reads as a fault
 * rather than as a discovery.
 */
/**
 * How long scene 03 runs, and the single definition of it.
 *
 * It has to equal the `durationInFrames` of the `03 Graph Reveal` sequence, and
 * `blastState.ts` has to inherit the graph at exactly this frame - scene 04
 * continues the same graph and assumes scene 03 left it settled.
 *
 * It was a literal `300` in two places and they came apart the moment the scene
 * grew to 360 for the cross-repository beat: scene 04 went on inheriting frame
 * 300, where the three `checkout-service` nodes have only just started arriving,
 * so the whole far repository was missing from the blast radius while its
 * crossings still ran off toward it. Nothing in the build said so. One
 * definition now.
 */
export const graphRevealFrames = 360;

const schedule: Readonly<Record<string, readonly [number, number]>> = {
  // The substitution (local 0000-0030).
  "payments.withRetry": [0, 30],

  // The direct callers, still inside `internal/retry` (0060-0130).
  "payments.policyDo->payments.withRetry": [62, 92],
  "payments.policyDo": [68, 104],
  "payments.once->payments.withRetry": [88, 118],
  "payments.once": [100, 132],

  // The public package the impact has to travel through (0115-0210).
  "payments.clientCharge->payments.policyDo": [118, 152],
  "payments.clientCharge": [128, 168],
  "payments.clientRefund->payments.once": [158, 190],
  "payments.clientRefund": [168, 206],

  /**
   * The other repository, and it is now three beats rather than one (0238-0348).
   *
   * It used to be one: the three crossings started at 224 and the three nodes
   * followed, while the camera was already opening. Everything new happened at
   * once and the shot said *and there is more over here* instead of *this
   * relationship leaves the repository*. The cross-repository reach is the
   * single most sellable thing Kivgraph does and it was the least marked moment
   * in the film.
   *
   * So: the local graph completes and its repository label lands, and then
   * **nothing happens for eighteen frames**. `payments-api` is finished and the
   * viewer is allowed to believe it.
   *
   * Then one crossing draws, alone, for forty-four frames, and the camera has
   * not moved yet - it is still at the `payments-api` pose it settled into at
   * 195. The edge therefore leaves the frame toward space the viewer cannot
   * see, and for those forty-four frames it is the only new thing in the shot.
   * That is the whole beat, and it costs nothing but order.
   *
   * Only then does the camera open, following where the edge already went, and
   * `checkout-service` arrives to explain it. The other two crossings come after
   * it rather than with it: they are confirmation, not the discovery.
   *
   * `placeOrder` is the one that goes first because `CheckoutService.PlaceOrder`
   * is the consumer a reader can place without being told - an order being
   * placed, reaching a retry policy four hops away in another repository.
   */
  "checkout.placeOrder->payments.clientCharge": [256, 300],
  "checkout.placeOrder": [300, 334],
  "checkout.reconciliationRun->payments.clientCharge": [306, 340],
  "checkout.refundHandle->payments.clientRefund": [308, 342],
  "checkout.reconciliationRun": [314, 346],
  "checkout.refundHandle": [316, 348],
};

/**
 * Cluster labels, and the curve is as much of the design as the window.
 *
 * `payments-api` names the near structure once that structure is complete;
 * `checkout-service` has to be legible before the crossings finish, or the far
 * group lands as geometry instead of as a second codebase.
 *
 * They ramp on `labelEasing` rather than the scene's default. A repository
 * label settles at `clusterLabelOpacity` 0.42 of `textMuted` over a near-black
 * frame - the dimmest type in the film - and on the default ease-in curve the
 * first two thirds of the ramp sit below the level at which that grey
 * separates from the background. A forty-two frame fade therefore behaved like
 * a twelve frame pop: `checkout-service` appeared out of nothing, in an empty
 * corner the vignette crushes, while the eye was on the crossings drawing at
 * the other side of the frame. `labelEasing` front-loads it, so the label
 * crosses into visibility in its first quarter and spends the rest settling -
 * it is already faintly present when the tubes arrive, which is the difference
 * between a name being revealed and a name being there to be read.
 *
 * `checkout-service` ends at 287 rather than 278: the frame its last plate
 * (`checkout.placeOrder`) finishes arriving, so the name and the group it
 * names stop moving on the same frame.
 */
const labelEasing = Easing.bezier(0.16, 1, 0.3, 1);

const labelSchedule: Readonly<Record<string, readonly [number, number]>> = {
  "payments-api": [200, 238],
  "checkout-service": [296, 334],
};

/**
 * Frames over which an edge stops being an event and becomes structure: it
 * loses the accent it drew with, thins, and dims to its resting weight.
 */
const edgeSettleFrames = 26;

export type GraphVisualState = {
  /** Camera pose. Applied imperatively; see `CameraRig`. */
  readonly look: Look;
  /** 0 -> 1 presence, by node id. */
  readonly nodes: Readonly<Record<string, number>>;
  /** 0 -> 1 draw progress along the curve, by edge id. */
  readonly edges: Readonly<Record<string, number>>;
  /**
   * Multiplies an edge's opacity without touching its geometry, by edge id.
   *
   * Separate from `edges` because that value is the tube's *length*: dimming an
   * edge through it would retract the tube instead of quietening it. Scene 03
   * leaves every entry at 1 and scene 04 inherits that; scene 05 uses it during
   * the flatten to drop the edges that do not survive into the right column.
   */
  readonly edgeGain: Readonly<Record<string, number>>;
  /** 0 -> 1 from "just drawn, accented" to "settled structure", by edge id. */
  readonly edgeSettle: Readonly<Record<string, number>>;
  /**
   * How affected a node reads, 0 -> 1, by node id.
   *
   * Scene 04's only new information channel. Presence says whether a node is
   * on screen and how far away it is; this says whether the change reaches it.
   * They have to be separate: by the time the blast radius runs, six of the
   * eight nodes are already at full presence, so the propagation would have
   * nothing left to raise.
   *
   * It drives the label toward `accentText`, the plate's hairline toward
   * `accent`, and both toward the top of their opacity range - the last part
   * matters most at hop 3, where the radial falloff is strongest and colour
   * alone cannot carry the mark.
   */
  readonly nodeAccent: Readonly<Record<string, number>>;
  /**
   * The selected node's single brightness swell, 0 -> 1.
   *
   * Brightness and not scale: apparent size is depth here, so a node that
   * swells reads for a moment as having come closer than the change itself.
   * It brightens the plate's own face and hairline, never a light - a light
   * would restate the whole frame for a local event.
   */
  readonly pulse: number;
  /**
   * 0 -> 1 as the cascade's depth collapses onto one plane, for scene 05.
   *
   * Scene 05 retires the 3D representation by flattening it rather than by
   * cutting away, because the argument it makes is a difference in count and
   * not a spatial one. Cutting would throw away the continuity the film has
   * held since 0330; flattening the real graph is what proves the comparison's
   * right-hand column *is* the same structure re-presented.
   *
   * It multiplies every node's `z` toward zero and thins the plates as they
   * become coplanar. The camera's own straightening is not here - that is a
   * pose, and poses live in `look`.
   */
  readonly flatten: number;
  /** 0 -> 1 presence, by repository id. */
  readonly labels: Readonly<Record<string, number>>;
  /**
   * 0 -> 1 as the anchor's inherited selection field becomes a plate. The DOM
   * field fades out over the same window, so the two cross-fade in place.
   */
  readonly grow: number;
  /**
   * 0 -> 1 opacity of scene 02's last image, still on screen underneath.
   * Starts at 1: master frame 0330 must be indistinguishable from 0329.
   */
  readonly residual: number;
};

/**
 * The camera. Four poses, and it is a rig - an eye and a point it looks at -
 * rather than a position and a fixed direction.
 *
 * That is the change the whole redesign rests on. A camera locked to `-Z` sees
 * every plate square-on, so depth can only be inferred from scale, and the
 * shot reads as a diagram no matter how the nodes are arranged. Once the eye
 * steps off the axis, the same coordinates produce convergence, foreshortening,
 * differential parallax between shells and a visible edge on every plate. The
 * geometry did not need to become more three-dimensional; the camera did.
 *
 * ```text
 *   0000-0030   eye (0.0, 0.0,  9.0)  ->  (0.0,  0.0,  0.0)   hold, the match cut
 *   0030-0100   eye (0.6, 0.4,  7.4)  ->  (1.3, -0.4, -0.4)   step in, off the axis
 *   0100-0195   eye (2.6, 0.2,  6.2)  ->  (3.8, -0.6, -1.0)   travel with the impact
 *   0195-0268   eye (7.0, 3.2, 10.0)  ->  (8.0,  0.0, -2.4)   rise and open out
 *   0268-0300   held
 * ```
 *
 * The first pose is not chosen: `eye (0, 0, 9)` looking at the origin is the
 * only pose whose basis is the identity, which is what makes the projection
 * collapse to the arithmetic that calibrated the match cut. The rig holds it,
 * motionless, until the dissolve is over. Everything three-dimensional about
 * this scene begins at local 30 and not one frame earlier.
 *
 * From there the eye steps off the axis and, in the last move, rises above the
 * chain. The rise is the pose that earns the scene its depth: the plates all
 * stand upright, so a camera level with them sees them square-on and the shot
 * flattens no matter how the nodes are arranged, while a camera above them sees
 * every plate foreshorten, its top edge catch the key light and its extrusion
 * appear. The view direction ends 15 degrees off `-Z` - inside the
 * storyboard's 15-20 degree budget, and small enough that nothing swings. It
 * never orbits, never rolls, never floats: `up` is world up on every frame.
 *
 * The horizontal reach is a constraint, not a preference. The graph spans 16
 * world units along `x`; a stronger horizontal oblique foreshortens that span
 * into a region too small to hold eight labels, and a search over the real
 * label metrics returns no camera that is both more oblique and legible. Depth
 * is therefore carried by the rise, by the plates' own orientation and by
 * parallax during the move, not by swinging the camera sideways.
 *
 * The apparent size of `withRetry()` traces the shape of the move: 32 px at the
 * cut, 39 px as the camera steps in, 49 px when the near structure is complete,
 * 29 px once the whole graph is in frame. It ends wider than it started, which
 * is what a dolly out is, and it is never smaller than the outermost label is
 * large. The tightest label margin over all 300 frames is 55 px.
 */
const poses: readonly (readonly [number, Look])[] = [
  [0, { eye: [0, 0, 9], target: [0, 0, 0] }],
  [30, { eye: [0, 0, 9], target: [0, 0, 0] }],
  [100, { eye: [0.6, 0.4, 7.4], target: [1.3, -0.4, -0.4] }],
  [195, { eye: [2.6, 0.2, 6.2], target: [3.8, -0.6, -1.0] }],
  /**
   * The hold that makes the crossing a beat.
   *
   * The rig stops where it settled on `payments-api` and stays there for sixty
   * frames while the first crossing draws off the right of the frame. Without
   * it the camera was already opening as the edge drew, so the viewer met the
   * new space and the edge that reaches it in the same instant and read neither.
   * A move that arrives before its reason is wallpaper; this one now answers a
   * question the viewer is already asking, which is the only thing `AGENTS.md`
   * lets a camera move do.
   */
  [255, { eye: [2.6, 0.2, 6.2], target: [3.8, -0.6, -1.0] }],
  [328, { eye: [7.0, 3.2, 10.0], target: [8.0, 0.0, -2.4] }],
  [360, { eye: [7.0, 3.2, 10.0], target: [8.0, 0.0, -2.4] }],
];

/**
 * Eased on the same curve on every axis, so the eye and its target never drift
 * out of step and the shot never appears to change its mind mid-move.
 */
const easings = [
  Easing.linear,
  Easing.bezier(0.4, 0, 0.25, 1),
  Easing.bezier(0.4, 0, 0.4, 1),
  Easing.linear,
  Easing.bezier(0.35, 0, 0.2, 1),
  Easing.linear,
];

const lookAt = (frame: number): Look => {
  const frames = poses.map(([at]) => at);
  const axis = (pick: (look: Look) => readonly [number, number, number]) =>
    [0, 1, 2].map((component) =>
      interpolate(
        frame,
        frames,
        poses.map(([, look]) => pick(look)[component] ?? 0),
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: easings,
        },
      ),
    ) as unknown as readonly [number, number, number];

  return { eye: axis((look) => look.eye), target: axis((look) => look.target) };
};

export const getGraphState = (frame: number): GraphVisualState => {
  const window = (id: string) => {
    const found = schedule[id];

    if (!found) {
      throw new Error(`graphState: ${id} has no schedule entry`);
    }

    return found;
  };

  const at = (id: string) => ramp(frame, ...window(id));

  return {
    look: lookAt(frame),
    nodes: Object.fromEntries(nodes.map((node) => [node.id, at(node.id)])),
    edges: Object.fromEntries(edges.map((edge) => [edge.id, at(edge.id)])),

    /** Nothing is suppressed in this scene: every relation is still arriving. */
    edgeGain: Object.fromEntries(edges.map((edge) => [edge.id, 1])),
    edgeSettle: Object.fromEntries(
      edges.map((edge) => {
        const landed = window(edge.id)[1];

        return [edge.id, ramp(frame, landed, landed + edgeSettleFrames)];
      }),
    ),

    labels: Object.fromEntries(
      repositories.map((repository) => {
        const found = labelSchedule[repository.id];

        if (!found) {
          throw new Error(`graphState: ${repository.id} has no label schedule`);
        }

        return [repository.id, ramp(frame, found[0], found[1], labelEasing)];
      }),
    ),

    /** Nothing is affected yet: this scene is still establishing structure. */
    nodeAccent: {},
    pulse: 0,

    /** The graph is being built in depth here; nothing is collapsing it. */
    flatten: 0,

    /**
     * The prompt's selection field becomes the node's plate. Both occupy the
     * same rectangle at local 30 and cross-fade over the next 80 frames while
     * the plate grows its padding and its thickness, so the viewer sees a
     * highlight turn into an object rather than one thing replace another.
     */
    grow: ramp(frame, 30, 110, Easing.bezier(0.33, 0, 0.2, 1)),

    /**
     * The dissolve. Scene 02's image and the 3D node cross-fade over the same
     * 30 frames while occupying the same screen rectangle, at the same scale,
     * in the same face and the same colour. A cross-fade between two identical
     * images has no visible midpoint - that is the whole trick, and it is why
     * the substitution needs no flash, blur or whip to cover it.
     */
    residual: 1 - ramp(frame, 0, 30, Easing.bezier(0.4, 0, 0.6, 1)),
  };
};
