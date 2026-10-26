/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NETLIFY ? {} : { distDir: 'work/next-build' }),
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
};
export default nextConfig;
