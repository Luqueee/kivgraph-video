import React from "react";
import { ThreeCanvas } from "@remotion/three";
import * as THREE from "three";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import {
  brandLockup,
  BrandLogo,
  BrandTagline,
  markCenter,
} from "../components/BrandLogo";
import { BrandTrailLine } from "../three/BrandTrail";
import { master } from "../three/projection";
import { brand, graph } from "../brand/tokens";

/**
 * Scene 08 - brand reveal (master 1360-1450, scene-local 0000-0090).
 *
 * The scene that attaches twenty-two seconds of behaviour to a name. Everything
 * before it argued; this names the thing that did the arguing, and it is placed
 * after the benchmark rather than before it so the name is the conclusion of an
 * argument instead of an advertisement with a demonstration attached.
 *
 * The convergence is a transition, not a logo. Five relationships arrive from
 * beyond the frame, land on a single node, and leave - and the node they landed
 * on turns out to be the mark. That correspondence is the whole idea: the film's
 * node vocabulary and the brand mark are the same square, so nothing had to be
 * invented. `08-brand.md` names the opposite outcome as the single worst failure
 * this scene can produce, and it is the reason the lines are gone by `1428`,
 * two frames before the wordmark reads.
 *
 * The lockup itself lives in `BrandLogo.tsx`, because scene 09 inherits it
 * across `1450` unchanged and the two scenes may not disagree about it by a
 * pixel. This file owns the timing and the convergence.
 *
 * See `docs/scenes/08-brand.md` for intent, beats and invariants.
 */

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const ramp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/** Draw progress. Linear, because `08-brand.md` asks for even speed. */
const linearRamp = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const frameSize = { width: 1920, height: 1080 } as const;

/**
 * How far short of the mark's centre a relationship stops.
 *
 * Derived from the lockup rather than written down, so it cannot rot when the
 * mark is resized: half the mark's height plus 20 px. Because it is a radius
 * and the glyph's silhouette is a rotated square, the diagonal approaches clear
 * it by more than the horizontal ones, and the horizontal ones clear it by the
 * full 20.
 *
 * A line that touched the logo would draw it as a junction in a diagram, which
 * is the graph-shaped-logo failure `08-brand.md` names as the worst outcome
 * this scene can produce. The relationships arrive at the mark; they never
 * connect to it.
 */
const markClearance = brandLockup.markHeight / 2 + 20;

/** How far beyond the frame edge each relationship begins, so it enters rather than starts. */
const offFrame = 60;

/**
 * Pixels per frame, identical for every relationship.
 *
 * `08-brand.md` asks for even speed and no acceleration flourish, so the draw
 * is linear and the *duration* is derived from each line's own length rather
 * than fixed. Five lines of five different lengths therefore arrive as one
 * system moving at one speed, which is what makes them read as relationships
 * rather than as five separate entrances.
 *
 * 30 px/frame is 1800 px/s: a line crossing the frame's half-width takes about
 * half a second.
 */
const speed = 30;

/**
 * The five relationships, as constants.
 *
 * Directions are from the node *outward*, in screen space, and they are written
 * here rather than generated so the render is deterministic in the strong sense
 * `AGENTS.md` asks for: no seeded drift, no angles chosen at render time. The
 * spread follows the storyboard sketch - three from the left, two from the
 * right, none vertical - which keeps the figure from reading as a compass rose.
 *
 * Colour is the graph's own edge vocabulary and not a new one. `edgeCross` is
 * the film's crossing colour and goes to the two near-horizontal lines, the
 * `-> * <-` pair the sketch draws most prominently; the other three are
 * `edgeLocal`, dimmer, and the difference gives the figure depth without
 * introducing a hue.
 *
 * `landAt` is when the line reaches the mark. They straddle local 50 - master
 * `1410`, a key frame whose required content is *relationships mid-arrival* -
 * so three are down and two are still travelling when it is exported.
 */
