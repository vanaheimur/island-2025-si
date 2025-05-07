import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: `${process.env.BACKEND_BASE_API_URL}/graphql`,
      },
    ]
  },
}

export default nextConfig
