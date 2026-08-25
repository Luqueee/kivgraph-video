import React from "react";
import { Sequence } from "remotion";
import { AgentAnswerScene } from "./scenes/AgentAnswerScene";
import { AgentScene } from "./scenes/AgentScene";
import { BlastRadiusScene } from "./scenes/BlastRadiusScene";
import { GraphRevealScene } from "./scenes/GraphRevealScene";
import { SemanticScene } from "./scenes/SemanticScene";
import { SymbolScene } from "./scenes/SymbolScene";

/**
 * The 23.5 s master. This file is the only place that holds global frame
 * boundaries; scenes animate in their own local frame space, because
 * `useCurrentFrame()` inside a `<Sequence>` starts at 0.
 *
 * `from` and `durationInFrames` stay inline literals so the sequences remain
 * trimmable in Remotion Studio.
 *
 * Planned timeline (STORYBOARD.md 26, docs/scenes/README.md):
 *   0000-0120 Symbol         0120-0330 Agent         0330-0630 Graph Reveal
 *   0630-0730 Blast Radius   0730-0910 Semantic      0910-1000 Agent Answer
 *   1000-1120 Benchmark      1120-1210 Brand         1210-1330 Outro
 *
 * The master is 1330 frames, and three retimes got it there from 1410. The
 * cross-repository scene was deleted: it spent ninety frames turning the camera
 * around a structure that had already been read, which did not communicate, and
 * its one other beat suppressed exactly the two hop-1 nodes the next scene
 * immediately lights again. Then the blast radius lost twenty frames, because
 * removing its claim line left the last thirty-five of its frames
 * pixel-identical. Then the semantic resolution gained thirty, because its
 * comparison was being taken off screen twenty-seven frames after it finished
 * building and nobody can read two columns in twenty-seven frames.
 *
 * So: everything after 0630 moved ninety frames earlier, everything after 0730
 * another twenty, and everything after 0910 thirty later.
 *
 * Scenes 01 and 02 are one continuous camera move through one code environment
 * and have no cut between them; the boundary at 0120 is where the camera changes
 * intent, not where the image changes. The first cut in the video is the match
 * cut at 0330.
 *
 * Only the scenes that exist are mounted; the rest of the master is still
 * black on purpose.
 */
/**
 * Frames of the master that are actually mounted.
 *
 * The finished piece is 1330 frames (22.2 s), and that is the number every
 * document plans against. Until the remaining scenes exist, the composition is
 * registered at this length instead, so Studio and `remotion render` produce the
 * film that exists rather than sixteen and a half seconds of video followed by
 * five and a half of black. Raise it as each scene lands; delete it once it
 * reaches 1330.
 */
export const mountedFrames = 1000;

export const KivgraphVideo: React.FC = () => {
  return (
    <>
      <Sequence name="01 Symbol" durationInFrames={120}>
        <SymbolScene />
      </Sequence>
      <Sequence name="02 Agent" from={120} durationInFrames={210}>
        <AgentScene />
      </Sequence>
      {/**
       * `premountFor` on both graph scenes, and it is a preview fix, not a
       * creative one.
       *
       * A `<Sequence>` renders its children only inside its range, so at the
       * 0630 boundary `GraphRevealScene` unmounts and `BlastRadiusScene` mounts.
       * Sharing the `GraphWorld` component does not share its instance: the
       * `ThreeCanvas` is destroyed and a new WebGL context is created at the
       * seam. Measured in Studio by counting `getContext` calls while stepping
       * 0629 <-> 0632: four crossings, four new `webgl2` contexts. For the
       * first displayed frame after the cut the labels are painted and the
       * plates and tubes are not - the graph blinks at the one seam the design
       * spends everything to hide.
       *
       * Premounting mounts the scene thirty frames early at `opacity: 0`
       * (Remotion hardcodes `hideWhilePremounted: "opacity"` for `Sequence`,
       * so the hidden canvas still paints and the context is warm before it is
       * seen). `premountingActive` is gated on `!isRendering`, so the rendered
       * film is byte-identical - it never had the blink; only the preview did.
       *
       * `postmountFor` on scene 03 for the same reason in the other direction:
       * scrubbing back across 0630 remounts it, and AGENTS.md asks for the
       * timeline to be walked backwards as well as forwards.
       */}
      <Sequence
        name="03 Graph Reveal"
        from={330}
        durationInFrames={300}
        premountFor={30}
        postmountFor={30}
      >
        <GraphRevealScene />
      </Sequence>
      <Sequence
        name="04 Blast Radius"
        from={630}
        durationInFrames={100}
        premountFor={30}
        postmountFor={30}
      >
        <BlastRadiusScene />
      </Sequence>
      <Sequence
        name="05 Semantic Resolution"
        from={730}
        durationInFrames={180}
        premountFor={30}
      >
        <SemanticScene />
      </Sequence>
      <Sequence
        name="06 Agent Answer"
        from={910}
        durationInFrames={90}
        premountFor={30}
      >
        <AgentAnswerScene />
      </Sequence>
    </>
  );
};
