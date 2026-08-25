import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld } from "../components/CodeWorld";
import { ImpactReport } from "../components/ImpactReport";
import { cardEntry, getBlastState } from "../three/blastState";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";

/**
 * Scene 04 - blast radius (master 0630-0730, scene-local 0000-0100).
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
 * The scene is 100 frames rather than 120 because of that cut. With the
 * sentence and its veil gone, the frame stopped changing at local 78 and the
 * remaining forty-one frames rendered pixel-identical - a third of the scene
 * was a frozen image, and the veil and the sentence had been the only things
 * moving in it. Twenty came off, leaving a twenty-one frame hold: long enough
 * to read three lines and to let the cut land on a still frame, which is the
 * only reason to hold at all.
 *
 * The propagation lives in `src/three/blastState.ts`, so the hop order can be
 * checked without reading render code. This file owns the code bed underneath
 * and the card's placement.
 *
 * See `docs/scenes/04-blast-radius.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values. The file the graph came out of
 * stays underneath it for the whole graph sequence; it never resumes
 * travelling.
 */
const bedCamera: Camera = { x: 0, y: 0, zoom: 0.34, screenX: 960, screenY: 540 };

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

      <ImpactReport card={card.opacity} cardOffsetX={card.offsetX} />
    </AbsoluteFill>
  );
};
