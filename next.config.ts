import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SPRING_API_URL}`],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_SPRING_API_URL}/api/:path*`
      }
    ];
  },
  eslint: {
    // 빌드 시 ESLint 오류가 있어도 빌드를 계속 진행하도록 설정
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
