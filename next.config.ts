import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jasiri-sport",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
