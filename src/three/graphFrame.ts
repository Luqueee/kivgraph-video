import { promptLayout, selectedTokenRect } from "../components/AgentPrompt";
import { nodeById, selectedSymbolId, shellOf } from "../data/graphDemo";
import { anchorAt, pxPerUnit } from "./projection";

/**
 * Scene 03's spatial contract: where the graph is pinned, how big its type is,
 * and how each shell presents itself.
 *
 * It is separate from both the dataset and the timing because three files need
 * the same answers and must not each derive them. `src/three/graphState.ts`
 * needs the camera poses; `GraphNode.tsx` needs the plate metrics; the scene
 * needs the label metrics. If any of them re-derived another's numbers the
 * match cut would survive exactly until someone changed one of them.
 */

/** Vertical field of view, degrees. Matches `PerspectiveCamera.fov`. */
export const FOV = 50;

/**
 * Camera distance at the cut. Not a choice: it is the distance at which the
 * `withRetry()` node occupies the rectangle the DOM token occupies in scene 02.
 */
export const cutDistance = 9;

/**
 * World position of the graph group that lands `withRetry` on the token.
 *
 * Applied to the group, never to the camera: React Three Fiber re-aims a
 * default camera at world origin whenever it is created, which silently
 * discards an offset. Inside the group the anchor stays `(0, 0, 0)`.
 */
export const graphOffset = anchorAt(
  selectedTokenRect.centreX,
  selectedTokenRect.centreY,
  FOV,
  cutDistance,
);

/**
 * The base em of the graph's type, in world units.
 *
 * Fixed at the far end by the match cut: the `withRetry()` label has to be the
 * size the prompt token was. Everything else is a multiple of it.
 */
export const graphEm =
  selectedTokenRect.width /
  nodeById(selectedSymbolId).label.length /
  0.6 /
  pxPerUnit(FOV, cutDistance);

/**
 * Line box of the anchor's label, as a multiple of its em. The prompt draws its
 * selection field over a 44 px box at 30 px type; the plate that replaces that
 * field has to start as the same rectangle, or the cross-fade reads as a jump.
 */
export const selectedLineRatio =
  promptLayout.row.lineHeight / promptLayout.row.fontSize;

/**
 * How each shell presents itself.
 *
 * `em` is a gentle authored step on top of the perspective one. Distance alone
 * gives roughly `100 / 79 / 66 / 53` across the four shells at the settle
 * frame; these multipliers pull the far end back up to a legible `17 px`
 * without flattening the hierarchy, because a label the viewer cannot read is
 * not a quieter statement, it is a missing one.
 *
 * `label` is the luminance ladder, and it is where the hierarchy actually
 * lives: an outer symbol is dimmer, not merely smaller.
 *
 * The ladder was compressed on 2026-08-26, from `1 / 0.75 / 0.65 / 0.58` to
 * `1 / 0.84 / 0.76 / 0.70`, and the plate step with it. The old spread was
 * authored against a full-size frame and it did not survive the sizes this film
 * is actually watched at: embedded in GitHub, X or Reddit at 600-900 px, the
 * hop-3 labels are the three `checkout-service` consumers, which is to say the
 * payoff of the whole piece, and they were the dimmest ink in the frame.
 *
 * The hierarchy is not weaker for it. What separates the anchor is that it is
 * the brightest surface, the largest type and the only thing carrying hue at
 * rest; the shells still descend, just over a range that survives a downscale.
 *
 * `plate` is how much of the node's surface separates from the background.
 * Secondary plates are barely there on purpose — they exist to give the label a
 * body and to catch the light as the camera moves, not to be read as chips.
 */
export const shellLook = [
  { em: 1, label: 1, plate: 1 },
  { em: 0.93, label: 0.84, plate: 0.94 },
  { em: 0.88, label: 0.76, plate: 0.86 },
  { em: 0.86, label: 0.7, plate: 0.78 },
] as const;

const fallback = shellLook[shellLook.length - 1] ?? shellLook[0];

export const lookOf = (id: string) =>
  shellLook[Math.min(shellOf[id] ?? shellLook.length - 1, shellLook.length - 1)] ??
  fallback;

/**
 * Luminance of a repository label. Metadata, a step below the outermost node.
 *
 * `0.56` since 2026-08-26, up from `0.42`. `checkout-service` is the word that
 * makes the cross-repository claim land, and at `0.42` it was the faintest type
 * in the frame at the exact moment the film wants it read.
 */
export const clusterLabelOpacity = 0.56;

