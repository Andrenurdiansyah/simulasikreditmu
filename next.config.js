/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  compress: true,

  devIndicators: {
    buildActivity: false, // 🔥 ini yang matiin balonnya
  },

  reactStrictMode: true,
};

module.exports = nextConfig;