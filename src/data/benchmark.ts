/**
 * The published Kivgraph benchmark, as scene 07 compares it.
 *
 * ## Provenance — READ THIS BEFORE CHANGING A FIGURE
 *
 * Upstream is `kivgraph/benchmarks/graph-tools-comparison`. Every figure below
 * is the `aggregate` block of `results-all.json`, commit `954b9eb`, generated
 * `2026-08-22T10:18:32Z`, over **29 questions**:
 *
 * ```text
 *              tokens    calls   precision   recall   exact   answered
 * kivgraph     35 961       36       1.0     0.99617   28/29     29/29
 * native      267 980      101       1.0     0.98851   28/29     29/29
 * ```
 *
 * `native` is the `grep` + reading arm. `267980 / 35961 = 7.452`.
 *
 * ## Why the 29-question set and not the 7
 *
 * The storyboard originally specified `6.2k · 63.5k · 7 / 7 · 37 repositories`,
 * and that set was withdrawn on 2026-08-26 after an audit of all nine
 * `results*.json` files: **no results file records kivgraph at 7/7.** The
 * seven-question passes on disk read `4/7` (`results.json`, commit `4c1bfae`)
 * and `6/7` (`results-0.3.6.json`, commit `954b9eb`). The `7/7` came from the
 * closing prose of `remeasure.md`, which attributes it to
 * `results-0.3.6.json` at commit `71e6c57`; all three of its passes were
 * written to that same filename, so each overwrote the last and the run that
 * substantiated `7/7` no longer exists.
 *
 * The 29-question set is machine-backed line by line, and it is the better
 * denominator anyway — the benchmark's own caution is that seven questions on
 * one corpus is a small set, chosen for what it could discriminate. A perfect
 * score there is not a tool that answers everything; it is a tool with no known
 * miss on that set.
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
 * spending seven times the tokens to be equally right.
 *
 * The four rows say that every measure of correctness ties or favours kivgraph
 * and only cost moves. On this set that reading is exact: `exact answers` and
 * `precision` tie, `recall` is kivgraph's by `0.007`, and cost is the only row
 * where the two columns are not near-identical.
 *
 * ## Why the four rivals are not in this table
 *
 * The benchmark measures six arms. The other four graph tools reach `3/29`,
 * `4/29`, `3/29` and `3/29`, so the gap is not close. They are still out:
 * naming competitors is a strategic decision and not a design one, and their
 * figures are pinned to builds that will move. `grep` + reading cannot go stale
 * the same way — it is what an agent already does.
 *
 * ## Why the values are strings
 *
 * A number would let a future edit change the displayed precision, which is the
 * same thing as changing the value. `recall` is the row that proves the point:
 * at two decimals it reads `1.00` against `0.99`, which both flatters kivgraph
 * to a perfect score it did not earn and doubles the apparent gap. Three
 * decimals is the shortest form that is true, so `precision` states three as
 * well rather than mixing depths down a column.
 *
 * Token counts are exact, comma-grouped. Grouping does not change precision;
 * rounding to `36k` would, and `AGENTS.md` § Benchmark integrity forbids it:
 * never invented, rounded or modified for visual convenience, and one place to
 * change if the benchmark moves.
 */

/** The two arms, in column order. Kivgraph first: it is the subject. */
export const arms = ["kivgraph", "grep + read"] as const;

/**
 * The rows, in reading order.
 *
 * Cost first, because it is the row where the columns diverge and it earns the
 * three that follow. Correctness after, in three measures, because a cheap
 * wrong answer is worthless and one row saying so would be easy to disbelieve.
 */
export const rows = [
  /** The row the scene exists for. `7.45x`, stated as two figures rather than a ratio. */
  { label: "tokens", values: ["35,961", "267,980"], emphasis: "cost" },
  /** Questions whose answer set matched the manual truth exactly. A tie. */
  { label: "exact answers", values: ["28 / 29", "28 / 29"], emphasis: "claim" },
  /** Of what it said, the fraction that was true. Both exactly 1. */
  { label: "precision", values: ["1.000", "1.000"], emphasis: "claim" },
  /** Of what existed, the fraction it found. The one correctness row that moves. */
  { label: "recall", values: ["0.996", "0.989"], emphasis: "claim" },
] as const;

/**
 * Where the figures can be checked, and the corpus they are true of.
 *
 * Stays lowercase and quiet: it is a source note, not a headline. `37
 * repositories` was one of the storyboard's four statements and is now the scale
 * the whole table holds at, which is where it always belonged.
 *
 * The question count is deliberately absent. It is already on screen, in the
 * denominator of `28 / 29`, and this note is the row with the least reading time
 * in the scene — at 37 characters it is the one that sets the whole table's
 * chars-per-second floor.
 */
export const sourceNote = "37 repositories · published benchmark";
