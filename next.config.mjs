/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai.utexas.edu',
      },
    ],
  },
};

export default nextConfig;
