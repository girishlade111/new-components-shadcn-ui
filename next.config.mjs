/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/new-components-shadcn-ui',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig