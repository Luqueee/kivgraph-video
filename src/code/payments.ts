import type { CodeLine } from "../components/CodePlane";

/**
 * The Go the camera lives inside for scenes 01–03.
 *
 * Everything here is written for the video, but it has to survive a developer
 * reading it frame by frame, so it is real Go: the package compiles in the
 * reader's head. `withRetry` is unexported, which is why every legible
 * neighbouring file in this world is also `package retry` — a caller in another
 * package could not name it. The cross-package caller (`service.go`) is only
 * ever the blurred depth bed, where that detail is not legible.
 *
 * Roles are visual weight, not syntax. `symbol` is the one anchored token of the
 * whole video; `signature` is used in neighbouring files to let the recurring
 * name `withRetry` sit one luminance step above its surroundings without taking
 * the accent, which belongs to the anchor alone.
 */

/**
 * The repository-relative paths of the two files the film ever names on screen.
 *
 * They live here, beside the source they belong to, because two other places
 * need them and neither should retype a path: `SymbolScene` prints one as the
 * caption under the anchored symbol, and `intentCandidates.ts` prints both
 * under the candidates it derives from these very arrays. A file that is
 * described in one place and named in another is a file that will eventually be
 * described and named differently.
 *
 * The other two files in this world are never named on screen — `backoff.go` is
 * a legible neighbour and `client.go` is the blurred depth bed — so they have no
 * constant here. Add one the moment either is captioned.
 */
export const retryGoPath = "payments-api/internal/retry/retry.go";
export const policyGoPath = "payments-api/internal/retry/policy.go";

/**
 * `payments-api/internal/retry/retry.go` — the camera plane.
 * `withRetry` sits on line 12 at column 5 and is the anchor of the whole video.
 *
 * Three of its declarations are also the film's `find_by_intent` candidates, and
 * `src/data/intentCandidates.ts` finds them in this array rather than restating
 * them. Deleting `const maxAttempts` or `var ErrExhausted` from these lines
 * fails the render with the reason.
 */
export const retryGo: CodeLine[] = [
  [{ text: "package retry", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "import (", role: "context" }],
  [{ text: '    "context"', role: "context" }],
  [{ text: '    "errors"', role: "context" }],
  [{ text: '    "time"', role: "context" }],
  [{ text: ")", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: 'var ErrExhausted = errors.New("retry: attempts exhausted")',
      role: "context",
    },
  ],
  [{ text: "", role: "context" }],
  [{ text: "const maxAttempts = 5", role: "context" }],
  [{ text: "", role: "context" }],
  [
    { text: "func ", role: "signature" },
    { text: "withRetry", role: "symbol" },
    {
      text: "(ctx context.Context, fn func() error) error {",
      role: "signature",
    },
  ],
  [
    {
      text: "    for attempt := 0; attempt < maxAttempts; attempt++ {",
      role: "body",
    },
  ],
  [{ text: "        if err := fn(); err == nil {", role: "body" }],
  [{ text: "            return nil", role: "body" }],
  [{ text: "        }", role: "body" }],
  [{ text: "", role: "body" }],
  [{ text: "        select {", role: "body" }],
  [{ text: "        case <-ctx.Done():", role: "body" }],
  [{ text: "            return ctx.Err()", role: "body" }],
  [{ text: "        case <-time.After(backoff(attempt)):", role: "body" }],
  [{ text: "        }", role: "body" }],
  [{ text: "    }", role: "body" }],
  [{ text: "", role: "body" }],
  [{ text: "    return ErrExhausted", role: "body" }],
  [{ text: "}", role: "body" }],
];

/**
 * `payments-api/internal/retry/backoff.go` — the left neighbour.
 *
 * The package sibling that `retry.go` line 21 already calls. It is the cheapest
 * possible proof that the anchored file is not the whole world: the viewer has
 * already read `backoff(attempt)` inside `withRetry`, so when the camera widens
 * and this column resolves, the relationship is recognised rather than
 * explained. It deliberately does not name `withRetry`.
 */
