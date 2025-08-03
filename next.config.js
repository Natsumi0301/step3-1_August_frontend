/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    // NEXT_PUBLIC_API_ENDPOINT:"http://127.0.0.1:8000"
  }
}

module.exports = nextConfig
