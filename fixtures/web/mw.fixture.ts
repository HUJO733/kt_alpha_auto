import { test as base, expect, Page } from '@playwright/test';

type MWFixtures = {
  appPage: Page;
};

export const test = base.extend<MWFixtures>({
  appPage: async ({ page }, use) => {
    // 공통 초기 세팅
    await page.goto('https://www.google.com');

    await use(page);
  },
});

export { expect };