import type { NextConfig } from "next";
import {
  PHASE_PRODUCTION_BUILD,
} from "next/constants";


const nextConfig: NextConfig = (phase: string) => {
  let config: NextConfig = {};
  if (phase === PHASE_PRODUCTION_BUILD) {
    config = {
      output: "export",
      assetPrefix: "/static",
    }
  }
  config = {
    ...config,
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

  return config;
};

export default nextConfig;
