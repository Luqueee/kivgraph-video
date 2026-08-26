/**
 * The published Kivgraph benchmark, as scene 07 compares it.
 *
 * ## Provenance
 *
 * Upstream is `kivgraph/benchmarks/graph-tools-comparison`, and the figures here
 * are the final pass in `remeasure.md` — the one labelled `+ forwarding
 * excluded`, which supersedes the `0.3.2` numbers in that directory's
 * `report.md`. Reading `report.md` alone gives kivgraph `4.449` tokens and
 * `4/7`, which is a real measurement of an older build and wrong about today's.
 *
 * ```text
 * corpus      37 git repositories, 126.720 symbols
 * tokenizer   tiktoken o200k_base
 * machine     Apple M5, macOS, arm64
 * date        2026-08-21
 * ```
 *
 * Counted in files rather than in means, kivgraph claimed 44, of which 0 were
 * false and 0 of the 44 true ones were missed. That is the same score `grep`
 * plus reading gets, for `6.200` tokens against `63.531` — `10,2x` — and `886`
 * tokens per correct answer.
 *
 * ## Why two columns
 *
 * Because the comparison is the evidence, and a single column would make the
 * viewer supply the baseline from memory. `grep` + reading is the honest
 * denominator: the real alternative to a code graph is not being wrong, it is
 * spending `63.531` tokens. The four rows say the same thing four ways — every
 * measure of correctness ties, and only cost moves.
 *
 * The benchmark's own caution belongs here too, because the film inherits it:
 * seven questions on one corpus is a small set. A tool that answers seven of
 * seven is not a tool that answers everything; it is a tool with no known miss
 * on this set.
 *
 * ## Why the four rivals are not in this table
 *
 * The benchmark measures six arms, and kivgraph beats the other four graph tools
 * on cost per correct answer by between `2,2x` and `33x`. Naming them in a
 * promotional video is a strategic decision and not a design one, and the
 * figures are version-pinned to builds that will move. `grep` + reading cannot
 * go stale the same way: it is what an agent already does.
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
