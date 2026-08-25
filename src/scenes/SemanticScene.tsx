import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld } from "../components/CodeWorld";
import { NameMatchColumn } from "../components/NameMatchColumn";
import {
  copyOpacity,
  dividerOpacity,
  getSemanticState,
  leftColumn,
  reportFade,
  resolution,
  rightColumn,
  veilOpacity,
} from "../three/semanticState";
import { ImpactReport } from "../components/ImpactReport";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";
import { fontMono, fontSans } from "../brand/fonts";

/**
 * Scene 06 - semantic resolution (master 0840-0990, scene-local 0000-0150).
 *
 * The scene that makes everything before it credible. Scene 05 asserted
 * `Exact symbols. Not name matches.`; an assertion is not evidence, and without
 * this scene the blast radius could plausibly be a fancy text search. Here the
 * two mechanisms are put side by side and the viewer sees the difference without
 * being told: searching a name returns whatever happens to be spelled that way,
 * resolving a symbol returns one thing and what genuinely touches it.
 *
 * The 3D graph is retired by flattening it into the right column rather than by
 * cutting away, so that column is visibly the same structure re-presented. The
 * flatten, the camera's straightening and the collapse of the cascade all live
 * in `src/three/semanticState.ts`; this file owns the split, the two columns'
 * chrome and the sentence.
 *
 * See `docs/scenes/06-semantic-resolution.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values - the same literals scenes 04
 * and 05 freeze. The code world never leaves, and master 0840 has to be
 * indistinguishable from 0839.
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

/** The band reserved for the sentence, kept clear from the first frame. */
const copyTop = 906;

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

      <AbsoluteFill
        style={{
          backgroundColor: brand.background,
          opacity: veilOpacity(frame),
        }}
      />

      {/**
       * Scene 05's report, still on screen at the cut and leaving with the
       * depth. It is drawn from the same component scene 05 draws it from, so
       * the two frames either side of 0840 cannot disagree about it.
       */}
      <ImpactReport card={report} cardOffsetX={0} claim={report} />

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
          opacity: left.dim,
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

      {/**
       * `A name is not a symbol.` - the video's secondary brand message, and the
       * conclusion drawn from both columns, so it belongs to neither: centred
       * across the whole frame, over the divider.
       *
       * Geist sans, because the project rule is that graph-attached text is
       * monospace and a sentence addressed to the viewer is not. It is read on a
       * veil, which is the rule for every such sentence in the film.
       */}
      <AbsoluteFill
        style={{
          top: copyTop,
          height: 120,
          alignItems: "center",
          justifyContent: "flex-start",
          fontFamily: fontSans,
          fontSize: 78,
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          whiteSpace: "pre",
          color: brand.textPrimary,
          opacity: copyOpacity(frame),
        }}
      >
        A name is not a symbol.
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
