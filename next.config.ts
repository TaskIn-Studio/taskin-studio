import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  // Enable SWC minification for improved performance
  swcMinify: true,
  // Enable React strict mode for improved development experience
  reactStrictMode: true,
  // Generate sitemap during build
  generateSitemap: true,
  // Enable compression for better performance
  compress: true,
  // Add page metadata
  metadata: {
    metadataBase: new URL('https://taskin.studio'),
    generator: 'Taskin Studio',
    applicationName: 'Taskin Studio',
    referrer: 'origin-when-cross-origin',
    keywords: ['AI tools', 'productivity', 'automation', 'content creation'],
    authors: [{ name: 'Taskin Studio Team' }],
    creator: 'Taskin Studio',
    publisher: 'Taskin Studio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  },
};

export default nextConfig;
