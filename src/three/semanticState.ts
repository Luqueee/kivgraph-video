import { Easing, interpolate } from "remotion";
import { edges, nodes, repositories, selectedSymbolId } from "../data/graphDemo";
import { getBlastState } from "./blastState";
import { FOV } from "./graphFrame";
import type { GraphVisualState } from "./graphState";
import { pxPerUnit } from "./projection";
import type { Look } from "./projection";

/**
 * Scene 05's visual state, derived from the scene-local frame and nothing else.
 *
 * Scene-local frames 0-200 (master 1200-1400).
 *
 * The scene retires the 3D graph by flattening it, not by cutting away from it.
 * Its argument is a difference in count rather than a spatial claim, so depth
 * has no more work to do - but cutting to a 2D comparison would throw away the
 * continuity the film has held since 0330, and the viewer would read the right
 * column as a second, unrelated diagram. Flattening the real graph is what
 * proves the right column *is* the same structure, re-presented.
 *
 * Three things move at once over the first forty frames and they are one
 * gesture: the hop planes collapse onto the anchor's, the rig straightens to
 * frontal, and the surviving subgraph is carried into the right half of the
 * frame. The storyboard lists them as three steps; an earlier version of this
 * document claimed the first was already spent because the camera was frontal.
 * It never was - the rig has been 15 degrees off `-Z` since scene 03's local
 * 195 - so the straightening is real work and it is spent here.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/**
 * The frame scene 04 hands over: accent-marked, at rest, on a clear frame.
 *
 * 140 is that scene's last frame and every ramp in it clamps, so this is the
 * image the cut arrives on.
 */
const inherited = getBlastState(140);

/**
 * What survives into the right column: the resolved symbol and the relationships
 * that actually reach it.
 *
 * Derived, not listed. `realRelationships` is every edge whose callee is the
 * selected symbol, which in this dataset is `Policy.Do()` and `Once()` calling
 * `withRetry()` - two, and that is the number the counter prints.
 *
 * The rest of the cascade leaves with the depth, and its leaving is the
 * argument: name matching returns a list, resolution returns one symbol and
 * what genuinely touches it. The emptiness of the column is the point.
 *
 * It is also what fits. The whole graph is sixteen world units wide; in the 860
 * px the right half has to offer, every label would render at about 11 px,
 * under half the Body-scale floor. The resolved symbol and its two callers span
 * five units and read at 35-45 px.
 */
const realRelationships = edges.filter((edge) => edge.to === selectedSymbolId);

const resolvedIds: Readonly<Record<string, true>> = Object.fromEntries(
  [selectedSymbolId, ...realRelationships.map((edge) => edge.from)].map((id) => [
    id,
    true,
  ]),
);

const resolvedEdgeIds: Readonly<Record<string, true>> = Object.fromEntries(
  realRelationships.map((edge) => [edge.id, true]),
);

/** The two numbers the right column prints, counted off the dataset. */
export const resolution = {
  symbols: 1,
  relationships: realRelationships.length,
} as const;

/**
 * How large the flattened subgraph is drawn, in master pixels per world unit.
 *
 * Set from the type, not from the layout: the graph's base em is a world length,
 * so pixels per unit *is* the type scale. 135 puts the anchor's label at the top
 * of the Body scale and the two callers just under it, which is what the column
 * needs - the right side is read, not glanced at. It also lands the anchor's
 * glyph run at 216 px against the prompt token's 213.8, which is what lets the
 * match cut at 0910 be a match of size as well as of shape.
 */
const flatPxPerUnit = 135;

/**
 * The distance at which `flatPxPerUnit` is true.
 *
 * Solved through `pxPerUnit` rather than by restating its trigonometry here:
 * scale is inversely proportional to distance, so the distance that yields a
 * given scale is the scale at unit distance divided by it. One definition of the
 * projection, one place to change it.
 */
const flatDistance = pxPerUnit(FOV, 1) / flatPxPerUnit;

/**
 * Where the flattened subgraph sits: the centre of the right column.
 *
 * A look-at rig always projects its target to the centre of the frame, so
 * putting the graph off-centre means aiming at a point beside it. The offsets
 * below are screen pixels, converted to world units at `flatDistance`.
 *
 * `x` was 472 and a render is why it is not. At that offset `Policy.Do()`'s
 * plate reached x 1869, which is 50 px from the frame edge - not clipped, but
 * well inside the 96 px margin the rest of the film keeps, and it read as the
 * cluster being pressed against the edge. 425 puts that plate's right edge at
 * 1822 and the margin back to 98 px.
 */
const columnOffsetPx = { x: 425, y: -80 } as const;

