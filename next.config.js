/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['hcs.net.nz'],
  },
}
