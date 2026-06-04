import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 300_000,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  use: {
    headless: false,
    actionTimeout: 10_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // PC WEB
    {
      name: 'pc',
      testMatch: /tests\/pc\/.*\.test\.ts/,
      use: {
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },

    // MOBILE WEB
    {
      name: 'mw',
      testMatch: /tests\/mw\/.*\.test\.ts/,
      use: {
        ...devices['iPhone 13'],
      },
    },
  ],
});