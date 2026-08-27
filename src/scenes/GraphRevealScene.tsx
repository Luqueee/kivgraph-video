import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  interpolateColors,
  useCurrentFrame,
} from "remotion";
import { getGraphState } from "../three/graphState";
import { GraphWorld } from "../components/GraphWorld";
import { AgentFrame } from "./AgentScene";
import { CodeWorld, settledBed } from "../components/CodeWorld";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";

/**
 * Scene 03 - from code to graph (master 0700-1060, scene-local 0000-0360).
 *
 * The video's first Three.js scene and its hinge: the token `withRetry()` stops
 * being HTML text and becomes a node, in the same screen rectangle, at the same
 * apparent scale, and then the codebase it belongs to opens out around it in
 * depth - one step further from the camera per hop from the change.
 *
 * The shot is built to be the same shot as scene 01, not a diagram that follows
 * it. Four devices carry that across:
 *
 * - the code never leaves. It stays underneath at scene 02's ending luminance
 *   and keeps receding, blurred, exactly as the depth bed does in scene 01. The
 *   graph is drawn *inside* the code environment, not on a black slide;
 * - hierarchy is luminance first, on scene 01's own ladder;
 * - depth is perspective, parallax and occlusion - the scene's own subject,
 *   not an effect applied to it;
 * - the frame is filled to its edges and the periphery is crushed by the same
 *   radial falloff, so the composition is a crop of something larger.
 *
 * What is here and what is not:
 * - topology, identity and coordinates live in `src/data/graphDemo.ts`;
 * - the spatial contract lives in `src/three/graphFrame.ts`;
 * - timing and the camera path live in `src/three/graphState.ts`;
 * - the graph itself is drawn by `src/components/GraphWorld.tsx`, shared with
 *   scene 04 because the two are one continuous shot;
 * - this file owns only what belongs to this scene: the code bed underneath and
 *   the dissolving image of scene 02 on top.
 *
 * See `docs/scenes/03-graph-reveal.md` for intent, beats and invariants.
 */

export const GraphRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getGraphState(frame);

  /** 0 -> 1 across the whole opening. Every falloff in the scene rides it. */
  const open = interpolate(frame, [30, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 0, 0.25, 1),
  });
  const fall = (from: number, to: number) => from + (to - from) * open;

  /** Where the anchored file settles: a texture, never gone. */
  const codeSignature = fall(0.15, 0.062);

  /**
   * The code's own `withRetry` hands the accent to the node.
   *
   * It must *not* fade out. The token is a word inside a line of Go that stays
   * on screen, and removing it leaves `func      (ctx context.Context` - a hole
   * that reads as a rendering fault rather than as a transfer. What retires is
   * its accent and its selection field: by local 90 it is ordinary code at the
   * signature's luminance, and the only accented `withRetry` in the frame is
   * the node. One accent, one meaning.
   */
  const handover = interpolate(frame, [30, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.6, 1),
  });

  /**
   * The code world, still here.
   *
   * It is frozen at scene 02's last state until local 30 so that the dissolve
   * cross-fades two identical images, then keeps doing what it was already
   * doing: receding and losing light. Its anchor travels to the middle of the
   * frame alongside the 3D camera, so the file the graph came out of stays
   * registered underneath it rather than sliding away as a separate layer.
   */
  const bedCamera: Camera = {
    x: 0,
    y: 0,
    zoom: fall(0.7, 0.34),
    screenX: fall(712, 960),
    screenY: fall(356, 540),
  };

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={{
          symbol: codeSignature + (1 - codeSignature) * handover,
          signature: codeSignature,
          body: fall(0.07, settledBed.body),
          context: fall(0.06, settledBed.context),
        }}
        symbolColor={interpolateColors(
          handover,
          [0, 1],
          [brand.textSecondary, brand.accentText],
        )}
        neighbours={fall(0.05, settledBed.neighbours)}
        bed={fall(0.04, settledBed.bed)}
        mark={handover}
        select={handover * 0.595}
      />

      <GraphWorld state={state} />

      {/**
       * Scene 02's last image, on top and fading. It is the source half of the
       * cross-fade: at local 0 it is opaque and this scene is byte-identical to
       * scene 02's final frame; by local 30 it is gone and everything
       * underneath has arrived in its place.
       */}
      <AbsoluteFill style={{ opacity: state.residual }}>
        <AgentFrame frame={209} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/**
 * Scene 03's final image, held. Scene 04 opens on it and must be able to
 * reproduce it exactly, so it is exported rather than described.
 */
