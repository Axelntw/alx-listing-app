import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly use Pages Router
  reactStrictMode: true,
  swcMinify: true,
  // Ensure no app directory features are used
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
};

export default nextConfig;
