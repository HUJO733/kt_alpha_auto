import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class LoginPage extends MobileBasePage {

  async goToHome() {
    await super.goToHome();
    await this.closeModal();
  }

  async closeModal() {
    const visible = await this.isVisible(IosLocators.common.closeButton);
    if (visible) await this.click(IosLocators.common.closeButton);
  }

  async clickMyButton() {
    await this.click(IosLocators.login.myPageButton);
  }

  async clickLoginButton() {
    await this.click(IosLocators.login.loginButton);
  }

  async fillId(id: string) {
    await this.fill(IosLocators.login.idInput, id);
  }

  async fillPw(pw: string) {
    await this.fill(IosLocators.login.pwInput, pw);
  }

  async submitLogin() {
    await this.click(IosLocators.login.loginSubmitButton);
  }

  async clickCertificationRequestButton() {
    await this.click(IosLocators.login.certificationRequestButton);
  }

  async isLogoutButtonVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.login.logoutButton);
  }

  async clickLogoutButton() {
    await this.click(IosLocators.login.logoutButton);
  }

  async clickProduct() {
    await this.click(IosLocators.login.mdsPickProduct);
  }

  async clickBuyButtonBeforeOption() {
    await this.click(IosLocators.login.buyButton);
  }

  async clickFirstEnabledOption() {
    await this.clickFirstEnabled(IosLocators.login.optionFirstItem);
  }

  async clickBuyButtonAfterOption() {
    await this.lastClick(IosLocators.login.buyButton);
  }

  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.onAirBuyOrder);
  }
}