/**
 * Centre of the resolved cluster in graph-local coordinates.
 *
 * Not the anchor and not the midpoint of the node positions: the midpoint of
 * what is actually *drawn*, labels included. The cluster runs from the left edge
 * of `withRetry()` at about -1.1 to the right edge of `Policy.Do()` at about
 * 4.45, so its centre is 1.675 and its width is 5.55 world units - 750 px at
 * this scale, inside the 784 px the right column has between the divider and the
 * frame's margin. The first render put the centre at the anchor's own side of
 * that and pushed `Policy.Do()` off the right edge.
 */
const clusterCentre = [1.675, 0, 0] as const;

const flatLook: Look = (() => {
  const dx = columnOffsetPx.x / flatPxPerUnit;
  const dy = columnOffsetPx.y / flatPxPerUnit;

  /**
   * Target beside the cluster, eye straight out along `+Z` from the target.
   * Equal `x` and `y` on both is what makes the pose frontal: the view direction
   * is `-Z` exactly, so the plates face the camera and `up` stays world up.
   */
  const target = [
    clusterCentre[0] - dx,
    clusterCentre[1] + dy,
    clusterCentre[2],
  ] as const;

  return {
    eye: [target[0], target[1], target[2] + flatDistance],
    target,
  };
})();

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

const lookAt = (frame: number): Look => {
  const t = ramp(frame, 0, 40);
  const from = inherited.look;

  return {
    eye: [
      lerp(from.eye[0], flatLook.eye[0], t),
      lerp(from.eye[1], flatLook.eye[1], t),
      lerp(from.eye[2], flatLook.eye[2], t),
    ],
    target: [
      lerp(from.target[0], flatLook.target[0], t),
      lerp(from.target[1], flatLook.target[1], t),
      lerp(from.target[2], flatLook.target[2], t),
    ],
  };
};

/**
 * A departure: `1 -> 0` on a symmetric curve.
 *
 * Separate from `ramp` because the project's `bezier(0.22, 1, 0.36, 1)` is
 * front-loaded. That is right for an arrival - it lands fast and settles - and
 * wrong for anything leaving, where it spends most of the window already gone.
 * Every exit in this scene's tail uses this instead, so they leave at one rate.
 */
const leaving = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.6, 1),
  });

/**
 * The one window everything leaves on: local 158-186.
 *
 * Two directions produced it. Things were leaving on three different windows -
 * the counters at 112-130, the nodes and tubes at 112-140, the chrome at 118-142
 * - so the frame emptied in three waves and read as pieces being switched off
 * one after another. And the exit began 27 frames after the comparison finished
 * building, which is not long enough to read two columns.
 *
 * One window fixes the first. Starting it after a stand fixes the second: the
 * comparison is complete at local 98 and holds for sixty frames - a full second
 * - before anything moves. Nothing may be pre-dimmed or given its own exit
 * before this window: two things cannot read as leaving together if they start
 * from different opacities.
 *
 * Twenty-eight frames wide, ending 14 frames before the cut so the shape the
 * match cut needs is at rest.
 */
const exit = (frame: number) => leaving(frame, 158, 186);

export const getSemanticState = (frame: number): GraphVisualState => {
  const flatten = ramp(frame, 0, 48);
  /**
   * The withdrawal, on the one exit window above.
   *
   * The tubes fade rather than retract. Retracting was built and abandoned:
   * `edges` is the drawn fraction of a run and it does shorten the tube, but the
   * half it removes is the half nearest the caller, which on this layout sits
   * against the caller's own plate - so the shortening is not legible until the
   * plate has already gone.
   */
  const withdraw = 1 - exit(frame);

  const keep = (id: string) => (resolvedIds[id] ? 1 - withdraw : 0);

  return {
    look: lookAt(frame),
    flatten,

    nodes: Object.fromEntries(
      nodes.map((node) => {
        const from = inherited.nodes[node.id] ?? 1;
        const to = node.id === selectedSymbolId ? 1 : keep(node.id);

        return [node.id, lerp(from, to, flatten)];
      }),
    ),

    /**
     * Scene 05's mark, at half strength.
     *
     * The same accent that reads as a hairline on a small plate deep in a
     * cascade reads as a border on a 300 px plate seen head-on, and a bordered
     * rectangle is a button - a control the viewer expects to press rather than
     * a symbol under discussion. Halving it keeps the accent where the project
     * says it belongs at this size, on the label, and lets the plate go back to
     * being the surface the label sits on.
     */
    nodeAccent: Object.fromEntries(
      nodes.map((node) => [
        node.id,
        (inherited.nodeAccent[node.id] ?? 0) * (1 - 0.5 * flatten),
      ]),
    ),

    pulse: 0,

    /** Full length throughout. The withdrawal is carried by opacity. */
    edges: Object.fromEntries(edges.map((edge) => [edge.id, 1])),

    /**
     * The relationships leaving, on the withdrawal's own window.
     *
     * Retracting the tubes was tried first and abandoned. `edges` is the drawn
     * fraction of a run and it does shorten the tube, but the part it removes is
     * the half nearest the caller - which on this layout is the half visually
     * against the caller's own plate, so the shortening is not legible until the
     * plate has already gone. What read on screen was still a fade, with the
     * added risk that the tube and its plate could disagree about where the
     * relationship ended. One channel doing one thing is worth more here than a
     * cleverer gesture that the frame cannot show.
     */
    edgeGain: Object.fromEntries(
      edges.map((edge) => {
        const from = inherited.edgeGain[edge.id] ?? 1;
        const to = resolvedEdgeIds[edge.id] ? 1 - withdraw : 0;

        return [edge.id, lerp(from, to, flatten)];
      }),
    ),

    edgeSettle: inherited.edgeSettle,

    /**
     * The two cluster labels retire with the depth. A repository is a place in
     * depth, and a two-column comparison has no depth left to place it in;
     * keeping the names would assert a geography the frame no longer has.
     */
    labels: Object.fromEntries(
      repositories.map((repository) => [repository.id, 1 - flatten]),
    ),

    grow: 1,
    residual: 0,
  };
};

