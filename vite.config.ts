import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { mergeConfig } from 'vitest/config';

export default defineConfig((configEnv) =>
  mergeConfig(configEnv, {
    plugins: [
      react(),
      viteTsconfigPaths(),
      checker({
        typescript: true,
      }),
    ],
    server: {
      open: false,
      port: 3000,
    },
  }),
);
