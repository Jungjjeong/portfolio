/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
    domains: ['localhost', 'user-images.githubusercontent.com'],
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