/**
 * The split's hairline: one pixel, arriving with the flatten.
 *
 * It is the only thing drawn in this scene, and it is a rule rather than a
 * panel: two columns on one background, divided, not two surfaces floating over
 * it.
 */
export const dividerOpacity = (frame: number) =>
  ramp(frame, 14, 52) * exit(frame);

/**
 * The report scene 05 hands over, leaving with the depth.
 *
 * It is on screen at 0839 - the card in the top-left and
 * `Exact symbols. Not name matches.` under it - so this scene has to draw it and
 * fade it, not omit it. Omitting it was the first version, and it measured 22 dB
 * PSNR across a seam whose whole purpose is to be invisible.
 *
 * Gone by local 36, which is inside the flatten and long before 0950:
 * `Exact symbols. Not name matches.` and `A name is not a symbol.` are the same
 * argument, and the frame must never hold both.
 */
export const reportFade = (frame: number) => 1 - ramp(frame, 0, 36);

/**
 * The left column: label, then two rows, then the count.
 *
 * Rows arrive one after the other for the same reason the hops do in scene 04 -
 * a list that appears at once is a picture, a list that fills in is a search
 * returning results.
 *
 * Every window here is twenty frames wide rather than eighteen, and they are
 * spaced twelve apart rather than ten. The build used to put label, two rows and
 * a counter inside 48 frames; a comparison whose whole subject is *counting*
 * cannot deliver its terms faster than they can be counted.
 */
export const leftColumn = (frame: number) => ({
  label: ramp(frame, 34, 54),
  rows: [ramp(frame, 42, 62), ramp(frame, 54, 74)],
  counter: ramp(frame, 70, 90),
  /**
   * Presence, and nothing else: the column stands at full strength until the
   * exit window takes it, on the same window and from the same opacity as
   * everything else.
   *
   * There used to be a pre-dim here, `1 -> 0.18` over local 84-112, and it was
   * two mistakes stacked. It was written so the left side would recede under the
   * centred sentence - and that sentence was cut, so the dim outlived its
   * reason and then acquired a new one after the fact: that the still at 0840
   * needed the asymmetry. It does not. The asymmetry is `2 matches` against
   * `1 symbol / 2 real relationships`, which is content, and the right side is
   * already dominant through its plates and its accent.
   *
   * Worse, it broke the single exit window. Leaving from 0.18 while the right
   * left from 1 meant the right visibly vanished and the left, already almost
   * invisible, appeared to go separately - which is exactly the "not together"
   * it was supposed to have fixed. Two things cannot read as leaving together if
   * they start from different opacities.
   */
  presence: exit(frame),
});

/**
 * The right column's label and counters, on the left column's own schedule.
 *
 * The counter leaves with the contraction. It is a statement about the
 * resolution, not a legend of what happens to be drawn, but `2 real
 * relationships` printed under a frame from which both relationships have just
 * left reads as a caption that has lost its subject - and the scene document
 * makes "the counters agree with what is on screen" an invariant.
 */
export const rightColumn = (frame: number) => ({
  label: ramp(frame, 64, 84) * exit(frame),
  counter: ramp(frame, 78, 98) * exit(frame),
});

