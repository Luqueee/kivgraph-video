import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { symbolAnchor, symbolFile, symbolOpeningZoom } from "./SymbolScene";
import { world } from "../components/CodeWorld";
import { nodeById } from "../data/graphDemo";
import { fontMono, fontSans } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * Scene 00 - intent (master 0000-0300, scene-local 0000-0300).
 *
 * The scene that stops the film assuming its own answer. Everything after it
 * opens on `withRetry` already singled out, which quietly claims the agent knew
 * what the symbol was called. It usually does not.
 *
 * ## One idea, three beats
 *
 * The idea is *describe what the code does; Kivgraph finds where to start*, and
 * the scene is built so that idea arrives before any mechanics do.
 *
 * The first build did the opposite. It showed three candidates of equal weight,
 * each with a repository, a package and a `match` value, and asked the viewer to
 * infer the tool's purpose from a ranking they had to parse first. Technically
 * accurate and unreadable at a glance.
 *
 * So: **problem**, then **tool**, then **result**, and the result has one
 * dominant thing in it rather than three equal ones.
 *
 * ## The distinction this scene must not blur
 *
 * `find_by_intent` matches text, not edges, and its own documentation is blunt:
 *
 * > `match` is `lexical` when the candidate matched text alone, and
 * > `lexical+calls` when it was also credited for the terms its callees carry.
 * > Neither is an edge this tool resolved. A row here is a *candidate* [...]:
 * > plausible and not proven.
 *
 * That survives the simplification rather than being traded for it. The word
 * `candidate` is now *on screen*, next to `lexical+calls`, which says it more
 * plainly than three rows of metadata did. And there is still **no score**,
 * because the tool publishes none:
 *
 * > No score travels [...] publishing it would invite a reader to treat it as a
 * > confidence this layer cannot claim.
 *
 * `Policy.Do()` and `Once()` stay visible at low contrast so the frame is honest
 * about there having been several plausible candidates. They are never marked
 * wrong, and nothing implies `withRetry` scored higher by some number.
 *
 * ## Why 220 frames and not 180
 *
 * The three beats were built at 180 first, which is what "under three seconds"
 * asks for, and measured against the film's own reading budget of 25-40
 * characters per second. Three of the five blocks failed it: the intent at 52,
 * the tool and its subtitle at 101, and the path and match at 1860 - the last
 * settling two frames before everything began to leave.
 *
 * The structure was the fix for *hard to parse*; it cannot also be the fix for
 * *not on screen long enough*. At 220 every block a viewer has to read to
 * completion is inside the budget, and the path and the match line are the only
 * things left above it - which is correct, because they are scanned rather than
 * read, and the name they belong to survives the cut and is the anchor of the
 * whole next scene.
 */

/**
 * Every window in the scene, in scene-local frames, in one place.
 *
 * The scene is 300 frames because it is the only scene in the film that has to
 * introduce a tool, a vocabulary and a result to a viewer holding none of them,
 * and reading time is the only thing that buys that. The table in
 * `00-intent.md` is the justification: each block's characters against the
 * 25-40 per second the rest of the film is timed by, with the identifiers
 * allowed to sit above it because a path is scanned rather than read.
 */
const beat = {
  problem: [8, 44],
  problemPitch: 10,
  describe: [68, 98],
  intent: [76, 114],
  tool: [130, 154],
  result: [160, 192],
  ghosts: [168, 200],
  ghostPitch: 10,
  parens: [248, 272],
  leave: [252, 282],
  open: [258, 294],
} as const;

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

const entry = (frame: number, from: number, to: number) => {
  const progress = ramp(frame, from, to);

  return { opacity: progress, offsetY: 8 * (1 - progress) };
};

/** Beat 1. The problem, addressed to the viewer, so it is sans. */
const problem = [
  "You know what the code does.",
  "Not where it lives.",
] as const;

/**
 * What the quoted line below it is, so it cannot be mistaken for a question.
 *
 * Named `describeLine` and not `describe`: the bare name is a test-runner global
 * in this toolchain and TypeScript resolves it silently to that instead of
 * failing, which is the kind of error that compiles.
 */
const describeLine = "So you describe it:";

/**
 * Beat 1. The question, verbatim from the tool's own documented example.
 *
 * Not a variant written for the film. Its documented top result is `withRetry`,
 * which is what makes this video demonstrable against the product rather than
 * merely plausible.
 */
export const intent = "retry a failed request with exponential backoff";

/**
 * Beat 2. What the tool is called and, in plain language, what it does.
 *
 * The subtitle is the whole point of the restructure: the viewer should not have
 * to understand ranking to understand purpose. It is an explanation, not a
 * headline - sans, at the label scale, under the invocation rather than over it.
 *
 * *Tells your agent where to read* rather than *Finds likely code entry points*.
 * All three drafts were accurate; the documentation's register is the one a
 * viewer has to already hold, because "entry point" is a term rather than a
 * thing. This one names who benefits, which is the film's subject, and it says
 * *where to read* - a discovery claim, never a claim about what depends on what.
 */
const tool = { name: "find_by_intent", does: "Tells your agent where to read" };

/**
 * Beat 3. The selected candidate and the two it was selected from.
 *
 * All three are derived from `graphDemo.ts` rather than typed, under the rule
 * that file carries: *«a video selling exactness cannot illustrate it with a
 * fabricated fixture»*. The path is `symbolFile`, exported from `SymbolScene` -
 * the same string that scene 01 prints as its caption, so the film cannot offer
 * one file and then open another.
 */
const selected = nodeById("payments.withRetry");
const alsoFound = ["payments.policyDo", "payments.once"].map(
  (id) => nodeById(id).label,
);

/**
 * Where the selected candidate's name has to end up, derived from
 * `SymbolScene`: `world.retry` owns the type scale and the fact that the token
 * is nine characters, `symbolAnchor` is the point the source symbol is pinned to
 * and `symbolOpeningZoom` is the zoom frame 0 opens on.
 */
const target = {
  em: world.retry.fontSize * symbolOpeningZoom,
  glyphs: world.retry.origin.width,
};

/** The size the name arrives at, before it becomes the source symbol. */
const nameSize = 44;

/**
 * Sub-pixel corrections between a DOM line box and the code plane's baseline,
 * measured with the ink centroid rather than with a bounding box.
 *
 * A bounding box rounds, so two glyphs a pixel apart can share one: it agreed to
 * the pixel while the seam still measured 234 levels of difference. The centroid
 * is sub-pixel and found the real error. With both applied the offset is
 * `dx +0.03, dy -0.01` and the ink mass ratio is `1.0005`, which is the proof
 * that the size and weight were always right and only the placement was not.
 */
const targetTopBias = 1.51;
const targetLeftBias = -0.2;

/** The column the whole film shares: `promptLayout.row.x`. */
const columnX = 500;

