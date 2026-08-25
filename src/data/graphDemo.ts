/**
 * The dependency graph the video explains.
 *
 * This file is **graph truth**: topology, identity and layout. It carries no
 * scene state — no opacity, no reveal frames, no materials, no camera. Scenes
 * decide how much of this to show and when.
 *
 * Four scenes consume it (03 graph reveal, 04 cross-repository, 05 blast radius,
 * 06 semantic resolution), so node ids are part of the contract. Renaming one is
 * a four-scene change.
 *
 * ## Why the topology is shaped this way
 *
 * It is constrained by Go, not by composition:
 *
 * - `withRetry` is unexported, so only `package retry` can call it. The two
 *   direct callers are therefore `Policy.Do` and `Once` — which is also what the
 *   viewer already read in `policy.go` during scene 02.
 * - `payments-api/internal/...` cannot be imported across a module boundary, so
 *   the impact cannot reach `checkout-service` from `internal/retry` in one hop.
 *   It travels through the public `payments-api/paymentService` package, the
 *   bridge scene 07 names out loud.
 *
 * That is why there are seven affected symbols rather than the six an earlier
 * storyboard drew: six is not reachable with a call chain that compiles.
 */

export type RepositoryId = "payments-api" | "checkout-service";

export type Repository = {
  id: RepositoryId;
  /** Rendered verbatim as the cluster label. */
  label: string;
  /**
   * Where the label sits, in the same world units as the nodes. Layout, like
   * `position` - it belongs here so the whole picture has one set of
   * coordinates.
   *
   * Placed by a collision search against the real label metrics at every frame
   * of the scene, in the largest empty area its own cluster owns: below the
   * near group, above the far one. It names a region; it never labels a box,
   * because there is no box.
   */
  labelPosition: readonly [number, number, number];
};

export type NodeKind = "function" | "method";

export type GraphNode = {
  id: string;
  /** Rendered verbatim. Parenthesised, per `STORYBOARD.md` typography. */
  label: string;
  repository: RepositoryId;
  /** Import path within the repository. Carries the `internal/` rule. */
  package: string;
  kind: NodeKind;
  /**
   * Graph-local world position, in Three.js units.
   *
   * `withRetry` is the origin by construction. The match cut's screen offset is
   * **not** applied here: it belongs to the group that holds the graph, so this
   * file describes topology and never projection.
   */
  position: readonly [number, number, number];
};

/** Direction is the real one: `from` calls `to`. Never inverted for animation. */
export type GraphEdge = {
  id: string;
  from: string;
  to: string;
  kind: "calls";
};

export const repositories: readonly Repository[] = [
  {
    id: "payments-api",
    label: "payments-api",
    labelPosition: [6.0, -3.6, -1.9],
  },
  {
    id: "checkout-service",
    label: "checkout-service",
    labelPosition: [14.6, 5.4, -3.4],
  },
] as const;

