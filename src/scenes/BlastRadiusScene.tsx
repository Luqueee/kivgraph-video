import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld, settledBed } from "../components/CodeWorld";
import { ImpactReport } from "../components/ImpactReport";
import { cardEntry, getBlastState } from "../three/blastState";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";

/**
 * Scene 04 - blast radius (master 0630-0770, scene-local 0000-0140).
 *
 * The scene that turns structure into consequence. Everything before it has
 * shown that relationships exist and that they leave the repository; this one
 * answers the question the agent asked in scene 02 by letting a change happen
 * at one symbol and be seen to travel, stop and be counted.
 *
 * Three events, in this order and never overlapping in meaning: `withRetry()`
 * pulses once, the impact propagates hop by hop into the depth of the frame,
 * and a card states the result in three numbers. The camera does not move at
 * all - it inherits scene 03's settled pose and the whole motion budget is
 * spent on the graph.
 *
 * There is no sentence addressed to the viewer. One was written and cut: the
 * propagation and the three counted values are the argument, and a line
 * asserting what they mean read as narration over evidence the viewer had
 * already been given.
 *
 * The scene is 140 frames, and both of its retimes were measured. Removing the
 * claim line and its veil left the frame unchanged after local 78, so twenty
 * frames of pixel-identical tail came off. Then forty went back on, because the
 * impact card - the three counted lines this whole scene exists to deliver - was
 * settling with only 25 frames left, 0.42 s to read a result. It now stands for
 * 51 frames inside the scene and keeps fading through the next one's flatten.
 *
 * The propagation lives in `src/three/blastState.ts`, so the hop order can be
 * checked without reading render code. This file owns the code bed underneath
 * and the card's placement.
 *
 * See `docs/scenes/04-blast-radius.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values - read from `settledBed` rather
 * than copied, which is how they came to disagree: this scene was still holding
 * scene 03's previous numbers, so the code read brighter under the impact card
 * than under the graph the card describes. The file the graph came out of stays
 * underneath it for the whole graph sequence; it never resumes travelling.
 */
const bedCamera: Camera = {
  x: 0,
  y: 0,
  zoom: 0.34,
  screenX: 960,
  screenY: 540,
};

export const BlastRadiusScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getBlastState(frame);
  const card = cardEntry(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={{
          symbol: settledBed.symbol,
          signature: settledBed.signature,
          body: settledBed.body,
          context: settledBed.context,
        }}
        symbolColor={brand.textSecondary}
        neighbours={settledBed.neighbours}
        bed={settledBed.bed}
        mark={0}
        select={0}
      />

      <GraphWorld state={state} />

      <ImpactReport card={card.opacity} cardOffsetX={card.offsetX} />
    </AbsoluteFill>
  );
};
