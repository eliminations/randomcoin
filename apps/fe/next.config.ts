import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using Vercel's native Next.js hosting (removed static export)
  images: {
    unoptimized: true, // Can keep this or remove if using Next.js Image optimization
  },
};

export default nextConfig;
