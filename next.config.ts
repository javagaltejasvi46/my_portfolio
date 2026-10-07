import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Type checking runs explicitly via `npx tsc --noEmit`. In this Windows
  // environment Next's internal worker cannot be spawned (EPERM), so the
  // production bundle must not attempt to launch a duplicate worker.
  typescript: { ignoreBuildErrors: true },
  experimental: { workerThreads: true },
};

export default nextConfig;
