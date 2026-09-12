/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [48, 96, 256, 384],
  },
  async redirects() {
    return [
      // TEMPORARY: new nav routes point at existing pages until Steps 3 and 4 build the real ones.
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/services/backend-systems', destination: '/automations', permanent: false },
      { source: '/services/ai-agents', destination: '/ai-agents', permanent: false },
      { source: '/services/automated-outreach', destination: '/lead-gen', permanent: false },
      { source: '/services/ai-built-applications', destination: '/coming-soon', permanent: false },
      { source: '/services/multi-service', destination: '/coming-soon', permanent: false },
      { source: '/testimonials', destination: '/proof', permanent: false },
      // Blog and Newsletter: coming soon until Steps 5 and 6.
      { source: '/blog', destination: '/coming-soon', permanent: false },
      { source: '/newsletter', destination: '/coming-soon', permanent: false },
    ];
  },
};

module.exports = nextConfig;
