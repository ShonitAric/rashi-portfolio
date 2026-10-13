// /** @type {import('next').NextConfig} */
// const repoName = "rashi-portfolio"; // ⚠️ Make sure this exactly matches your GitHub repo name!

// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
//   // Add these two lines:
//   basePath: "/rashi-portfolio",
//   assetPrefix: "/rashi-portfolio/", // Note the trailing slash!
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Add this line to generate static HTML files
  images: {
    unoptimized: true, // <-- Required for GitHub Pages deployment
  },
<<<<<<< HEAD
  // // Add these two lines:
  // basePath: "/rashi-portfolio",
  // assetPrefix: "/rashi-portfolio/", // Note the trailing slash!
=======
>>>>>>> 0b9db9f5e84b6a3d0cfc7f9f2476f3adcb4e2867
};

export default nextConfig;

