import React from "react";
import { MetricCard } from "./MetricCard";
import { impactSummary } from "../data/graphDemo";
import { brand } from "../brand/tokens";
import { fontSans } from "../brand/fonts";

/**
 * The blast radius' report: the impact card and the claim line under it.
 *
 * One component and not two blocks inside scene 05, because scene 06 inherits
 * both on its first frame and fades them out during the flatten. Master 0840 has
 * to be indistinguishable from 0839, so the two scenes have to draw this exactly
 * alike - and the first version, which had scene 05 own the markup, simply
 * dropped it at the cut and measured 22 dB PSNR across a seam that is supposed to
 * be invisible.
 *
 * ## Where it sits
 *
 * `STORYBOARD.md` SCENE 06 puts the card on the right and slides it in from
 * `x +24`, and a render is why it is not there. The cascade runs to the right, so
 * the right column *is* hop 3: at that position the card covered
 * `ReconciliationJob.Run()` and the crossing arriving at
 * `CheckoutService.PlaceOrder()` - the two objects that are the evidence for the
 * numbers printed on it. Key frame 0800 has to show the count and the evidence in
 * one still.
 *
 * Measured on that render, the frame has exactly one free rectangle large enough
 * for the card, a gap and the claim line: the top-left, which the cascade leaves
 * empty because it starts low and travels up and away. It is also the
 * `payments-api` side and the reading corner, so the report sits with the change
 * it is about rather than over the consumers it counts. The `x +24` settle is
 * kept - it is a settle, not an entrance from a frame edge.
 *
 * The claim line stays on one line: at 40 px it ends 160 px short of
 * `Client.Charge()` and clears `Policy.Do()` by ninety. A wrapped version, tried
 * first, put its second line against `Policy.Do()`'s plate. `nowrap` states that
 * rather than leaving it to whatever the column happens to be, because a late
 * font load that widened the line by 5% would reflow it into the graph.
 */

const column = { left: 96, top: 72, width: 480 } as const;

/** Top of the claim line: the card's box plus a gap. */
const claimTop = 400;

type Props = {
  /** 0 -> 1 presence of the card. */
  card: number;
  /** Horizontal settle of the card, in master pixels. */
  cardOffsetX: number;
  /** 0 -> 1 presence of the claim line. */
  claim: number;
};

export const ImpactReport: React.FC<Props> = ({ card, cardOffsetX, claim }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: column.left,
          top: column.top,
          width: column.width,
          opacity: card,
          transform: `translateX(${cardOffsetX}px)`,
        }}
      >
        {/**
         * The three values are read from `impactSummary`, which counts them off
         * the fixture's own nodes and derived paths. Never typed in: the card
         * must not be able to outlive the graph it describes.
         */}
        <MetricCard
          title="Change impact"
          lines={[
            `${impactSummary.affected} affected symbols`,
            `${impactSummary.paths} dependency paths`,
            `${impactSummary.repositories} repositories`,
          ]}
        />
      </div>

      {/**
       * `Exact symbols. Not name matches.` - the video's first explicit product
       * claim, which scene 06 then proves.
       *
       * Geist sans, not mono: text attached to the graph is monospace, and a
       * statement addressed to the viewer is not.
       */}
      <div
        style={{
          position: "absolute",
          left: column.left,
          top: claimTop,
          fontFamily: fontSans,
          fontSize: 40,
          fontWeight: 500,
          lineHeight: 1.16,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          color: brand.textPrimary,
          opacity: claim,
        }}
      >
        Exact symbols. Not name matches.
      </div>
    </>
  );
};
