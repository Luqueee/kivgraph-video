# AGENTS.md

## Project

Promotional video for **Kivgraph**, built with Remotion, React, TypeScript and Three.js / React Three Fiber.

The goal is a deterministic, polished product video that makes Kivgraph understandable and memorable.

This file defines agent behavior. Creative and scene documentation lives elsewhere.

---

## Sources of truth

Use project context in this order:

1. `STORYBOARD.md` — global narrative, brand, creative direction and overall video intent.
2. `SCENES.md` — current scene structure, timing, ordering and scene-level project state.
3. `docs/scenes/<scene>.md` — detailed creative and technical intent for a specific scene.
4. Current implementation.

Do not infer creative intent from code alone.

If these sources disagree, inspect the most recent implementation/context and update the relevant documentation so they become consistent again.

---

## Before editing a scene

Before any non-trivial scene change:

1. Read `STORYBOARD.md`.
2. Read `SCENES.md`.
3. Read the corresponding `docs/scenes/<scene>.md`.
4. Inspect the current implementation.
5. Inspect adjacent scenes if transitions may be affected.

For Remotion-specific behavior, use the local skills under:

```text
.claude/skills/
```

Prefer those skills over remembered or guessed Remotion APIs.

---

## Documentation contract

Every implemented scene must have corresponding documentation under:

```text
docs/scenes/
```

A scene document preserves:

- purpose and viewer takeaway;
- visual intent;
- motion and camera intent;
- Three.js role;
- transitions;
- key frames;
- invariants;
- known compromises.

If implementation materially changes any of these, update the scene document in the same task.

Maintain:

```text
docs/scenes/README.md
```

as the documentation index.

Maintain:

```text
SCENES.md
```

whenever a change affects:

- scene order;
- scene names;
- frame ranges;
- durations;
- scene boundaries;
- implementation status;
- scenes being added, removed, split or merged.

A scene task is not complete while its documentation is knowingly stale.

---

## TokenSave MCP

Use **TokenSave as the default tool for structural codebase exploration when available**.

Prefer TokenSave before broad grep, large file reads or Explore-style agents when the task involves:

- understanding modules;
- locating symbols;
- callers or callees;
- dependencies;
- change impact;
- affected code.

Use direct file reads or `rg` for:

- exact text;
- copy;
- CSS;
- documentation;
- asset references;
- inspecting files that will actually be modified.

TokenSave complements direct inspection; it does not replace reading the target files.

If TokenSave availability is uncertain, check its status rather than assuming it is unavailable.

After meaningful structural changes, refresh/synchronize the TokenSave index before relying on structural queries again.

Do not launch broad codebase exploration when TokenSave can answer the structural question more efficiently.

---

## Package manager

Use pnpm:

```bash
pnpm install
pnpm add <package>
pnpm run <script>
pnpm exec <command>
```

Do not introduce another lockfile. `bun.lock` was deleted when the project moved
to pnpm; do not bring it back and do not run `bun install`.

Do not manually edit `pnpm-lock.yaml`.

Remotion resolves some of its own packages by path, and under pnpm's virtual
store `remotion versions` reports a split: the directly declared packages sit on
one version and the transitively pulled ones on another. It renders correctly
regardless, and this is accepted rather than fixed. Keep every directly declared
`remotion` / `@remotion/*` entry pinned to the same exact version, with no
caret — a caret on `@remotion/three` is what caused the split in the first place.

---

## Remotion

All video animation must be deterministic from the current frame.

Preferred model:

```text
visualState = f(frame)
```

Use Remotion timeline primitives such as:

```text
useCurrentFrame()
interpolate()
spring()
Sequence
```

Do not drive important video animation with:

```text
Date.now()
setInterval()
requestAnimationFrame()
unseeded Math.random()
CSS animation timing
```

The same frame must always produce the same visual result.

---

## Three.js

Three.js exists to explain Kivgraph's structure, especially:

- semantic relationships;
- cross-repository connections;
- dependency paths;
- blast radius.

It is not decorative.

Three.js animation must also derive from the Remotion frame.

Do not use realtime mutation such as:

```tsx
useFrame(() => {
  object.position.x += 0.01;
});
```

Derive camera, nodes, edges, materials and lighting from `useCurrentFrame()` instead.

Avoid unnecessary:

- particles;
- bloom;
- physics;
- continuous camera orbiting;
- dramatic spins;
- cyberpunk effects.

"Continuous orbiting" rather than "orbiting": a **bounded** turn is not only
allowed, it is the point of scene 04. A camera that moves once, from one settled
pose to another, and stops, is what makes a plate read as a surface in space
instead of a card. What is banned is the camera that never stops — the slow
perpetual drift that says "3D scene" and explains nothing. The test is whether
the move ends: if the last frames of the scene are a photograph, it is a gesture;
if they are still moving, it is wallpaper.

### Librerías: qué se usa y qué se rechazó

