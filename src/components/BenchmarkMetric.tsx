import React from "react";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * One row of the comparison table: a measure on the left, one figure per arm.
 *
 * ## Why a table with columns
 *
 * The scene's argument is a comparison, so the composition has to be one. Two
 * figures in two headed columns are compared by the layout; two figures floating
 * at different sizes have to be compared by the viewer, from memory, while the
 * scene moves on.
 *
 * Each column right-aligns on its own edge. That is the whole convention of a
 * figure column, and it is what lets `6.2k` and `63.5k` be read as the same
 * measure at two magnitudes rather than as two unrelated numbers.
 *
 * ## Why the emphases are named and not sized
 *
 * The caller says what a row *is*. The type scale lives here, once, so the ratio
 * the scene depends on cannot drift one call at a time: the cost row is 76 px
 * against the correctness rows' 36 px, and `6.2k` beats `63.5k` inside its own
 * row by being 76 px against 36 px. A `fontSize` prop would let a future edit
 * narrow that until the hierarchy stopped reading — and the comparison has to
 * survive in greyscale (`AGENTS.md` §37), so it cannot be rescued with colour.
 *
 * The subject column is `textPrimary` and the baseline column is `textFaint` in
 * the cost row only. In the correctness rows both columns are `textPrimary`,
 * because those rows tie and dimming one side would assert a difference the
 * benchmark does not report.
 */

const emphasis = {
  /** The cost row. The subject's figure is the largest thing in the scene. */
  cost: {
    size: [76, 36],
    weight: [500, 400],
    colour: [brand.textPrimary, brand.textFaint],
  },
  /** A correctness row. Both arms tie, so both are stated at equal weight. */
  claim: {
    size: [36, 36],
    weight: [400, 400],
    colour: [brand.textPrimary, brand.textPrimary],
  },
} as const;

/**
 * The table's geometry, in master pixels.
 *
 * Exported because the header row and the rule under it span exactly these
 * columns. A rule that misses the table it divides by a few pixels is the kind
 * of detail that makes a frame look assembled rather than designed.
 *
 * 800 px wide, centred: labels from 560, figure columns ending at 1060 and 1360.
 * The two proportions that matter were measured off a render and then fixed. The
 * gap from a label to its first figure runs 251-352 px depending on how long the
 * label is, and the gap between the two figures runs 200-222 px - so a label
 * reads as belonging to its row while the two figures still read as two columns
 * rather than one wide number. The first attempt had those at 466 and 248, which
 * detached `recall` from its own `1.00` while letting the two `1.00`s crowd each
 * other.
 */
export const tableGrid = {
  labelLeft: 560,
  columnRight: [1060, 1360],
} as const;

const labelSize = 18;

type Props = {
  /** The measure, verbatim from `src/data/benchmark.ts`. */
  label: string;
  /** One figure per arm, in column order. */
  values: readonly [string, string];
  emphasis: keyof typeof emphasis;
  /** Top of the row's tallest figure, in master pixels. */
  top: number;
  /** 0 -> 1 presence. */
  opacity: number;
  /** Upward settle, in master pixels. */
  offsetY: number;
};

export const BenchmarkMetric: React.FC<Props> = ({
  label,
  values,
  emphasis: which,
  top,
  opacity,
  offsetY,
}) => {
  const look = emphasis[which];
  const tallest = Math.max(look.size[0], look.size[1]);

  /**
   * Everything in a row sits on the tallest figure's optical centre rather than
   * its top edge. Mono digits fill about three quarters of their em, so half of
   * that is where the row's weight actually is — and in the cost row the two
   * figures differ by 40 px of size, so aligning tops would leave `63.5k`
   * floating above its own baseline.
   */
  const centre = top + tallest * 0.375;

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
          top: centre - labelSize / 2,
          fontSize: labelSize,
          lineHeight: 1,
          letterSpacing: "0.04em",
          color: brand.textMuted,
        }}
      >
        {label}
      </div>

      {values.map((value, column) => (
        <div
          key={value + String(column)}
          style={{
            position: "absolute",
            left: 0,
            top: centre - look.size[column] * 0.375,
            width: tableGrid.columnRight[column],
            textAlign: "right",
            fontSize: look.size[column],
            fontWeight: look.weight[column],
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: look.colour[column],
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
