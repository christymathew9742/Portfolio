/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  distDir: 'build',
  transpilePackages: ['@mui/x-charts']
}

module.exports = nextConfig
