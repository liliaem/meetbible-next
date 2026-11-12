/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Content Security Policy: an allowlist of where the browser may load things from.
// Everything defaults to our own domain ('self'); anything not listed is blocked.
//
// 'unsafe-inline' is needed for scripts/styles because Next.js and next-themes
// inject small inline scripts, and nonces would force every page to render
// dynamically. Trade-off: injected inline code would not be blocked. Acceptable
// for now because the site is static, with no user input, no external content
// and no third-party scripts. Compensating control: ESLint "react/no-danger".
//
// Upgrade plan: when pages become dynamic (database, Bible API) or render
// external/AI content, switch to a nonce-based CSP (proxy.ts) and sanitize
// any HTML/Markdown before rendering it.
//
// 'unsafe-eval' is only added in development (React debugging).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // Production only: on http://localhost some browsers (Safari) would try to
  // upgrade local requests to https and break the dev server
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

// Security headers sent with every response.
// Each one turns off a browser feature this site doesn't need (least privilege).
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Don't guess file types: a file is only treated as what the server says it is
  { key: "X-Content-Type-Options", value: "nosniff" },
  // No other site may show this one inside a frame (stops clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // When a visitor clicks an external link, only send our domain, not the full URL
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Turn off device features this site never uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig = {
  // Don't advertise the framework in an "X-Powered-By: Next.js" header
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
