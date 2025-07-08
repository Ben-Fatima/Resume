/** @type {NextConfig} */
const nextConfig = {
  output: 'standalone',

  outputFileTracingIncludes: {
    '/app/api/pdf': ['./node_modules/@sparticuz/chromium/bin/**']
  },
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core']
};

export default nextConfig;