/**
 * Em of a repository label, in world units. Set at the outermost node's size:
 * a repository name is context, never a heading over the symbols it contains.
 */
export const clusterEm = graphEm * 0.86;

/** Horizontal air between a label and the edge of its plate, in world units. */
const platePadding = graphEm * 0.62;

/** Plate height as a multiple of the em. */
const plateHeightRatio = 2.05;

/**
 * Real depth of a plate. Small: this is a technical surface, not a slab.
 *
 * What bounds it is not taste but the width of the strip of side face the
 * camera sees beside the hairline. Across every node and every pose, at
 * `plateTilt`, this lands that strip between `0.2 px` and `3.4 px` - a chamfer
 * the eye reads as the plate turning away, next to a contour it still reads as
 * one pixel. Deeper and the two merge into a band; that is the whole history
 * of the number.
 */
const plateThickness = 0.038;

/**
 * A node's label and plate metrics, in world units.
 *
 * One definition, three consumers: the DOM label, the extruded plate behind it,
 * and the clipping of every edge that arrives at it. If they disagree, an edge
 * stops short of its own node or a plate sits crooked under its text.
 *
 * `grow` runs `0 → 1` as the anchor's inherited selection field becomes a
 * plate. At `0` the plate is exactly `selectedTokenRect`; at `1` it has the
 * padding every other node has. Secondary nodes are always at `1`.
 */
export const nodeMetrics = (
  node: { id: string; label: string },
  grow = 1,
) => {
  const look = lookOf(node.id);
  const em = graphEm * look.em;
  const anchor = node.id === selectedSymbolId;
  const width = em * 0.6 * node.label.length;

  /** The anchor starts at the prompt's line box and opens to the node's. */
  const heightRatio = anchor
    ? selectedLineRatio + (plateHeightRatio - selectedLineRatio) * grow
    : plateHeightRatio;
  const padding = anchor ? platePadding * grow : platePadding;

  return {
    em,
    labelHalfWidth: width / 2,
    halfWidth: width / 2 + padding,
    halfHeight: (em * heightRatio) / 2,
    /**
     * Every plate is one thickness. The anchor used to carry `2.1` of it.
     *
     * That multiplier existed to give the selected node a side face while the
     * plates were nearly parallel to the image plane and nothing else had one.
     * `plateTilt` supplies it now, to all eight, and the multiplier had become
     * the single worst artefact in the frame: at `0.0798` deep, and being both
     * the nearest plate and the most turned, the anchor projected a `6.1 px`
     * strip of side face along the two rims facing the lens - four times the
     * next widest plate, six times the hairline it sat beside, and on the one
     * plate that has to read as the cleanest. At one thickness it measures
     * `3.4 px`, against `0.2 - 2.8 px` for the rest: still the widest, but
     * because it is nearest and most turned, which is what a plate nearest and
     * most turned should look like, rather than because it is a special case.
     *
     * `grow` stays. The anchor's depth still arrives with it, so the selection
     * field is still seen to become an object rather than to be replaced by
     * one; it simply stops overshooting.
     */
    thickness: plateThickness * (anchor ? grow : 1),
    corner: Math.min(0.04, em * 0.28),
  };
};

/**
 * Air between a plate's contour and the tube that points at it, in world
 * units, measured perpendicular to the side the tube arrives at.
 *
 * One constant, and the clip in `GraphWorld` spends it by growing the plate
 * rectangle by exactly this much and intersecting the run with *that*, so
 * every edge stands off every plate by this distance at both of its ends by
 * construction. The old `0.09` was not that: it was added to a parametric
 * ratio, and over the five poses of the camera path the visible gap it
 * produced ran from `0.6 px` to `37.3 px` across the seven edges - one tube
 * touching its plate while another stopped a third of a plate short of it.
 *
 * Held at one arriving tube diameter, which measures `2.7 - 9.0 px` over the
 * whole camera path. That spread is the plates' own perspective and
 * foreshortening and not slack in the gutter: the gap lies on the plate's face
 * and shortens with it, so it stays in constant proportion to the plate it
 * belongs to. Smaller, and the tube crosses the hairline and reads as piercing
 * the plate; larger, and it reads as a leader line pointing at a box rather
 * than as a relation arriving at one.
 */
export const edgeGutter = 0.05;

