/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Render deployment.
  output: "standalone",

  // For better routing.
  trailingSlash: true,

  // Image optimization configuration.
  images: {
    unoptimized: false,
    domains: ["i.ibb.co", "codepen.io"],
  },

  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
