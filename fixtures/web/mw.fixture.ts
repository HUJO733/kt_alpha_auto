import { test as base, expect, devices, Page } from '@playwright/test';
import { existsSync } from 'fs';
import { BasePage } from '../../pages/common/BasePage';
import { CommonLocators } from '../../pages/common/common.locators';
import { MwLocators } from '../../pages/web/mw/locators';
import { LoginPage } from '../../pages/web/mw/login.page';

type MWWorkerFixtures = {
  appPage: Page;
  basePage: BasePage;
  sharedBasePage: BasePage;
};

async function ensureLoggedIn(page: Page) {
  const myPageUrl = CommonLocators.urls.mwHomePage.replace(/\/$/, '') + '/custord/mypage/auth/main';
  await page.goto(myPageUrl);
  if (page.url().includes('/custord/mypage')) return;

  // 세션 만료 - 재로그인
  const loginPage = new LoginPage(page);
  await loginPage.goToHome();
  await loginPage.clickMyButton();
  await loginPage.clickLoginButton();
  await loginPage.fillId(process.env.LOGIN_ID ?? '');
  await loginPage.fillPw(process.env.LOGIN_PW ?? '');
  await loginPage.submitLogin();

  const otpButton = page.locator(MwLocators.login.certificationRequestButton);
  try {
    await otpButton.waitFor({ state: 'visible', timeout: 10_000 });
    await otpButton.click();
    await page.waitForTimeout(60_000);
  } catch {
    // OTP 불필요 또는 자동 로그인 성공
  }

  await page.context().storageState({ path: 'mw-auth.json' });
}

export const test = base.extend<{}, MWWorkerFixtures>({
  appPage: [async ({ browser }, use) => {
    const storageState = existsSync('mw-auth.json') ? 'mw-auth.json' : undefined;
    const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
    const page = await context.newPage();
    await ensureLoggedIn(page);
    await page.goto(CommonLocators.urls.mwHomePage);
    await use(page);
    await context.close();
  }, { scope: 'worker' }],

  basePage: [async ({ appPage }, use) => {
    await use(new BasePage(appPage));
  }, { scope: 'worker' }],

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
