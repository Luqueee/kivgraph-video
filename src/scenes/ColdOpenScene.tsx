import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { arms, rows } from "../data/benchmark";
import { fontMono, fontSans } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * Cold open - the benchmark as a hook (master 0000-0120, scene-local 0000-0120).
 *
 * The film's opening two seconds, and the only scene that sits outside the
 * numbered story. Everything from `00-intent.md` onward is the product
 * narrative; this is the promise that narrative pays off.
 *
 * ## Why the benchmark is at both ends of the film
 *
 * It is not the same slide twice, and future edits must not delete one of them
 * as a duplicate. The two appearances have different jobs:
 *
 * ```text
 * cold open   the hook       two figures and the tie, stated. No methodology.
 * scene 07    the evidence   four measures, two named columns, a source note.
 * ```
 *
 * The opening states a result the viewer cannot yet explain, so the question it
 * leaves - *how* - is the thing the next thirty-four seconds answer. Scene 07 is
 * where the same numbers stop being a promise and become receipts, in the
 * company of the precision, recall and corpus size this scene deliberately
 * withholds. Take the teaser out and the film opens on mechanics; take the table
 * out and the claim is never substantiated.
 *
 * ## Nothing here is typed
 *
 * Every figure, every arm name and the word `tokens` are read out of
 * `src/data/benchmark.ts`, which is the one place this project holds the
 * published benchmark. Two scenes stating the same measurement from two
 * transcriptions is exactly how they drift, and `AGENTS.md` § Benchmark
 * integrity forbids the outcome: displayed values must match the published
 * benchmark, and there must be one place to change if it moves.
 *
 * The tie is asserted rather than assumed - see `tie` below.
 *
 * ## What this scene may not do
 *
 * No percentage, no multiplier, no `7.45x`, no `87% fewer`. The raw figures are
 * more credible than any ratio computed from them, and `STORYBOARD.md` §30
 * rules out the register anyway. No logo, no wordmark, no product name larger
 * than the label under the first figure: the hook is about the result, and the
 * viewer meets the product by watching it work.
 *
 * No count-up, no odometer, no spin, no spring. A mid-count still frame would
 * display a number that is not the published benchmark, which is an integrity
 * failure and not a taste one. Every frame this scene renders shows the figures
 * at their published value or does not show them at all.
 *
 * See `docs/scenes/cold-open.md` for intent, beats and invariants.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

const entry = (frame: number, from: number, to: number) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: 8 * (1 - progress) };
};

/**
 * The exits, and the one place this scene does not use the film's easing.
 *
 * `1 - ramp(...)` is what the rest of the film fades with, and it is the wrong
 * shape for an exit that has to land on a known frame. The curve is an ease-out,
 * so reversed it dumps most of the light in the first third and then crawls: with
 * the windows first laid out that way the ink was measurably gone six frames
 * before the window closed, and pushing the window later to compensate turned the
 * fade into a snap. Linear is the shape that actually arrives, and over fourteen
 * frames of type it is indistinguishable from a curve except in where it ends.
 *
 * Where it ends is the whole point: the frame has to be empty *before* the
 * sequence boundary, or the cold open ends on a visible element and the dissolve
 * into `00-intent.md` becomes a cut.
 */
const recede = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

/**
 * The published rows this scene draws from, by label rather than by index.
 *
 * A `find` and a throw rather than `rows[0]` and `rows[1]`: the table's row
 * order is scene 07's editorial decision and it has already changed once. If a
 * reorder or a rename ever detaches this scene from the figures it is quoting,
 * the render fails here with the reason, which is the correct outcome - a film
 * that cannot find the benchmark must not fall back to showing something else.
 */
const rowByLabel = (label: string) => {
  const row = rows.find((candidate) => candidate.label === label);

  if (!row) {
    throw new Error(
      `cold open: benchmark row "${label}" no longer exists in src/data/benchmark.ts`,
    );
  }

  return row;
};

const cost = rowByLabel("tokens");
const tie = rowByLabel("exact answers");

/**
 * The word `Same` is a claim about the measurement, so it is checked against it.
 *
 * The parity line does not print the figures - see `parity` below for why - so
 * nothing on screen would go stale if the benchmark moved. That is exactly the
 * danger: the claim would quietly become false while every visible glyph stayed
 * correct. This throws at module scope instead, and the render stops. A film
 * that keeps asserting parity after parity has gone is the worst failure
 * available to this project, and a failed render is a better outcome.
 */
