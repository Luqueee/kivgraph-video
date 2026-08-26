import React from "react";
import { Sequence } from "remotion";
import { AgentAnswerScene } from "./scenes/AgentAnswerScene";
import { AgentScene } from "./scenes/AgentScene";
import { BenchmarkScene } from "./scenes/BenchmarkScene";
import { BlastRadiusScene } from "./scenes/BlastRadiusScene";
import { BrandScene } from "./scenes/BrandScene";
import { OutroScene } from "./scenes/OutroScene";
import { GraphRevealScene } from "./scenes/GraphRevealScene";
import { SemanticScene } from "./scenes/SemanticScene";
import { SymbolScene } from "./scenes/SymbolScene";

/**
 * The 27.5 s master. This file is the only place that holds global frame
 * boundaries; scenes animate in their own local frame space, because
 * `useCurrentFrame()` inside a `<Sequence>` starts at 0.
 *
 * `from` and `durationInFrames` stay inline literals so the sequences remain
 * trimmable in Remotion Studio.
 *
 * 0000-0120 Symbol 0120-0330 Agent 0330-0630 Graph Reveal
 * 0630-0770 Blast Radius 0770-0970 Semantic 0970-1150 Agent Answer
 * 1150-1360 Benchmark 1360-1530 Brand 1530-1650 Outro
 *
 * The master is 1650 frames, and seven retimes got it there from 1410. The
 * cross-repository scene was deleted (-90). The blast radius lost twenty frames
 * of pixel-identical tail, then got forty back. The semantic resolution gained
 * thirty for reading time, then twenty more. The agent answer gained ninety. The
 * benchmark was drafted at 120 and built at 210. The brand reveal was drafted at
 * 90 and grew to 170 once it could be watched, which is the only retime so far
 * taken from a scene that had already shipped rather than from one arriving.
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
 * Every scene exists. Nothing is left black on purpose.
 */
/**
 * The master, in frames.
 *
 * This replaces `mountedFrames`, which existed only while the film was shorter
 * than its plan: it registered the composition at the length that actually
 * rendered so Studio and `remotion render` produced the film that existed rather
 * than that film followed by seconds of black. Scene 09 was the last one
 * outstanding, so the two numbers met at 1650 and the distinction stopped
 * meaning anything.
 *
 * It stays a named export rather than a literal in `Root.tsx` for the same
 * reason it always was one: the length belongs to this file, which is the only
 * place that holds global frame boundaries.
 */
export const masterFrames = 1650;

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
      {/**
       * `premountFor` for the same preview reason as the graph scenes: scene 08
       * mounts a `ThreeCanvas` for its converging relationships, so scrubbing
       * straight to a frame inside it creates a WebGL context that is not warm
       * on the first displayed frame.
       *
       * It matters less here than anywhere else in the film, and that is worth
       * knowing rather than discovering: the scene opens on ten deliberately
       * empty frames, so played forward the context has ten frames to warm
       * before the first line is drawn at 1370. The premount is for the
       * scrubber, not for the playthrough. As always it is gated on
       * `!isRendering`, so no rendered frame changes.
       *
       * No `postmountFor` yet. It becomes due the moment scene 09 exists, for
       * the same reason scenes 03 and 04 carry theirs: the timeline has to
       * survive being walked backwards across 1450 as well as forwards.
       */}
      <Sequence
        name="08 Brand"
        from={1360}
        durationInFrames={170}
        premountFor={30}
        postmountFor={30}
      >
        <BrandScene />
      </Sequence>
      {/**
       * `postmountFor` on scene 08 became due the moment this scene existed:
       * scene 08 mounts a `ThreeCanvas`, and scrubbing backwards across 1530
       * remounts it. `AGENTS.md` asks for the timeline to survive being walked
       * backwards as well as forwards.
       *
       * This scene needs neither prop. It mounts no canvas - it is static type
       * over the frame scene 08 settled on - and there is nothing after it to
       * scrub back from.
       */}
      <Sequence name="09 Outro" from={1530} durationInFrames={120}>
        <OutroScene />
      </Sequence>
    </>
  );
};
