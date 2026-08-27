import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { KivgraphVideo, masterFrames } from "./Composition";
import { AgentScene } from "./scenes/AgentScene";
import { ColdOpenScene } from "./scenes/ColdOpenScene";
import { GraphRevealScene } from "./scenes/GraphRevealScene";
import { SymbolScene } from "./scenes/SymbolScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KivgraphPromo"
        component={KivgraphVideo}
        durationInFrames={masterFrames}
        fps={60}
        width={1920}
        height={1080}
      />
      {/**
       * The cold open on its own, so the first two seconds can be rendered and
       * judged without waiting for the master. It is also the composition the
       * poster frame comes from.
       */}
      <Composition
        id="ColdOpen"
        component={ColdOpenScene}
        durationInFrames={120}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene01Symbol"
        component={SymbolScene}
        durationInFrames={120}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene02Agent"
        component={AgentScene}
        durationInFrames={210}
        fps={60}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene03GraphReveal"
        component={GraphRevealScene}
        durationInFrames={300}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
