import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
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
 
export default withNextIntl(nextConfig);
