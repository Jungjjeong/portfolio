/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/:page/components/:file*',
        destination: '/:page',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
