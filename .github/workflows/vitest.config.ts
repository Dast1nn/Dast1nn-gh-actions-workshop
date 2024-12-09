import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // You can use 'c8' as an alternative
      reporter: ['text', 'lcov', 'html'], // Generates text, LCOV, and HTML reports
      reportsDirectory: './coverage', // Specify where coverage reports should be saved
    },
  },
});
