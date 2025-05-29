import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['dbuzz-assets.s3.amazonaws.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
