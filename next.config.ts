import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/CauchyFunction.github.io',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
