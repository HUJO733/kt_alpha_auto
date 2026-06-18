import { BasePage } from '../../common/BasePage';
import { MwLocators } from './locators';

export class ProductPage extends BasePage {

  async clickProduct() {
    await this.goToHome();
    await this.click(MwLocators.product.productName);
  }

  async playVideo() {
    await this.click(MwLocators.product.onAirVideo);
  }

  async isVideoPlaying(): Promise<boolean> {
    return await this.getAttribute(MwLocators.product.onAirVideo, 'autoplay') !== null;
  }

  async clickAlarmButton() {
    await this.click(MwLocators.product.alarmButton);
  }

  async isBroadcastNotificationPopupVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.broadcastNotificationPopupHeader);
  }

  async clickSmsConsentCheckbox() {
    await this.click(MwLocators.product.smsConsentCheckbox);
  }

  async clickBroadcastNotificationRegisterButton() {
    await this.click(MwLocators.product.broadcastNotificationRegisterButton);
  }

  async clickMyBroadcastNotificationButton() {
    await this.click(MwLocators.product.myBroadcastNotificationButton);
  }

  async isDisableNotificationButtonVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.disableNotificationButton);
  }

  async clickDisableNotificationButton() {
    await this.click(MwLocators.product.disableNotificationButton);
  }

  async clickProductLikeButton() {
    await this.click(MwLocators.product.productLikeButton);
  }

  async gotoLikePage() {
    await this.goToUrl(MwLocators.urls.myLikePage);
  }

  async isLikeButtonVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.likePageLikeButton);
  }

  async clickLikePageLikeButton() {
    await this.click(MwLocators.product.likePageLikeButton);
  }

  async clickProductDetailInfoTab() {
    await this.click(MwLocators.product.productDetailInfoTab);
  }

  async isProductDetailInfoVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.productDetailInfo);
  }

  async clickProductBuyInfoTab() {
    await this.click(MwLocators.product.productBuyInfoTab);
  }

  async isProductBuyInfoVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.productBuyInfo);
  }

  async clickProductReviewTab() {
    await this.click(MwLocators.product.productReviewTab);
  }

  async isProductReviewVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.productReview);
  }

  async clickProductQnaTab() {
    await this.click(MwLocators.product.productQnaTab);
  }

  async isProductQnaVisible(): Promise<boolean> {
    return await this.isVisible(MwLocators.product.productQna);
  }

  async selectFirstEnabledOption() {
    let prevCount = 0;

    while (true) {
      const count = await this.count(MwLocators.product.optionBox);
      if (count === 0 || count === prevCount) return;
      prevCount = count;
      await this.clickFirstEnabled(MwLocators.main.onAirDirectBuyFirstOption);
    }
  }

  async clickProductGift() {
    await this.click(MwLocators.main.onAirGiftButton);
    await this.selectFirstEnabledOption();
    await this.click(MwLocators.main.onAirGiftButton);
  }

  async isGiftOrderPage(): Promise<boolean> {
    return this.urlContains(MwLocators.urls.onAirGiftOrder);
  }

  async getProductName(): Promise<string> {
    return (await this.getText(MwLocators.product.productName)).replace(/\s/g, '');
  }

  async clickProductCart(): Promise<boolean> {
    const exists = await this.isVisible(MwLocators.main.onAirCartButton);
    if (!exists) return false;
    await this.click(MwLocators.main.onAirCartButton);
    await this.selectFirstEnabledOption();
    await this.click(MwLocators.main.onAirCartButton);
    return true;
  }

  async clickProductCartMoveButton() {
    await this.click(MwLocators.main.onAirCartMoveButton);
  }

  async getCartProductName(): Promise<string> {
    return (await this.getText(MwLocators.main.cartProductName)).replace(/\s/g, '');
  }

  async clickCartDeleteButton() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.click(MwLocators.main.cartDeleteButton);
  }

  async clickProductBuy() {
    await this.click(MwLocators.main.onAirBuyButton);
    await this.selectFirstEnabledOption();
    await this.click(MwLocators.main.onAirBuyButton);
  }

  async isBuyOrderPage(): Promise<boolean> {
    return this.urlContains(MwLocators.urls.onAirBuyOrder);
  }
}
