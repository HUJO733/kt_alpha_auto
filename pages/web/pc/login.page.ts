import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class LoginPage extends BasePage {

  async clickMyPage() {
    await this.click(PcLocators.login.myPageBtn);
  }

  async clickLoginBtn() {
    await this.click(PcLocators.login.loginBtn);
  }

  async fillId(id: string) {
    await this.fill(PcLocators.login.idInput, id);
  }

  async fillPw(pw: string) {
    await this.fill(PcLocators.login.pwInput, pw);
  }

  async submitLogin() {
    await this.click(PcLocators.login.loginSubmitBtn);
  }
}
