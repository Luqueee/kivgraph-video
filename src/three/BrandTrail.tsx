import React from "react";
import * as THREE from "three";
import { master } from "./projection";

/**
 * The converging relationships of scene 08, as R3F geometry with a trail
 * shader.
 *
 * ## Why this is Three.js, which the project's own rules argue against
 *
 * On direct art direction, and it is recorded as an override rather than
 * presented as a derivation. `AGENTS.md` holds that Three.js exists to explain
 * Kivgraph's structure and *is not decorative*, and it lists
 * **«Partículas, `Trail`, estelas»** among the things rejected up front «para
 * que no vuelva a proponerse», citing `STORYBOARD.md` §12 — «No utilizar
 * electricidad, rayos ni partículas». §30 lists `40 partículas`, `bloom` and
 * `neón` under what the video must not do. This file is a deliberate exception
 * to all of that; see `docs/scenes/08-brand.md` `## Current compromises`.
 *
 * What the exception does **not** extend to:
 *
 * - **no postprocessing.** There is no bloom pass and `postprocessing` is not a
 *   dependency — it was installed, measured and removed once already, and its
 *   final pass re-encodes an already-sRGB render (`AGENTS.md`). The glow here is
 *   per-fragment inside the line's own material, so nothing downstream of the
 *   render touches the frame;
 * - **no particles, sparks or lightning.** The trail is a falloff behind the
 *   head of a line that is being drawn. Nothing is emitted and nothing is
 *   simulated;
 * - **no camera.** The camera is orthographic at `zoom: 1`, so one world unit
 *   is one frame pixel and it never moves. There is no orbit, no dolly and no
 *   parallax, because there is no depth here to reveal;
 * - **no logo.** The lockup stays in DOM. That is the one part of the R3F
 *   argument that was not overridden: the mark has to hold its exact screen
 *   position across `1450` into a DOM scene 09, and matching a projected 3D
 *   position to a DOM layout across a scene boundary is how a mark ends up
 *   moving a pixel at a scene change.
 *
 * ## Determinism
 *
 * Every uniform is a function of the Remotion frame, passed down as a prop.
 * There is no `useFrame`, no clock, no seeded drift, and no randomised angle:
 * the angles are constants in `BrandScene.tsx` and the geometry is derived from
 * them at module scope. `AGENTS.md` requires it and a trail shader is exactly
 * the kind of effect that invites a `uTime` uniform; this one does not have one.
 *
 * ## One geometry, one material class, five meshes
 *
 * `AGENTS.md` asks that geometry and materials be reused across the lines. The
 * quad is a single shared unit plane, positioned, rotated and scaled per line,
 * and every line is the same `ShaderMaterial` program with different uniforms.
 */

/**
 * The unit quad every relationship is drawn on.
 *
 * `uv.x` runs 0 at the off-frame start to 1 at the mark, so the shader's
 * `along` coordinate is the line's own progress axis and nothing has to know
 * how long the line is. `uv.y` runs across it.
 */
const unitQuad = new THREE.PlaneGeometry(1, 1);

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

/**
 * The trail.
 *
 * The head is hard, because the line is being *drawn* and a soft head would
 * read as a blur rather than as an arrival. Everything behind it inside
 * `uTrail` carries a halo that falls off as the fifth root of nothing in
 * particular — `pow(t, 2.5)` was chosen against the rendered frame — and the
 * halo is wider than the line's core, which is what makes it read as an estela
 * instead of as a thicker line.
 *
 * `uSettle` runs `0 -> 1` over the last stretch of a line's travel and does
 * three things at once, all of them `STORYBOARD.md` §12: the colour goes from
 * `accent` to the graph's own neutral edge colour, the core thins, and the
 * trail is extinguished. «El accent se gasta en establecer la relación, no en
 * tenerla» — so a landed relationship has no glow and no brand colour, and the
 * estela exists only while the relationship is being established.
 */
