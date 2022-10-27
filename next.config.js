/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    PUBLIC_FOO: "PUBLIC_BAR",
  },
  serverRuntimeConfig: {
    SERVER_FOO: "SERVER_BAR",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
