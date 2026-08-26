import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import {
  AgentPrompt,
  promptLayout,
  promptScrim,
  question,
  settledGrow,
} from "../components/AgentPrompt";
import { CodeWorld } from "../components/CodeWorld";
import { GraphWorld } from "../components/GraphWorld";
import {
  answerBlocks,
  bedLevels,
  getAnswerState,
  labelOpacity,
  selectSettle,
  symbolFade,
  tokenPresence,
} from "../three/answerState";
import { impactSummary } from "../data/graphDemo";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";
import type { Camera } from "../world/camera";

/**
 * Scene 06 - agent answer (master 0970-1150, scene-local 0000-0180).
 *
 * The scene that closes the loop. Scene 02 asked a question inside a coding
 * agent; everything since has been structure. This returns to the same prompt,
 * in the same place, and answers it in counted quantities.
 *
 * Four things happen and then nothing does: the last graph node travels back
 * onto the `withRetry()` token it grew out of, the token takes over from it, the
 * answer arrives in three blocks, and an attribution line settles. From local 94
 * - master 1064 - the frame is static, because scene 07 opens on a hard cut and
 * a hard cut out of a moving frame reads as an editing accident.
 *
 * The scene is 180 frames, doubled from 90, and a measurement is why. The path
 * sentence used to settle with 34 frames left: 73 characters in 0.57 s, or 129
 * characters per second, against the 25-40 that on-screen technical text can be
 * read at. It now has 100 frames, which is 44. The answer is the payload of the
 * whole film and it was the fastest thing in it.
 *
 * The answer enters in blocks and never letter by letter. Character typing would
 * read as the agent composing prose, which is a chat-product gesture; scene 02's
 * typing belongs to the human, and this output belongs to the tool. The two must
 * not share a motion vocabulary.
 *
 * Timing, the travel and the two cross-fades live in `src/three/answerState.ts`.
 * This file owns the surface and the answer's layout.
 *
 * See `docs/scenes/06-agent-answer.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at the same literals scenes 04 and 05 freeze.
 *
 * The film has kept this file underneath every graph scene, and the answer is
 * about that file, so it stays. Matching the previous scene exactly is also what
 * makes the cut at 0970 a change of context rather than a change of world.
 */
const bedCamera: Camera = { x: 0, y: 0, zoom: 0.34, screenX: 960, screenY: 540 };

/**
 * The answer's column.
 *
 * `x` is the prompt's own text column: agent output that does not share the
 * prompt's left edge stops reading as output. The four rows are placed rather
 * than flowed because each has its own type scale and the gaps between them are
 * the hierarchy - flowing them would make the gaps a consequence of line height
 * instead of a decision.
 *
 * Sizes follow the type scale in `STORYBOARD.md` §7: the counts sit at the top
 * of the body scale because they are the answer, the lead-in and the path at the
 * code scale because they frame and prove it, the attribution at the label
 * scale. The whole block ends 100 px above the frame's bottom edge.
 */
const answer = {
  x: promptLayout.row.x,
  lead: { y: 760, fontSize: 24 },
  counts: { y: 820, fontSize: 32 },
  path: { y: 890, fontSize: 22 },
  label: { y: 956, fontSize: 17 },
} as const;

/**
 * The counts, read from the dataset rather than typed.
 *
 * `04-blast-radius.md`'s impact card prints the same two numbers from the same
 * constant. If they were string literals here the video could contradict itself
 * on screen the first time the fixture changed.
 */
const counts = {
  affected: impactSummary.affected,
  repositories: impactSummary.repositories,
} as const;

/**
 * The numerals are `accentText`, not `accent`.
 *
 * Measured: `accent` #2563eb on `background` #0a0b0d is 3.83:1, which passes
 * WCAG only as large text. These two numerals are the payload of the entire
 * film and have to survive phone-sized playback, and `accentText` is already
 * the film's colour for accented type - it is what the selected token wears
 * three rows above this one.
 */
const numeral = brand.accentText;

