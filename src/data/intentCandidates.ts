import type { CodeLine } from "../components/CodePlane";
import {
  policyGo,
  policyGoFile,
  repository,
  retryGo,
  retryGoFile,
} from "../code/payments";
import { edges, nodeById } from "./graphDemo";

/**
 * The `find_by_intent` answer the opening scene shows, and the checks that keep
 * it honest.
 *
 * ## What this file is, and what it is not
 *
 * It is a **demo fixture**, and it says so out loud. It is not a recorded tool
 * response, it does not reproduce the tool's ranking, and no frame of the film
 * claims either. What it *is* is a page of candidates that the real tool could
 * return for the real question, over the small Go world the film renders — with
 * every row's kind, path and `match` derived from that world rather than typed
 * beside it.
 *
 * `graphDemo.ts` carries the rule this file is squarely inside: *«a video
 * selling exactness cannot illustrate it with a fabricated fixture»*. The
 * candidates below are not fabricated. Every one of them is a declaration that
 * appears in `src/code/payments.ts`, on lines the camera flies
 * through two seconds later, and this module fails the render if one of them stops being there.
 *
 * ## Why the candidates are not all graph nodes
 *
 * The previous build derived all three rows from `graphDemo.ts` nodes, and that
 * file only holds `function` and `method` — it is a *call* graph, so a constant
 * has no place in it. A scene whose whole point is that `find_by_intent`
 * surfaces more than function names cannot be built from a fixture that only
 * contains function names.
 *
 * So the rows come from both: the two that are symbols in the call graph are
 * looked up there, and the constant is looked up in the source. Both are
 * verified against `src/code/payments.ts`, which is the only fixture the viewer
 * actually sees.
 *
 * ## The kinds are Go's kinds, verbatim
 *
 * `func`, `method` and `const` are three of the seven `DefinitionKind` values
 * Kivgraph's Go loader emits — the full set is `func`, `method`, `type`,
 * `alias`, `const`, `var`, `field`. They are displayed uppercased and otherwise
 * unaltered.
 *
 * That is why the scene says `FUNC` and not `FUNCTION`. `function` is the kind
 * string for TypeScript; this file is Go, and the film has been Go since its
 * first frame of source.
 *
 * ## What `find_by_intent` cannot return, and therefore what this cannot show
 *
 * **A comment is not a candidate.** The tool's documentation is explicit that
 * the index holds *«names, qualified names, kinds and paths, not prose»*, and
 * its own empty-answer guidance says so again: *«the index holds no prose, so
 * rephrase with the vocabulary the code would use»*. A `COMMENT` row would be
 * an invented tool behaviour, which is a worse failure than an invented
 * fixture — a viewer could go and try it. Nothing here has one.
 */

/**
 * The question, in plain language, exactly as the tool's `intent` argument
 * takes it.
 *
 * **This is not the tool's documented example, and the departure is
 * deliberate.** The example is `retry a failed request with exponential
 * backoff`, it was used verbatim for three builds, and it kept failing for one
 * reason: *exponential backoff* is the jargon a viewer who needs this scene
 * does not have, and the whole sentence reads as a specification rather than as
 * something a person would say.
 *
 * What replaces it is still inside the tool's contract, and arguably closer to
 * it: the documentation describes the argument as *«The question, in plain
 * language»*, and the canonical example happens to be a noun phrase, so a real
 * question honours the stated semantics even where it departs from the sample
 * value.
 *
 * It also buys something the example could not: the film now has two agent
 * questions and they bookend the discovery — *Where do we retry failed
 * requests?* and then, four scenes later, *What breaks if I change
 * withRetry()?*
 */
export const intent = "Where do we retry failed requests?";

/**
 * The question's terms, lowercased, as the tool would split them.
 *
 * The tool indexes names, qualified names, kinds and paths, so a term "matches"
 * when it appears in one of those. Over this four-file world only `retry` does,
 * which is why every row below is `lexical` on the same evidence: the shared
 * `internal/retry` path. That is a true statement about a small corpus and not
 * a weakness of the demonstration — it is exactly why the tool also reports
 * `unmatched_terms`.
 */
const terms = intent.toLowerCase().match(/[a-z]+/g) ?? [];

const carriesATerm = (text: string): boolean => {
  const haystack = text.toLowerCase();

  return terms.some((term) => term.length > 2 && haystack.includes(term));
};

/**
 * The line a declaration is on, in the source the film renders — and a throw if
 * it is not there.
 *
 * The line number is never displayed. Finding it is the point: it is what makes
 * every row below a claim about `src/code/payments.ts` rather than a claim
 * beside it. Edit `retry.go`'s lines so that `const maxAttempts` is gone and
 * this render stops, with the reason, instead of quietly showing a candidate
 * the film's own source no longer contains.
 */
const declaredAt = (lines: readonly CodeLine[], needle: string): number => {
  const index = lines.findIndex((line) =>
    line
      .map((span) => span.text)
      .join("")
      .includes(needle),
  );

  if (index === -1) {
    throw new Error(
      `intentCandidates: "${needle}" is not declared anywhere in the source the film renders; the candidate cannot be shown`,
    );
  }

  return index + 1;
};

