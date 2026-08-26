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
/**
 * The scrim the prompt layer is read on.
 *
 * A vertical gradient, transparent through the top quarter so the code above
 * keeps its texture, reaching 0.72 at the bottom so the prompt row and anything
 * below it sit on near-background. Exported because scene 06 restores the same
 * surface: two copies of this gradient would drift the first time either is
 * touched, and the prompt would then be read on two different backgrounds in
 * one film.
 */
/**
 * Stops of the vertical falloff, as `[percent of frame height, alpha]`.
 *
 * It stops at `0.72` rather than `1` on purpose - the code stays faintly present
 * under the prompt, because the video never leaves it.
 */
const scrimStops = [
  [0, 0],
  [28, 0],
  [47, 0.44],
  [63, 0.66],
  [100, 0.72],
] as const;

/**
 * The falloff, built for a prompt layer sitting `lift` pixels above where
 * `promptLayout` puts it.
 *
 * A builder rather than two constants, because the gradient has to follow the
 * layer it exists to serve. Scene 02 keeps the prompt in the lower half and uses
 * `promptScrim`; scene 06 lifts the whole layer 260 px to recentre it, and a
 * falloff left behind would put the answer's brightest line over the part of the
 * code bed that still has light in it - which is exactly the competition
 * `02-agent.md` says the falloff exists to prevent. Two hand-written gradients
 * would drift the first time either was touched.
 *
 * The tail is pinned at `0.72` past the last stop so lifting the ramp never
 * uncovers the bottom of the frame.
 */
export const promptScrimLifted = (lift: number) => {
  const shift = (-lift / 1080) * 100;
  const stops = scrimStops.map(
    ([at, alpha]) =>
      `rgba(${brand.backgroundRgb}, ${alpha}) ${Math.max(0, at - shift).toFixed(2)}%`,
  );

  return `linear-gradient(180deg, ${stops.join(", ")}, rgba(${brand.backgroundRgb}, ${scrimStops[scrimStops.length - 1][1]}) 100%)`;
};

export const promptScrim = promptScrimLifted(0);

/**
 * How far scene 06 lifts the whole prompt layer, in master pixels.
 *
 * It lives here, beside `promptLayout`, because four things have to agree about
 * it and none of them can own it: the scene's DOM wrapper, the falloff that has
 * to follow the layer, `Attribution`'s shared `y` - which scene 07 also reads -
 * and the camera pose that lands the travelling symbol on the token slot.
 *
 * Why the lift exists at all: `promptLayout` puts the prompt in the lower half,
 * which is right for scene 02, where it is a prompt *under* the code it is about
 * and where the camera opens to `0.66` specifically to clear that half for it. By
 * `0970` the code bed is down at `0.02` and the answer is the whole frame, so the
 * same position stops reading as a prompt under code and starts reading as a
 * block that has slid off the bottom. Measured on the settled frame `1064`, the
 * content ran `604` to `976`: centre `790` against the frame's `540`.
 *
 * `-287` puts it at `317` to `748`, centre `532` - slightly above geometric
 * centre, the same correction `BenchmarkScene` makes, because a block of type
 * centred geometrically reads low. It was `-260` until the answer was enlarged
 * for small-player legibility: the block grew 59 px downward, so the lift grew
 * with it. Re-measure it whenever the block's type scale changes; it is not a
 * constant of the layout, it is the answer to a measurement. Horizontally nothing moves and that was
 * measured too: the content spans `440` to `1458`, so its centre is already
 * `949`.
 *
 * **`promptLayout` itself must not absorb this.** It is marked *not flexible* in
 * `02-agent.md` because scenes 03 and 07 depend on it, and the dependency is
 * real rather than nominal: `graphFrame.ts` derives `graphOffset` - the world
 * position of the whole graph for scenes 03 to 06 - from `selectedTokenRect`.
 * Folding the lift in would carry the graph, the camera path and the key stills
 * `0629`, `0718` and `0864` with it.
 */
export const answerLift = -287;

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
  const right =
    growOrigin.x + (tokenRect.left + tokenRect.width - growOrigin.x) * g;
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
   * scene 03 depends on. Only the trailing `?` yields.
   */
  grow: number;
  /**
   * 0 -> 1 presence of the token's glyphs and its selection field.
   *
   * Scene 06 needs the row complete while the symbol is still travelling back
   * to it; without this the word would be on screen twice for twenty frames.
   * The span keeps its layout box at `0`, so the trailing `?` never moves and
   * the line does not reflow when the token arrives.
   */
  tokenOpacity: number;
};

export const AgentPrompt: React.FC<Props> = ({
  chars,
  rule,
  glyph,
  caret,
  tool,
  select,
  grow,
  tokenOpacity,
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
        <span style={{ color: brand.textFaint, opacity: glyph }}>
          {"\u276f "}
        </span>
        <span>{visibleHead}</span>
        <span
          style={{
            position: "relative",
            display: "inline-block",
            marginRight: overhang,
            scale: grow,
            transformOrigin: "50% 55%",
            color: select > 0 ? brand.accentText : undefined,
            opacity: tokenOpacity,
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
