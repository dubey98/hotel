/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/loader.js",
  },
};

module.exports = nextConfig;
