import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async rewrites() {
    return [
      {
        source: "/sketchin/:path*", // This is the incoming path on chin4.com
        destination: "https://sket.chin4.com/:path*", // This is the actual destination
      },
      {
        source: "/sketchin", // Handle the root /sketchin path
        destination: "https://sket.chin4.com/",
      },
    ];
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
