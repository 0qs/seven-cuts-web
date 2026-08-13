import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // The /articles section was removed. These URLs are still in Google's index,
  // so redirect them permanently to the home page instead of serving 404s.
  async redirects() {
    return [
      { source: "/articles", destination: "/", permanent: true },
      { source: "/articles/:slug", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              process.env.NODE_ENV === 'development' 
                ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'" 
                : "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://images.unsplash.com",
              "connect-src 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
