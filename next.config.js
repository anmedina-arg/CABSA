/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // reactStrictMode: true,
  // distDir: 'dist',
  // trailingSlash: true,
  // assetPrefix: '.',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
