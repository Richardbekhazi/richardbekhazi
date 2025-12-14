import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tells Next.js to generate a static HTML site (required for GitHub Pages)
  output: 'export',
  
  // 2. Tells Next.js to put the output files into the "docs" folder
  //    (This matches your current GitHub Pages settings!)
  distDir: 'docs',

  // 3. Disables complex image optimization that requires a server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;