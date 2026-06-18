import { test as setup, devices } from '@playwright/test';
import { LoginPage } from '../../pages/web/mw/login.page';

setup('MW auth 상태 저장', async ({ browser }) => {
  const context = await browser.newContext(devices['iPhone 13']);
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goToHome();
  await loginPage.clickMyButton();
  await loginPage.clickLoginButton();
  await loginPage.fillId(process.env.LOGIN_ID ?? '');
  await loginPage.fillPw(process.env.LOGIN_PW ?? '');
  await loginPage.submitLogin();
  await loginPage.clickCertificationRequestButton();
  await loginPage.wait(30);

  await context.storageState({ path: 'mw-auth.json' });
  await context.close();
});