if (tie.values[0] !== tie.values[1]) {
  throw new Error(
    `cold open: the arms no longer tie on exact answers (${tie.values[0]} vs ${tie.values[1]}); "Same exact-answer count." is not true and the copy has to change`,
  );
}

/**
 * The three things the scene says, in the order the viewer receives them.
 *
 * The unit rides with the subject's label rather than with the baseline's: the
 * two figures are stacked on one axis in one typeface, so a second `tokens`
 * under `grep + read` would say something the layout has already said. `·` is
 * the separator scene 07's source note and scene 00's match line already use.
 */
const subject = { figure: cost.values[0], label: `${arms[0]} · ${cost.label}` };
const baseline = { figure: cost.values[1], label: arms[1] };

/**
 * The parity claim, and the one line in this scene that is written rather than
 * derived.
 *
 * It read `28 / 29 exact answers — both` for one build, straight out of the
 * `exact answers` row, and it was cut on the objection that decides it: a lone
 * fraction at the top of a film reads as *it gets one wrong*, not as *these two
 * tie*. In scene 07 the same figure is safe, because it sits in a table with
 * `28 / 29` in the column beside it and three more correctness rows underneath —
 * the denominator is visibly the benchmark's, not Kivgraph's failure rate. Here
 * there is nothing next to it to make that reading available, and two seconds is
 * not long enough for a viewer to go looking.
 *
 * So the scene states the tie and the table states the count. `Same
 * exact-answer count.` is the measured result and not a widening of it: the
 * benchmark records `exact_answers` at 28 for both arms, and this says that and
 * only that. It is deliberately **not** `same quality` or `same accuracy`, which
 * would claim the other two correctness measures as well - `07-benchmark.md`
 * shows all three, and this scene may not imply them.
 *
 * The tie itself is still asserted against the data above, and it matters more
 * now than when the figures were printed: no glyph on screen would change if the
 * benchmark moved.
 *
 * Sans, not mono. It is a sentence addressed to the viewer rather than a value
 * read off a measurement, which is the same split scene 07 makes for its bridge
 * line and scene 00 for its opening two lines.
 */
const parity = "Same exact-answer count.";

/**
 * The composition, in master pixels.
 *
 * Centred, stacked, one axis - deliberately not the table scene 07 ends on. The
 * end of the film is a grid with column heads, a rule and four rows; if the
 * opening used the same grammar the two would read as one slide shown twice.
 * Stacked here, tabular there, and the difference is also the argument: the
 * teaser has two figures, the table has the structure that makes them checkable.
 *
 * The tops are the measured answer rather than the arithmetic one. Laid out on
 * round numbers the settled block's ink measured `314`-`788`, centring on 551 -
 * eleven pixels low, because a line box is not its ink and five of them stack
 * the error. Every top then moved -13, which puts the ink centre on 538, the
 * same place scene 07 centres its table: two above the frame's 540, because mono
 * digits sit high in their em and a geometrically centred box of numerals reads
 * low.
 *
 * 24 px from a figure to its own label, 46 px between the two blocks, and 58 px
 * above the parity line - which gets more than double a label's gap because it
 * is a different kind of statement. A row's spacing would have made it read as a
 * third arm that had lost its figure, which is the mistake scene 07's source
 * note was moved out of.
 */
const layout = {
  subjectFigure: { top: 283, fontSize: 150 },
  subjectLabel: { top: 457, fontSize: 32 },
  baselineFigure: { top: 535, fontSize: 92 },
  baselineLabel: { top: 651, fontSize: 32 },
  parity: { top: 741, fontSize: 40 },
} as const;

/**
 * Every window in the scene, in scene-local frames, in one place.
 *
 * **`35,961` is on the first frame at full strength.** There is no fade-up,
 * because the brief is to open on data and a ramp from zero means frame 0000 is
 * an empty black frame - which is the first thing the opening is not allowed to
 * be. It is also the frame most players will use as the poster, so it carries
 * the whole hook on its own: a figure, whose it is, and what it measures.
 *
 * The rest arrives one statement at a time. The comparison cannot land before
 * the thing it is a comparison to has been read, and the parity line cannot land
 * before there are two figures for `both` to refer to.
 *
 * The exits reverse the arrivals, so the frame empties back to the figure it
 * opened on and `35,961` is the last thing to leave. That is the join into
 * `00-intent.md` rather than a flourish: see `## Transition out` in
 * `docs/scenes/cold-open.md`.
 *
 * `leaveSubject` closes on `0119` and not on `0120`, and the difference is a
 * frame the render can see. Ending on the boundary leaves the last frame of the
 * scene carrying `35,961` at 7 % - measured, a peak of 32 against a background
 * of 11 - which then vanishes at `0120`. That is a one-frame pop at the one
 * boundary that is supposed to be invisible. Closing a frame early makes `0119`
 * byte-identical to `0120`, and the film crosses into the intent scene on ten
 * empty frames: the same opening silence `08-brand.md` uses, and the beat in
 * which the viewer's *how?* forms before anything starts answering it.
 */
