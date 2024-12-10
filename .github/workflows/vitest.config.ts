import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
 coverage: {
      lines: 90, // Set desired threshold
      branches: 85,
      statements: 90,
      functions: 100,
    },
  },
});
