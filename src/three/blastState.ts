import { Easing, interpolate } from "remotion";
import { edges, nodes, selectedSymbolId, shellOf } from "../data/graphDemo";
import { getGraphState, graphRevealFrames } from "./graphState";
import type { GraphVisualState } from "./graphState";

/**
 * Scene 04's visual state, derived from the scene-local frame and nothing else.
 *
 * Scene-local frames 0-140 (master 1110-1250).
 *
 * The scene has one argument and it is made by ordering: a change happens at
 * one symbol, and then it is seen to *travel* - hop 1, hop 2, hop 3, never two
 * at once. If every affected node lit together the frame would read as a search
 * result, which is the thing scene 05 exists to discredit.
 *
 * Nothing here is choreography for its own sake. Because the layout already
 * encodes hop distance as depth, lighting one hop after another *is* the impact
 * running away from the viewer, and the last step *is* the change leaving its
 * own repository. The schedule below is the whole scene; the renderer only
 * paints it.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/**
 * The frame scene 03 hands over, read from scene 03 rather than restated.
 *
 * This used to sample `getCrossRepoState(90)`, and it changed when the
 * cross-repository scene was cut. The principle did not: copying twenty-three
 * numbers - eight node presences, seven edge gains, seven settle values and a
 * cluster gain - out of another module is not a check, it is a second source of
 * truth that goes stale the first time the scene before this one is retuned.
 * Sampling a pure function of a frame is exact and cannot drift.
 *
 * `getGraphState(graphRevealFrames)` is scene 03's settled state: every ramp inside
 * it clamps,
 * so 300 and anything past it return the values that scene renders on its last
 * frame.
 *
 * What the deleted scene took with it is its isolation, and losing it is a
 * simplification rather than a hole. That beat pulled `Policy.Do()` and `Once()`
 * back to `0.22` to leave a "claim" on screen for a caption that no longer
 * exists - and those two nodes are hop 1, the first thing this scene's
 * propagation lights. The old cut therefore dimmed exactly what the next frame
 * re-lit. The propagation now starts from a whole, evenly present graph, which
 * is what makes "the change travels" legible: nothing was pre-selected for it.
 */
const inherited = getGraphState(graphRevealFrames);

/**
 * Which hop an edge delivers to.
 *
 * The dataset's direction is `caller -> callee`, so an edge's `from` is the
 * node further from the change: `Policy.Do() -> withRetry()` is hop 1 reaching
 * back to hop 0. The hop an edge belongs to is therefore the hop of its
 * caller, and the propagation order falls out of the data instead of being
 * listed by hand.
 */
const hopOf = (edgeFrom: string) => shellOf[edgeFrom] ?? 0;

/**
 * When each hop fires, in scene-local frames.
 *
 * A relation lifts before the node it reaches, by six frames, for the same
 * reason scene 03 drew an edge before the plate at its end: the shot travels a
 * relationship and then shows what is at the end of it. Reversed, the node
 * lights and the edge explains it afterwards, which reads as highlighting
 * rather than as propagation.
 *
 * The windows are contiguous and slightly overlapped. Fully separated they
 * read as three events; overlapped by four or five frames they read as one
 * thing moving, which is the claim.
 */
const hopSchedule: Readonly<Record<number, readonly [number, number]>> = {
  1: [8, 30],
  2: [32, 56],
  3: [58, 82],
};

const nodeDelay = 6;

/**
 * How far apart the three `checkout-service` consumers land, in frames.
 *
 * Presentation order, not a property of the data: all three sit at hop 3 and
 * all three are reached by an edge that lifts in the same window. Landing them
 * on one frame makes the last hop a block; four frames apart makes it a group
 * arriving, and it is the only place in the scene where anything is staggered.
 */
const leafStagger = 4;

const hopMembers = (hop: number) =>
  nodes.filter((node) => shellOf[node.id] === hop);

/**
 * The pulse: one swell on the selected symbol, and the scene's first frame.
 *
 * Seven frames up and thirteen down - fast enough to read as an event, slow
 * enough not to strobe - and back to exactly zero, so the propagation that
 * follows starts from the frame scene 04 handed over rather than from a lit
 * one. Not a loop, not a heartbeat, not a ring.
 */
export const pulseAt = (frame: number) =>
  interpolate(frame, [0, 7, 20], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.3, 0, 0.4, 1),
  });

/**
 * When a node is marked, in scene-local frames.
 *
 * Hop 0 is absent on purpose: `withRetry()` is the selected symbol, not one of
 * the seven affected ones, and it already carries accent. Pulsing it is how the
 * scene says *the change is here*; marking it would say it was reached by
 * itself.
 */
