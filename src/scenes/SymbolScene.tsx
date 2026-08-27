import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  interpolateColors,
  useCurrentFrame,
} from "remotion";
import { CodeWorld } from "../components/CodeWorld";
import { fontMono } from "../brand/fonts";
import { brand } from "../brand/tokens";
import type { Camera } from "../world/camera";

/**
 * Scene 01 — Symbol (master frames 0420-0540, scene-local 0000-0120).
 *
 * The camera is inside the code. `withRetry` is pinned to one screen point for
 * the whole scene while the camera pulls back, so the symbol is the fixed thing
 * and the codebase is what moves. There is no editor chrome and no explanatory
 * text: hierarchy is luminance, depth is parallax plus falloff, and the only
 * words on screen are the file path.
 *
 * The scene establishes the symbol and nothing else. The question it provokes is
 * not spoken here — the agent types it in scene 02.
 *
 * See docs/scenes/01-symbol.md for intent and invariants.
 */

/**
 * The single window in which the shot resolves.
 *
 * Everything happens here and only here: the camera arrives, the code becomes
 * legible, the symbol takes the accent, its underline draws, and the file
 * caption appears. One window, one curve, one landing frame. After frame 80 the
 * scene does not move again — scene 02 is what breaks the stillness.
 */
const resolveFrom = 28;
const resolveTo = 80;

/**
 * Where `withRetry` sits on screen for the whole of this scene, and the opening
 * zoom it sits there at.
 *
 * The camera pulls back and the symbol does not move: it is pinned to this
 * point at every zoom, which is what makes it the fixed thing in the shot. That
 * makes it a contract as well as a composition, because `00-intent.md`'s
 * candidate has to arrive on exactly this point at exactly this size for the
 * match cut into frame 0 to be a match rather than a resemblance.
 *
 * Measured on the rendered frame 119, where the accent underline is exactly the
 * width of the symbol: the token spans `x 506..731`, 226 px, centred on 620 -
 * against `world.retry.origin.width * 0.6 * world.retry.fontSize * 1.12 =
 * 229.8`. So the point is the token's **centre**, not its left edge, and the
 * arithmetic that follows from it is sound.
 *
 * Exported rather than described, for the reason `graphFrame.ts` gives about
 * the other match cut: a number that two files each derive is a number they
 * will eventually derive differently.
 */
export const symbolAnchor = { x: 620, y: 662 } as const;

/** The zoom frame 0 opens on. `IntentScene` sizes its candidate against it. */
export const symbolOpeningZoom = 2.35;

/**
 * The file this scene is looking at, and the caption it prints top right.
 *
 * Exported because `00-intent.md` names the same file one scene earlier, as the
 * path under the candidate it picks. Two literals would let the film offer a
 * path and then open a different one.
 */
export const symbolFile = "payments-api/internal/retry/retry.go";

export const SymbolScene: React.FC = () => {
  const frame = useCurrentFrame();

  /**
   * The world arriving around the symbol, over the first twenty-six frames.
   *
   * This scene used to open the film, so its code field was simply *there* on
   * frame 0 - `signature` at `0.3`, `body` at `0.1`, and so on. It is now the
   * receiving half of a match cut, and that opening became the loudest thing in
   * the frame: `00-intent.md` hands over a frame holding `withRetry` and nothing
   * else, and the next frame added an entire file at once. The token matched to
   * the pixel and the surroundings arrived like a light being switched on.
   *
   * So everything except the symbol now rises from nothing while the symbol
   * stays where the candidate left it. Frame `0180` is the candidate's last
   * frame with the code still to come, and the file materialises around it.
   *
   * `symbol` is deliberately not multiplied. It is the object crossing the cut,
   * and the one thing that must not change at it.
   *
   * This is the same shape as the other match cut's solution, arrived at from
   * the other side: scene 03 keeps scene 02's last image on top and dissolves
   * it, so its matched token is continuous while its surroundings change. Here
   * the surroundings are absent and arrive; there they are present and leave.
   */
  const carry = interpolate(frame, [0, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  /** 0 -> 1 across the resolve window. Every value in the scene rides this. */
  const resolve = interpolate(frame, [resolveFrom, resolveTo], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  /**
   * One move in one direction: back off the symbol and stop.
   *
   * There is deliberately no push-in at the end. An earlier cut leaned back in
   * over the last 30 frames to make the ending feel unresolved, but scene 02
   * immediately reverses it — the camera read as a wobble rather than a gesture.
   * The scene now ends at rest and scene 02 supplies the next move, outward,
   * from exactly where this one stopped.
   *
   * The curve is not the project's `bezier(0.22, 1, 0.36, 1)`: that front-loads
   * too hard to read as a camera.
   */
  const zoom = interpolate(frame, [0, resolveTo], [symbolOpeningZoom, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 0.05, 0.2, 1),
  });

  /** The symbol never leaves the lower-left third. */
  const camera: Camera = {
    x: 0,
    y: 0,
    zoom,
    screenX: symbolAnchor.x,
    screenY: symbolAnchor.y,
  };

  /**
   * Luminance rises on the same window and then holds. Scene 02 inherits these
   * settled values and takes the light out of the code itself, so nothing in
   * this scene ever dims.
   */
  const lum = (dim: number, lit: number) => dim + (lit - dim) * resolve;

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={camera}
        main={{
          symbol: 1,
          signature: lum(0.3, 0.55) * carry,
          body: lum(0.1, 0.38) * carry,
          context: lum(0.08, 0.22) * carry,
        }}
        symbolColor={interpolateColors(
          resolve,
          [0, 1],
          [brand.textPrimary, brand.accentText],
        )}
        neighbours={0}
        bed={lum(0.09, 0.16) * carry}
        mark={resolve}
      />

      <AbsoluteFill
        style={{
          background: `radial-gradient(118% 108% at 33% 62%, rgba(${brand.backgroundRgb}, 0) 0%, rgba(${brand.backgroundRgb}, 0) 28%, rgba(${brand.backgroundRgb}, 0.55) 64%, rgba(${brand.backgroundRgb}, 0.93) 100%)`,
        }}
      />

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
          opacity: resolve * 0.8,
        }}
      >
        {symbolFile}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
