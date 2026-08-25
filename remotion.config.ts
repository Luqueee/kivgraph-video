/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideBundlerConfig(enableTailwind);

/**
 * Three.js needs a real WebGL context. Chromium's default `swangle` backend
 * fails to create one under Remotion's headless renderer on macOS, so every
 * scene from 03 onward would render as an error rather than as a graph.
 *
 * Set here rather than passed as `--gl=angle` so Studio, `still` and `render`
 * all agree without anyone having to remember the flag.
 */
Config.setChromiumOpenGlRenderer("angle");
