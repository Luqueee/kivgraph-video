import React from "react";
import { MetricCard } from "./MetricCard";
import { impactSummary } from "../data/graphDemo";

/**
 * The blast radius' report: the impact card, and where it sits.
 *
 * One component and not a block inside scene 04, because scene 05 inherits it on
 * its first frame and fades it out during the flatten. Master 0750 has to be
 * indistinguishable from 0749, so the two scenes have to draw this exactly alike
 * - and the first version, which had scene 04 own the markup, simply dropped it
 * at the cut and measured 22 dB PSNR across a seam that is supposed to be
 * invisible.
 *
 * It used to carry a claim line under the card, `Exact symbols. Not name
 * matches.`, on a veil that dimmed the graph to read it. Both are gone. The
 * three counted values are the argument; a sentence asserting what they mean
 * read as narration over evidence the viewer had already been given, and the
 * veil dimmed the propagation that was the evidence for the card above it.
 *
 * ## Where it sits
 *
 * The storyboard puts the card on the right and slides it in from `x +24`, and a
 * render is why it is not there. The cascade runs to the right, so the right
 * column *is* hop 3: at that position the card covered
 * `ReconciliationJob.Run()` and the crossing arriving at
 * `CheckoutService.PlaceOrder()` - the two objects that are the evidence for the
 * numbers printed on it. Key frame 0710 has to show the count and the evidence
 * in one still.
 *
 * Measured on that render, the frame has exactly one free rectangle large enough
 * for the card: the top-left, which the cascade leaves empty because it starts
 * low and travels up and away. It is also the `payments-api` side and the
 * reading corner, so the report sits with the change it is about rather than
 * over the consumers it counts. The `x +24` settle is kept - it is a settle, not
 * an entrance from a frame edge.
 */

const column = { left: 96, top: 72, width: 480 } as const;

type Props = {
  /** 0 -> 1 presence of the card. */
  card: number;
  /** Horizontal settle of the card, in master pixels. */
  cardOffsetX: number;
};

export const ImpactReport: React.FC<Props> = ({ card, cardOffsetX }) => {
  return (
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
       * the fixture's own nodes and derived paths. Never typed in: the card must
       * not be able to outlive the graph it describes.
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
  );
};
