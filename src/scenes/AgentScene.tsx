import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { AgentPrompt, settledGrow } from "../components/AgentPrompt";
import { CodeWorld } from "../components/CodeWorld";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";
import type { Camera } from "../world/camera";

/**
 * Scene 02 — Agent (master frames 0210-0420, scene-local 0000-0210).
 *
 * The scene the opening has been walking toward: the question gets said out
 * loud. It is said by a developer to an agent, as a prompt, not by the video to
 * the viewer as a headline.
 *
 * There is no cut and no terminal window. Scene 01 hands over its last image
 * intact; this scene widens out of it, takes the light out of the code, and lets
 * a prompt layer emerge inside the same frame. `withRetry` is still on screen in
 * the code above while the same name is typed into the prompt below, and at the
 * end both carry the same selection: one symbol, in two places.
 *
 * The widening is a transition, not a statement. It used to be a scene of its
 * own; see docs/scenes/02-agent.md for why that scene was deleted.
 */
/**
 * The scene's image at a given scene-local frame.
 *
 * Split out from the component because scene 03 has to keep this frame on
 * screen while it dissolves: the match cut is only invisible if what fades is
 * the same pixels, not a reconstruction of them. Scene 03 renders
 * `<AgentFrame frame={210} />` and fades it out.
 */
export const AgentFrame: React.FC<{ frame: number }> = ({ frame }) => {
  /**
   * One move, two intents. Scene 01 arrived and stopped; this picks the world up
   * from rest and carries it outward, so the boundary is a beat rather than a
   * reversal — the camera never changes direction across the two scenes. It
   * opens to 0.66 — enough to admit the package around the file and to clear the
   * lower half of the frame — holds while the question is typed, and closes the
   * last 30 frames as the first half of a push-in that scene 03 finishes with a
   * real Three.js camera.
   *
   * The first curve starts at zero velocity on purpose. Scene 01 is motionless
   * at the cut; anything with an initial slope reads as a jerk.
   */
  const zoom = interpolate(frame, [0, 70, 180, 210], [1.12, 0.66, 0.66, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: [
      Easing.bezier(0.4, 0, 0.2, 1),
      Easing.linear,
      Easing.bezier(0.4, 0, 0.8, 1),
    ],
  });

  /**
   * The anchor travels — carried by the camera, never re-laid-out — from the
   * lower-left third of scene 01 up into the top third, which is what opens the
   * room the prompt arrives into.
   */
  const camera: Camera = {
    x: 0,
    y: 0,
    zoom,
    screenX: interpolate(frame, [0, 70], [620, 712], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }),
    screenY: interpolate(frame, [0, 70], [662, 356], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }),
  };

  /**
   * The world loses light faster than the camera moves, reaching its held value
   * by local 52 — before the first typed word is legible — so the question never
   * competes with a line of code sitting next to it. It starts from the settled
   * values scene 01 holds: that scene never dims, so the whole fall belongs to
   * this one. `withRetry` keeps its accent throughout: the world recedes, the
   * symbol does not.
   */
  const main = {
    symbol: 1,
    signature: interpolate(frame, [0, 52, 180, 210], [0.55, 0.22, 0.22, 0.15], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    body: interpolate(frame, [0, 52, 180, 210], [0.38, 0.11, 0.11, 0.07], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    context: interpolate(frame, [0, 52, 180, 210], [0.22, 0.09, 0.09, 0.06], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  };

  /**
   * The two package siblings resolve out of the falloff as the camera widens and
   * then stay as texture. They are never the subject: they exist so the frame
   * has material at its edges and so the file is visibly not the whole world.
   */
  const neighbours = interpolate(
    frame,
    [14, 60, 180, 210],
    [0, 0.07, 0.07, 0.05],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  /**
   * Typing in irregular groups. A uniform per-character rate reads as a machine
   * printing a string; unequal groups with pauses between them read as a person
   * deciding what to ask. Derived from the frame, so scrubbing backwards
   * reproduces the same partial string.
   */
  const chars = Math.round(
    interpolate(
      frame,
      [45, 56, 63, 74, 79, 86, 93, 108, 114, 123, 125],
      [0, 4, 4, 11, 11, 14, 14, 23, 23, 35, 36],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
    ),
  );

  /** Committed at 135. The caret retires; the prompt glyph takes the weight. */
  const committed = frame >= 135;

  const select = interpolate(frame, [180, 206], [0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={camera}
        main={main}
        symbolColor={brand.accentText}
        neighbours={neighbours}
        bed={interpolate(frame, [0, 52, 210], [0.16, 0.05, 0.04], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
        mark={1}
        select={select * 0.7}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(126% 118% at ${
            (camera.screenX / 1920) * 100
          }% ${
            (camera.screenY / 1080) * 100
          }%, rgba(${brand.backgroundRgb}, 0) 0%, rgba(${brand.backgroundRgb}, 0) 30%, rgba(${brand.backgroundRgb}, 0.5) 68%, rgba(${brand.backgroundRgb}, 0.92) 100%)`,
        }}
      />
      {/*
        Scene 01 hands the file caption over still lit. It retires under the
        arrival of the prompt: the frame stops labelling where we are and starts
        carrying what is being asked.
      */}
      <Interactive.Div
        name="File caption"
        style={{
          position: "absolute",
          top: 118,
          right: 132,
          fontFamily: fontMono,
          fontSize: 20,
          letterSpacing: "0.04em",
          color: brand.textMuted,
          opacity: interpolate(frame, [6, 36], [0.8, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: [Easing.bezier(0.32, 0, 0.24, 1)],
          }),
        }}
      >
        payments-api/internal/retry/retry.go
      </Interactive.Div>
      {/*
        The lower half loses light so the prompt reads against near-darkness,
        but never against a hard floor: the code stays faintly present under the
        prompt because the video never leaves the code. It is a luminance
        falloff, the device the opening already uses for depth — not a panel.
      */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, rgba(${brand.backgroundRgb}, 0) 0%, rgba(${brand.backgroundRgb}, 0) 28%, rgba(${brand.backgroundRgb}, 0.44) 47%, rgba(${brand.backgroundRgb}, 0.66) 63%, rgba(${brand.backgroundRgb}, 0.72) 100%)`,
          opacity: interpolate(frame, [16, 50], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: [Easing.bezier(0.22, 1, 0.36, 1)],
          }),
        }}
      />
      <AgentPrompt
        chars={chars}
        rule={interpolate(frame, [30, 58], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.22, 1, 0.36, 1),
        })}
        glyph={interpolate(frame, [36, 52, 135, 146], [0, 0.72, 0.72, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
        caret={
          committed
            ? 0
            : interpolate(frame, [34, 42], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }) * (Math.floor(frame / 18) % 2 === 0 ? 1 : 0.15)
        }
        tool={interpolate(frame, [150, 180], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.22, 1, 0.36, 1),
        })}
        select={select}
        grow={interpolate(frame, [180, 210], [1, settledGrow], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.22, 1, 0.36, 1),
        })}
      />
    </AbsoluteFill>
  );
};

export const AgentScene: React.FC = () => (
  <AgentFrame frame={useCurrentFrame()} />
);