export const IntentScene: React.FC = () => {
  const frame = useCurrentFrame();

  const describeIn = entry(frame, beat.describe[0], beat.describe[1]);
  const intentIn = entry(frame, beat.intent[0], beat.intent[1]);
  const toolIn = entry(frame, beat.tool[0], beat.tool[1]);
  const resultIn = entry(frame, beat.result[0], beat.result[1]);

  /**
   * Everything that is not the selected name leaves, so the frame handed to the
   * match cut holds the symbol and nothing else.
   *
   * The first build floored the other candidates at `0.182` to say *receded, not
   * deleted*, and it was wrong twice: the name grows over where they sit, so
   * they read through it as ghost type, and a cut into a frame with three names
   * in it is a cut into a different image. Receding is what they do while they
   * are on screen; being absent at the cut is not a verdict on them.
   */
  const context = 1 - ramp(frame, beat.leave[0], beat.leave[1]);

  /**
   * The name becoming the source symbol.
   *
   * It only **scales**. Placing it so that the nine glyphs of `withRetry` are
   * already centred on `symbolAnchor` at 44 px means the cut is a pure zoom into
   * the candidate rather than a slide plus a zoom - which is also the clearest
   * possible reading of *we enter that source code*.
   */
  const open = ramp(frame, beat.open[0], beat.open[1]);
  const size = nameSize + (target.em - nameSize) * open;
  const width = target.glyphs * 0.6 * size;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/** Beat 1 - the problem. */}
      {problem.map((line, index) => {
        const arrive = entry(
          frame,
          beat.problem[0] + index * beat.problemPitch,
          beat.problem[1] + index * beat.problemPitch,
        );

        return (
          <div
            key={line}
            style={{
              position: "absolute",
              left: columnX,
              top: 250 + index * 48,
              fontFamily: fontSans,
              fontSize: 34,
              lineHeight: 1,
              whiteSpace: "pre",
              color: index === 0 ? brand.textMuted : brand.textPrimary,
              opacity: arrive.opacity * context,
              translate: `0px ${arrive.offsetY}px`,
            }}
          >
            {line}
          </div>
        );
      })}

      {/**
       * Beat 1 - the behaviour, described.
       *
       * **No `❯`.** The prompt glyph promises a command or a question typed at a
       * shell, and this is neither: it is a description of what some code does, which
       * is exactly what the tool's `intent` argument takes. The glyph was continuity
       * with scene 02's question and it was continuity bought at the cost of the one
       * thing the scene has to make obvious - that you say what the code *does*, not
       * what it is called. Beat 1's two lines above it do the framing instead.
       */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: 366,
          fontFamily: fontSans,
          fontSize: 20,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: describeIn.opacity * context,
          translate: `0px ${describeIn.offsetY}px`,
        }}
      >
        {describeLine}
      </div>

      <div
        style={{
          position: "absolute",
          left: columnX,
          top: 408,
          fontFamily: fontMono,
          fontSize: 30,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textSecondary,
          opacity: intentIn.opacity * context,
          translate: `0px ${intentIn.offsetY}px`,
        }}
      >
        {`"${intent}"`}
      </div>

      {/** Beat 2 - the tool, and what it does. */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: 478,
          fontFamily: fontMono,
          fontSize: 20,
          lineHeight: 1,
          letterSpacing: "0.02em",
          whiteSpace: "pre",
          color: brand.textMuted,
          opacity: toolIn.opacity * context,
          translate: `0px ${toolIn.offsetY}px`,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            marginRight: 14,
            marginBottom: 2,
            backgroundColor: brand.accent,
          }}
        />
        {tool.name}
      </div>

      <div
        style={{
          position: "absolute",
          left: columnX + 22,
          top: 512,
          fontFamily: fontSans,
          fontSize: 18,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: toolIn.opacity * context,
          translate: `0px ${toolIn.offsetY}px`,
        }}
      >
        {tool.does}
      </div>

      {/**
       * Beat 3 - the two candidates that were also found.
       *
       * Present, so the frame is honest that there was more than one plausible
       * answer, and quiet, so they never compete with the one being opened. No
       * cross, no tick, no strike-through: they are not wrong, they are simply
       * not the one being inspected.
       */}
      {alsoFound.map((label, index) => (
        <div
          key={label}
          style={{
            position: "absolute",
            left: columnX,
            top: 782 + index * 40,
            fontFamily: fontMono,
            fontSize: 22,
            lineHeight: 1,
            whiteSpace: "pre",
            color: brand.textFaint,
            opacity:
              entry(
                frame,
                beat.ghosts[0] + index * beat.ghostPitch,
                beat.ghosts[1] + index * beat.ghostPitch,
              ).opacity *
              context *
              0.45,
          }}
        >
          {label}
        </div>
      ))}

      {/**
       * Beat 3 - the selected candidate.
       *
       * The parentheses are a separate span and leave before the cut. The tool
       * returns an unparenthesised `qualified_name`; the film parenthesises a
       * symbol per `STORYBOARD.md` typography, and the source it cuts into
       * writes `func withRetry(ctx ...`, where the bracket belongs to the code
       * and not to the symbol. So they are right here and wrong one frame later,
       * and the nine glyphs that cross the cut are exactly the nine of
       * `world.retry.origin`.
       */}
      <div
        style={{
          position: "absolute",
          left: symbolAnchor.x - width / 2 + targetLeftBias * open,
          top: symbolAnchor.y - size / 2 + targetTopBias * open,
          fontFamily: fontMono,
          fontSize: size,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textPrimary,
          opacity: resultIn.opacity,
        }}
      >
        {selected.label.replace("()", "")}
        <span
          style={{ opacity: 1 - ramp(frame, beat.parens[0], beat.parens[1]) }}
        >
          ()
        </span>
      </div>

      {/** Beat 3 - where it lives, which is the caption scene 01 will print. */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: 706,
          fontFamily: fontMono,
          fontSize: 20,
          lineHeight: 1,
          whiteSpace: "pre",
          color: brand.textMuted,
          opacity: resultIn.opacity * context,
          translate: `0px ${resultIn.offsetY}px`,
        }}
      >
        {symbolFile}
      </div>

      {/**
       * Beat 3 - the authority marker, and the only mechanics on screen.
       *
       * `candidate` says in one word what three rows of ranking could not, and
       * `lexical+calls` is the product's own vocabulary for *why this row
       * appeared*. Never a score, never a bar, never a colour.
       */}
      <div
        style={{
          position: "absolute",
          left: columnX,
          top: 742,
          fontFamily: fontMono,
          fontSize: 16,
          lineHeight: 1,
          letterSpacing: "0.02em",
          whiteSpace: "pre",
          color: brand.textFaint,
          opacity: resultIn.opacity * context,
          translate: `0px ${resultIn.offsetY}px`,
        }}
      >
        candidate <span style={{ color: brand.border }}>·</span>{" "}
        {"lexical+calls"}
      </div>
    </AbsoluteFill>
  );
};
