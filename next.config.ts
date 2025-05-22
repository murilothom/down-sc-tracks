// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i1.sndcdn.com', 'i2.sndcdn.com', 'i3.sndcdn.com', 'i4.sndcdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.sndcdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