const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uProgress;
  uniform float uTrail;
  uniform float uSettle;
  uniform float uLeaving;
  uniform float uAlpha;
  uniform float uHalfCore;
  uniform float uHalfQuad;
  uniform vec3 uHot;
  uniform vec3 uCool;

  void main() {
    float along = vUv.x;

    // Ahead of the head there is no line yet. The head is hard on purpose: the
    // line is being drawn, and a soft head reads as a blur rather than as an
    // arrival.
    if (along > uProgress) discard;

    // Distance from the line's centre, in frame pixels. The camera is
    // orthographic at zoom 1, so a world unit is a pixel and this is exact.
    float acrossPx = abs(vUv.y * 2.0 - 1.0) * uHalfQuad;

    // Analytic antialiasing over one pixel, which is what a 1 px line needs and
    // what a normalised smoothstep cannot give it: a feature narrower than the
    // sampling grid lands between fragment centres and renders as nothing.
    // MSAA does not help, because it antialiases geometry edges and this edge
    // is inside the shader.
    float core = 1.0 - smoothstep(uHalfCore - 0.5, uHalfCore + 0.5, acrossPx);

    // The trail: brightest at the head, gone by uTrail behind it, and
    // extinguished entirely once the relationship has landed.
    float behind = (uProgress - along) / max(uTrail, 1e-4);
    float trail = pow(1.0 - clamp(behind, 0.0, 1.0), 2.5) * (1.0 - uSettle);

    // The halo spans the whole quad, so it is wider than the core by design.
    float halo = (1.0 - smoothstep(0.0, uHalfQuad, acrossPx)) * trail;

    float alpha = (core * uAlpha + halo * 0.55) * uLeaving;
    if (alpha <= 0.002) discard;

    vec3 colour = mix(uHot, uCool, uSettle) * (1.0 + trail * 1.9);

    gl_FragColor = vec4(colour, alpha);
  }
`;

export type TrailLine = {
  /** Screen-space start, outside the frame. */
  x1: number;
  y1: number;
  /** Screen-space end, short of the mark. */
  x2: number;
  y2: number;
  length: number;
  /** Settled colour: one of the graph's own edge colours. */
  color: string;
  /** The line's own low opacity once settled. */
  alpha: number;
};

type Props = {
  line: TrailLine;
  /** 0 -> 1 head position along the line. */
  progress: number;
  /** 0 -> 1 over the last stretch of travel: accent to neutral, glow to none. */
  settle: number;
  /** 1 present, 0 gone. */
  leaving: number;
  /** Accent, as a token hex. */
  hot: string;
};

/**
 * How wide the quad is, in frame pixels.
 *
 * It is the halo's width, not the line's: the line is `1.8 px` while it travels
 * and `1.1 px` once it lands. 16 px is what the falloff needs to fade to
 * nothing without leaving a visible edge on the quad.
 */
const quadWidth = 16;

/** How far behind the head the trail reaches, in frame pixels. */
const trailLength = 230;

export const BrandTrailLine: React.FC<Props> = ({
  line,
  progress,
  settle,
  leaving,
  hot,
}) => {
  /**
   * The material is built once and its uniform *values* are written on every
   * render, rather than the material being rebuilt when a value changes. That
   * is not an optimisation, it is what `AGENTS.md` asks for — one program
   * reused across the lines — and it is also the only way the declarative form
   * works: a `<shaderMaterial>` with no `uniforms` object has nothing to write
   * `uniforms-uProgress-value` into.
   *
   * Writing them during render rather than in an effect or a `useFrame` is the
   * point. The frame is the only clock this scene has.
   */
  const material = React.useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uProgress: { value: 0 },
          uTrail: { value: 0 },
          uSettle: { value: 0 },
          uLeaving: { value: 1 },
          uAlpha: { value: 1 },
          uHalfCore: { value: 0.5 },
          uHalfQuad: { value: quadWidth / 2 },
          uHot: { value: new THREE.Color() },
          uCool: { value: new THREE.Color() },
        },
      }),
    [],
  );

  material.uniforms.uProgress.value = progress;
  material.uniforms.uTrail.value = trailLength / line.length;
  material.uniforms.uSettle.value = settle;
  material.uniforms.uLeaving.value = leaving;
  material.uniforms.uAlpha.value = line.alpha;
  material.uniforms.uHalfCore.value = (1.8 + (1.1 - 1.8) * settle) / 2;
  material.uniforms.uHot.value.set(hot);
  material.uniforms.uCool.value.set(line.color);

  /**
   * Screen space to world space. The camera is orthographic at `zoom: 1`, so
   * one unit is one pixel; the origin moves to the centre of the frame and `y`
   * flips, because screen `y` runs down and world `y` runs up.
   */
  const dx = line.x2 - line.x1;
  const dy = -(line.y2 - line.y1);

  const midX = (line.x1 + line.x2) / 2 - master.width / 2;
  const midY = master.height / 2 - (line.y1 + line.y2) / 2;

  return (
    <mesh
      geometry={unitQuad}
      material={material}
      position={[midX, midY, 0]}
      rotation={[0, 0, Math.atan2(dy, dx)]}
      scale={[line.length, quadWidth, 1]}
    />
  );
};