export const AgentAnswerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getAnswerState(frame);
  const symbol = symbolFade(frame);
  const blocks = answerBlocks(frame);
  const bed = bedLevels(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={bed.main}
        symbolColor={brand.textSecondary}
        neighbours={bed.neighbours}
        bed={0.02}
        mark={0}
        select={0}
      />

      {/**
       * The prompt's surface, at full strength from the first frame. Scene 02
       * ramps it in; here it is simply the world the prompt lives on.
       */}
      <AbsoluteFill style={{ background: promptScrim }} />

      {/**
       * The travelling symbol, above the scrim.
       *
       * Order is load-bearing: under the scrim the 0.72 gradient would take
       * three quarters of the light out of the one element the cut depends on.
       * Unmounted once it has handed over, rather than left at zero opacity, so
       * the remaining sixty frames do not pay for a canvas nobody can see.
       */}
      {symbol > 0 ? (
        <AbsoluteFill style={{ opacity: symbol }}>
          <GraphWorld state={state} />
        </AbsoluteFill>
      ) : null}

      <AgentPrompt
        chars={question.length}
        rule={1}
        glyph={1}
        caret={0}
        tool={1}
        select={selectSettle(frame)}
        grow={settledGrow}
        tokenOpacity={tokenPresence(frame)}
      />

      <div
        style={{
          position: "absolute",
          left: answer.x,
          top: answer.lead.y,
          fontFamily: fontMono,
          fontSize: answer.lead.fontSize,
          color: brand.textSecondary,
          whiteSpace: "pre",
          opacity: blocks.lead.opacity,
          translate: `0px ${blocks.lead.offsetY}px`,
        }}
      >
        {"Changing "}
        <span style={{ color: brand.textPrimary }}>withRetry()</span>
        {" affects:"}
      </div>

      {/**
       * The answer itself, and the only line in the scene at the body scale.
       *
       * One line rather than the storyboard's two: at 32 px mono the sentence is
       * 576 px wide, so the break was a wrap point that is no longer needed, and
       * one line makes the two quantities read as one fact - which is what they
       * are.
       */}
      <div
        style={{
          position: "absolute",
          left: answer.x,
          top: answer.counts.y,
          fontFamily: fontMono,
          fontSize: answer.counts.fontSize,
          fontWeight: 500,
          color: brand.textSecondary,
          whiteSpace: "pre",
          opacity: blocks.counts.opacity,
          translate: `0px ${blocks.counts.offsetY}px`,
        }}
      >
        <span style={{ color: numeral }}>{counts.affected}</span>
        {" symbols across "}
        <span style={{ color: numeral }}>{counts.repositories}</span>
        {" repositories."}
      </div>

      {/**
       * The proof. `payments-api/paymentService` is the one package the impact
       * could cross the repository boundary through - `withRetry()` lives in
       * `payments-api/internal/retry`, which Go's `internal/` rule forbids
       * `checkout-service` from importing - so this names the path rather than
       * restating the graph.
       */}
      <div
        style={{
          position: "absolute",
          left: answer.x,
          top: answer.path.y,
          fontFamily: fontMono,
          fontSize: answer.path.fontSize,
          color: brand.textSecondary,
          whiteSpace: "pre",
          opacity: blocks.path.opacity,
          translate: `0px ${blocks.path.offsetY}px`,
        }}
      >
        <span style={{ color: brand.textPrimary }}>checkout-service</span>
        {" consumes the symbol through "}
        <span style={{ color: brand.textPrimary }}>
          payments-api/paymentService
        </span>
        {"."}
      </div>

      <div
        style={{
          position: "absolute",
          left: answer.x,
          top: answer.label.y,
          fontFamily: fontMono,
          fontSize: answer.label.fontSize,
          letterSpacing: "0.02em",
          color: brand.textFaint,
          opacity: labelOpacity(frame),
        }}
      >
        Answered with Kivgraph
      </div>
    </AbsoluteFill>
  );
};
