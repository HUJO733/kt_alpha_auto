import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    headless: false,   // 브라우저 눈에 보이게
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
        ...devices['Desktop Chrome'],
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