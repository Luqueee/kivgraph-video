import React from "react";
import * as THREE from "three";

/**
 * A relationship, drawn as a tube along a Catmull-Rom curve.
 *
 * A tube rather than a line because `linewidth` is ignored by every WebGL
 * platform that matters, so a `lineBasicMaterial` edge is one pixel wide at
 * every distance - which is precisely the flatness this scene exists to
 * remove. Real geometry means an edge near the camera is visibly heavier than
 * one behind it, and the depth of the graph survives a still frame.
 *
 * The curve bows toward the camera and to one side. Both matter, and neither
 * is load-bearing for the one thing they are usually credited with: the two
 * edges leaving `withRetry()` are held apart by the points at which the clip
 * lands them on its contour, not by their curvature. What the lateral bow does
 * is make them read as two strokes rather than as one forked line, and the bow
 * in `+Z` means an edge is never coplanar with the plates it connects, so it
 * passes visibly *in front of* the space between them.
 *
 * The tube is built here rather than by `TubeGeometry` for one reason:
 * `TubeGeometry` has one radius, and this one has to reach zero at both ends.
 * An edge stops a fixed gutter short of the plate it points at, so both of its
 * ends are in open space, and a cylinder that ends in open space shows its
 * cross-section - a flat disc, four pixels across, on the end of every edge in
 * the frame. Tapering the last ring to zero costs one line and ends the tube
 * in a point instead. Sphere caps were the alternative and were rejected: a
 * bead is *wider* than the tube it sits on, and an edge with beads on both
 * ends reads as a diagram of a relation rather than as the relation.
 *
 * Edges draw from the node the change reaches *toward* the node already on
 * screen. The dataset stores `caller -> callee` and the animation traverses it
 * backwards: what is being animated is impact leaving `withRetry()`, which is
 * the question being answered.
 */

/**
 * Lateral bow, as a fraction of the run's own length.
 *
 * Down from `0.07`, and the old value is what "the edges wander" was measuring.
 * Over every frame each edge is actually on screen, at the real camera: at
 * `0.07` a settled tube left the straight screen line between its own two ends
 * by as much as `54.8 px`, and `Client.Refund() -> Once()` peaked at `39.4 px`
 * over a `320 px` chord - 12.3%, which is not a bow but a detour. At `0.032`
 * the worst case is `22.9 px` over `321 px` (7.1%) and the settled peaks run
 * `11.1` to `28.4 px`.
 *
 * It is the smallest value at which every edge still reads as a curve, and the
 * floor is what fixes it: the weakest arc in the graph is the hop into
 * `withRetry()` at `11.1 px`, against a tube `4.4` to `5.7 px` wide - about
 * two tube widths of departure from straight. At `0.024` that arc falls to
 * `8.1 px` and at `0.016` to `5.0 px`, which is one tube width and reads as a
 * straight line with a kink in the middle. `0.13 + 0.012 L` of lift toward the
 * camera is left doing the rest, and on its own it accounts for `2.6` to
 * `10.6 px` of the figures above.
 *
 * Two things the bow is *not* carrying, both checked rather than assumed.
 * Clearance: no curve touches a plate or a cluster label it does not connect
 * at any bow between `0` and `0.45`, and at this value the nearest approach is
 * `1.128` world units - it grows as the bow shrinks, so the small value is the
 * safe one. Separation: two edges meeting at one plate are closest where they
 * touch it, and the clip in `GraphWorld` lands them at different points on its
 * contour, so the tightest sibling approach in the graph is `40.2 px` and is
 * identical at `0.07` and at `0`. The bow's remaining job is only to read *as*
 * a curve, so that two relations leaving one symbol are two strokes and not a
 * fork.
 */
const bowRatio = 0.032;

/**
 * Distance between rings along the tube, in world units - `9 px` at the settle
 * camera - and facets around it.
 *
 * A spacing rather than a segment count. The runs in this graph differ by a
 * factor of three in length, so a fixed count samples the long crossings three
 * times more coarsely than the short hops, and - since the nose below is one
 * ring long - would give the far edges a nose three times the size of the near
 * ones. A constant spacing makes both the curve's fidelity and the nose the
 * same everywhere.
 *
 * Six facets: at these radii the tube is four pixels across, where a hexagonal
 * cross-section and a circular one differ by a third of a pixel.
 */
const ringSpacing = 0.1;
const facets = 6;

type Props = {
  from: readonly [number, number, number];
  to: readonly [number, number, number];
  /** Which side the curve bows to, `+1` or `-1`. Siblings take opposite sides. */
  bow: number;
  draw: number;
  radius: number;
  colour: string;
  opacity: number;
};

