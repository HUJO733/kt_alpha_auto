import { BasePage } from '../../common/BasePage';
import { MwLocators } from './locators';

export class LoginPage extends BasePage {

  async clickMyPage() {
    await this.click(MwLocators.login.myPageBtn);
  }

  async clickLoginBtn() {
    await this.click(MwLocators.login.loginBtn);
  }

  async fillId(id: string) {
    await this.fill(MwLocators.login.idInput, id);
  }

  async fillPw(pw: string) {
    await this.fill(MwLocators.login.pwInput, pw);
  }

  async submitLogin() {
    await this.click(MwLocators.login.loginSubmitBtn);
  }
}
