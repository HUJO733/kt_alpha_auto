import { test as setup } from '../../fixtures/web/pc.fixture';
import { LoginPage } from '../../pages/web/pc/login.page';

setup('auth 상태 저장', async ({ browser }) => {
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goToHome();
  await loginPage.clickLoginButton();
  await loginPage.fillId(process.env.LOGIN_ID ?? '');
  await loginPage.fillPw(process.env.LOGIN_PW ?? '');
  await loginPage.submitLogin();
  await loginPage.clickCertificationRequestButton();
  await loginPage.wait(30);

  await context.storageState({ path: 'auth.json' });
  await context.close();
});
