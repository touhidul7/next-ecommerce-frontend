/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.skinvee.org",
        pathname: "/storage/**",  // Matches images under /storage/
      },
    ],
  },
};

export default nextConfig;