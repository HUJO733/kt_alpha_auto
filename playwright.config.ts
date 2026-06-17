import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

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
actionTimeout: 10_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // PC AUTH SETUP
    {
      name: 'setup',
      testMatch: /tests\/pc\/auth\.setup\.ts/,
      use: {
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
      },
    },

    // PC WEB (auth 필요)
    {
      name: 'pc',
      dependencies: ['setup'],
      testMatch: /tests\/pc\/(?!auth\.setup|login|integrated).*\.test\.ts/,
      use: {
        viewport: null,
        storageState: 'auth.json',
        launchOptions: { args: ['--start-maximized'] },
      },
    },

    // PC WEB (auth 불필요 - login, integrated)
    {
      name: 'pc-no-auth',
      testMatch: /tests\/pc\/(login|integrated)\.test\.ts/,
      use: {
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
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