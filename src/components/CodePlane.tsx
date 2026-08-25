import React from "react";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";
import { project, type Camera } from "../world/camera";

/**
 * Visual weight of a piece of code, not its syntax. The Kivgraph web has no
 * syntax theme of its own, so a plane is one hue and the hierarchy is carried
 * entirely by luminance: the reader's eye is directed, not decorated.
 */
export type CodeRole = "symbol" | "signature" | "body" | "context";

export type CodeToken = {
  text: string;
  role: CodeRole;
};

export type CodeLine = CodeToken[];

/**
 * px the mark sits below the text baseline area. Enough to read as a layer over
 * the code rather than as a typographic underline, and no more.
 */
const markLift = 2;

type Props = {
  lines: CodeLine[];
  fontSize: number;
  lineHeight: number;
  /** World position of this plane's anchor point. */
  world: { x: number; y: number };
  /** Where the anchor lives inside the code, in lines and characters. */
  origin: { line: number; col: number; width: number };
  /** 1 is the camera plane; below 1 is behind, and moves and scales less. */
  depth: number;
  camera: Camera;
  /** Opacity per role. The scene owns these ramps. */
  opacity: Record<CodeRole, number>;
  /** Colour of the `symbol` role. Defaults to the neutral code hue. */
  symbolColor?: string;
  blur?: number;
  /**
   * 0 -> 1 reveal of the semantic underline under the anchored symbol. It is
   * exactly as wide as the symbol and never extends past it: the mark says
   * "this is selected", not "this points somewhere".
   */
  mark?: number;
  /** 0 -> 1 selection field behind the anchored symbol. */
  select?: number;
};

/**
 * A plane of code inside the video's spatial system.
 *
 * The plane is pinned by one point — its anchor — whose screen position and
 * apparent scale are computed by the shared camera, never by the scene. That is
 * what lets one symbol survive as the narrative anchor across scenes instead of
 * being a card that grows and shrinks, and what makes the surrounding files move
 * like they belong to the same world.
 *
 * Horizontal offsets are expressed in `ch`, which in a monospace face equals one
 * advance width exactly, so the anchor needs no text measurement and stays
 * correct at any font size.
 */
export const CodePlane: React.FC<Props> = ({
  lines,
  fontSize,
  lineHeight,
  world,
  origin,
  depth,
  camera,
  opacity,
  symbolColor,
  blur = 0,
  mark = 0,
  select = 0,
}) => {
  const placement = project(camera, world.x, world.y, depth);
  const originCh = origin.col + origin.width / 2;
  const originY = origin.line * lineHeight + lineHeight / 2;
  const markY = origin.line * lineHeight + lineHeight * 0.95 + markLift;

  return (
    <div
      style={{
        position: "absolute",
        left: `calc(${placement.x}px - ${originCh}ch)`,
        top: placement.y - originY,
        fontFamily: fontMono,
        fontSize,
        lineHeight: `${lineHeight}px`,
        whiteSpace: "pre",
        color: brand.textSecondary,
        scale: placement.scale,
        transformOrigin: `${originCh}ch ${originY}px`,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
    >
      {select > 0 ? (
        <div
          style={{
            position: "absolute",
            left: `${origin.col}ch`,
            top: origin.line * lineHeight + lineHeight * 0.14,
            width: `${origin.width}ch`,
            height: lineHeight * 0.74,
            backgroundColor: brand.selection,
            opacity: select,
          }}
        />
      ) : null}

      <div style={{ position: "relative" }}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} style={{ height: lineHeight }}>
            {line.map((token, tokenIndex) => (
              <span
                key={tokenIndex}
                style={{
                  color: token.role === "symbol" ? symbolColor : undefined,
                  opacity: opacity[token.role],
                }}
              >
                {token.text}
              </span>
            ))}
          </div>
        ))}
      </div>

      {mark > 0 ? (
        <div
          style={{
            position: "absolute",
            left: `${origin.col}ch`,
            top: markY,
            height: 1,
            width: `${origin.width * Math.min(1, mark)}ch`,
            backgroundColor: brand.accentText,
            opacity: mark * 0.72,
          }}
        />
      ) : null}
    </div>
  );
};
