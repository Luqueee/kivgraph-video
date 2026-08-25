# Kivgraph — Product Video

Promotional product video for **[Kivgraph](https://github.com/luqueee/kivgraph)**, built programmatically with **Remotion**, **React**, **TypeScript** and **Three.js / React Three Fiber**.

The video explains Kivgraph's core idea through a short visual story:

> **What breaks if you change this?**

It moves from source code to semantic relationships, cross-repository dependencies and blast-radius analysis, using Three.js only where spatial structure helps explain the product.

---

## Stack

- [Remotion](https://www.remotion.dev/)
- React
- TypeScript
- Three.js
- React Three Fiber
- Bun

---

## Requirements

- Bun
- A supported Chromium environment for Remotion rendering

Install dependencies:

```bash
bun install
```

---

## Development

Start Remotion Studio:

```bash
bun run dev
```

If the project scripts differ, check:

```text
package.json
```

Remotion Studio is the primary environment for:

- previewing the video;
- scrubbing the timeline;
- inspecting individual frames;
- validating transitions;
- iterating on Three.js scenes.

---

## Documentation

The project deliberately separates global creative direction, scene structure and scene-specific context.

### `STORYBOARD.md`

Defines the complete creative direction:

- narrative;
- brand;
- visual language;
- timing;
- Three.js philosophy;
- major transitions;
- key messages;
- benchmark presentation;
- CTA.

Start here if you want to understand **what the video is supposed to communicate**.

---

### `SCENES.md`

Contains the current scene map:

- scene order;
- frame ranges;
- durations;
- implementation state;
- high-level scene responsibilities.

Use it to understand **how the current edit is structured**.

---

### `docs/scenes/`

Detailed documentation for each individual scene.

```text
docs/scenes/
├── README.md
├── 01-symbol.md
├── 02-problem.md
├── 03-agent.md
├── 04-graph-reveal.md
├── 05-cross-repo.md
├── 06-blast-radius.md
├── 07-semantic-resolution.md
├── 08-agent-answer.md
├── 09-benchmark.md
├── 10-brand.md
└── 11-outro.md
```

These documents preserve the intent behind each scene:

- purpose;
- viewer takeaway;
- composition;
- animation;
- camera;
- Three.js behavior;
- transitions;
- key frames;
- invariants;
- known compromises.

Read the relevant scene document before making significant changes to that scene.

---

### `AGENTS.md`

Defines how coding agents must work in this repository.

It covers:

- documentation requirements;
- Remotion constraints;
- deterministic animation;
- Three.js rules;
- TokenSave usage;
- validation;
- completion requirements.

Agents should read it before modifying the project.

---

## Documentation hierarchy

When understanding a scene, follow:

```text
STORYBOARD.md
      ↓
SCENES.md
      ↓
docs/scenes/<scene>.md
      ↓
src/
```

Each layer has a different responsibility:

| Source             | Responsibility          |
| ------------------ | ----------------------- |
| `STORYBOARD.md`    | Global creative intent  |
| `SCENES.md`        | Current video structure |
| `docs/scenes/*.md` | Detailed scene intent   |
| `src/`             | Implementation          |

Documentation and implementation should remain synchronized.

---

## Project structure

The codebase is organized around scenes and reusable visual systems.

```text
.
├── AGENTS.md
├── STORYBOARD.md
├── SCENES.md
│
├── docs/
│   └── scenes/
│
├── public/
│
├── src/
│   ├── Composition.tsx
│   ├── Root.tsx
│   ├── index.ts
│   ├── index.css
│   │
│   ├── scenes/
│   ├── components/
│   ├── three/
│   ├── data/
│   ├── brand/
│   └── lib/
│
├── package.json
├── bun.lock
├── remotion.config.ts
├── eslint.config.mjs
└── tsconfig.json
```

Not every planned directory needs to exist from the beginning. Files are added as the implementation evolves.

---

## Video specification

Current master composition:

```text
Resolution:    1920 × 1080
Aspect ratio:  16:9
Frame rate:    60 FPS
Duration:      25 seconds
Total frames:  1500
```

The video is designed to work:

- with audio;
- without audio;
- embedded on a website;
- in the GitHub README;
- on social platforms.

Future variants may target:

```text
1:1
4:5
9:16
```

---

## Scene timeline

The current high-level edit is:

```text
0000–0090   Symbol
0090–0240   Problem
0240–0420   Agent
0420–0720   Graph Reveal
0720–0810   Cross Repository
0810–0930   Blast Radius
0930–1080   Semantic Resolution
1080–1170   Agent Answer
1170–1290   Benchmark
1290–1380   Brand
1380–1500   Outro
```

For the authoritative current structure, see:

```text
SCENES.md
```

---

## Animation model

Animations are deterministic and driven by the Remotion timeline.

The general rule is:

```text
visual state = f(frame)
```

For example:

```tsx
const frame = useCurrentFrame();

const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

The same frame must always produce the same result.

---

## Three.js

Three.js is used primarily for visualizing:

- semantic relationships;
- dependency paths;
- cross-repository connections;
- blast radius.

It is not intended as decorative 3D.

Three.js animation is also driven by Remotion frames rather than real-time mutation.

Conceptually:

```text
source code
    ↓
semantic symbol
    ↓
graph
    ↓
cross-repository structure
    ↓
change impact
```

---

## Graph data

Demo graph data should remain deterministic and separate from rendering logic.

The preferred model is:

```text
graph data
    ↓
precomputed positions
    ↓
frame-derived visual state
    ↓
Three.js rendering
```

Do not run non-deterministic graph simulations during video rendering.

---

## Working on a scene

Recommended workflow:

1. Read `STORYBOARD.md`.
2. Read `SCENES.md`.
3. Read the matching `docs/scenes/<scene>.md`.
4. Inspect the current implementation.
5. Implement the change.
6. Preview it in Remotion Studio.
7. Inspect important frames manually.
8. Update scene documentation if creative behavior changed.
9. Render only the affected range when possible.
10. Render the full video once the change is mature.

---

## Rendering

Use the scripts defined in:

```text
package.json
```

For direct Remotion CLI usage, a typical render looks like:

```bash
bunx remotion render <composition-id> out/kivgraph.mp4
```

During development, prefer rendering only the relevant frame range where possible.

Example:

```bash
bunx remotion render <composition-id> out/test.mp4 --frames=420-720
```

Avoid repeatedly rendering the entire 1500-frame composition for small changes.

---

## Brand direction

The video should feel:

- technical;
- precise;
- minimal;
- credible;
- developer-focused;
- premium.

Avoid generic AI aesthetics such as:

- AI brains;
- holograms;
- random network particles;
- rainbow gradients;
- excessive neon;
- cyberpunk effects.

The graph should communicate information, not visual noise.

---

## Core messages

The video's main messages include:

> **What breaks if you change this?**

> **Cross-repository.**

> **Exact symbols. Not name matches.**

> **A name is not a symbol.**

> **Exact code intelligence for coding agents.**

---

## Contribution rule

When changing the creative behavior of a scene, update its documentation in the same change.

A scene should never reach a state where future contributors have to reverse-engineer its purpose from animation code alone.

---

## License

See the repository license if one is provided.
