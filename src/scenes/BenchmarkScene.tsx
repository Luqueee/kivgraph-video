import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BenchmarkMetric, tableGrid } from "../components/BenchmarkMetric";
import { benchmark } from "../data/benchmark";
import { brand } from "../brand/tokens";
import { fontMono } from "../brand/fonts";

/**
 * Scene 07 - benchmark (master 1150-1320, scene-local 0000-0170).
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
 * Four entrances and a hold. The values live in `src/data/benchmark.ts` and the
 * shape they share lives in `BenchmarkMetric.tsx`; this file owns the layout and
 * the timing, and there is no timing module for it because the timing is four
 * ramps and a fade.
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
 * A table, because the four statements are measurements with units and that is
 * what measurements look like. It buys the thing the scene's argument needs:
 * `6.2k` and `63.5k` share a right edge, so the comparison is made by the
 * composition instead of by the viewer.
 *
 * Vertical rhythm: 24 px between rows inside a group, 28 px either side of the
 * rule, and 44 px above the provenance note. The note gets nearly double the
 * gap because at a row's spacing it read as a fifth row that had lost its
 * value; a source note has to sit outside the body it vouches for. The block
 * runs 351 to 725, centred on 538 rather than 540 - mono digits sit high in
 * their em, so a geometrically centred box of numerals reads low.
 *
 * `6.2k` is the only row that breaks the 40 px value size, and it breaks it by
 * 2.2x. That ratio is the entire argument of the scene and it is why nothing
 * here is coloured to make the point.
 */
const layout = {
  primaryTop: 351,
  baselineTop: 463,
  ruleY: 531,
  accuracyTop: 559,
  scaleTop: 623,
  provenanceTop: 707,
} as const;

/**
 * Entrances.
 *
 * `6.2k` and `63.5k` are both complete by local 40, which is master 1190 - a
 * designated still-image key frame reserved for the benchmark launch, whose
 * required content is both numbers fully legible. A half-faded `63.5k` there
 * would ruin the one frame from this scene that gets used outside the video, so
 * the baseline's ramp front-loads inside the storyboard's window rather than
 * filling it.
 *
 * The two claims follow as one cascade. `37 repositories` settles at local 94,
 * and the frame then holds for 64 frames before the fade begins.
 *
 * No count-up and no odometer. A mid-count still frame would display a number
 * that is not the published benchmark, which is a benchmark-integrity failure
 * and not merely a taste one; and a counting animation is the "look how
 * impressive this is" gesture the storyboard rules out. Numbers appear at their
 * final value on every frame they are visible on.
 */
const entry = (frame: number, from: number, to: number) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: 6 * (1 - progress) };
};

/**
 * The fade out, and the hold that earns it.
 *
 * `STORYBOARD.md` §27 makes the metrics-to-logo path `fade -> silence -> brand
 * reveal`, so this scene owns the fade and scene 08 opens on black. All four
 * statements leave together: fading them in sequence would restate the cascade
 * backwards and cost the brand reveal its silence.
 *
 * The hold is 64 frames, and it is the reason the scene is 170 frames rather
 * than the 120 the storyboard drafted. At 120 the last statement settled with 10
 * frames left - 0.17 s to read `37 repositories` and register that the figures
 * are checkable - which is the same failure the last three scenes were repaced
 * to fix. Four statements need to be readable as one composition, and that is a
 * property of how long they are all on screen together.
 */
const fadeOut = (frame: number) => 1 - ramp(frame, 158, 170);

export const BenchmarkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const provenance = entry(frame, 76, 98);

  return (
    <AbsoluteFill
      style={{ backgroundColor: brand.background, opacity: fadeOut(frame) }}
    >
      <BenchmarkMetric
        label={benchmark.tokens.label}
        value={benchmark.tokens.value}
        emphasis="primary"
        top={layout.primaryTop}
        {...entry(frame, 4, 32)}
      />

      <BenchmarkMetric
        label={benchmark.baseline.label}
        value={benchmark.baseline.value}
        emphasis="baseline"
        top={layout.baselineTop}
        {...entry(frame, 18, 38)}
      />

      {/**
        * The one rule in the scene, separating what the answer cost from what it
        * was worth. Depth in this project is hairlines and surface steps, never
        * shadows, and this is the only structural line the frame gets: no card,
        * no box, no fill. A table drawn with borders would be a screenshot of a
        * spreadsheet, which is the opposite of what the scene is for.
        */}
      <div
        style={{
          position: "absolute",
          left: tableGrid.labelLeft,
          top: layout.ruleY,
          width: tableGrid.width,
          height: 1,
          backgroundColor: brand.border,
          opacity: ramp(frame, 40, 60) * 0.9,
        }}
      />

      <BenchmarkMetric
        label={benchmark.accuracy.label}
        value={benchmark.accuracy.value}
        emphasis="claim"
        top={layout.accuracyTop}
        {...entry(frame, 46, 68)}
      />

      <BenchmarkMetric
        label={benchmark.scale.label}
        value={benchmark.scale.value}
        emphasis="claim"
        top={layout.scaleTop}
        {...entry(frame, 72, 94)}
      />

      {/**
        * The provenance stamp, in a table's source-note position: bottom left,
        * quieter than the units above it, carrying no value of its own. It is
        * the secondary takeaway of the whole scene - these numbers are
        * checkable - and it lands last because a source note is read after the
        * thing it vouches for.
        */}
      <div
        style={{
          position: "absolute",
          left: tableGrid.labelLeft,
          top: layout.provenanceTop,
          fontFamily: fontMono,
          fontSize: 18,
          lineHeight: 1,
          letterSpacing: "0.04em",
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: provenance.opacity,
          translate: `0px ${provenance.offsetY}px`,
        }}
      >
        {benchmark.provenance}
      </div>
    </AbsoluteFill>
  );
};
