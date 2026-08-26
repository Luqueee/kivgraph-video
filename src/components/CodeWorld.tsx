import React from "react";
import { CodePlane, type CodeRole } from "./CodePlane";
import { backoffGo, clientGo, policyGo, retryGo } from "../code/payments";
import { brand } from "../brand/tokens";
import type { Camera } from "../world/camera";

/**
 * The code environment scenes 01–03 share.
 *
 * There is exactly one spatial layout for the whole opening of the video and it
 * lives here, in world coordinates. Scenes move the camera and change luminance;
 * they never place a plane. Without that rule the three scenes drift apart and
 * the opening stops reading as one continuous shot.
 *
 * The layout is columnar, because a Go file is tall and narrow and because a
 * codebase read spatially *is* columns:
 *
 * ```text
 *   backoff.go        retry.go            policy.go
 *   (package          (the anchor,        (package sibling,
 *    sibling)          withRetry)          calls withRetry)
 *
 *                  client.go, blurred, behind everything
 * ```
 *
 * The three columns are all at `depth 1`. That is deliberate: planes behind the
 * camera plane converge toward the camera as it pulls back, so a lateral
 * neighbour that must *separate* when the camera widens has to share the camera
 * plane. Only the bed, which is meant to converge and smear, sits behind.
 *
 * The `withRetry` anchor is world origin `(0, 0)`, so a camera targeting `(0, 0)`
 * pins the symbol by construction.
 */

/** World placement of every plane. The single source of spatial truth. */
export const world = {
  retry: {
    position: { x: 0, y: 0 },
    depth: 1,
    fontSize: 38,
    lineHeight: 60,
    /** `withRetry`: line 12, column 5, nine characters. */
    origin: { line: 12, col: 5, width: 9 },
  },
  backoff: {
    position: { x: -1320, y: -690 },
    depth: 1,
    fontSize: 30,
    lineHeight: 48,
  },
  policy: {
    position: { x: 1330, y: -240 },
    depth: 1,
    fontSize: 32,
    lineHeight: 52,
  },
  bed: {
    position: { x: 760, y: 180 },
    depth: 0.62,
    fontSize: 34,
    lineHeight: 54,
  },
} as const;

/** Anchor of a plane that has no symbol in it: its own top-left corner. */
const corner = { line: 0, col: 0, width: 0 };

/**
 * The luminance the code plane settles to once the graph has materialised over
 * it, and the single definition of it.
 *
 * There were three copies: scene 03's `fall()` destinations, scene 04's
 * hardcoded `main`, and `answerState.ts`'s `bedFrom`. They agreed by hand and
 * stopped agreeing the moment one was tuned - scene 04 was still holding scene
 * 03's *previous* values, so the code read brighter under the impact card than
 * under the graph the card describes.
 *
 * The values came down on 2026-08-26 because the code bed and the graph shared
 * too much of the same luminance range: measured on frame 0629, the far plates
 * and the code behind them were within a few levels of each other, and at the
 * 600-900 px this film is embedded at they merged. The code never disappears -
 * `STORYBOARD.md` keeps it faintly present because the video never leaves it -
 * but it is now clearly the bottom of the ladder rather than a competitor.
 *
 * `symbol` and `signature` stay the brightest code in the frame: that is the
 * `withRetry` line the whole film is about, and it is the one part of the bed
 * that is still saying something.
 */
export const settledBed = {
  symbol: 0.038,
  signature: 0.038,
  body: 0.017,
  context: 0.014,
  neighbours: 0.012,
  bed: 0.011,
} as const;

type Props = {
  camera: Camera;
  /** Luminance ladder of the anchored file. */
  main: Record<CodeRole, number>;
  /** Colour of the anchored symbol. */
  symbolColor: string;
  /**
   * Luminance of the two neighbouring package files. 0 skips them entirely,
   * which is how scene 01 keeps a single focal point.
   */
  neighbours: number;
  /** Luminance of the blurred depth bed. */
  bed: number;
  /** 0 -> 1 reveal of the semantic underline under the anchored symbol. */
  mark?: number;
  /** Selection field behind the anchored symbol. */
  select?: number;
};

/**
 * A neighbouring file is one hue at one weight, except for the recurring
 * `withRetry` tokens, which sit one step brighter. That step is what makes "the
 * name is already elsewhere" legible without spending accent on it.
 */
const neighbourLadder = (level: number): Record<CodeRole, number> => ({
  context: level,
  body: level,
  signature: Math.min(1, level * 1.7),
  symbol: Math.min(1, level * 1.7),
});

export const CodeWorld: React.FC<Props> = ({
  camera,
  main,
  symbolColor,
  neighbours,
  bed,
  mark,
  select = 0,
}) => {
  const neighbourOpacity = neighbourLadder(neighbours);

  return (
    <>
      {bed > 0.002 ? (
        <CodePlane
          lines={clientGo}
          fontSize={world.bed.fontSize}
          lineHeight={world.bed.lineHeight}
          world={world.bed.position}
          origin={corner}
          depth={world.bed.depth}
          camera={camera}
          blur={4}
          opacity={{ symbol: bed, signature: bed, body: bed, context: bed }}
          symbolColor={brand.textSecondary}
        />
      ) : null}

      {neighbours > 0.002 ? (
        <>
          <CodePlane
            lines={backoffGo}
            fontSize={world.backoff.fontSize}
            lineHeight={world.backoff.lineHeight}
            world={world.backoff.position}
            origin={corner}
            depth={world.backoff.depth}
            camera={camera}
            opacity={neighbourOpacity}
          />
          <CodePlane
            lines={policyGo}
            fontSize={world.policy.fontSize}
            lineHeight={world.policy.lineHeight}
            world={world.policy.position}
            origin={corner}
            depth={world.policy.depth}
            camera={camera}
            opacity={neighbourOpacity}
          />
        </>
      ) : null}

      <CodePlane
        lines={retryGo}
        fontSize={world.retry.fontSize}
        lineHeight={world.retry.lineHeight}
        world={world.retry.position}
        origin={world.retry.origin}
        depth={world.retry.depth}
        camera={camera}
        opacity={main}
        symbolColor={symbolColor}
        mark={mark}
        select={select}
      />
    </>
  );
};
