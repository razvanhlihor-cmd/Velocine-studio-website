import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "host",
  //           value: "usevelocine.com",
  //         },
  //       ],
  //       destination: "https://velocine.ai/:path*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "host",
  //           value: "www.usevelocine.com",
  //         },
  //       ],
  //       destination: "https://velocine.ai/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
