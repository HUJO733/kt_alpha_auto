import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class LoginPage extends MobileBasePage {

  /** 앱 홈으로 이동 및 팝업 닫기 */
  async goToHome() {
    await super.goToHome();
    await this.closeModal();
  }

  /** 공통 팝업 모달 닫기 */
  async closeModal() {
    const visible = await this.isVisible(AndroidLocators.common.closeButton);
    if (visible) await this.click(AndroidLocators.common.closeButton);
  }

  /** 마이 버튼 클릭 */
  async clickMyButton() {
    await this.click(AndroidLocators.login.myPageButton);
  }

  /** 로그인 버튼 클릭 */
  async clickLoginButton() {
    await this.click(AndroidLocators.login.loginButton);
  }

  /** 아이디 입력 */
  async fillId(id: string) {
    await this.fill(AndroidLocators.login.idInput, id);
  }

  /** 비밀번호 입력 */
  async fillPw(pw: string) {
    await this.fill(AndroidLocators.login.pwInput, pw);
  }

  /** 로그인 제출 */
  async submitLogin() {
    await this.click(AndroidLocators.login.loginSubmitButton);
  }

  /** 인증요청 버튼 클릭 */
  async clickCertificationRequestButton() {
    await this.click(AndroidLocators.login.certificationRequestButton);
  }

  /** 로그아웃 버튼 노출 여부 반환 */
  async isLogoutButtonVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.login.logoutButton);
  }

  /** 로그아웃 버튼 클릭 */
  async clickLogoutButton() {
    await this.click(AndroidLocators.login.logoutButton);
  }

  /** 임의 상품 클릭 */
  async clickProduct() {
    await this.click(AndroidLocators.login.mdsPickProduct);
  }

  /** 구매하기 버튼 클릭 (옵션 선택 전) */
  async clickBuyButtonBeforeOption() {
    await this.click(AndroidLocators.login.buyButton);
  }

  /** 구매하기 > 옵션 선택 */
  async clickFirstEnabledOption() {
    await this.clickFirstEnabled(AndroidLocators.login.optionFirstItem);
  }

  /** 구매하기 > 옵션 선택 > 구매하기 버튼 클릭 */
  async clickBuyButtonAfterOption() {
    await this.lastClick(AndroidLocators.login.buyButton);
  }

  /** 주문서 페이지 노출 여부 반환 */
  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.onAirBuyOrder);
  }
}