/**
 * Layout is a **cascade in depth**: the impact runs away from the camera and to
 * the right, one hop at a time.
 *
 * ```text
 *   hop 0   withRetry             z  0.0    the change
 *   hop 1   direct callers        z -0.8    internal/retry
 *   hop 2   the public package    z -1.9    paymentService
 *   hop 3   the other repository  z -3.4    checkout-service
 * ```
 *
 * Two layouts were built before this one. A left-to-right chart read as a
 * flowchart. Concentric rings read as a radar sweep: the rings were the
 * loudest objects in the frame, they had to be drawn as screen-space ellipses
 * to fit 16:9, and a viewer's first question was what the circles measured
 * rather than what the graph said.
 *
 * What both got wrong is that they encoded hop count in a *drawn* shape. Here
 * it is encoded in position: each hop steps `+x` and `-z`, so distance from the
 * change is distance from the camera. Nothing has to be drawn around anything.
 * A viewer reads the ladder as depth long before reading a single label,
 * because that is what perspective, occlusion and parallax are for.
 *
 * The `z` span is 3.4 units against a camera that lives between 6.2 and 10.2 -
 * a third of the viewing distance, enough that shells separate under lateral
 * movement and that the plates visibly turn as the camera comes off-axis.
 * Perspective then produces most of the type ladder on its own; `shellLook` in
 * `src/three/graphFrame.ts` adds a small authored step on top so the outermost
 * label stays legible.
 *
 * `y` fans each hop just enough to separate siblings and no further: the pair
 * at hop 1 sits at ±1.40, the pair at hop 2 at ±2.35. A wider fan would spread
 * the graph across the frame and flatten it back into a diagram; this one keeps
 * the whole structure inside a shallow cone whose axis is the impact path.
 *
 * Every coordinate was searched, not drawn: a sweep over the real label
 * metrics, projected through `src/three/projection.ts` at every frame of the
 * camera path, rejecting any layout where two labels touch, a label leaves the
 * frame, an edge crosses a label it does not connect, or `checkout-service`
 * becomes visible before the camera has made room for it. See
 * `docs/scenes/03-graph-reveal.md` § Layout validation.
 */
export const nodes: readonly GraphNode[] = [
  {
    id: "payments.withRetry",
    label: "withRetry()",
    repository: "payments-api",
    package: "internal/retry",
    kind: "function",
    position: [0, 0, 0],
  },
  {
    id: "payments.policyDo",
    label: "Policy.Do()",
    repository: "payments-api",
    package: "internal/retry",
    kind: "method",
    position: [3.15, 1.4, -0.8],
  },
  {
    id: "payments.once",
    label: "Once()",
    repository: "payments-api",
    package: "internal/retry",
    kind: "function",
    position: [3.15, -1.4, -0.8],
  },
  {
    id: "payments.clientCharge",
    label: "Client.Charge()",
    repository: "payments-api",
    package: "paymentService",
    kind: "method",
    position: [7.55, 2.35, -1.9],
  },
  {
    id: "payments.clientRefund",
    label: "Client.Refund()",
    repository: "payments-api",
    package: "paymentService",
    kind: "method",
    position: [7.55, -2.35, -1.9],
  },
  {
    id: "checkout.placeOrder",
    label: "CheckoutService.PlaceOrder()",
    repository: "checkout-service",
    package: "internal/checkout",
    kind: "method",
    position: [16.3, 0.3, -3.4],
  },
  {
    id: "checkout.reconciliationRun",
    label: "ReconciliationJob.Run()",
    repository: "checkout-service",
    package: "internal/recon",
    kind: "method",
    position: [15.6, 4.3, -3.4],
  },
  {
    id: "checkout.refundHandle",
    label: "RefundHandler.Handle()",
    repository: "checkout-service",
    package: "internal/refunds",
    kind: "method",
    position: [15.6, -4.0, -3.4],
  },
] as const;

export const selectedSymbolId = "payments.withRetry";

function edge(from: string, to: string): GraphEdge {
  return { id: `${from}->${to}`, from, to, kind: "calls" };
}

/**
 * A charge is retried under a budget (`Policy.Do`); a refund is attempted once
 * (`Once`). That is why there are two branches rather than one wide fan — the
 * split is domain logic, not layout.
 */
export const edges: readonly GraphEdge[] = [
  edge("payments.policyDo", "payments.withRetry"),
  edge("payments.once", "payments.withRetry"),
  edge("payments.clientCharge", "payments.policyDo"),
  edge("payments.clientRefund", "payments.once"),
  edge("checkout.placeOrder", "payments.clientCharge"),
  edge("checkout.reconciliationRun", "payments.clientCharge"),
  edge("checkout.refundHandle", "payments.clientRefund"),
] as const;

const byId: Record<string, GraphNode> = Object.fromEntries(
  nodes.map((node) => [node.id, node]),
);

