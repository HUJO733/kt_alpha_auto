import { test as setup } from '../../fixtures/web/pc.fixture';
import { LoginPage } from '../../pages/web/pc/login.page';

setup('auth 상태 저장', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goToHome();
  await loginPage.clickMyButton();
  await loginPage.clickLoginButton();
  await loginPage.fillId(process.env.LOGIN_ID ?? '');
  await loginPage.fillPw(process.env.LOGIN_PW ?? '');
  await loginPage.submitLogin();
  await loginPage.clickCertificationRequestButton();
  await loginPage.wait(20);

  await page.context().storageState({ path: 'auth.json' });
});
