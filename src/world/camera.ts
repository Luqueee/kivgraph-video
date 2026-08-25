/**
 * The video's shared 2.5D camera.
 *
 * Scenes 01–03 are one continuous shot through one code environment, so they
 * cannot each animate their own planes: a plane's screen position has to be a
 * consequence of where the camera is, not a per-scene hand-tuned number. This
 * module is that consequence.
 *
 * The model is a pinhole camera looking at a stack of parallel planes:
 *
 * ```text
 *   screen = cameraScreenPoint + (world − cameraTarget) × zoom × depth
 *   apparent scale = zoom × depth
 * ```
 *
 * `depth` is `1 / distance`. A plane at `depth 1` is the camera plane: it
 * carries the anchored symbol and is the material the viewer is reading.
 * A plane below 1 is behind and therefore both smaller and slower — real
 * parallax rather than two independently animated scales.
 *
 * Two consequences worth knowing before moving a camera:
 * - pulling back converges everything toward `cameraScreenPoint`, so planes at
 *   different depths overlap *more* at wide angles, not less. Lateral neighbours
 *   that must separate as the camera widens therefore live at `depth 1`;
 * - the camera targets the anchored symbol, so `withRetry` cannot drift away
 *   from its screen point by accident. Moving it is an explicit change to
 *   `screenX` / `screenY`.
 */
export type Camera = {
  /** World point the camera is centred on. The scenes target the symbol. */
  x: number;
  y: number;
  /** Apparent scale of a plane at depth 1. */
  zoom: number;
  /** Screen point the camera centre projects to. */
  screenX: number;
  screenY: number;
};

export type Projection = {
  x: number;
  y: number;
  scale: number;
};

export const project = (
  camera: Camera,
  worldX: number,
  worldY: number,
  depth: number,
): Projection => {
  const scale = camera.zoom * depth;

  return {
    x: camera.screenX + (worldX - camera.x) * scale,
    y: camera.screenY + (worldY - camera.y) * scale,
    scale,
  };
};
