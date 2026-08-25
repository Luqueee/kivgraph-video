import React from "react";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";
import { nameMatches } from "../data/graphDemo";

/**
 * The left half of scene 06: what a find-all-matches search returns.
 *
 * Every entry is painted with `brand.selection`, the editor selection colour,
 * and never with `brand.accent`. That is the whole argument of the column. In
 * this video accent means *semantically true* - selected symbol, real edge,
 * propagated impact - so painting text-search hits with it would tell the
 * audience these results are resolved, which is the opposite of what the scene
 * is about. Selection says only "a string matched here", which is exactly the
 * claim a name search can make, and it says it in the vocabulary of the editor
 * the viewer already knows.
 *
 * There are two rows, not the seven of the storyboard, because `nameMatches`
 * carries two: both are real, from the published benchmark. A scene whose point
 * is that a name is not a symbol cannot make that point with an invented
 * fixture, and seven fabricated call sites would be a stronger picture of a
 * weaker claim. Nothing here counts rows by hand - the list and the counter are
 * both derived from the fixture, so the frame can never disagree with the data.
 *
 * The language and the path stack rather than sharing a line. The Go path is 60
 * monospace characters, which at this size already consumes the column's width
 * on its own; a path that wraps stops reading as one location, and shrinking it
 * far enough to share the line would put it below the legible floor.
 *
 * Flat like the rest of the Kivgraph UI: no radius, no border on the highlight,
 * no shadow. This is interface reporting a result, not an object in the world
 * the right half shows.
 */

/** Fixed sizes of the column, in master pixels. */
const layout = {
  /** Usable width of the left half of the 1920x1080 master. */
  width: 760,
  label: { fontSize: 22, gap: 46 },
  language: { fontSize: 22, lineHeight: 32 },
  path: { fontSize: 20, lineHeight: 30, gap: 14 },
  entry: { fontSize: 30, padding: "7px 12px" },
  row: { gap: 44 },
  counter: { fontSize: 22, gap: 52 },
} as const;

type Props = {
  /** 0 -> 1 presence of the column as a whole. */
  opacity: number;
  /** 0 -> 1 per-row arrival, in order; row `i` reads `rows[i]`. */
  rows: readonly number[];
  /** 0 -> 1 presence of the counter line. */
  counter: number;
};

export const NameMatchColumn: React.FC<Props> = ({ opacity, rows, counter }) => {
  if (rows.length < nameMatches.length) {
    throw new Error(
      `NameMatchColumn: ${rows.length} row values for ${nameMatches.length} matches`,
    );
  }

  return (
    <div
      style={{
        width: layout.width,
        fontFamily: fontMono,
        opacity,
      }}
    >
      <div
        style={{
          fontSize: layout.label.fontSize,
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "0.02em",
          color: brand.textMuted,
          whiteSpace: "pre",
        }}
      >
        Name matching
      </div>

      <div style={{ height: layout.label.gap }} />

      {nameMatches.map((match, index) => {
        const arrival = rows[index];

        return (
          <div
            key={match.id}
            style={{
              marginTop: index === 0 ? 0 : layout.row.gap,
              opacity: arrival,
              translate: `0px ${(1 - arrival) * 10}px`,
            }}
          >
            <div
              style={{
                fontSize: layout.language.fontSize,
                fontWeight: 400,
                lineHeight: `${layout.language.lineHeight}px`,
                color: brand.textFaint,
                whiteSpace: "pre",
              }}
            >
              {match.language}
            </div>
            <div
              style={{
                fontSize: layout.path.fontSize,
                fontWeight: 400,
                lineHeight: `${layout.path.lineHeight}px`,
                color: brand.textFaint,
                whiteSpace: "pre",
              }}
            >
              {match.path}
            </div>

            <div style={{ height: layout.path.gap }} />

            <div
              style={{
                display: "block",
                width: "fit-content",
                backgroundColor: brand.selection,
                borderRadius: 0,
                padding: layout.entry.padding,
                fontSize: layout.entry.fontSize,
                fontWeight: 400,
                lineHeight: 1,
                color: brand.textSecondary,
                whiteSpace: "pre",
              }}
            >
              {match.label}
            </div>
          </div>
        );
      })}

      <div style={{ height: layout.counter.gap }} />

      <div
        style={{
          fontSize: layout.counter.fontSize,
          fontWeight: 400,
          lineHeight: 1,
          color: brand.textMuted,
          whiteSpace: "pre",
          opacity: counter,
        }}
      >
        {`${nameMatches.length} matches`}
      </div>
    </div>
  );
};
