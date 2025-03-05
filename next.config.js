/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/projectcleanmotion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projectcleanmotion/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig