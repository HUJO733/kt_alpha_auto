import { test as base, expect, devices, Page } from '@playwright/test';
import { BasePage } from '../../pages/common/BasePage';
import { CommonLocators } from '../../pages/common/common.locators';

type MWFixtures = {
  appPage: Page;
  basePage: BasePage;
};

type MWWorkerFixtures = {
  sharedBasePage: BasePage;
};

export const test = base.extend<MWFixtures, MWWorkerFixtures>({
  appPage: async ({ page }, use) => {
    await page.goto(CommonLocators.urls.mwHomePage);
    await use(page);
  },

  basePage: async ({ appPage }, use) => {
    await use(new BasePage(appPage));
  },

  sharedBasePage: [async ({ browser }, use) => {
    const context = await browser.newContext(devices['iPhone 13']);
    const page = await context.newPage();
    await page.goto(CommonLocators.urls.mwHomePage);
    await use(new BasePage(page));
    await context.close();
  }, { scope: 'worker' }],
});

export { expect };

export const check = (name: string, fn: () => Promise<boolean>, hard = false) => {
  test(name, async () => {
    (hard ? expect : expect.soft)(await fn(), `${name} 실패`).toBe(true);
  });
};
