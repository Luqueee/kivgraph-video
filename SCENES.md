# Scene Documentation Contract

Every implemented scene MUST have a corresponding documentation file under:

```text
docs/scenes/
```

Scene documentation is part of the implementation, not optional supplementary documentation.

The purpose is to preserve the **creative and technical intent** of every scene so that future agents can modify it without having to infer why the current implementation exists.

---

## Required mapping

Each scene component must map to one scene document.

Example:

```text
src/scenes/SymbolScene.tsx
→ docs/scenes/01-symbol.md

src/scenes/AgentScene.tsx
→ docs/scenes/02-agent.md

src/scenes/GraphRevealScene.tsx
→ docs/scenes/03-graph-reveal.md
```

The exact filenames may evolve, but the mapping must always remain obvious.

---

## Before modifying a scene

Before making any non-trivial modification to a scene:

1. read `STORYBOARD.md`;
2. read the scene's document under `docs/scenes/`;
3. inspect the current implementation;
4. preserve the documented objective unless the requested task explicitly changes it.

Do not infer a scene's purpose solely from the current code.

The implementation may contain compromises, temporary decisions, or historical artifacts that do not fully express the intended result.

The scene documentation explains **why the scene exists**.

---

## Creating a scene

A new scene is not considered complete until both exist:

```text
src/scenes/<SceneName>.tsx
docs/scenes/<scene-name>.md
```

Do not create an implemented scene without its documentation.

If the scene exists in `STORYBOARD.md` but its implementation has not started yet, its documentation may still be created in advance when useful.

---

## Updating scene documentation

When a modification changes any of the following:

```text
objective
narrative purpose
visual composition
important timing
camera behavior
Three.js behavior
transition logic
key copy
key frames
technical constraints
```

update the corresponding scene document in the same task.

Pure implementation refactors that do not alter behavior normally do not require documentation changes.

Examples that require updating the documentation:

```text
changing the scene's narrative goal
changing what the viewer should understand
changing from a 2D representation to Three.js
changing the cross-repository reveal
moving the primary camera reveal
changing key text
changing the transition into the next scene
changing important frame timings
```

Examples that normally do not:

```text
renaming a local variable
extracting a helper
memoizing geometry
moving code to another component
fixing formatting
```

---

## Scene documentation template

Every scene document should follow approximately this structure:

````markdown
# Scene XX — Name

## Purpose

Why this scene exists.

What role it plays in the overall story.

## Viewer takeaway

The one idea the viewer should understand after seeing the scene.

## Narrative context

What has happened immediately before this scene.

What this scene prepares for next.

## Timeline

- Global frames:
- Time:
- Duration:
- Remotion component:

## Initial state

Describe exactly what should be visible when the scene begins.

## Final state

Describe exactly what should be visible when the scene ends.

## Visual composition

Describe:

- layout;
- hierarchy;
- important objects;
- positioning;
- typography;
- use of Kivgraph brand color;
- background;
- depth.

## Motion

Describe:

- entrances;
- exits;
- interpolation;
- camera movement;
- node/edge movement;
- important holds;
- rhythm.

Do not describe every interpolation value unless it is important to the intent.

## Three.js

If Three.js is used, document:

- why 3D is necessary here;
- scene topology;
- camera intent;
- nodes;
- edges;
- repository clusters;
- lighting;
- materials;
- depth;
- relevant deterministic animation rules.

If Three.js is not used:

```text
Not used.
```
````

## Transition in

Explain how the previous scene becomes this one.

## Transition out

Explain how this scene becomes the next one.

## Copy

List every important visible text string.

## Key frames

Document frames that should look especially intentional.

Example:

```text
frame 420 — initial graph node
frame 570 — graph has expanded
frame 680 — cross-repository edge begins
frame 710 — remote consumer reveal
```

## Invariants

Things future modifications must preserve unless the creative direction is explicitly changed.

Examples:

- selected symbol remains the visual anchor;
- remote repository must not be visible too early;
- cross-repository reveal must be understandable without audio;
- camera must not orbit around the graph;
- accent color only marks semantic relationships.

