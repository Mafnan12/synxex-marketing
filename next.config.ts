import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://synxex-app.vercel.app/pages/login.html",
        permanent: false,
      },
      {
        source: "/register",
        destination: "https://synxex-app.vercel.app/pages/register.html",
        permanent: false,
      },
      {
        source: "/app/:path*",
        destination: "https://synxex-app.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
