import React from "react";
import { brand } from "../brand/tokens";
import { fontMono } from "../brand/fonts";

/**
 * A flat panel stating measured values.
 *
 * Deliberately not a floating glass object and not a 3D panel: it is Kivgraph
 * UI reporting a result *about* the graph, and keeping it flat is what
 * preserves that distinction from the world it describes. Depth comes from one
 * surface step against the background plus a 1px hairline, exactly as the
 * shipped web does it - no shadow, no radius, no blur, no gradient.
 *
 * Values are monospace because they are technical values, and they stay in
 * `textPrimary` rather than taking accent: in scene 05 the whole accent budget
 * is spent on the propagation, and colouring the numbers as well would weaken
 * the one thing accent means there - *this symbol is affected*.
 *
 * Lives here rather than inside the scene so scene 08 can report the benchmark
 * in the same surface language.
 */

type Props = {
  /** Small uppercase heading. */
  title: string;
  /**
   * One line per value, pre-formatted.
   *
   * Strings rather than label/value pairs: every line in this design reads as
   * one sentence beginning with a numeral, so the number aligns with the number
   * above it by virtue of the monospace grid and needs no column.
   */
  lines: readonly string[];
};

export const MetricCard: React.FC<Props> = ({ title, lines }) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: brand.surfaceElevated,
        border: `1px solid ${brand.border}`,
        borderRadius: 0,
        padding: "34px 40px 38px",
        fontFamily: fontMono,
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: brand.textMuted,
          whiteSpace: "pre",
        }}
      >
        {title}
      </div>

      <div style={{ height: 30 }} />

      {lines.map((line) => (
        <div
          key={line}
          style={{
            fontSize: 34,
            fontWeight: 400,
            lineHeight: 1.55,
            color: brand.textPrimary,
            whiteSpace: "pre",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};
