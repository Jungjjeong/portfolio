/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
