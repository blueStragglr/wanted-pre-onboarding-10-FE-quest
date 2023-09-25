/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login/signin',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
