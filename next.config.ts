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
  webpack: (config, { dev, isServer, buildId, defaultLoaders }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'quiz-box',
          filepath: './public/service-worker.js',
          staticFileGlobs: ['./.next/static/**/*.js'],
          stripPrefix: './.next',
          mergeStaticsConfig: true,
          minify: true,
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/,
            },
          ],
          // Specifically cache the root page
          dynamicUrlToDependencies: {
            '/': ['./.next/server/app/index.html'],
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
