import React from "react";
import { brand } from "../brand/tokens";
import { fontMono } from "../brand/fonts";

/**
 * Measured values, stated as type over the world they describe.
 *
 * **It used to be a panel and it should not have been.** It carried
 * `surfaceElevated`, a 1 px hairline and 34/40/38 of padding, which is exactly
 * how the shipped web draws a card - and over a 3D graph it read as an HTML
 * element pasted on top of the shot, which is the aesthetic this film spends
 * everything else avoiding.
 *
 * `STORYBOARD.md` had already said so, under *No hay claim line*: the card
 * stands alone, without a veil, so that *«sus tres valores se leen contra el
 * grafo sin oscurecer»* and *«el grafo debajo de `7 affected symbols` es la
 * prueba de la cifra»*. An opaque fill makes that impossible - there is no graph
 * under it to see. The implementation had drifted from its own document.
 *
 * So there is no surface now: no fill, no border, no padding. Depth comes from
 * luminance alone, which is what the rest of this film already uses. It remains
 * flat and screen-space rather than a 3D panel - it is Kivgraph UI reporting a
 * result *about* the graph, and that distinction is worth keeping.
 *
 * Values are monospace because they are technical values, and they stay in
 * `textPrimary` rather than taking accent: in scene 05 the whole accent budget
 * is spent on the propagation, and colouring the numbers as well would weaken
 * the one thing accent means there - *this symbol is affected*.
 *
 * It lives outside the scene because it used to be shared - the benchmark was
 * expected to report in the same surface language. It is not: scene 07 was built
 * as a two-column table with its own `BenchmarkMetric`, so `ImpactReport` is the
 * only consumer left. Kept as its own component anyway, because the scene owns
 * timing and placement and this owns the type, and merging them would put a type
 * scale inside a choreography file.
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
        fontFamily: fontMono,
      }}
    >
      <div
        style={{
          /**
           * Quieter than it was: 16 px and `textFaint`, down from 20 px and
           * `textMuted`. Wide-tracked uppercase at the card's own weight was
           * half of what made the block read as a product panel, and
           * `STORYBOARD.md` §7 puts a label outside the hierarchy rather than at
           * the top of it. The three figures are the hierarchy.
           */
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: brand.textFaint,
          whiteSpace: "pre",
        }}
      >
        {title}
      </div>

      {/** 22 rather than 30: without the padding the block had to re-find its
       * own rhythm, and a label sits closer to what it labels than a card's
       * inner margin allowed. */}
      <div style={{ height: 22 }} />

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
