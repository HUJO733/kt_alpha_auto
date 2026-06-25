import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';
import { LoginPage } from '../../pages/mobile/ios/login.page';

export class LoginSteps {
  private loginPage: LoginPage;

  constructor(basePage: MobileBasePage) {
    this.loginPage = new LoginPage(basePage.getDriver());
  }

  /** 일반 계정 로그인 확인 */
  async verifyLocalLogin(id: string, pw: string): Promise<boolean> {
    await this.loginPage.goToHome();
    await this.loginPage.clickMyButton();
    await this.loginPage.clickLoginButton();
    await this.loginPage.fillId(id);
    await this.loginPage.fillPw(pw);
    await this.loginPage.submitLogin();
    await this.loginPage.clickCertificationRequestButton();

    // 휴대폰 인증
    await this.loginPage.wait(30);

    const logoutButton = await this.loginPage.isLogoutButtonVisible();
    await this.loginPage.clickLogoutButton();

    return logoutButton;
  }

  /** 임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인 */
  async verifyBuyAndLogin(id: string, pw: string): Promise<boolean> {
    await this.loginPage.goToHome();
    await this.loginPage.clickProduct();
    await this.loginPage.clickBuyButtonBeforeOption();
    await this.loginPage.clickFirstEnabledOption();
    await this.loginPage.clickBuyButtonAfterOption();
    await this.loginPage.fillId(id);
    await this.loginPage.fillPw(pw);
    await this.loginPage.submitLogin();
    await this.loginPage.clickCertificationRequestButton();

    // 휴대폰 인증
    await this.loginPage.wait(30);

    return await this.loginPage.isBuyOrderPage();
  }
}
