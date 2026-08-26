/**
 * The published Kivgraph benchmark, as scene 07 compares it.
 *
 * ## Provenance — READ THIS BEFORE CHANGING A FIGURE
 *
 * Upstream is `kivgraph/benchmarks/graph-tools-comparison`. That directory
 * contains two markdown reports and nine `results*.json` files, and **they do
 * not agree**. Audited 2026-08-26, kivgraph on the seven-question set:
 *
 * ```text
 * results.json          commit 4c1bfae   4.449 tok   P 0,81   R 0,841   4/7
 * results-0.3.6.json    commit 954b9eb   6.134 tok   P 1,00   R 0,984   6/7
 * ```
 *
 * **No results file records kivgraph at 7/7.** The `7/7 · 1,00 · 1,00 · 6.200
 * tokens` that the values below state comes from the closing section of
 * `remeasure.md`, which says at its line 283 that `results-0.3.6.json` holds
 * that pass on commit `71e6c57`. The file on disk is commit `954b9eb` and
 * reports `6/7`. All three passes in `remeasure.md` were written to the same
 * filename, so each overwrote the last and the run that substantiated `7/7` is
 * gone.
 *
 * `grep` + reading is the arm the results files do record at 7/7, P 1,00 and
 * R 1,00, for `63.531` tokens. So the `exact answers` row below states a tie
 * that the machine-readable record does not currently show.
 *
 * Of the four figures the storyboard specified, `63.531` and `37 repositories`
 * reproduce exactly from `results.json`. `6.2k` and `7 / 7` do not reproduce
 * from any results file.
 *
 * The fully machine-backed alternative is `results-all.json`, same commit
 * `954b9eb`, over 29 questions rather than 7: kivgraph `35.961` tokens, 36
 * calls, P `1,00`, R `0,996`, `28/29`; `grep` + reading `267.980` tokens, 101
 * calls, P `1,00`, R `0,989`, `28/29`. Ties on exact answers, wins on recall,
 * and `7,45x` cheaper. Awaiting a decision on which set the film states; do not
 * resolve it by editing these values.
 *
 * ```text
 * corpus      37 git repositories
 * tokenizer   tiktoken o200k_base
 * machine     Apple M5, macOS, arm64
 * ```
 *
 * ## Why two columns
 *
 * Because the comparison is the evidence, and a single column would make the
 * viewer supply the baseline from memory. `grep` + reading is the honest
 * denominator: the real alternative to a code graph is not being wrong, it is
 * spending an order of magnitude more tokens.
 *
 * The four rows are meant to say that every measure of correctness ties and only
 * cost moves. **On the seven-question set that reading is not currently
 * supported** — see the provenance note above. It is supported on the
 * 29-question set in `results-all.json`, where both arms reach `28/29` and
 * kivgraph's recall is the higher of the two.
 *
 * The benchmark's own caution belongs here either way, because the film inherits
 * it: seven questions on one corpus is a small set, chosen for what it could
 * discriminate. A tool with a perfect score there is not a tool that answers
 * everything; it is a tool with no known miss on that set. The 29-question set
 * is the better denominator for exactly this reason.
 *
 * ## Why the four rivals are not in this table
 *
 * The benchmark measures six arms. On the 29-question set the other four graph
 * tools reach `3/29`, `4/29`, `3/29` and `3/29` against kivgraph's `28/29`, so
 * the gap is not close. They are still out: naming competitors is a strategic
 * decision and not a design one, and their figures are pinned to builds that
 * will move. `grep` + reading cannot go stale the same way — it is what an agent
 * already does.
 *
 * ## Why the values are strings
 *
 * `6.2k` is not `6200` rendered with a suffix. The published figure is quoted at
 * that precision, and formatting a number would let a future edit change the
 * precision — which is the same thing as changing the value. `AGENTS.md`
 * § Benchmark integrity: never invented, rounded or modified for visual
 * convenience, and one place to change if the benchmark moves.
 */

/** The two arms, in column order. Kivgraph first: it is the subject. */
export const arms = ["kivgraph", "grep + read"] as const;

/**
 * The rows, in reading order.
 *
 * Cost first, because it is the only row where the columns differ and it earns
 * the three that follow. Correctness after, in three measures, because a cheap
 * wrong answer is worthless and one row saying so would be easy to disbelieve.
 */
export const rows = [
  /** The row the scene exists for. `10,2x`, stated as two figures rather than a ratio. */
  { label: "tokens", values: ["6.2k", "63.5k"], emphasis: "cost" },
  /** Questions whose answer set matched the manual truth exactly. */
  { label: "exact answers", values: ["7 / 7", "7 / 7"], emphasis: "claim" },
  /** Of what it said, the fraction that was true. */
  { label: "precision", values: ["1.00", "1.00"], emphasis: "claim" },
  /** Of what existed, the fraction it found. */
  { label: "recall", values: ["1.00", "1.00"], emphasis: "claim" },
] as const;

/**
 * Where the figures can be checked, and the corpus they are true of.
 *
 * Stays lowercase and quiet: it is a source note, not a headline. `37
 * repositories` was one of the storyboard's four statements and is now the scale
 * the whole table holds at, which is where it always belonged.
 */
export const sourceNote = "37 repositories · published benchmark";
