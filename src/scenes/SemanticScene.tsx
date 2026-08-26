import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld } from "../components/CodeWorld";
import { NameMatchColumn } from "../components/NameMatchColumn";
import {
  dividerOpacity,
  getSemanticState,
  leftColumn,
  reportFade,
  resolution,
  rightColumn,
} from "../three/semanticState";
import { ImpactReport } from "../components/ImpactReport";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";
import { fontMono } from "../brand/fonts";

/**
 * Scene 05 - semantic resolution (master 0730-0910, scene-local 0000-0180).
 *
 * The scene that makes everything before it credible. Without it the blast
 * radius could plausibly be a fancy text search. Here the two mechanisms are
 * put side by side and the viewer sees the difference without being told:
 * searching a name returns whatever happens to be spelled that way, resolving
 * a symbol returns one thing and what genuinely touches it.
 *
 * Nothing in the scene says that in words. Two sentences were written for this
 * passage and both were cut - the film's own argument is that a count is
 * evidence and a claim is not, so a claim printed over the evidence undoes it.
 * The two columns and their counters are the whole statement.
 *
 * The 3D graph is retired by flattening it into the right column rather than by
 * cutting away, so that column is visibly the same structure re-presented. The
 * flatten, the camera's straightening and the collapse of the cascade all live
 * in `src/three/semanticState.ts`; this file owns the split and the two
 * columns' chrome.
 *
 * See `docs/scenes/05-semantic-resolution.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values - the same literals scene 04
 * freezes. The code world never leaves, and master 0730 has to be
 * indistinguishable from 0729.
 */
const bedCamera: Camera = { x: 0, y: 0, zoom: 0.34, screenX: 960, screenY: 540 };

/**
 * Both columns are set on one grid, and that is load-bearing.
 *
 * The two side labels sit at the same size, the same colour and the same
 * baseline; the counters do too. Setting them identically is what makes the
 * asymmetry below them read as *data* rather than as design - if the right side
 * were styled as the winner, the comparison would be an argument from
 * typography instead of from counting.
 */
const grid = {
  left: 96,
  right: 1064,
  columnWidth: 760,
  counterTop: 742,
  labelTop: 208,
} as const;

export const SemanticScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getSemanticState(frame);
  const report = reportFade(frame);
  const left = leftColumn(frame);
  const right = rightColumn(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={{
          symbol: 0.062,
          signature: 0.062,
          body: 0.03,
          context: 0.026,
        }}
        symbolColor={brand.textSecondary}
        neighbours={0.022}
        bed={0.02}
        mark={0}
        select={0}
      />

      <GraphWorld state={state} />

      {/**
       * Scene 04's report, still on screen at the cut and leaving with the
       * depth. It is drawn from the same component scene 04 draws it from, so
       * the two frames either side of 0730 cannot disagree about it.
       */}
      <ImpactReport card={report} cardOffsetX={0} />

      {/**
       * The divider: one hairline, not two panels.
       *
       * A surface for each column would make the comparison a pair of cards
       * floating over the film. A rule says the same thing with a pixel, and it
       * is the same pixel the Kivgraph web uses to separate anything from
       * anything.
       */}
      <div
        style={{
          position: "absolute",
          left: 960,
          top: 0,
          width: 1,
          height: 1080,
          backgroundColor: brand.borderStrong,
          opacity: dividerOpacity(frame),
        }}
      />

      <div
        style={{
          position: "absolute",
          left: grid.left,
          top: grid.labelTop,
          width: grid.columnWidth,
          opacity: left.presence,
        }}
      >
        <NameMatchColumn
          opacity={left.label}
          rows={left.rows}
          counter={left.counter}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: grid.right,
          top: grid.labelTop,
          fontFamily: fontMono,
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "0.04em",
          whiteSpace: "pre",
          color: brand.textMuted,
          opacity: right.label,
        }}
      >
        Semantic resolution
      </div>

      {/**
       * `1 symbol` / `2 real relationships`, counted off `graphDemo.ts`.
       *
       * The storyboard printed `3 real relationships`. The fixture gives
       * `withRetry` exactly two edges that reach it, and a scene whose subject
       * is exactness cannot print a number it does not have.
       */}
      <div
        style={{
          position: "absolute",
          left: grid.right,
          top: grid.counterTop,
          fontFamily: fontMono,
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 1.6,
          whiteSpace: "pre",
          color: brand.textMuted,
          opacity: right.counter,
        }}
      >
        {`${resolution.symbols} symbol\n${resolution.relationships} real relationships`}
      </div>

    </AbsoluteFill>
  );
};
