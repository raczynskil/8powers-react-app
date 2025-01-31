import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        css: false, // Wyłącz przetwarzanie CSS w testach
        globals: true, // Umożliwia użycie globalnych zmiennych (np. `describe`, `it`)
        environment: 'jsdom', // Środowisko testowe dla komponentów React
        setupFiles: './src/setupTests.ts', // Plik konfiguracyjny do testów
        coverage: {
          provider: 'istanbul', // Narzędzie do raportowania pokrycia testów
          reporter: ['text', 'json', 'html'], // Format raportu
        },
      },
    }),
  ),
);
