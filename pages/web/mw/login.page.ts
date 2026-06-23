import { BasePage } from '../../common/BasePage';
import { MwLocators } from './locators';
import { CommonLocators } from '../../common/common.locators';

export class LoginPage extends BasePage {

  /** MW 홈으로 이동 */
  async goToHome() {
    await this.goToUrl(CommonLocators.urls.mwHomePage);
    await this.closeModal();
  }

  /** 마이 버튼 클릭 */
  async clickMyButton() {
    await this.click(MwLocators.my.myButton);
  }

  /** 로그인 버튼 클릭 */
  async clickLoginButton() {
    await this.click(MwLocators.login.loginButton);
  }

  /** 아이디 입력 */
  async fillId(id: string) {
    await this.fill(MwLocators.login.idInput, id);
  }

  /** 비밀번호 입력 */
  async fillPw(pw: string) {
    await this.fill(MwLocators.login.pwInput, pw);
  }

  /** 로그인 제출 */
  async submitLogin() {
    await this.click(MwLocators.login.loginSubmitButton);
  }

  /** 인증요청 버튼 클릭 */
  async clickCertificationRequestButton() {
    await this.click(MwLocators.login.certificationRequestButton);
  }

  /** 로그아웃 버튼 노출 여부 반환 */
  async isLogoutButtonVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.login.logoutButton);
  }

  /** 로그아웃 버튼 클릭 */
  async clickLogoutButton() {
    await this.click(MwLocators.login.logoutButton);
  }

  /** 임의 상품 클릭 */
  async clickProduct() {
    await this.click(MwLocators.login.mdsPickProduct);
  }

  /** 구매하기 버튼 클릭 (옵션 선택 전) */
  async clickBuyButtonBeforeOption() {
    await this.click(MwLocators.login.buyButton);
  }

  /** 구매하기 > 옵션 선택 */
  async clickFirstEnabledOption() {
    await this.clickFirstEnabled(MwLocators.login.optionFirstItem);
  }

  /** 구매하기 > 옵션 선택 > 구매하기 버튼 클릭 */
  async clickBuyButtonAfterOption() {
    await this.lastClick(MwLocators.login.buyButton);
  }
}
