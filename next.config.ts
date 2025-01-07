import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SPRING_API_URL}`, `${process.env.NEXT_PUBLIC_S3_GATEWAY_URL}`, `nongsaro.go.kr`],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://botanify.site/api/:path*`
      }
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
