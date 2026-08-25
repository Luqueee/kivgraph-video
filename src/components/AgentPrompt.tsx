import React from "react";
import { Interactive } from "remotion";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * The agent prompt layer.
 *
 * Not a terminal window. The video never leaves the code environment, so the
 * agent arrives as the smallest interface that can carry a prompt: one hairline
 * rule, one prompt glyph, one line of monospace, one tool line. There is no
 * panel, no surface step, no border box and no title bar, because a floating
 * terminal card dropped over the code would break the one thing the opening is
 * built on — that all of this is one place.
 *
 * The geometry is exported because it is a contract. Scene 04 grows the graph
 * out of the `withRetry()` token in this row and scene 08 rebuilds this row
 * around the same token; all three must agree on where it is.
 */
export const promptLayout = {
  rule: { x: 440, y: 604, width: 900 },
  row: { x: 500, y: 632, fontSize: 30, lineHeight: 44 },
  tool: { x: 500, y: 712, fontSize: 20 },
} as const;

/** One advance width of JetBrains Mono, as a fraction of the font size. */
const advance = 0.6;

export const question = "What breaks if I change withRetry()?";
const head = "What breaks if I change ";
const token = "withRetry()";

/**
 * Screen rectangle of the `withRetry()` token at rest, in master pixels.
 * `grow` scales it about `growOrigin` without reflowing the line.
 */
export const tokenRect = (() => {
  const ch = promptLayout.row.fontSize * advance;
  const left = promptLayout.row.x + (2 + head.length) * ch;
  const width = token.length * ch;

  return {
    left,
    width,
    centreX: left + width / 2,
    centreY: promptLayout.row.y + promptLayout.row.lineHeight / 2,
  };
})();

/**
 * Scale of the token once the selection has settled.
 *
 * Exported because scene 03 has to reproduce the token's *apparent* size with a
 * 3D node, and a second copy of this number in the scene that animates it would
 * be a silent way to break the match cut.
 */
export const settledGrow = 1.08;

/**
 * `transformOrigin` of the grow, in master pixels.
 *
 * 55% down the line box, not 50%: the glyphs sit above the box's centre, so
 * scaling about the true centre visibly lifts the word off the baseline.
 */
export const growOrigin = {
  x: tokenRect.centreX,
  y: promptLayout.row.y + promptLayout.row.lineHeight * 0.55,
} as const;

/**
 * The token exactly as it renders at the match-cut frame `0329`: the rectangle
 * above, scaled by `settledGrow` about `growOrigin`.
 *
 * This is the rectangle scene 03's node must occupy. Verified against a render:
 * the selection field measured from frame `0329` agrees with this arithmetic to
 * within half a pixel.
 */
export const selectedTokenRect = (() => {
  const g = settledGrow;
  const top = promptLayout.row.y;
  const bottom = top + promptLayout.row.lineHeight;

  const left = growOrigin.x + (tokenRect.left - growOrigin.x) * g;
  const right = growOrigin.x + (tokenRect.left + tokenRect.width - growOrigin.x) * g;
  const y0 = growOrigin.y + (top - growOrigin.y) * g;
  const y1 = growOrigin.y + (bottom - growOrigin.y) * g;

  return {
    left,
    top: y0,
    width: right - left,
    height: y1 - y0,
    centreX: (left + right) / 2,
    centreY: (y0 + y1) / 2,
  };
})();

type Props = {
  /** Characters of `question` that have been typed. */
  chars: number;
  /** 0 -> 1 draw of the input rule. */
  rule: number;
  /** 0 -> 1 arrival of the prompt glyph. */
  glyph: number;
  /** Caret opacity. Zero after the question is committed. */
  caret: number;
  /** 0 -> 1 arrival of the tool invocation line. */
  tool: number;
  /** 0 -> 1 selection field behind `withRetry()`. */
  select: number;
  /**
   * Scale of the `withRetry()` token. It grows about its own centre, so its left
   * edge and everything before it stay put — which is what the match cut into
   * scene 04 depends on. Only the trailing `?` yields.
   */
  grow: number;
};

export const AgentPrompt: React.FC<Props> = ({
  chars,
  rule,
  glyph,
  caret,
  tool,
  select,
  grow,
}) => {
  const typed = question.slice(0, chars);
  const visibleHead = typed.slice(0, head.length);
  const visibleToken = typed.slice(head.length, head.length + token.length);
  const visibleTail = typed.slice(head.length + token.length);
  /** Room the trailing `?` gives up as the token grows past its layout box. */
  const overhang = ((grow - 1) * tokenRect.width) / 2 + select * 3;

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: promptLayout.rule.x,
          top: promptLayout.rule.y,
          width: promptLayout.rule.width,
          height: 1,
          backgroundColor: brand.borderStrong,
          opacity: rule * 0.9,
          scale: `${rule} 1`,
          transformOrigin: "0 0",
        }}
      />

      <Interactive.Div
        name="Agent prompt"
        style={{
          position: "absolute",
          left: promptLayout.row.x,
          top: promptLayout.row.y,
          fontFamily: fontMono,
          fontSize: promptLayout.row.fontSize,
          lineHeight: `${promptLayout.row.lineHeight}px`,
          whiteSpace: "pre",
          color: brand.textPrimary,
        }}
      >
        <span style={{ color: brand.textFaint, opacity: glyph }}>{"\u276f "}</span>
        <span>{visibleHead}</span>
        <span
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: overhang,
            scale: grow,
            transformOrigin: "50% 55%",
            color: select > 0 ? brand.accentText : undefined,
          }}
        >
          {select > 0 ? (
            <span
              style={{
                position: "absolute",
                left: -2,
                right: -2,
                top: -4,
                bottom: -2,
                backgroundColor: brand.selection,
                opacity: select,
              }}
            />
          ) : null}
          <span style={{ position: "relative" }}>{visibleToken}</span>
        </span>
        <span>{visibleTail}</span>
        <span
          style={{
            display: "inline-block",
            width: 3,
            height: promptLayout.row.fontSize * 1.05,
            marginLeft: 2,
            verticalAlign: "-0.16em",
            backgroundColor: brand.textMuted,
            opacity: caret,
          }}
        />
      </Interactive.Div>

      <Interactive.Div
        name="Tool invocation"
        style={{
          position: "absolute",
          left: promptLayout.tool.x,
          top: promptLayout.tool.y,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: fontMono,
          fontSize: promptLayout.tool.fontSize,
          letterSpacing: "0.02em",
          opacity: tool,
          translate: `0px ${(1 - tool) * 8}px`,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            backgroundColor: brand.accent,
          }}
        />
        <span style={{ color: brand.textSecondary }}>kivgraph</span>
        <span style={{ color: brand.textFaint }}>/</span>
        <span style={{ color: brand.textMuted }}>get_blast_radius</span>
      </Interactive.Div>
    </>
  );
};
