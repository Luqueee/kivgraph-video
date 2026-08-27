import React from "react";
import { Sequence } from "remotion";
import { AgentAnswerScene } from "./scenes/AgentAnswerScene";
import { AgentScene } from "./scenes/AgentScene";
import { BenchmarkScene } from "./scenes/BenchmarkScene";
import { BlastRadiusScene } from "./scenes/BlastRadiusScene";
import { BrandScene } from "./scenes/BrandScene";
import { ColdOpenScene } from "./scenes/ColdOpenScene";
import { OutroScene } from "./scenes/OutroScene";
import { GraphRevealScene } from "./scenes/GraphRevealScene";
import { IntentScene } from "./scenes/IntentScene";
import { SemanticScene } from "./scenes/SemanticScene";
import { SymbolScene } from "./scenes/SymbolScene";

/**
 * The 36.17 s master. This file is the only place that holds global frame
 * boundaries; scenes animate in their own local frame space, because
 * `useCurrentFrame()` inside a `<Sequence>` starts at 0.
 *
 * `from` and `durationInFrames` stay inline literals so the sequences remain
 * trimmable in Remotion Studio.
 *
 * 0000-0120 Cold Open 0120-0420 Intent 0420-0540 Symbol 0540-0750 Agent
 * 0750-1110 Graph Reveal 1110-1250 Blast Radius 1250-1450 Semantic
 * 1450-1630 Agent Answer 1630-1880 Benchmark 1880-2050 Brand 2050-2170 Outro
 *
 * The master is 2170 frames, and eleven retimes got it there from 1410. The
 * cross-repository scene was deleted (-90). The blast radius lost twenty frames
 * of pixel-identical tail, then got forty back. The semantic resolution gained
 * thirty for reading time, then twenty more. The agent answer gained ninety. The
 * benchmark was drafted at 120 and built at 210, then took 40 more for the line
 * that joins it to the answer. The brand reveal was drafted at 90 and grew to 170
 * once it could be watched, and the graph reveal took 60 so the cross-repository
 * crossing could be a beat rather than something that happened while the camera
 * was busy. The intent scene arrived at 180, was built at 220 and shipped at 300.
 *
 * Every one of those after the deletion is the same measurement: dwell, the time
 * a readable thing stays on screen after it has finished arriving. The benchmark
 * is the largest of them because it is the densest frame in the film - a four-row
 * comparison across two arms, seven things arriving - and at 120 frames it could
 * not finish arriving at all.
 *
 * The eleventh is the only one that is not about dwell inside an existing scene.
 * The cold open added 120 frames at the front so the film opens on the benchmark
 * result rather than on the mechanics that produce it. Nothing was compressed to
 * pay for it: every other scene moved by exactly +120 and none changed length.
 *
 * Scenes 01 and 02 are one continuous camera move through one code environment
 * and have no cut between them; the boundary at 0540 is where the camera changes
 * intent, not where the image changes. The first cut in the video is the match
 * cut at 0420 - the cold open dissolves into the intent scene rather than cutting
 * to it, so nothing before that boundary is a cut either.
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
 * outstanding, so the two numbers met and the distinction stopped
 * meaning anything.
 *
 * It stays a named export rather than a literal in `Root.tsx` for the same
 * reason it always was one: the length belongs to this file, which is the only
 * place that holds global frame boundaries.
 */
export const masterFrames = 2170;

export const KivgraphVideo: React.FC = () => {
  return (
    <>
      {/**
       * The cold open mounts at 0 and the intent scene no longer does, which is
       * the only structural consequence of the new opening: everything else
       * moved by a constant.
       *
       * It is the one sequence in the film that is not part of the numbered
       * story, and that is why it has no number. Everything from `00 Intent`
       * onward is the product narrative; this is the result that narrative
       * explains, shown first so the viewer has a question to carry into it.
       *
       * No `premountFor`: it mounts no canvas, it is the first thing in the
       * composition, and there is nothing before it to premount from.
       */}
      <Sequence name="Cold Open" durationInFrames={120}>
        <ColdOpenScene />
      </Sequence>
      <Sequence name="00 Intent" from={120} durationInFrames={300}>
        <IntentScene />
      </Sequence>
      <Sequence name="01 Symbol" from={420} durationInFrames={120}>
        <SymbolScene />
      </Sequence>
      <Sequence name="02 Agent" from={540} durationInFrames={210}>
        <AgentScene />
      </Sequence>
      {/**
       * `premountFor` on both graph scenes, and it is a preview fix, not a
       * creative one.
       *
       * A `<Sequence>` renders its children only inside its range, so at the
       * 1110 boundary `GraphRevealScene` unmounts and `BlastRadiusScene` mounts.
       * Sharing the `GraphWorld` component does not share its instance: the
       * `ThreeCanvas` is destroyed and a new WebGL context is created at the
       * seam. Measured in Studio by counting `getContext` calls while stepping
       * 1109 <-> 1112: four crossings, four new `webgl2` contexts. For the
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
       * scrubbing back across 1110 remounts it, and AGENTS.md asks for the
       * timeline to be walked backwards as well as forwards.
       */}
      <Sequence
        name="03 Graph Reveal"
        from={750}
        durationInFrames={360}
        premountFor={30}
        postmountFor={30}
      >
        <GraphRevealScene />
      </Sequence>
      <Sequence
        name="04 Blast Radius"
        from={1110}
        durationInFrames={140}
        premountFor={30}
        postmountFor={30}
      >
        <BlastRadiusScene />
      </Sequence>
      <Sequence
        name="05 Semantic Resolution"
        from={1250}
        durationInFrames={200}
        premountFor={30}
      >
        <SemanticScene />
      </Sequence>
      <Sequence
        name="06 Agent Answer"
        from={1450}
        durationInFrames={180}
        premountFor={30}
      >
        <AgentAnswerScene />
      </Sequence>
      <Sequence
        name="07 Benchmark"
        from={1630}
        durationInFrames={250}
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
       * before the first line is drawn at 1890. The premount is for the
       * scrubber, not for the playthrough. As always it is gated on
       * `!isRendering`, so no rendered frame changes.
       *
       * No `postmountFor` yet. It becomes due the moment scene 09 exists, for
       * the same reason scenes 03 and 04 carry theirs: the timeline has to
       * survive being walked backwards across 2050 as well as forwards.
       */}
      <Sequence
        name="08 Brand"
        from={1880}
        durationInFrames={170}
        premountFor={30}
        postmountFor={30}
      >
        <BrandScene />
      </Sequence>
      {/**
       * `postmountFor` on scene 08 became due the moment this scene existed:
       * scene 08 mounts a `ThreeCanvas`, and scrubbing backwards across 2050
       * remounts it. `AGENTS.md` asks for the timeline to survive being walked
       * backwards as well as forwards.
       *
       * This scene needs neither prop. It mounts no canvas - it is static type
       * over the frame scene 08 settled on - and there is nothing after it to
       * scrub back from.
       */}
      <Sequence name="09 Outro" from={2050} durationInFrames={120}>
        <OutroScene />
      </Sequence>
    </>
  );
};
