import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using Vercel's native Next.js hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
