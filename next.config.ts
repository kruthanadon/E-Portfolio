import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ปลดล็อก Unsplash
      },
      {
        protocol: "https",
        hostname: "*.supabase.co", // ปลดล็อก Supabase Storage สำหรับรูปที่อัปโหลดในอนาคต
      },
    ],
  },
};

export default nextConfig;