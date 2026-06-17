import { test as base, expect, Page } from '@playwright/test';
import { BasePage } from '../../pages/common/BasePage';
import { CommonLocators } from '../../pages/common/common.locators';

type PCFixtures = {
  appPage: Page;
  basePage: BasePage;
};

type PCWorkerFixtures = {
  sharedBasePage: BasePage;
};

export const test = base.extend<PCFixtures, PCWorkerFixtures>({
  appPage: async ({ page }, use) => {
    await page.goto(CommonLocators.urls.homePage);
    await use(page);
  },

  basePage: async ({ appPage }, use) => {
    await use(new BasePage(appPage));
  },

  sharedBasePage: [async ({ browser }, use) => {
    const context = await browser.newContext({ viewport: null });
    const page = await context.newPage();
    await page.goto(CommonLocators.urls.homePage);
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
