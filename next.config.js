/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export if needed
  // output: 'export',

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Compression
  compress: true,
  devIndicators: false,

  // Strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
