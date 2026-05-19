/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  compress: true,

  devIndicators: {
    position: "bottom-right",
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
