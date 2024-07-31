/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "b5dayblwfqqkgvjz.public.blob.vercel-storage.com"
            }
        ]
    }
}

module.exports = nextConfig
