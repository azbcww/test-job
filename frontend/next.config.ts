import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["ndlsearch.ndl.go.jp"], // NDLの書影APIの画像表示のため
  },
};

export default nextConfig;
