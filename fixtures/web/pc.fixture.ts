import { test as base, expect, Page } from '@playwright/test';
import { BasePage } from '../../pages/common/BasePage';

type PCFixtures = {
  appPage: Page;
  basePage: BasePage;
};

export const test = base.extend<PCFixtures>({
  appPage: async ({ page }, use) => {
    await page.goto('https://www.kshop.co.kr/');
    await use(page);
  },

  basePage: async ({ appPage }, use) => {
    await use(new BasePage(appPage));
  },
});

export { expect };
