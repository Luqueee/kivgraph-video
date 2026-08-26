/**
 * The published Kivgraph benchmark, as the film states it.
 *
 * ## Provenance
 *
 * Every value here is transferred verbatim from `STORYBOARD.md` SCENE 09 —
 * BENCHMARK, which is this repository's record of the published benchmark. The
 * storyboard is the upstream authority inside the repo; the benchmark itself is
 * published outside it, and nothing in this project can re-derive it.
 *
 * The storyboard writes four statements:
 *
 * ```text
 * 6.2k / tokens
 * 63.5k / grep + read
 * 7 / 7 exact answers
 * 37 repositories / published benchmark
 * ```
 *
 * This file splits the last two into a value and its unit — `7 / 7` from
 * `exact answers`, `37` from `repositories` — because the scene presents them as
 * a table and a table needs the measured quantity in its own column. No value
 * changes: `7 / 7` keeps the storyboard's spacing, `37` keeps its precision, and
 * the unit words are the storyboard's own. Splitting where the copy already had
 * a space is not rewriting it, and `07-benchmark.md` § Flexible elements
 * explicitly allows `7 / 7` and `exact answers` to be rendered at two different
 * emphases.
 *
 * ## Why this file exists
 *
 * `AGENTS.md` § Benchmark integrity: values are never invented, rounded or
 * modified for visual convenience, and if the benchmark changes then every
 * visual and documentation reference changes with it in the same task. That rule
 * is only enforceable if there is exactly one place to change. Four literals
 * spread through a component are four places to forget.
 *
 * The values are strings, not numbers, and deliberately so. `6.2k` is not `6200`
 * rendered with a suffix: the published figure is quoted at that precision, and
 * formatting a number would let a future edit change the precision — which is
 * the same thing as changing the value.
 */
export const benchmark = {
  /** What the resolved answer cost. The scene's dominant figure. */
  tokens: { label: "tokens", value: "6.2k" },

  /**
   * What the same answer costs without a graph. Subordinate by scale, never by
   * colour: a win/lose colour pair would read as marketing rather than
   * measurement, and `AGENTS.md` §37 forbids meaning that depends on colour
   * alone.
   */
  baseline: { label: "grep + read", value: "63.5k" },

  /**
   * Correctness, not cost. The film needs both, because a cheap wrong answer is
   * worthless — this is the row that answers "is it actually right?".
   */
  accuracy: { label: "exact answers", value: "7 / 7" },

  /** The scale the other three hold at. */
  scale: { label: "repositories", value: "37" },

  /**
   * Where the figures can be checked. Stays lowercase: it is a provenance stamp,
   * not a heading, and it should look like one.
   */
  provenance: "published benchmark",
} as const;
