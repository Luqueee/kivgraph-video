import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld } from "../components/CodeWorld";
import { ImpactReport } from "../components/ImpactReport";
import {
  cardEntry,
  claimOpacity,
  getBlastState,
  veilOpacity,
} from "../three/blastState";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";

/**
 * Scene 05 - blast radius (master 0720-0840, scene-local 0000-0120).
 *
 * The scene that turns structure into consequence. Everything before it has
 * shown that relationships exist and that they leave the repository; this one
 * answers the question the agent asked in scene 02 by letting a change happen
 * at one symbol and be seen to travel, stop and be counted.
 *
 * Four events, in this order and never overlapping in meaning: `withRetry()`
 * pulses once, the impact propagates hop by hop into the depth of the frame, a
 * card states the result in three numbers, and one line qualifies it. The
 * camera does not move at all - scene 04 returned the rig to rest, and the
 * whole motion budget is spent on the graph.
 *
 * The propagation lives in `src/three/blastState.ts`, so the hop order can be
 * checked without reading render code. This file owns the code bed underneath,
 * the card's placement and the claim line.
 *
 * See `docs/scenes/05-blast-radius.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values - the same literals scene 04
 * freezes. The file the graph came out of stays underneath it for the whole
 * graph sequence; it never resumes travelling.
 */
const bedCamera: Camera = { x: 0, y: 0, zoom: 0.34, screenX: 960, screenY: 540 };

/**
 * Where the report sits is `ImpactReport`'s own decision, because scene 06
 * inherits the block and has to draw it identically.
 */

export const BlastRadiusScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getBlastState(frame);
  const card = cardEntry(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={{
          symbol: 0.062,
          signature: 0.062,
          body: 0.03,
          context: 0.026,
        }}
        symbolColor={brand.textSecondary}
        neighbours={0.022}
        bed={0.02}
        mark={0}
        select={0}
      />

      <GraphWorld state={state} />

      {/**
       * The veil the claim line is read on.
       *
       * The film's rule for viewer-addressed copy, established by scene 04: a
       * sentence to the viewer gets the frame to itself. It rises six frames
       * ahead of the text and holds to 0840, so the graph is dimmed but never
       * gone - the propagation is still the evidence for the card above it, and
       * scene 06 flattens this image rather than a black one.
       *
       * Above the graph and below the report, which is the whole point: the
       * card gains contrast from it instead of being dimmed by it.
       */}
      <AbsoluteFill
        style={{
          backgroundColor: brand.background,
          opacity: veilOpacity(frame),
        }}
      />

      <ImpactReport
        card={card.opacity}
        cardOffsetX={card.offsetX}
        claim={claimOpacity(frame)}
      />
    </AbsoluteFill>
  );
};
