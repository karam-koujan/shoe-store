/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["websitedemos.net",process.env.NEXT_PUBLIC_API_HOSTNAME],
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
