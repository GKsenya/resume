import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/GregorStarkov',
  //       permanent: true,
  //     }
  //   ]
  // },
};

export default nextConfig;
