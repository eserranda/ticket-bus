import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_TIMEZONE: process.env.TIMEZONE || "Asia/Makassar",
    NEXT_PUBLIC_API_URL: process.env.API_URL || "https://api.example.com",
  },
};

export default nextConfig;
