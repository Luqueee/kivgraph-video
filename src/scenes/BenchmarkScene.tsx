import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BenchmarkMetric, tableGrid } from "../components/BenchmarkMetric";
import { arms, rows, sourceNote } from "../data/benchmark";
import { brand } from "../brand/tokens";
import { fontMono } from "../brand/fonts";

/**
 * Scene 07 - benchmark (master 1150-1360, scene-local 0000-0210).
 *
 * The scene that replaces the claim with evidence. Everything before it was a
 * demonstration, and a demonstration can be staged; this says the thing the
 * viewer just watched was measured, published and cheap, and it says it in
 * numbers rather than adjectives. `STORYBOARD.md` §30 forbids the alternative:
 * Kivgraph may not assert authority, it has to earn it.
 *
 * It is also the first frame since the opening with no product surface in it. No
 * graph, no prompt, no chrome, no logo. Removing every interface element is what
 * makes the numbers read as a fact about the world rather than as a screenshot
 * of a tool - so the emptiness at 1150 is the hard cut's whole effect.
 *
 * A comparison table, two arms and four measures. The figures and their
 * provenance live in `src/data/benchmark.ts`; the row shape and the type scale
 * live in `BenchmarkMetric.tsx`; this file owns the layout and the timing. There
 * is no state module because the timing is seven ramps and a fade.
 *
 * See `docs/scenes/07-benchmark.md` for intent, beats and invariants.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/**
 * The composition, in master pixels.
 *
 * Vertical rhythm: 24 px between rows, 28 px either side of the header rule, and
 * 44 px above the source note. The note gets nearly double a row's gap because
 * at a row's spacing it read as a fifth measure that had lost its figures; a
 * source note has to sit outside the body it vouches for.
 *
 * The block runs 342 to 734, centred on 538 rather than 540 - mono digits sit
 * high in their em, so a geometrically centred box of numerals reads low.
 *
 * The cost row is the only one that breaks the 36 px figure size, and inside it
 * `6.2k` is 76 px against `63.5k`'s 36. Both ratios are the argument, which is
 * why nothing in the frame is coloured to make it.
 */
const layout = {
  headerTop: 342,
  ruleY: 388,
  rowTops: [416, 516, 576, 636],
  noteTop: 716,
} as const;

/**
 * Entrances.
 *
 * The header and its rule arrive first and almost together: the table has to
 * exist before it can be filled, and a figure landing in an unheaded column is
 * a number without a claim attached.
 *
 * The cost row is complete by local 38, which is master 1188. `STORYBOARD.md`
 * §29 reserves master 1190 as a still-image key frame whose required content is
 * `6.2k vs 63.5k`, both fully legible; a half-faded figure there would ruin the
 * one frame from this scene that gets used outside the video. The ramp therefore
 * front-loads inside the storyboard's window rather than filling it.
 *
 * The three correctness rows then arrive on a 24-frame pitch, which is the same
 * pitch as their vertical spacing - the table fills in at one speed, so it reads
 * as one object being completed rather than as four statements being made.
 *
 * No count-up and no odometer. A mid-count still frame would display a number
 * that is not the published benchmark, which is a benchmark-integrity failure
 * and not merely a taste one; and a counting animation is the "look how
 * impressive this is" gesture the storyboard rules out. Numbers appear at their
 * final value on every frame they are visible on.
 */
const rowEntry = [
  [14, 38],
  [42, 62],
  [66, 86],
  [90, 110],
] as const;

const entry = (frame: number, from: number, to: number) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: 6 * (1 - progress) };
};

/**
 * The fade out, and the hold that earns it.
 *
 * `STORYBOARD.md` §27 makes the metrics-to-logo path `fade -> silence -> brand
 * reveal`, so this scene owns the fade and scene 08 opens on the silence. The
 * whole table leaves together: fading it row by row would restate the cascade
 * backwards and cost the brand reveal its silence.
 *
 * The scene is 210 frames, not the 120 the storyboard drafted, and the reason is
 * measured rather than felt. Dwell - how long a readable thing stays on screen
 * after it has finished arriving - runs 2.67 s for the cost row down to 1.03 s
 * for the source note, and the note is 37 characters, so it is read at 38
 * characters per second against a 25-40 budget for on-screen technical text. At
 * 120 frames a four-row table could not finish arriving at all.
 */
const fadeOut = (frame: number) => 1 - ramp(frame, 198, 210);

export const BenchmarkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const header = entry(frame, 2, 22);
  const note = entry(frame, 116, 136);

  return (
    <AbsoluteFill
      style={{ backgroundColor: brand.background, opacity: fadeOut(frame) }}
    >
      {/**
       * The column heads. Both are `textMuted`, the same treatment the row
       * labels get, because all six are labels: the hierarchy in this frame is
       * carried by the figures, and marking the subject column with a colour
       * would assert a difference the correctness rows explicitly deny.
       */}
      {arms.map((arm, column) => (
        <div
          key={arm}
          style={{
            position: "absolute",
            left: 0,
            top: layout.headerTop,
            width: tableGrid.columnRight[column],
            textAlign: "right",
            fontFamily: fontMono,
            fontSize: 18,
            lineHeight: 1,
            letterSpacing: "0.04em",
            whiteSpace: "pre",
            color: brand.textMuted,
            opacity: header.opacity,
            translate: `0px ${header.offsetY}px`,
          }}
        >
          {arm}
        </div>
      ))}

      {/**
       * The one rule in the scene, under the column heads. Depth in this project
       * is hairlines and surface steps, never shadows, and this is the only
       * structural line the frame gets: no card, no box, no fill, and no borders
       * on the table. A bordered table would be a screenshot of a spreadsheet,
       * which is the opposite of what the scene is for.
       */}
      <div
        style={{
          position: "absolute",
          left: tableGrid.labelLeft,
          top: layout.ruleY,
          width: tableGrid.columnRight[1] - tableGrid.labelLeft,
          height: 1,
          backgroundColor: brand.border,
          opacity: ramp(frame, 10, 30) * 0.9,
        }}
      />

      {rows.map((row, index) => (
        <BenchmarkMetric
          key={row.label}
          label={row.label}
          values={row.values}
          emphasis={row.emphasis}
          top={layout.rowTops[index]}
          {...entry(frame, rowEntry[index][0], rowEntry[index][1])}
        />
      ))}

      {/**
       * The source note, in a table's source-note position: bottom left, quieter
       * than the measures above it, carrying no figure of its own. It is the
       * secondary takeaway of the whole scene - these numbers are checkable -
       * and it lands last because a source note is read after the thing it
       * vouches for.
       */}
      <div
        style={{
          position: "absolute",
          left: tableGrid.labelLeft,
          top: layout.noteTop,
          fontFamily: fontMono,
          fontSize: 18,
          lineHeight: 1,
          letterSpacing: "0.04em",
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: note.opacity,
          translate: `0px ${note.offsetY}px`,
        }}
      >
        {sourceNote}
      </div>
    </AbsoluteFill>
  );
};
