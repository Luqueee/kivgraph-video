import React from "react";
import { answerLift, promptLayout } from "./AgentPrompt";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";

/**
 * `Answered with Kivgraph` — the line that closes scene 06 and bridges into 07.
 *
 * ## Why this is a component and not a block inside scene 06
 *
 * Because two scenes draw it, and the cut between them is a match cut. Scene 06
 * settles it as the answer's signature; scene 07 inherits it on its first frame
 * at exactly these values and retires it while the table's column heads arrive.
 * If the two scenes disagreed about position, size, colour or letter-spacing by
 * a single pixel, the match would break and the cut would read as a mistake
 * rather than as a handoff. One definition makes that impossible.
 *
 * Same reason `ImpactReport` is shared by scenes 04 and 05.
 *
 * ## What the match is for
 *
 * The word `Kivgraph` is the only thing scenes 06 and 07 have in common, and it
 * is the hinge of the argument: scene 06 says Kivgraph produced this answer,
 * scene 07 says what the answer cost. Handing the word from a signature at 17 px
 * to a column head at 18 px states that pivot without a sentence.
 *
 * It also fixes a real defect. Scene 06 is byte-identical for its last 87 frames
 * — that stillness is the only place the answer is read, so it cannot be trimmed
 * — and scene 07 used to open on a frame carrying 34% of its settled ink. A hard
 * cut between a frozen frame and an almost empty one reads as the film stalling,
 * not as a change of register. Carrying one element across means frame 1150 has
 * something in the place the eye is already looking.
 *
 * The cut stays hard. The panel, the prompt, the three answer blocks and every
 * pixel of the terminal are gone at 1150. Only the signature survives, and only
 * long enough to be replaced.
 */
/**
 * `y` resolves to `696`, and it is written as `956 + answerLift` rather than as
 * the number, so it cannot fall out of step with the layer it belongs to.
 *
 * `956` is this line's own place in scene 06's composition: the bottom row of
 * the answer block, 44 px under the path sentence, which is the gap it has
 * always had. `answerLift` is the 260 px scene 06 lifts its whole prompt layer
 * by so the block reads centred rather than fallen to the bottom of the shot.
 *
 * **Scene 06 must not apply its lift to this component on top of the constant,
 * and scene 07 must not apply anything at all.** The two scenes draw this line
 * at the same coordinates or the match cut at `1149`/`1150` stops being a match
 * - which is the entire reason the geometry lives here instead of in either
 * scene. `AgentAnswerScene` therefore renders it outside its lift wrapper.
 *
 * In scene 07 the line now sits between the last table row and the source note
 * rather than near the bottom edge. They never share a frame: the attribution
 * is gone by local 18 (`1168`) and the note does not arrive until local 116
 * (`1266`), so the still at `1190` is unaffected.
 */
export const attributionLayout = {
  x: promptLayout.row.x,
  y: 956 + answerLift,
  fontSize: 17,
} as const;

type Props = {
  /** 0 -> 1 presence. Scene 06 ramps it in; scene 07 ramps it out. */
  opacity: number;
};

export const Attribution: React.FC<Props> = ({ opacity }) => (
  <div
    style={{
      position: "absolute",
      left: attributionLayout.x,
      top: attributionLayout.y,
      fontFamily: fontMono,
      fontSize: attributionLayout.fontSize,
      letterSpacing: "0.02em",
      color: brand.textFaint,
      opacity,
    }}
  >
    Answered with Kivgraph
  </div>
);
