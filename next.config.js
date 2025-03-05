/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/projectcleanmotion' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projectcleanmotion/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig