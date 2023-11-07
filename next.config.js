/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com", "www.kowri.app"],
  },
};

module.exports = nextConfig;
