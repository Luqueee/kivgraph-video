import React from "react";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * One row of the benchmark table: a unit on the left, its measured value on the
 * right.
 *
 * ## Why a table
 *
 * The four statements are measurements with units, and a table is what
 * measurements look like. It buys one thing the earlier free-floating layout
 * could not: **`6.2k` and `63.5k` share a right edge**, so the comparison is
 * made by the composition instead of by the viewer. Two numbers at different
 * baselines in different sizes have to be mentally aligned before they can be
 * compared; two numbers in a column do not.
 *
 * It also needs no new copy. Every string is the storyboard's, re-associated as
 * a unit and a value rather than rewritten - see `src/data/benchmark.ts`.
 *
 * ## Why the values are right-aligned and the units are not
 *
 * A value column reads as a column only if its right edge is straight; that is
 * the whole convention. The unit column is left-aligned against the same
 * gutter, so the two columns frame the row from both sides and the eye has a
 * fixed place to land. Nothing is centred: centring each row independently would
 * make four rows into four objects, and this scene is one object.
 *
 * ## Why emphasis and not sizes
 *
 * The caller says *what a row is*, not how big it is. The type scale lives here,
 * once, so the ratio the scene depends on cannot drift: `6.2k` beats `63.5k`
 * because it is 88 px against 40 px, and that ratio is the entire argument. A
 * component taking `fontSize` would let a future edit narrow it one call at a
 * time until the hierarchy stopped reading - and the comparison has to survive
 * in greyscale (`AGENTS.md` §37), which means it cannot be rescued by colour.
 */

const emphasis = {
  /** The Kivgraph figure. The largest thing in the scene. */
  primary: { size: 88, weight: 500, colour: brand.textPrimary },
  /** The baseline it is measured against: smaller, and dimmer, never redder. */
  baseline: { size: 40, weight: 400, colour: brand.textFaint },
  /** Correctness and scale. Between the body and heading tiers. */
  claim: { size: 40, weight: 400, colour: brand.textPrimary },
} as const;

/**
 * The table's own geometry, in master pixels.
 *
 * 480 px wide, centred. The widest row is `exact answers` against `7 / 7` -
 * 140 px of unit and 120 px of value at these sizes - so 480 leaves a 220 px
 * gutter there and 300 px in the sparsest row. Wider than this and
 * `repositories` stops belonging to `37`; narrower and `6.2k`, which is 211 px
 * on its own, crowds its unit.
 *
 * Exported because the separating rule spans exactly these columns, and a rule
 * a few pixels wider than the table it divides is the kind of detail that makes
 * a frame look assembled rather than designed.
 */
export const tableGrid = {
  labelLeft: 720,
  valueRight: 1200,
  get width() {
    return this.valueRight - this.labelLeft;
  },
} as const;

const unitSize = 18;

type Props = {
  /** The unit, verbatim from `src/data/benchmark.ts`. */
  label: string;
  /** The measured value, verbatim from the same place. */
  value: string;
  emphasis: keyof typeof emphasis;
  /** Top of the value in master pixels. The unit is centred against it. */
  top: number;
  /** 0 -> 1 presence. */
  opacity: number;
  /** Upward settle, in master pixels. */
  offsetY: number;
};

export const BenchmarkMetric: React.FC<Props> = ({
  label,
  value,
  emphasis: which,
  top,
  opacity,
  offsetY,
}) => {
  const look = emphasis[which];

  /**
   * The unit sits on the value's optical centre, not on its top edge. Mono
   * digits fill about three quarters of their em, so half of that is where the
   * row's weight actually is.
   */
  const unitTop = top + look.size * 0.375 - unitSize / 2;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        fontFamily: fontMono,
        whiteSpace: "pre",
        opacity,
        translate: `0px ${offsetY}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: tableGrid.labelLeft,
          top: unitTop,
          fontSize: unitSize,
          lineHeight: 1,
          letterSpacing: "0.04em",
          color: brand.textMuted,
        }}
      >
        {label}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          top,
          width: tableGrid.valueRight,
          textAlign: "right",
          fontSize: look.size,
          fontWeight: look.weight,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: look.colour,
        }}
      >
        {value}
      </div>
    </div>
  );
};
