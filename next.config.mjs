// next.config.mjs - FULL REPLACEMENT (Redirects Added)

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/automotive-paint/bodyshop-consumables-abrasives-fillers',
        destination: '/consumables/automotive-bodyshop',
        permanent: true,
      },
      {
        source: '/decorative-paint/q-bond-super-glue-solutions',
        destination: '/consumables/q-bond-adhesives',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // ADD THIS NEW BLOCK FOR THE LOGOS
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
  },
};
export default nextConfig;