/**
 * The orientation every plate shares, in radians, and the order its axes are
 * composed in.
 *
 * **There is no plate rotation. The plates stand upright in world space and the
 * camera supplies every degree of obliquity.**
 *
 * Three versions shipped here and the history is worth keeping, because the
 * first two were argued from geometry that was true at the time.
 *
 * It began at `[0.055, -0.12, 0]`, about `3°` and `7°`, which read as "flat and
 * slightly crooked" rather than as a surface in space. It was then raised to
 * `[0.3, -0.16, 0]` - `17.2°` of pitch and `9.2°` of yaw - with the asymmetry
 * chosen deliberately: a label was DOM text drawn flat over the plate by
 * `projectPoint`, so the plate could only turn as far as its own padding
 * absorbed. Measured over every node at every pose, the label's flat half-width
 * sat at `0.92` of the plate's projected half-width, and `CheckoutService.
 * PlaceOrder()` at twenty-eight characters spent nearly all of it. Yaw ate that
 * directly; pitch did not, because a plate is `2.05 em` tall around `0.8 em` of
 * ink. So the depth was bought on the axis that had room.
 *
 * Both of those arguments died with the DOM label. The labels are now `Text` in
 * the scene, and a plate rotation that was invisible when the text was pinned
 * flat to the screen became the loudest thing in the frame once the text turned
 * with the plate:
 *
 * - pitch composed with yaw rolls the plate's horizontal axis by `rx * ry`,
 *   `2.7°` at those angles, and with the text riding along that roll rotated
 *   every baseline. Far labels rendered as fake italics. `YXZ` order kept the
 *   plate's own x axis horizontal but could do nothing for the text's, because
 *   the text is a child of the tilted group and not a screen-space overlay;
 * - killing the pitch did not fix it. A plate yawed about the vertical axis and
 *   seen from a camera above it also projects rotated - `atan(sin(elevation) *
 *   tan(yaw))`, which is `4.4°` at the rest pose and `8.3°` once the rig has
 *   risen. Rendered, the whole graph read as a tilted horizon;
 * - killing the yaw and keeping the pitch fails symmetrically, because the rig
 *   also swings sideways: pitch against camera azimuth rolls exactly as yaw
 *   against camera elevation does.
 *
 * The failure is not the axis, it is that the rotation was **global**. Every
 * plate carried the same one, so every label rotated by the same angle, and a
 * uniform rotation across the whole frame reads as a mistake in the camera
 * rather than as depth in the objects.
 *
 * Upright plates do not have that problem and are not flat either. Each plate
 * sits at a different place in a 16-unit cascade, so an off-axis camera sees
 * each one at its own oblique angle: the near plates show a chamfer of side
 * face, the far ones skew, and the amount **varies per plate**. That variation
 * is the depth cue. A global tilt was adding a constant to it and calling the
 * constant three-dimensionality.
 *
 * `plateFrame` is therefore the identity basis today. It stays as a named export
 * because the edge clipping resolves the run against the plate's own axes, and
 * that code should keep asking the plate what its axes are rather than assuming
 * the world's.
 */
export const plateTilt = [0, 0, 0] as const;
export const plateTiltOrder = "YXZ" as const;

/**
 * The plate's orientation as three unit world axes, derived from `plateTilt`
 * so that the geometry and the edge clipping cannot come out of it disagreeing.
 * `normal` is the front face's outward direction; `right` and `up` span the
 * face, in the same units as `nodeMetrics`' `halfWidth` and `halfHeight`.
 */
export const plateFrame = (() => {
  const [rx, ry] = plateTilt;
  const cx = Math.cos(rx);
  const sx = Math.sin(rx);
  const cy = Math.cos(ry);
  const sy = Math.sin(ry);

  /** Ry * Rx, matching `plateTiltOrder`. */
  return {
    right: [cy, 0, -sy] as const,
    up: [sy * sx, cx, cy * sx] as const,
    normal: [sy * cx, -sx, cy * cx] as const,
  } as const;
})();

/**
 * Tube radius of an edge, in world units, while it is resolving and once it has
 * settled. The difference is deliberate and small: a relation announces itself
 * as it is discovered and then takes its place in the structure.
 *
 * Sized against the settle camera, where a world unit is about 88 master
 * pixels: a settled edge is roughly 3.9 px across, an arriving one 4.6 px.
 * Thinner values were tried and measured - at 2 px the tube is thinner than
 * the antialiasing that covers it and the whole graph renders as a set of
 * pale hairlines, which is the flatness a tube exists to avoid. Much thicker,
 * carrying full accent, and an arriving edge reads as a beam.
 */
export const edgeRadius = { active: 0.026, idle: 0.022 } as const;