El stack es `@react-three/fiber` + `three` + `@react-three/drei`, con datos
propios. No hay librería de grafos, y no hay postprocesado: se probó y se
desinstaló.

| Se usa                          | Para qué                                             |
| ------------------------------- | ---------------------------------------------------- |
| `drei` `<Text>` (troika SDF)    | etiquetas de nodo y de repositorio, dentro de escena  |
| geometría propia extruida       | las placas; nunca un componente prehecho             |
| `TubeGeometry` Catmull-Rom      | las aristas, con radio en unidades de mundo          |

Y esto se rechazó **después de construirlo y medirlo**, que es distinto de
rechazarlo de entrada:

- **`postprocessing` `DepthOfField`**: el composer vacío es un no-op (`PSNR =
  inf`), pero con un solo efecto los grises del grafo se van — placa del ancla de
  `33 35 37` a `112 128 149`, cuadro completo a 26,4 dB. Su pase final re-codifica
  un render que ya está en sRGB. Y aunque se arreglara el color, las
  restricciones sólo le dejan desenfocar dos nodos que ya están a `0.22`. Detalle
  completo en `STORYBOARD.md` §15.

Y esto se rechazó de entrada, con el motivo, para que no vuelva a proponerse:

- **`react-force-graph-3d`** y cualquier renderer de grafos: no dan control
  artístico, y las posiciones aquí están buscadas contra métricas de tipografía
  reales, no simuladas.
- **GSAP** y cualquier motor de tweens con reloj propio: en Remotion el reloj
  **es** el frame. `interpolate()` ya es puro por frame; un `tl.seek(frame/fps)`
  sería determinista pero no aporta nada y añade una dependencia grande.
- **Bloom**: `STORYBOARD.md` lo lista explícitamente entre lo que no se usa.
- **Partículas, `Trail`, estelas**: §12, «No utilizar electricidad, rayos ni
  partículas».
- **`Billboard`**: una etiqueta siempre de frente anula el motivo de girar las
  placas. El texto gira **con** su placa; es el argumento entero del cambio.
- **`Line2` / `QuadraticBezierLine`**: el grosor es en espacio de pantalla, o sea
  que no escorza con la profundidad. Es un retroceso frente a los tubos.
- **Colores o iconos por tipo de nodo**: §10 rechaza cinco colores por tipo, y
  todas las placas son deliberadamente la misma placa. El estado es físico
  (luminancia, acabado, hairline de accent), no cromático.
- **`Text3D`**: geometría por glifo, pesada y con peor borde que un SDF al
  tamaño al que se lee aquí.

If an effect does not improve understanding, attention, narrative or brand, remove it.

---

## Graph data

Graph data and layout must be deterministic.

Do not calculate random or force-directed positions during video rendering.

If layout computation is required:

```text
compute once
→ store coordinates
→ render stored coordinates
```

Keep graph data separate from rendering logic.

---

## Brand

Preserve the existing Kivgraph identity.

The video should feel:

```text
technical
precise
minimal
credible
developer-focused
```

Avoid generic AI aesthetics.

Use centralized brand tokens rather than arbitrary colors spread across components.

Do not invent new branding unless explicitly requested.

---

## Story and timing

Do not casually change:

- global narrative;
- scene order;
- frame boundaries;
- important copy;
- benchmark values;
- key narrative beats.

If a requested change intentionally affects these, update the relevant sources:

```text
STORYBOARD.md
SCENES.md
docs/scenes/<scene>.md
docs/scenes/README.md
```

as applicable.

Documentation and implementation must not knowingly contradict each other.

---

## Benchmark integrity

Never invent, round or modify benchmark values for visual convenience.

Displayed values must match the published Kivgraph benchmark.

If benchmark data changes, update every affected visual and documentation reference consistently.

---

## Implementation style

Prefer explicit, domain-specific components.

Good:

```text
Terminal
CodeEditor
GraphNode
GraphEdge
CameraRig
MetricCard
```

Avoid unnecessary generic abstraction layers.

Do not create planned files or directories until they are actually useful.

Preserve unrelated existing work when modifying a scene.

---

## Validation

Use scripts already defined in `package.json`.

For meaningful changes:

1. Run relevant TypeScript/lint validation.
2. Inspect the scene in Remotion Studio.
3. Check its start, middle, end and documented key frames.
4. Scrub backward and forward to verify determinism.
5. Prefer rendering the affected frame range before the full video.

Do not repeatedly render the complete composition for minor changes.

---

## Completion

Before considering a scene task complete:

- implementation works;
- relevant validation passes;
- important frames were inspected;
- `SCENES.md` still matches the project;
- scene documentation matches the implementation;
- neighboring transitions remain coherent;
- known compromises are documented.

After meaningful work, report briefly:

- what changed;
- what was validated;
- documentation updated or unchanged;
- remaining limitation, if any.

---

## Core rule

**Clarity beats spectacle.**

Three.js, motion and visual effects exist to explain Kivgraph, not to demonstrate animation techniques.
