/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    PUBLIC_FOO: process.env.PUBLIC_FOO || "PUBLIC_BAR",
  },
  serverRuntimeConfig: {
    SERVER_FOO: process.env.SERVER_FOO || "SERVER_BAR",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
