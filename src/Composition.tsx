import React from "react";
import { Sequence } from "remotion";
import { AgentAnswerScene } from "./scenes/AgentAnswerScene";
import { AgentScene } from "./scenes/AgentScene";
import { BenchmarkScene } from "./scenes/BenchmarkScene";
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
 * 0000-0120 Symbol 0120-0330 Agent 0330-0630 Graph Reveal
 * 0630-0770 Blast Radius 0770-0970 Semantic 0970-1150 Agent Answer
 * 1150-1360 Benchmark 1360-1450 Brand 1450-1570 Outro
 *
 * The master is 1570 frames, and six retimes got it there from 1410. The
 * cross-repository scene was deleted (-90). The blast radius lost twenty frames
 * of pixel-identical tail, then got forty back. The semantic resolution gained
 * thirty for reading time, then twenty more. The agent answer gained ninety. The
 * benchmark was drafted at 120 and built at 210.
 *
 * Every one of those after the deletion is the same measurement: dwell, the time
 * a readable thing stays on screen after it has finished arriving. The benchmark
 * is the largest of them because it is the densest frame in the film - a four-row
 * comparison across two arms, seven things arriving - and at 120 frames it could
 * not finish arriving at all.
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
 * The finished piece is 1570 frames (26.17 s), and that is the number every
 * document plans against. Until the remaining scenes exist, the composition is
 * registered at this length instead, so Studio and `remotion render` produce the
 * film that exists rather than twenty-two and a half seconds of video followed
 * by three and a half of black. Raise it as each scene lands; delete it once it
 * reaches 1570.
 */
export const mountedFrames = 1360;

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
        durationInFrames={140}
        premountFor={30}
        postmountFor={30}
      >
        <BlastRadiusScene />
      </Sequence>
      <Sequence
        name="05 Semantic Resolution"
        from={770}
        durationInFrames={200}
        premountFor={30}
      >
        <SemanticScene />
      </Sequence>
      <Sequence
        name="06 Agent Answer"
        from={970}
        durationInFrames={180}
        premountFor={30}
      >
        <AgentAnswerScene />
      </Sequence>
      <Sequence
        name="07 Benchmark"
        from={1150}
        durationInFrames={210}
        premountFor={30}
      >
        <BenchmarkScene />
      </Sequence>
    </>
  );
};
