/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";


const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowLocalIP: isDev,
    qualities: [40, 70, 75],
    // imageSizes: [160, 240, 320, 480],
    // deviceSizes: [640, 750, 1080, 1920], 
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
