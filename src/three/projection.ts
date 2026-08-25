/**
 * Mapping between master pixels and the Three.js world.
 *
 * Scenes 01 and 02 place things in master pixels. Scene 03 places them in world
 * units and lets a perspective camera decide where they land. The match cut at
 * `0329/0330` is the one frame where both descriptions must agree exactly, so
 * the conversion cannot be eyeballed — it lives here, and both sides read it.
 *
 * Assumptions, all of which the graph scene must honour:
 *
 * - the camera looks straight down `-Z` with no rotation;
 * - the subject sits on the plane `z = 0`;
 * - `fov` is the vertical field of view in degrees, which is what three.js
 *   means by `PerspectiveCamera.fov`.
 *
 * If the graph scene ever tilts or rotates the camera, these functions stop
 * being exact and the match-cut frame has to be re-derived.
 */

/** Master composition size. The video is authored at exactly this resolution. */
export const master = { width: 1920, height: 1080 } as const;

/**
 * Pixels per world unit on the plane `z = 0`.
 *
 * The visible height at distance `d` is `2 · d · tan(fov / 2)`, and that height
 * is the full 1080 px of the frame.
 */
export const pxPerUnit = (fov: number, distance: number) =>
  master.height / 2 / (distance * Math.tan((fov * Math.PI) / 360));

/** World size of a length given in master pixels, on the plane `z = 0`. */
export const unitsFromPx = (px: number, fov: number, distance: number) =>
  px / pxPerUnit(fov, distance);

/**
 * World position that makes the graph's origin land on a given screen point.
 *
 * Apply it to the group that holds the graph, not to the camera. React Three
 * Fiber's default camera re-aims at world origin whenever it is created or
 * resized, so a camera moved sideways silently rotates back and the subject
 * returns to the middle of the frame — measured: a plane calibrated by camera
 * offset rendered dead centre and 1.3% small, the 1.3% being the extra oblique
 * distance. Offsetting the subject cannot be undone that way.
 *
 * Inside the group the anchor stays `(0, 0, 0)`, so `withRetry` keeps the same
 * address in the graph that it has in `CodeWorld`.
 */
export const anchorAt = (
  screenX: number,
  screenY: number,
  fov: number,
  distance: number,
): [number, number, number] => {
  const k = pxPerUnit(fov, distance);

  return [
    (screenX - master.width / 2) / k,
    (master.height / 2 - screenY) / k,
    0,
  ];
};

/** A camera pose: where it is and what it points at. */
export type Look = {
  readonly eye: readonly [number, number, number];
  readonly target: readonly [number, number, number];
};

const sub = (
  a: readonly [number, number, number],
  b: readonly [number, number, number],
) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]] as const;

const cross = (
  a: readonly [number, number, number],
  b: readonly [number, number, number],
) =>
  [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ] as const;

const dot = (
  a: readonly [number, number, number],
  b: readonly [number, number, number],
) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const unit = (a: readonly [number, number, number]) => {
  const length = Math.sqrt(dot(a, a));

  return [a[0] / length, a[1] / length, a[2] / length] as const;
};

/**
 * The camera's orthonormal basis, derived exactly as `Object3D.lookAt` derives
 * it: forward toward the target, right from `forward × up`, up completing the
 * frame. World up is `(0, 1, 0)`, so the camera never rolls.
 */
export const lookBasis = (look: Look) => {
  const forward = unit(sub(look.target, look.eye));
  const right = unit(cross(forward, [0, 1, 0]));

  return { forward, right, up: cross(right, forward) } as const;
};

/**
 * Where a world point lands on the master frame under an arbitrary camera pose,
 * and how far it is along the view axis.
 *
 * This is the projection the DOM labels use, and it must agree with the one
 * Three.js applies to the geometry to the pixel — the labels and the plates
 * they sit on are drawn by two different renderers and have to describe the
 * same object. Written out rather than read back from the R3F camera because
 * the scene needs it during render, before the canvas has drawn anything.
 *
 * With `eye = (0, 0, d)` and `target = (0, 0, 0)` the basis is the identity and
 * this reduces to `pxPerUnit` scaling about the frame centre, which is what
 * makes the match cut survive the arrival of a moving camera.
 */
export const projectPoint = (
  point: readonly [number, number, number],
  look: Look,
  fov: number,
) => {
  const { forward, right, up } = lookBasis(look);
  const offset = sub(point, look.eye);
  const distance = dot(offset, forward);
  const scale = pxPerUnit(fov, distance);

  return {
    distance,
    scale,
    x: master.width / 2 + dot(offset, right) * scale,
    y: master.height / 2 - dot(offset, up) * scale,
  } as const;
};
