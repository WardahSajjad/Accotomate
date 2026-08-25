/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// Google Calendar booking opens in a new tab rather than being embedded, so no
// Google origins are needed. The only embedded frame is the YouTube demo,
// served from the no-cookie domain so it sets nothing until the user plays it.
//
// 'unsafe-eval' is REQUIRED in development: React Refresh and webpack HMR
// evaluate code at runtime, and without it every client script is blocked —
// which kills hydration, so navigation and buttons silently stop working.
// It is deliberately not allowed in production builds.
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  isDev ? "'unsafe-eval'" : null,
]
  .filter(Boolean)
  .join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // Dev needs websocket access for hot reload.
  isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
  "frame-src https://www.youtube-nocookie.com",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
