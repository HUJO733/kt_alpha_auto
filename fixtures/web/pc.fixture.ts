import { test as base, expect, Page } from '@playwright/test';

type PCFixtures = {
  appPage: Page;
};

export const test = base.extend<PCFixtures>({
  appPage: async ({ page }, use) => {
    // 공통 초기 세팅
    await page.goto('https://www.google.com');

    await use(page);

    // 필요하면 종료 전 공통 처리
  },
});

export { expect };