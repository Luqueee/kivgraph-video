import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { GraphWorld } from "../components/GraphWorld";
import { CodeWorld } from "../components/CodeWorld";
import { getCrossRepoState } from "../three/crossRepoState";
import type { Camera } from "../world/camera";
import { brand } from "../brand/tokens";

/**
 * Scene 04 - cross-repository (master 0630-0720, scene-local 0000-0090).
 *
 * Ninety frames that turn the camera around the cascade and take away
 * everything the crossing is not.
 *
 * The viewer already saw the impact leave `payments-api`; they watched three
 * relations travel out of the frame and land on labels that were not there
 * before. This scene does not show them that again, and it does not tell them
 * what it was called. It moves around it.
 *
 * That is a change of purpose, recorded because the first implementation shipped
 * and was cut. This scene used to darken the whole frame to `0.86` and read the
 * word `Cross-repository.` on the veil, and the rest of it - the subtraction,
 * the quiet rig translation - existed to keep the word company. The word went
 * because it landed as a subtitle burnt over a shot rather than as part of the
 * film, and with it went the veil, which had no reason to darken a frame nobody
 * was being asked to read. What is left is the beat the video actually needed
 * here: the one place where the graph is seen from a moving camera long enough
 * to read as a thing in space.
 *
 * Two mechanisms, and they are the same argument twice:
 *
 * - the rig **turns**. The eye swings 4.2 units laterally while the target holds
 *   nearly still, so the view direction rotates 15.5 degrees, every plate turns
 *   against the camera and the near end of the cascade crosses the frame
 *   against the far group instead of sliding with it. Depth stops being
 *   something the layout claims and becomes something the picture shows;
 * - the local chain **recedes**. `Policy.Do()` and `Once()` and their edges fall
 *   back to a fifth of their presence, leaving the claim at full strength:
 *   `withRetry()`, the public pair the impact travels through, the three
 *   consumers in another codebase, and the three edges between them.
 *
 * The subtraction is what makes the turn legible. Scene 03's document records
 * that the layout admits no more oblique camera while eight labels have to stay
 * readable; this scene has six, and buys its angle in the room that makes.
 *
 * Continuity is still the hard constraint. Master 0630 must be
 * indistinguishable from 0629 - same camera, same eight plates, same seven
 * tubes, same two cluster labels, same code texture underneath - so the graph
 * is drawn by the same `GraphWorld` scene 03 uses, and every value in
 * `getCrossRepoState` starts at the value scene 03 ends on. The rig now lands
 * somewhere new rather than returning, and scene 05 inherits that landing pose
 * through `getCrossRepoState(90)` instead of restating it.
 *
 * See `docs/scenes/04-cross-repo.md` for intent, beats and invariants.
 */

/**
 * The code bed, held at scene 03's final values.
 *
 * Scene 03 ramps these across its own 300 frames and lands here. Freezing them
 * is what keeps the file the graph came out of underneath the graph rather than
 * having it resume travelling in a scene whose camera is only turning. The
 * literals are scene 03's `fall(from, to)` endpoints at `open = 1`.
 */
const bedCamera: Camera = { x: 0, y: 0, zoom: 0.34, screenX: 960, screenY: 540 };

export const CrossRepoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const state = getCrossRepoState(frame);

  return (
    <AbsoluteFill style={{ backgroundColor: brand.background }}>
      <CodeWorld
        camera={bedCamera}
        main={{
          symbol: 0.062,
          signature: 0.062,
          body: 0.03,
          context: 0.026,
        }}
        symbolColor={brand.textSecondary}
        neighbours={0.022}
        bed={0.02}
        mark={0}
        select={0}
      />

      <GraphWorld state={state} />
    </AbsoluteFill>
  );
};
