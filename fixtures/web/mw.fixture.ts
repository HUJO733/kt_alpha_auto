import { test as base, expect, devices, Page, WorkerInfo } from '@playwright/test';
import { story } from 'allure-js-commons';
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

async function gotoSafe(page: Page, url: string) {
  try {
    await page.goto(url);
  } catch (e: any) {
    if (e.message?.includes('ERR_ABORTED')) await page.goto(url);
    else throw e;
  }
}

async function ensureLoggedIn(page: Page) {
  const myPageUrl = CommonLocators.urls.mwHomePage.replace(/\/$/, '') + MwLocators.urls.myPage;
  await gotoSafe(page, myPageUrl);
  await page.locator(MwLocators.login.loginButton).waitFor({ state: 'visible', timeout: 5_000 }).catch(() => {});
  const isNotLoggedIn = await page.locator(MwLocators.login.loginButton).isVisible();
  if (!isNotLoggedIn) return;

  // 세션 만료 - 재로그인
  const loginPage = new LoginPage(page);
  await loginPage.goToHome();
  await loginPage.clickMyButton();
  await loginPage.clickLoginButton();
  await loginPage.fillId(process.env.LOGIN_ID ?? '');
  await loginPage.fillPw(process.env.LOGIN_PW ?? '');
  await loginPage.submitLogin();

  try {
    await loginPage.clickCertificationRequestButton();
    await loginPage.wait(20);
  } catch {
    // OTP 불필요 또는 자동 로그인 성공
  }

  await page.context().storageState({ path: 'mw-auth.json' });
}

export const test = base.extend<{}, MWWorkerFixtures>({
  appPage: [async ({ browser }, use, workerInfo: WorkerInfo) => {
    const storageState = existsSync('mw-auth.json') ? 'mw-auth.json' : undefined;
    const context = await browser.newContext({ ...devices['iPhone 13'], storageState });
    context.setDefaultTimeout(workerInfo.project.use.actionTimeout ?? 10_000);
    context.setDefaultNavigationTimeout(workerInfo.project.use.navigationTimeout ?? 10_000);
    const page = await context.newPage();
    await ensureLoggedIn(page);
    await gotoSafe(page, CommonLocators.urls.mwHomePage);
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
    await story(name);
    (hard ? expect : expect.soft)(await fn(), `${name} 실패`).toBe(true);
  });
};
