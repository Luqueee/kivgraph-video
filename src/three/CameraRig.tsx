import React from "react";
import { useThree } from "@react-three/fiber";
import { FOV } from "./graphFrame";
import type { Look } from "./projection";

/**
 * Drives the R3F camera from a frame-derived pose.
 *
 * Imperative on purpose, and the only imperative thing in the scene. React
 * Three Fiber re-aims and re-projects its default camera whenever the canvas is
 * created or resized, so a camera described declaratively is a camera whose
 * final state depends on when the component mounted. In Studio that shows up as
 * a scene that renders correctly and then subtly moves; in a still render it
 * shows up as a match cut that is off by a pixel on some machines and not
 * others.
 *
 * Writing the pose during render and calling `updateMatrixWorld` immediately
 * makes the camera a pure function of the frame, which is the rule the whole
 * project runs on. Nothing here reads the clock or accumulates.
 */

export const CameraRig: React.FC<{ look: Look }> = ({ look }) => {
  const camera = useThree((state) => state.camera);

  camera.position.set(look.eye[0], look.eye[1], look.eye[2]);
  camera.up.set(0, 1, 0);
  camera.lookAt(look.target[0], look.target[1], look.target[2]);

  if ("fov" in camera && camera.fov !== FOV) {
    camera.fov = FOV;
    camera.updateProjectionMatrix();
  }

  camera.updateMatrixWorld();

  return null;
};