## Flexible elements

Things that may safely change without altering the scene's purpose.

Examples:

- exact node spacing;
- minor camera position;
- card dimensions;
- easing;
- secondary labels.

## Technical notes

Implementation-specific context useful to a future agent.

Examples:

- components involved;
- graph dataset used;
- coordinate system assumptions;
- performance considerations;
- known Remotion / R3F constraints.

## Current compromises

Document intentional temporary limitations.

Examples:

- placeholder graph data;
- temporary font;
- simplified material;
- missing sound;
- approximate transition.

Do not hide known compromises in code comments only.

## Modification history

Only record changes that materially alter the scene's design or purpose.

Do not turn this into a commit log.

Example:

```text
2026-08-23
- Initial scene specification.

2026-08-27
- Changed graph reveal to delay the second repository until frame 660.
- Reason: cross-repository reveal was happening too early and losing impact.
```

````

---

## Documentation quality

Scene documentation should explain intent, not restate the source code.

Bad:

```text
At frame 12 opacity becomes 0.4.
At frame 13 opacity becomes 0.43.
````

Good:

```text
The repository remains intentionally subdued during the first half of the
scene so the selected symbol stays dominant. It should only become visually
relevant once the camera begins revealing transitive consumers.
```

Code describes **how**.

Scene documentation describes primarily:

```text
why
what
when
what must remain true
```

---

## Documentation hierarchy

Use the following hierarchy when resolving intent:

```text
STORYBOARD.md
      ↓
docs/scenes/<scene>.md
      ↓
current implementation
```

`STORYBOARD.md` defines the overall narrative and global creative direction.

The scene document expands that intent with scene-specific context.

The implementation realizes it.

If the three disagree:

1. determine whether the implementation is intentionally newer;
2. preserve requested user changes;
3. update the relevant documentation so they become consistent again.

Do not leave known contradictions between documentation and implementation.

---

## Scene completion rule

A scene task is complete only when:

- implementation is complete;
- relevant key frames have been inspected;
- the scene documentation exists;
- the documentation matches the current behavior;
- intentional compromises are recorded;
- transitions in and out remain coherent.

When reporting completion, mention whether the scene documentation was:

```text
created
updated
unchanged because behavior did not change
```

---

## `docs/scenes/README.md`

Maintain an index at:

```text
docs/scenes/README.md
```

It should contain the scene order and links:

```markdown
# Kivgraph Video — Scene Documentation

| #   | Scene               |    Frames | Component              | Documentation                                            |
| --- | ------------------- | --------: | ---------------------- | -------------------------------------------------------- |
| 01  | Symbol              |     0–120 | `SymbolScene.tsx`      | [01-symbol.md](./01-symbol.md)                           |
| 02  | Agent               |   120–330 | `AgentScene.tsx`       | [02-agent.md](./02-agent.md)                             |
| 03  | Graph Reveal        |   330–630 | `GraphRevealScene.tsx` | [03-graph-reveal.md](./03-graph-reveal.md)               |
| 04  | Blast Radius        |   630–750 | `BlastRadiusScene.tsx` | [04-blast-radius.md](./04-blast-radius.md)               |
| 05  | Semantic Resolution |   750–900 | `SemanticScene.tsx`    | [05-semantic-resolution.md](./05-semantic-resolution.md) |
| 06  | Agent Answer        |  900–990 | `AgentAnswerScene.tsx` | [06-agent-answer.md](./06-agent-answer.md)               |
| 07  | Benchmark           |  990–1110 | `BenchmarkScene.tsx`   | [07-benchmark.md](./07-benchmark.md)                     |
| 08  | Brand               | 1110–1200 | `BrandScene.tsx`       | [08-brand.md](./08-brand.md)                             |
| 09  | Outro               | 1200–1320 | `OutroScene.tsx`       | [09-outro.md](./09-outro.md)                             |
```

Keep this index synchronized when scenes are added, removed, renamed, split, merged, or retimed.