export const nodeById = (id: string): GraphNode => {
  const node = byId[id];

  if (!node) {
    throw new Error(`graphDemo: unknown node id ${id}`);
  }

  return node;
};

/**
 * Every route from the selected symbol out to a symbol nothing else depends on,
 * ordered from the anchor outward.
 *
 * Derived rather than authored, so it cannot drift from `edges`. The order here
 * is narrative — the direction the blast radius travels — while `edges` keeps
 * the real call direction. Those are different things and the fixture holds
 * both.
 */
export const impactPaths: readonly (readonly string[])[] = (() => {
  const callers: Record<string, string[]> = {};

  for (const { from, to } of edges) {
    callers[to] = [...(callers[to] ?? []), from];
  }

  const walk = (id: string, seen: readonly string[]): string[][] => {
    const next = callers[id] ?? [];

    if (next.length === 0) {
      return [[...seen, id]];
    }

    return next.flatMap((caller) => walk(caller, [...seen, id]));
  };

  return walk(selectedSymbolId, []);
})();

/**
 * Hops from the changed symbol, by node id.
 *
 * Derived, never authored: the shell a node is drawn in must be the shell the
 * edges put it in, or the picture claims a distance the topology does not have.
 * The scene reads this for depth, type size, luminance and focus - every visual
 * consequence of "how far from the change is this?" comes from one number.
 */
export const shellOf: Readonly<Record<string, number>> = (() => {
  const callers: Record<string, string[]> = {};

  for (const { from, to } of edges) {
    callers[to] = [...(callers[to] ?? []), from];
  }

  const depth: Record<string, number> = { [selectedSymbolId]: 0 };
  let frontier = [selectedSymbolId];

  for (let hop = 1; frontier.length > 0; hop += 1) {
    const next = frontier.flatMap((id) => callers[id] ?? []);
    frontier = next.filter(
      (id, i) => depth[id] === undefined && next.indexOf(id) === i,
    );

    for (const id of frontier) {
      depth[id] = hop;
    }
  }

  return depth;
})();

/** Everything the change reaches. The selected symbol is not one of them. */
export const affectedNodeIds: readonly string[] = nodes
  .map((node) => node.id)
  .filter((id) => id !== selectedSymbolId);

/**
 * The numbers scene 05's impact card puts on screen.
 *
 * Counted from the data rather than typed, so the card cannot outlive the graph
 * it describes.
 */
export const impactSummary = {
  selected: 1,
  affected: affectedNodeIds.length,
  paths: impactPaths.length,
  repositories: Object.keys(
    Object.fromEntries(nodes.map((node) => [node.repository, true])),
  ).length,
} as const;

/**
 * `A name is not a symbol` — scene 06.
 *
 * Kept out of the graph above on purpose: these are not nodes, they have no
 * edges, and putting them near the blast radius would make the topology dirty
 * to serve one shot.
 *
 * These two are **real**, taken from the published benchmark
 * (`kivgraph/benchmarks/graph-tools-comparison/results.json`), which asks:
 *
 * ```text
 * "Which call sites use the withRetry declared in
 *  libraries/library-shared/src/utils/retry.ts?"
 * "Which call sites use withRetry in
 *  services/api-db-go/internal/infrastructure/postgres/retry.go?"
 * ```
 *
 * Two is the number the corpus actually contains. An earlier draft of the scene
 * showed seven invented contexts; a video selling exactness cannot illustrate it
 * with a fabricated fixture. If a seven-way demonstration is ever wanted, the
 * honest route is a real compilable fixture documented as a demo — not a prop.
 */
export const nameMatches = [
  {
    id: "bench.tsLibraryShared",
    language: "TypeScript",
    path: "libraries/library-shared/src/utils/retry.ts",
    label: "withRetry()",
  },
  {
    id: "bench.goApiDb",
    language: "Go",
    path: "services/api-db-go/internal/infrastructure/postgres/retry.go",
    label: "withRetry()",
  },
] as const;
