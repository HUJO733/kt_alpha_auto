import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class LoginPage extends BasePage {

  // 로그인 버튼 클릭
  async clickLoginButton() {
    await this.click(PcLocators.login.loginButton);
  }
 
  // 아이디 입력
  async fillId(id: string) {
    await this.fill(PcLocators.login.idInput, id);
  }

  // 비밀번호 입력
  async fillPw(pw: string) {
    await this.fill(PcLocators.login.pwInput, pw);
  }

  // 로그인 제출
  async submitLogin() {
    await this.click(PcLocators.login.loginSubmitButton);
  }

  // 인증요청 버튼 클릭
  async clickCertificationRequestButton() {
    await this.click(PcLocators.login.certificationRequestButton);
  }

  // 로그아웃 버튼 확인
  async isLogoutButtonVisible(): Promise<boolean> {
    await this.waitMainPage();
    return await this.isVisible(PcLocators.login.logoutButton);
  }
}
