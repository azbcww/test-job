import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["ndlsearch.ndl.go.jp", "books.google.com", "placehold.co"], // NDLの書影APIの画像表示のため, google books apiの(ry
  },
};

export default nextConfig;
