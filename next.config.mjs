/** @type {import('next').NextConfig} */
const repoName = "rashi-portfolio"; // ⚠️ Make sure this exactly matches your GitHub repo name!

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Add these two lines:
  basePath: "/rashi-portfolio",
  assetPrefix: "/rashi-portfolio/", // Note the trailing slash!
};

export default nextConfig;
