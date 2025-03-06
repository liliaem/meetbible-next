/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config) {
    // Configura el alias '@' a la raíz del proyecto
    config.resolve.alias['@'] = path.join(process.cwd(), '.');
    return config;
  },
};

export default nextConfig;

