import type {NextConfig} from 'next';
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'quiz-box',
          filename: 'service-worker.js',
          staticFileGlobs: ['public/**/*'],
          minify: true,
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?:\/\/.*/,
            },
          ],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
