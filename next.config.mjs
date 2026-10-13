/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rashi-portfolio",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
