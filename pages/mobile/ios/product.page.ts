import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class ProductPage extends MobileBasePage {

  async isVideoPlaying(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.onAirVideo);
  }

  async clickAlarmButton() {
    await this.click(IosLocators.product.alarmButton);
  }

  async isBroadcastNotificationPopupVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.broadcastNotificationPopupHeader);
  }

  async clickSmsConsentCheckbox() {
    await this.click(IosLocators.product.smsConsentCheckbox);
  }

  async clickBroadcastNotificationRegisterButton() {
    await this.click(IosLocators.product.broadcastNotificationRegisterButton);
  }

  async clickMyBroadcastNotificationButton() {
    await this.click(IosLocators.product.myBroadcastNotificationButton);
  }

  async isDisableNotificationButtonVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.disableNotificationButton);
  }

  async clickDisableNotificationButton() {
    await this.click(IosLocators.product.disableNotificationButton);
  }

  async clickConfirmButton() {
    await this.click(IosLocators.common.confirmButton);
  }

  async clickProduct() {
    await this.click(IosLocators.login.mdsPickProduct);
  }

  async clickProductLikeButton() {
    await this.click(IosLocators.product.productLikeButton);
  }

  async gotoLikePage() {
    await this.click(IosLocators.my.likeTab);
  }

  async isLikeButtonVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.likePageLikeButton);
  }

  async clickLikePageLikeButton() {
    await this.click(IosLocators.product.likePageLikeButton);
  }

  async clickProductDetailInfoTab() {
    await this.click(IosLocators.product.productDetailInfoTab);
  }

  async isProductDetailInfoVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.productDetailInfo);
  }

  async clickProductBuyInfoTab() {
    await this.click(IosLocators.product.productBuyInfoTab);
  }

  async isProductBuyInfoVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.productBuyInfo);
  }

  async clickProductReviewTab() {
    await this.click(IosLocators.product.productReviewTab);
  }

  async isProductReviewVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.productReview);
  }

  async clickProductQnaTab() {
    await this.click(IosLocators.product.productQnaTab);
  }

  async isProductQnaVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.product.productQna);
  }

  async clickProductGift() {
    await this.click(IosLocators.giftShowProduct.sendToMeButton);
  }

  async isGiftOrderPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.onAirGiftOrder);
  }

  async getProductName(): Promise<string> {
    return (await this.getText(IosLocators.product.productName)).replace(/\s/g, '');
  }

  async clickProductCart(): Promise<boolean> {
    const exists = await this.isVisible(IosLocators.main.onAirCartButton);
    if (!exists) return false;
    await this.click(IosLocators.main.onAirCartButton);
    return true;
  }

  async clickProductCartMoveButton() {
    await this.click(IosLocators.main.onAirCartMoveButton);
  }

  async getCartProductName(): Promise<string> {
    return (await this.getText(IosLocators.main.cartProductName)).replace(/\s/g, '');
  }

  async clickCartDeleteButton() {
    await this.click(IosLocators.main.cartDeleteButton);
  }

  async clickProductBuy() {
    await this.click(IosLocators.login.buyButton);
  }

  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.onAirBuyOrder);
  }
}
