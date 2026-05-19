/** @type {import('next').NextConfig} */
// Static export configuration — produces a /out folder suitable for GitHub Pages,
// Netlify, Cloudflare Pages or any static host. If deploying to a project page
// (e.g. https://<user>.github.io/<repo>), set NEXT_PUBLIC_BASE_PATH=/<repo> before
// running `npm run build`.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
