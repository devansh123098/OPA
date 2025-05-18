import type {NextConfig} from 'next';

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
        hostname: 'images.timesnownews.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    allowedDevOrigins: [
        'https://9008-firebase-studio-1747396635269.cluster-iktsryn7xnhpexlu6255bftka4.cloudworkstations.dev',
        'https://9010-firebase-studio-1747396635269.cluster-iktsryn7xnhpexlu6255bftka4.cloudworkstations.dev'
    ],
  },
};

export default nextConfig;