/**
 * Whether a graph node would be credited for the terms its callees carry —
 * which is the whole difference between `lexical` and `lexical+calls`.
 *
 * Derived from `graphDemo.ts`'s edges, which hold the real call direction, so
 * the film cannot claim a provenance the fixture does not support. `Policy.Do`
 * calls `withRetry`, whose name carries `retry`, so it earns `+calls`.
 * `withRetry` calls nothing the fixture models, so it does not — and that is
 * the honest outcome, even though it is the row the scene goes on to select.
 *
 * **A weaker `match` on the selected row is a feature.** `match` is not a
 * score, not a ranking and not a confidence; the tool's documentation says so
 * in as many words. A frame where the chosen candidate carries the plainer
 * provenance is the clearest possible demonstration of that, and it costs
 * nothing to be true.
 */
const creditedForCallees = (nodeId: string): boolean =>
  edges
    .filter((edge) => edge.from === nodeId)
    .some((edge) => carriesATerm(nodeById(edge.to).label));

export type CandidateMatch = "lexical" | "lexical+calls";

export type IntentCandidate = {
  /** Rendered verbatim, as the qualified name the tool would return. */
  readonly label: string;
  /** A Go `DefinitionKind`, uppercased for display and otherwise unaltered. */
  readonly kind: string;
  /** The repository the candidate belongs to, as its own field. */
  readonly repository: string;
  /**
   * **Repository-relative**, which is the shape every row of this surface uses.
   *
   * Kivgraph returns `repository` and `file_path` as two fields and never joins
   * them; the previous build printed the joined path, which was one string too
   * many and hid the field the header is allowed to hoist.
   */
  readonly path: string;
  /** How this candidate matched. Never how much to believe it. */
  readonly match: CandidateMatch;
};

const candidate = (
  label: string,
  kind: string,
  path: string,
  source: readonly CodeLine[],
  declaration: string,
  nodeId: string | null,
): IntentCandidate => {
  declaredAt(source, declaration);

  if (!carriesATerm(label) && !carriesATerm(path)) {
    throw new Error(
      `intentCandidates: "${label}" carries no term of the question in its name or its path, so find_by_intent would not return it`,
    );
  }

  return {
    label,
    kind,
    repository,
    path,
    match:
      nodeId !== null && creditedForCallees(nodeId)
        ? "lexical+calls"
        : "lexical",
  };
};

/**
 * The page, in the order the scene stacks it.
 *
 * **The order is the film's and not the tool's.** The real ranking weights how
 * rare each term is across the corpus and breaks ties on symbol id; nothing
 * here reproduces it and no frame claims to. What the order does carry is the
 * scene's argument — the row that is opened is first, so the eye that is going
 * to follow it into the source starts where it will end.
 *
 * Three rows, three kinds, one file shared by two of them. The shared file is
 * the point rather than an accident: *these are different kinds of thing in the
 * same place*, which is what a retrieval that indexes more than function names
 * can tell you and a symbol search cannot.
 *
 * `Once()` was a candidate in the previous build and is not here. It is a
 * second `func` in `policy.go` and would have made the page four rows of two
 * kinds; the constant says more. Nothing about it was wrong, and the tool's
 * pages are as long as they are asked to be.
 */
export const candidates: readonly IntentCandidate[] = [
  candidate(
    nodeById("payments.withRetry").label,
    "func",
    retryGoFile,
    retryGo,
    "func withRetry(",
    "payments.withRetry",
  ),
  candidate(
    "maxAttempts",
    "const",
    retryGoFile,
    retryGo,
    "const maxAttempts",
    null,
  ),
  candidate(
    nodeById("payments.policyDo").label,
    "method",
    policyGoFile,
    policyGo,
    "func (p Policy) Do(",
    "payments.policyDo",
  ),
] as const;

/**
 * The repository every row shares, or `null` if they do not all share one.
 *
 * This is the tool's own **unanimous-or-nothing hoist**, implemented rather than
 * imitated. Its compact view *«lifts into a header what every row shares»* and
 * *«one row disagreeing is enough to push a column back down to every row»*, so
 * the scene asks this question instead of assuming the answer. Today all three
 * candidates are in `payments-api` and the header carries it once; add a
 * candidate from anywhere else and this returns `null`, and the scene puts the
 * repository back on every row without anyone editing the layout.
 */
export const sharedRepository: string | null = candidates.every(
  (row) => row.repository === candidates[0].repository,
)
  ? candidates[0].repository
  : null;

/**
 * The row the scene opens, by position rather than by name.
 *
 * It is index 0 because the selected candidate is the one pinned to the match
 * cut's anchor, and the anchor is a fixed screen point: moving the selection to
 * another row means moving that row to the anchor, which is a layout change and
 * not a data change. Stated here so the scene never searches the array for a
 * label.
 */
export const selectedCandidate = 0;
