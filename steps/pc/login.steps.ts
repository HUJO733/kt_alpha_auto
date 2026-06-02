import { BasePage } from '../../pages/common/BasePage';
import { LoginPage } from '../../pages/web/pc/login.page';

export class LoginSteps {
  private loginPage: LoginPage;

  constructor(basePage: BasePage) {
    this.loginPage = new LoginPage(basePage.getPage());
  }

  async goToLoginPage() {
    await this.loginPage.closeModal();
    await this.loginPage.clickMyPage();
    await this.loginPage.clickLoginBtn();
  }

  async inputAndSubmit(id: string, pw: string) {
    await this.loginPage.fillId(id);
    await this.loginPage.fillPw(pw);
    await this.loginPage.submitLogin();
  }
}
