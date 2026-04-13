/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/employee-benefits',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
