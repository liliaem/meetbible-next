/** @type {import('next').NextConfig} */

// Security headers sent with every response.
// Each one turns off a browser feature this site doesn't need (least privilege).
const securityHeaders = [
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