const relationships = [
  { dir: [-1, -0.62], landAt: 36, color: graph.edgeLocal, alpha: 0.5 },
  { dir: [-1, -0.06], landAt: 43, color: graph.edgeCross, alpha: 0.7 },
  { dir: [-1, 0.48], landAt: 47, color: graph.edgeLocal, alpha: 0.5 },
  { dir: [1, 0.12], landAt: 52, color: graph.edgeCross, alpha: 0.7 },
  { dir: [1, -0.5], landAt: 56, color: graph.edgeLocal, alpha: 0.5 },
] as const;

/**
 * Geometry, resolved once at module scope.
 *
 * Each line runs from `offFrame` px beyond whichever frame edge its direction
 * hits first, to `markClearance` px short of the mark. Deriving the start point
 * rather than writing it down is what makes the equal-speed property true by
 * construction instead of by assertion: change an angle and the duration
 * follows it.
 */
const lines = relationships.map(({ dir, landAt, color, alpha }) => {
  const magnitude = Math.sqrt(dir[0] * dir[0] + dir[1] * dir[1]);
  const unit = [dir[0] / magnitude, dir[1] / magnitude] as const;

  const toVerticalEdge =
    unit[0] > 0
      ? (frameSize.width - markCenter.x) / unit[0]
      : -markCenter.x / unit[0];
  const toHorizontalEdge =
    unit[1] > 0
      ? (frameSize.height - markCenter.y) / unit[1]
      : -markCenter.y / unit[1];

  const toStart = Math.min(toVerticalEdge, toHorizontalEdge) + offFrame;
  const length = toStart - markClearance;

  return {
    color,
    alpha,
    landAt,
    length,
    startAt: landAt - Math.round(length / speed),
    x1: markCenter.x + unit[0] * toStart,
    y1: markCenter.y + unit[1] * toStart,
    x2: markCenter.x + unit[0] * markClearance,
    y2: markCenter.y + unit[1] * markClearance,
  };
});

/**
 * The last stretch of a line's travel, over which it stops being an event and
 * becomes a fact.
 *
 * `STORYBOARD.md` §12: while a relationship is resolving it carries the brand
 * colour and slightly more body; settled, it is thinner and has no colour at
 * all, because *the accent is spent establishing the relationship, not having
 * it*. So each line arrives in `accent`, thins from 1.6 px to 1 px, and is
 * already neutral by the time it lands. This is the only place other than the
 * mark where `#2563eb` appears in the scene.
 */
const settleWindow = 12;

/**
 * The dissolve.
 *
 * All five leave together over `0058`-`0068` rather than each retracting after
 * its own landing, because a staggered exit would restate the arrival backwards
 * and there would never be a frame with the complete figure in it. The last
 * line lands at `0056`, so the whole thing exists for two frames, and then the
 * relationships spend ten frames becoming the name.
 *
 * Gone at `0068` - master `1428`, two frames before the wordmark reads. The
 * invariant is that the lines are not on screen when the wordmark is.
 */
const dissolve = { from: 58, to: 68 } as const;

export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();

  /**
   * The node appears at `0010` - master `1370` - and the ten frames before it
   * are empty on purpose. That emptiness is the `silence` of `STORYBOARD.md`
   * §27's `fade -> silence -> brand reveal`, scene 07 hands it over rather than
   * rendering it, and it is the reason the reveal lands at all. It is not dead
   * air and it is not a gap between two Sequences.
   *
   * The ramp runs `0009`-`0019` and not `0010`-`0020`, which is the difference
   * between the silence being ten frames and eleven. An `interpolate()` is
   * exactly 0 at the left edge of its range, so a ramp opening on `0010` leaves
   * `1370` pixel-identical to `1360` and the node does not appear until `1371`.
   * Opening one frame earlier costs nothing - `0009` still renders at 0, so
   * `1360`-`1369` are empty and byte-identical - and makes `1370` the first
   * frame with anything on it, which is what the beat says.
   *
   * One settle, on the entrance: 0.86 -> 1 over ten frames. Nothing in this
   * scene scales again, in either direction. A second scale gesture when the
   * relationships land would be a pulse, and a mark that pulses is a mark that
   * is still animating in the frame that gets used as a poster.
   */
  const markIn = ramp(frame, 9, 19);

  /**
   * Naming.
   *
   * Storyboard frame numbers mark when a beat *reads*, not when its ramp
   * starts, and this is the scene where that matters most: `1440` is a
   * still-image key frame in `AGENTS.md` and `STORYBOARD.md` §28, and it is the
   * single frame from this film most likely to be seen outside it. So both
   * entrances conclude on their beat - the wordmark at `0070` / `1430`, the
   * tagline at `0080` / `1440` - and the last ten frames of the scene are
   * pixel-identical to `0080`.
   *
   * Opacity and a minimal upward settle, nothing else. The wordmark does not
   * type itself in, does not assemble from fragments and does not slide. This
   * is the one moment in the video that has to feel inevitable rather than
   * animated.
   */
  const wordmarkIn = ramp(frame, 60, 70);
  const taglineIn = ramp(frame, 70, 80);

  /**
   * The turn.
   *
   * One full revolution of the mark, on direct art direction, starting with the
   * wordmark's entrance at local `0060` / master `1420` and **concluding at
   * `0076` / master `1436`**. That end frame is the whole constraint and it is
   * not negotiable by a later edit: `1440` is a still-image key frame in
   * `AGENTS.md` and `STORYBOARD.md` §28, it is the single frame from this film
   * most likely to be seen outside it, and a logo caught mid-rotation there is
   * an unusable poster. Ending at `1436` leaves the frame static from `1438`,
   * which is where it was static before the turn existed.
   *
   * `08-brand.md` argues against this - it holds that the naming is the one
   * moment in the video that must feel inevitable rather than animated, and
   * `AGENTS.md` lists dramatic spins among what to avoid. The override is
   * recorded in `## Current compromises` rather than absorbed.
   *
   * `0 -> 360` on the project's own easing, so it leaves quickly and arrives
   * slowly. It lands on 360 and not on 0, which is the same image; what matters
   * is that it is a single turn that stops, never a loop.
   */
  const markTurn = 360 * ramp(frame, 60, 76);

  const leaving = 1 - ramp(frame, dissolve.from, dissolve.to);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      {/**
       * The relationships, in R3F with a trail shader.
       *
       * This is an override of the project's own rules and is documented as
       * one, in `src/three/BrandTrail.tsx` and in `08-brand.md`
       * `## Current compromises`. The scene was first built in 2D and the 2D
       * argument still holds for the part that matters: the **lockup stays in
       * DOM**. Only the lines moved. The mark has to hold its exact screen
       * position across `1450` into a DOM scene 09, and that guarantee is not
       * something a projected 3D position can give.
       *
       * Orthographic at `zoom: 1`, so one world unit is one frame pixel and the
       * line geometry below is the same screen-space arithmetic it always was.
       * The camera never moves. Tone mapping off and sRGB out, for the reason
       * `GraphWorld` records at length: R3F defaults to ACES Filmic, this frame
       * lives in the bottom of the range where ACES compresses hardest, and the
       * video is authored in sRGB from the tokens.
       */}
      <ThreeCanvas
        width={master.width}
        height={master.height}
        orthographic
        camera={{ zoom: 1, position: [0, 0, 100], near: 0.1, far: 1000 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.NoToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        style={{ position: "absolute", inset: 0 }}
      >
        {lines.map((line) => (
          <BrandTrailLine
            key={`${line.x1}-${line.y1}`}
            line={line}
            progress={linearRamp(frame, line.startAt, line.landAt)}
            settle={ramp(frame, line.landAt - settleWindow, line.landAt)}
            leaving={leaving}
            hot={brand.accent}
          />
        ))}
      </ThreeCanvas>

      <BrandLogo
        markOpacity={markIn}
        markScale={interpolate(markIn, [0, 1], [0.86, 1])}
        markRotation={markTurn}
        wordmarkOpacity={wordmarkIn}
        wordmarkOffsetY={8 * (1 - wordmarkIn)}
      />

      <BrandTagline opacity={taglineIn} offsetY={6 * (1 - taglineIn)} />
    </AbsoluteFill>
  );
};
