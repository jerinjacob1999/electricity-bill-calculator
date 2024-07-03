/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: '/electricity-bill-calculator' ,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