const beat = {
  baseline: [16, 34],
  parity: [40, 58],
  leave: [102, 115],
  leaveSubject: [106, 119],
} as const;

/**
 * A centred line. Five of them are the entire scene, so the shared style lives
 * here rather than five times over.
 */
const Line: React.FC<{
  top: number;
  fontSize: number;
  color: string;
  fontWeight?: number;
  fontFamily?: string;
  opacity: number;
  offsetY?: number;
  children: React.ReactNode;
}> = ({
  top,
  fontSize,
  color,
  fontWeight = 400,
  fontFamily = fontMono,
  opacity,
  offsetY = 0,
  children,
}) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      top,
      width: "100%",
      textAlign: "center",
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight: 1,
      letterSpacing: fontSize > 60 ? "-0.02em" : "0.04em",
      whiteSpace: "pre",
      color,
      opacity,
      translate: `0px ${offsetY}px`,
    }}
  >
    {children}
  </div>
);

export const ColdOpenScene: React.FC = () => {
  const frame = useCurrentFrame();

  const baselineIn = entry(frame, beat.baseline[0], beat.baseline[1]);
  const parityIn = entry(frame, beat.parity[0], beat.parity[1]);

  const leave = recede(frame, beat.leave[0], beat.leave[1]);
  const leaveSubject = recede(
    frame,
    beat.leaveSubject[0],
    beat.leaveSubject[1],
  );

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/**
       * The subject. Largest thing in the scene and present on every frame from
       * the first, which is what makes the opening a statement rather than an
       * entrance.
       *
       * It is larger than `267,980` while being the smaller number, and that
       * inversion is deliberate and is scene 07's rule as well: size marks the
       * subject, not the magnitude. The labels carry which is which, and the
       * comparison is a cost, where less is the point. Neither figure is
       * coloured to make the argument - it has to survive greyscale.
       */}
      <Line
        top={layout.subjectFigure.top}
        fontSize={layout.subjectFigure.fontSize}
        fontWeight={500}
        color={brand.textPrimary}
        opacity={leaveSubject}
      >
        {subject.figure}
      </Line>

      <Line
        top={layout.subjectLabel.top}
        fontSize={layout.subjectLabel.fontSize}
        color={brand.textMuted}
        opacity={leaveSubject}
      >
        {subject.label}
      </Line>

      {/**
       * The comparison. Muted rather than faint, and 92 px rather than scene
       * 07's 36: this frame has no column heads and no rule to carry structure,
       * so the baseline has to stay legible on a small embedded player or the
       * hook has nothing to compare against.
       */}
      <Line
        top={layout.baselineFigure.top}
        fontSize={layout.baselineFigure.fontSize}
        color={brand.textMuted}
        opacity={baselineIn.opacity * leave}
        offsetY={baselineIn.offsetY}
      >
        {baseline.figure}
      </Line>

      <Line
        top={layout.baselineLabel.top}
        fontSize={layout.baselineLabel.fontSize}
        color={brand.textMuted}
        opacity={baselineIn.opacity * leave}
        offsetY={baselineIn.offsetY}
      >
        {baseline.label}
      </Line>

      {/**
       * The line without which the cost comparison proves nothing.
       *
       * Cheaper is only interesting if the answers are as good, so the scene may
       * never show the two token figures without it. See `parity` for what it
       * says, what it deliberately does not say, and why it stopped printing the
       * fraction it is derived from.
       */}
      <Line
        top={layout.parity.top}
        fontSize={layout.parity.fontSize}
        fontFamily={fontSans}
        color={brand.textSecondary}
        opacity={parityIn.opacity * leave}
        offsetY={parityIn.offsetY}
      >
        {parity}
      </Line>
    </AbsoluteFill>
  );
};
