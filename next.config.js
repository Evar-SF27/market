/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/public/uploads'
            }
        ],
        domains: ['localhost']
    }
}

module.exports = nextConfig
