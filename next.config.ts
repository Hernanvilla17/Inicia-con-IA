import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async rewrites() {
    return [
      {
        // Permite usar /guias/imagenes/nombre.png en lugar de /api/guias/imagenes/nombre.png
        source: "/guias/imagenes/:path*",
        destination: "/api/guias/imagenes/:path*",
      },
    ];
  },
};

export default nextConfig;
