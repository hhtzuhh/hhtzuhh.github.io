import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // If your GitHub Pages URL is https://<username>.github.io/<repo-name>
  // set basePath to '/<repo-name>'
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
