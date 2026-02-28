import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'ui_library',
      filename: 'remoteEntry.js',
      dts: false,
      exposes: {
        './Theme': './src/theme/Theme.tsx',
        './Button': './src/components/Button/Button.tsx',
        './Input': './src/components/Input/Input.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-runtime': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-dev-runtime': { singleton: true, requiredVersion: '^19.0.0' },
        '@mui/material': { singleton: true },
        '@emotion/react': { singleton: true },
        '@emotion/styled': { singleton: true },
      },
    }),
    react(),
  ],
  server: {
    port: 3003,
    strictPort: true,
    origin: 'http://localhost:3003',
  },
  preview: {
    port: 3003,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
