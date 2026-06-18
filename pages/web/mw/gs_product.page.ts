import { BasePage } from '../../common/BasePage';
import { MwLocators } from './locators';

export class GsProductPage extends BasePage {

  async clickProduct() {
    await this.clickGiftShowButton();
    await this.click(MwLocators.giftShowProduct.giftProduct);
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

  async clickProductGift() {
    await this.click(MwLocators.main.onAirGiftButton);
  }

  async isGiftOrderPage(): Promise<boolean> {
    return this.urlContains(MwLocators.urls.giftShowGiftOrder);
  }

  async clickGiftShowMainPhoneNumberButton() {
    await this.click(MwLocators.giftShowProduct.giftShowMainPhoneNumberButton);
  }

  async isSenderInputEmpty(): Promise<boolean> {
    return await this.isEmpty(MwLocators.giftShowProduct.senderInput);
  }

  async fillAndVerify(name: string): Promise<boolean> {
    await this.fill(MwLocators.giftShowProduct.senderInput, name);
    const value = await this.getValue(MwLocators.giftShowProduct.senderInput);
    return value === name;
  }

  async clickMyPhoneNumberButton() {
    await this.click(MwLocators.giftShowProduct.myPhoneNumberButton);
  }

  async getSenderInputValue(name: string): Promise<boolean> {
    const value = await this.getValue(MwLocators.giftShowProduct.senderInput);
    return value.slice(0, 2) === name.slice(0, 2);
  }

  async extractTotalRecipients(): Promise<number | false> {
    const text = await this.getText(MwLocators.giftShowProduct.totalRecipients);
    return this.extractNumber(text);
  }

  async clickPaymentButton() {
    await this.click(MwLocators.giftShowProduct.paymentButton);
  }

  async fillRecipientPhoneNumber(phoneNumber: string) {
    await this.fill(MwLocators.giftShowProduct.recipientPhoneNumberInput, phoneNumber);
  }

  async fillRecipientName(name: string) {
    await this.fill(MwLocators.giftShowProduct.recipientNameInput, name);
  }

  async clickSendToMeButton() {
    await this.click(MwLocators.giftShowProduct.sendToMeButton);
  }

  async reClickSendToMeButton() {
    await this.lastClick(MwLocators.giftShowProduct.sendToMeButton);
  }

  async isPaymentPage(): Promise<boolean> {
    return this.urlContains(MwLocators.urls.giftShowPaymentOrder);
  }
}
