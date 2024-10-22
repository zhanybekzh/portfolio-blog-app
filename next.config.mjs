import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@node': path.resolve('node_modules'), 
    };
    return config;
  }
};


export default nextConfig;
