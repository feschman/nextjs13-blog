/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"images.unsplash.com",
        protocol:"https",
      },
      {
        hostname:"directus-production-f4d9.up.railway.app",
        protocol:"https",
      }
    ]
  },
  // experimental: {
  //   serverActions:true,
  //   appDir: true,
  // },
}

module.exports = nextConfig
