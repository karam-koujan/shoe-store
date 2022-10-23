/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["websitedemos.net",process.env.NEXT_PUBLIC_API_HOSTNAME,"secure.gravatar.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