export const GraphEdge: React.FC<Props> = ({
  from,
  to,
  bow,
  draw,
  radius,
  colour,
  opacity,
}) => {
  const geometry = React.useMemo(() => {
    const start = new THREE.Vector3(from[0], from[1], from[2]);
    const end = new THREE.Vector3(to[0], to[1], to[2]);
    const span = end.clone().sub(start);
    const length = span.length();

    /**
     * The bow is applied perpendicular to the run in the XY plane, plus a
     * constant lift toward the camera, both scaled by length so a short hop
     * does not arc like a long one.
     *
     * `length` is the *clipped* run, between the two points where the relation
     * meets its plates, not the distance between the two nodes - so the curve
     * belongs to the stretch actually drawn, and the arc of a short hop is set
     * by the gap it crosses rather than by how far apart its symbols are.
     *
     * The lateral term is deliberately small; `bowRatio` carries the argument
     * and the measurements. What used to bound it - an edge swinging across the
     * `checkout-service` label at three times this value - no longer does:
     * clipped to the plates, no curve touches a third plate or label at any bow
     * up to `0.45`. The bound is now legibility, in both directions.
     */
    const lateral = new THREE.Vector3(-span.y, span.x, 0)
      .normalize()
      .multiplyScalar(bow * length * bowRatio);
    const mid = start
      .clone()
      .add(end)
      .multiplyScalar(0.5)
      .add(lateral)
      .add(new THREE.Vector3(0, 0, 0.13 + length * 0.012));

    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    const rings = Math.max(4, Math.round((length * draw) / ringSpacing));
    const positions = new Float32Array((rings + 1) * (facets + 1) * 3);
    const indices = new Uint16Array(rings * facets * 6);

    /**
     * A reference axis for the cross-section, taken once from the run rather
     * than per ring: a reference chosen ring by ring can swap mid-curve and
     * twist the tube through a quarter turn between two rings. Which axis it
     * is does not matter - the section is a circle and the material is unlit
     * and untextured, so the frame's roll is invisible - only that it is never
     * parallel to the tangent, which is what the comparison guarantees.
     */
    const reference =
      Math.abs(span.z) < length * 0.9
        ? new THREE.Vector3(0, 0, 1)
        : new THREE.Vector3(0, 1, 0);

    const point = new THREE.Vector3();
    const behind = new THREE.Vector3();
    const ahead = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const wide = new THREE.Vector3();
    const tall = new THREE.Vector3();

    /** Half a ring, for the tangent. */
    const nudge = draw / rings / 2;

    for (let ring = 0; ring <= rings; ring += 1) {
      const t = (ring / rings) * draw;

      /**
       * The tangent from the two neighbouring samples, into vectors owned by
       * this call. `Curve.getTangent` would do the same over its own delta,
       * but it returns two fresh `Vector3` per ring and this geometry is
       * rebuilt on every frame of the scene.
       */
      curve.getPoint(t, point);
      curve.getPoint(Math.max(0, t - nudge), behind);
      curve.getPoint(Math.min(draw, t + nudge), ahead);
      tangent.copy(ahead).sub(behind).normalize();
      wide.crossVectors(tangent, reference).normalize();
      tall.crossVectors(tangent, wide);

      /**
       * The nose. Both terminal rings collapse to the spine, so each end of
       * the tube is a cone one ring spacing long - about twice the tube's own
       * width, at the resolving radius and at the settled one, near the camera
       * and far from it, because the spacing is a world constant and the
       * radius is small against it. It applies to the growing tip as much as
       * to the two ends: a relation being drawn arrives as a point.
       */
      const section = ring === 0 || ring === rings ? 0 : radius;

      for (let facet = 0; facet <= facets; facet += 1) {
        /**
         * The section's angular convention and the winding below are
         * `TubeGeometry`'s, and `tall` is `tangent x wide` exactly as its
         * Frenet binormal is `tangent x normal`, so the faces come out
         * outward and the tube survives the material's default `FrontSide`.
         */
        const angle = (facet / facets) * Math.PI * 2;
        const across = -Math.cos(angle) * section;
        const along = Math.sin(angle) * section;
        const at = (ring * (facets + 1) + facet) * 3;

        positions[at] = point.x + wide.x * across + tall.x * along;
        positions[at + 1] = point.y + wide.y * across + tall.y * along;
        positions[at + 2] = point.z + wide.z * across + tall.z * along;
      }
    }

    let cursor = 0;

    for (let ring = 0; ring < rings; ring += 1) {
      for (let facet = 0; facet < facets; facet += 1) {
        const near = ring * (facets + 1) + facet;
        const far = near + facets + 1;

        indices[cursor] = near;
        indices[cursor + 1] = far;
        indices[cursor + 2] = near + 1;
        indices[cursor + 3] = far;
        indices[cursor + 4] = far + 1;
        indices[cursor + 5] = near + 1;
        cursor += 6;
      }
    }

    const tube = new THREE.BufferGeometry();

    /**
     * Position and index and nothing else: the material is `MeshBasicMaterial`,
     * which reads neither normals nor uvs. A lit tube would need both.
     */
    tube.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    tube.setIndex(new THREE.BufferAttribute(indices, 1));

    return tube;
  }, [from, to, bow, draw, radius]);

  if (draw < 0.012 || opacity < 0.004) {
    return null;
  }

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        color={colour}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </mesh>
  );
};