export const backoffGo: CodeLine[] = [
  [{ text: "package retry", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "import (", role: "context" }],
  [{ text: '    "math"', role: "context" }],
  [{ text: '    "math/rand"', role: "context" }],
  [{ text: '    "time"', role: "context" }],
  [{ text: ")", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "const (", role: "context" }],
  [{ text: "    baseDelay = 40 * time.Millisecond", role: "context" }],
  [{ text: "    maxDelay  = 4 * time.Second", role: "context" }],
  [{ text: "    jitter    = 0.3", role: "context" }],
  [{ text: ")", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "func backoff(attempt int) time.Duration {", role: "context" }],
  [{ text: "    d := float64(baseDelay)", role: "context" }],
  [{ text: "    d *= math.Pow(2, float64(attempt))", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "    if d > float64(maxDelay) {", role: "context" }],
  [{ text: "        d = float64(maxDelay)", role: "context" }],
  [{ text: "    }", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: "    return time.Duration(d * (1 - jitter + rand.Float64()*jitter))",
      role: "context",
    },
  ],
  [{ text: "}", role: "context" }],
];

/**
 * `payments-api/internal/retry/policy.go` — the right neighbour.
 *
 * Same package, and it calls `withRetry` twice. Those two occurrences are the
 * scene-02 payload: the name recurs in code the viewer can read, uncoloured, so
 * "this function is not isolated" arrives as an observation instead of a
 * caption. No connection is drawn between them and the anchor.
 */
export const policyGo: CodeLine[] = [
  [{ text: "package retry", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "type Policy struct {", role: "context" }],
  [{ text: "    Budget  time.Duration", role: "context" }],
  [{ text: "    OnRetry func(attempt int, err error)", role: "context" }],
  [{ text: "}", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: "func (p Policy) Do(ctx context.Context, fn func() error) error {",
      role: "context",
    },
  ],
  [
    {
      text: "    ctx, cancel := context.WithTimeout(ctx, p.Budget)",
      role: "context",
    },
  ],
  [{ text: "    defer cancel()", role: "context" }],
  [{ text: "", role: "context" }],
  [
    { text: "    return ", role: "context" },
    { text: "withRetry", role: "signature" },
    { text: "(ctx, func() error {", role: "context" },
  ],
  [{ text: "        err := fn()", role: "context" }],
  [{ text: "        if err != nil && p.OnRetry != nil {", role: "context" }],
  [{ text: "            p.OnRetry(attemptOf(ctx), err)", role: "context" }],
  [{ text: "        }", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "        return err", role: "context" }],
  [{ text: "    })", role: "context" }],
  [{ text: "}", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: "func Once(ctx context.Context, fn func() error) error {",
      role: "context",
    },
  ],
  [
    { text: "    return ", role: "context" },
    { text: "withRetry", role: "signature" },
    { text: "(withAttempts(ctx, 1), fn)", role: "context" },
  ],
  [{ text: "}", role: "context" }],
];

/**
 * `payments-api/paymentService/client.go` — the depth bed.
 *
 * Never legible: it is blurred and far behind, and exists to give the code
 * volume rather than information. But it is the real bridge out of this
 * repository, and scene 03 puts its two methods on screen by name, so it has to
 * be true even though nobody can read it.
 *
 * It is deliberately *not* `package retry`. `withRetry` is unexported, so this
 * file cannot call it and does not try: it goes through the package's exported
 * surface, `Policy.Do` and `Once`. That is also what makes the chain legal for
 * `checkout-service`, which cannot import anything under `internal/` across a
 * module boundary but can import this.
 *
 * The directory is `paymentService` because scene 07 says
 * "payments-api/paymentService" out loud; the package clause is the idiomatic
 * lowercase `payments`, and no frame ever shows the two together.
 */
export const clientGo: CodeLine[] = [
  [{ text: "package payments", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "import (", role: "context" }],
  [{ text: '    "context"', role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: '    "payments-api/internal/retry"', role: "context" }],
  [{ text: ")", role: "context" }],
  [{ text: "", role: "context" }],
  [{ text: "type Client struct {", role: "context" }],
  [{ text: "    policy  retry.Policy", role: "context" }],
  [{ text: "    gateway Gateway", role: "context" }],
  [{ text: "}", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: "func (c *Client) Charge(ctx context.Context, id string) error {",
      role: "context",
    },
  ],
  [{ text: "    return c.policy.Do(ctx, func() error {", role: "context" }],
  [{ text: "        return c.gateway.Capture(ctx, id)", role: "context" }],
  [{ text: "    })", role: "context" }],
  [{ text: "}", role: "context" }],
  [{ text: "", role: "context" }],
  [
    {
      text: "func (c *Client) Refund(ctx context.Context, id string) error {",
      role: "context",
    },
  ],
  [{ text: "    return retry.Once(ctx, func() error {", role: "context" }],
  [{ text: "        return c.gateway.Void(ctx, id)", role: "context" }],
  [{ text: "    })", role: "context" }],
  [{ text: "}", role: "context" }],
];
