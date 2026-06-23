/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allowed next/image quality values (required from Next.js 16).
    qualities: [75, 90],
  },
};

export default nextConfig;