const markWindow = (id: string): readonly [number, number] | null => {
  const hop = shellOf[id] ?? 0;
  const window = hopSchedule[hop];

  if (!window || id === selectedSymbolId) {
    return null;
  }

  const stagger =
    hop === 3
      ? hopMembers(3).findIndex((node) => node.id === id) * leafStagger
      : 0;

  return [window[0] + nodeDelay + stagger, window[1] + nodeDelay + stagger];
};

/**
 * How far a local edge is allowed to take the propagation.
 *
 * Not to 0, which is full accent at the resolving radius. That value belongs to
 * the crossings; a local edge that reaches it claims the same importance as the
 * relationships that leave the repository.
 */
const localCarry = 0.34;

const isCrossing = (edge: (typeof edges)[number]) =>
  nodes.find((node) => node.id === edge.from)?.repository !==
  nodes.find((node) => node.id === edge.to)?.repository;

export const getBlastState = (frame: number): GraphVisualState => {
  const marked = (id: string) => {
    const window = markWindow(id);

    return window ? ramp(frame, window[0], window[1]) : 0;
  };

  /** How far an edge has been taken over by the propagation. */
  const carried = (edgeFrom: string) => {
    const window = hopSchedule[hopOf(edgeFrom)];

    return window ? ramp(frame, window[0], window[1]) : 0;
  };

  return {
    /** Held. This scene inherits scene 03's pose and never moves the rig. */
    look: inherited.look,

    nodes: Object.fromEntries(
      nodes.map((node) => {
        const from = inherited.nodes[node.id] ?? 1;

        /**
         * Every node arrives already present, so this resolves to `from` and
         * the mark is carried by `nodeAccent` alone. The expression is kept
         * rather than simplified to `from`: it is the general form, it is
         * degenerate-safe at `from = 1`, and if a future scene hands over a
         * suppressed graph again being reached is what should bring a node
         * back.
         */
        return [node.id, from + (1 - from) * marked(node.id)];
      }),
    ),

    nodeAccent: Object.fromEntries(
      nodes.map((node) => [node.id, marked(node.id)]),
    ),

    pulse: pulseAt(frame),

    /**
     * Depth is the whole argument here - it is what makes the propagation read
     * as travelling away rather than as lighting up. Scene 05 collapses it.
     */
    flatten: 0,

    /** Nothing is drawn in this scene. Every edge is already complete. */
    edges: Object.fromEntries(edges.map((edge) => [edge.id, 1])),

    /**
     * Inherited unchanged. Scene 03 leaves every gain at 1, so this resolves to
     * 1 throughout and the propagation is carried by `nodeAccent` and
     * `edgeSettle` alone. Kept in the general form for the same reason as the
     * node presences above.
     */
    edgeGain: Object.fromEntries(
      edges.map((edge) => {
        const from = inherited.edgeGain[edge.id] ?? 1;

        return [edge.id, from + (1 - from) * carried(edge.from)];
      }),
    ),

    /**
     * Settle runs `0 -> 1` from "resolving, accented, slightly thicker" to
     * "settled structure", so winding it back toward 0 is how an edge takes the
     * propagation: accent, and the tube stepping from the settled radius 0.022
     * back toward 0.026.
     *
     * The two groups do not land on the same value, and the first render is why.
     * Taking every edge to 0 marks all seven at one weight, and the three
     * crossings - which arrived already lifted from scene 03, and which are the
     * most important edges in the video - became indistinguishable from the four
     * local ones. It also turned most of the frame's width blue, well past the
     * accent budget. So a local edge stops at `localCarry`: unmistakably part of
     * the blast radius, still visibly the quieter half of it. A crossing goes
     * all the way.
     */
    edgeSettle: Object.fromEntries(
      edges.map((edge) => {
        const from = inherited.edgeSettle[edge.id] ?? 1;
        const floor = isCrossing(edge) ? 0 : localCarry;

        return [edge.id, from + (floor - from) * carried(edge.from)];
      }),
    ),

    labels: inherited.labels,
    grow: 1,
    residual: 0,
  };
};

/**
 * The card's entry: opacity `0 -> 1` and a 24 px slide in from the right.
 *
 * Local 66-88, which puts it on screen while the propagation is still reaching
 * the remote consumers, so the numbers read as the result of what the viewer is
 * watching rather than as a caption placed in advance.
 *
 * It then stands for 51 frames. Measured on the old 100-frame cut, the card
 * settled with 25 frames left - 0.42 s to read three counted lines, which is the
 * result the whole scene exists to deliver. That is what took the scene to 140.
 *
 * No spring and no overshoot. This is a statement of measurement; elasticity
 * would make it playful and therefore less credible.
 */
export const cardEntry = (frame: number) => {
  const progress = ramp(frame, 66, 88);

  return { opacity: progress, offsetX: 24 * (1 - progress) };
};
