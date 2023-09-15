/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://64f732e69d775408495348ae.mockapi.io/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
