/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200], // 배열 형태로 정의
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
