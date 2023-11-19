/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'essmnbcneybekiriuadi.supabase.co',
        port: ''
      }
    ]
  },
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY
  }
};

module.exports = nextConfig;

