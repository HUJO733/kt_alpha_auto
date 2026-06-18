import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class GsProductPage extends MobileBasePage {

  async clickProduct() { await this.click(IosLocators.giftShowProduct.giftProduct); }
  async clickProductLikeButton() { await this.click(IosLocators.product.productLikeButton); }
  async gotoLikePage() { await this.click(IosLocators.my.likeTab); }
  async isLikeButtonVisible(): Promise<boolean> { return await this.isVisible(IosLocators.product.likePageLikeButton); }
  async clickLikePageLikeButton() { await this.click(IosLocators.product.likePageLikeButton); }
  async clickProductDetailInfoTab() { await this.click(IosLocators.product.productDetailInfoTab); }
  async isProductDetailInfoVisible(): Promise<boolean> { return await this.isVisible(IosLocators.product.productDetailInfo); }
  async clickProductBuyInfoTab() { await this.click(IosLocators.product.productBuyInfoTab); }
  async isProductBuyInfoVisible(): Promise<boolean> { return await this.isVisible(IosLocators.product.productBuyInfo); }
  async clickProductGift() { await this.click(IosLocators.giftShowProduct.sendToMeButton); }
  async isGiftOrderPage(): Promise<boolean> { return await this.isVisible(IosLocators.urls.giftShowGiftOrder); }
  async clickSendToMeButton() { await this.click(IosLocators.giftShowProduct.sendToMeButton); }
  async reClickSendToMeButton() { await this.click(IosLocators.giftShowProduct.sendToMeButton); }
  async isPaymentPage(): Promise<boolean> { return await this.isVisible(IosLocators.urls.giftShowPaymentOrder); }
  async clickGiftShowMainPhoneNumberButton() { await this.click(IosLocators.giftShowProduct.giftShowMainPhoneNumberButton); }
  async isSenderInputEmpty(): Promise<boolean> { return await this.isEmpty(IosLocators.giftShowProduct.senderInput); }
  async fillAndVerify(name: string): Promise<boolean> {
    await this.fill(IosLocators.giftShowProduct.senderInput, name);
    return (await this.getValue(IosLocators.giftShowProduct.senderInput)) === name;
  }
  async clickMyPhoneNumberButton() { await this.click(IosLocators.giftShowProduct.myPhoneNumberButton); }
  async getSenderInputValue(name: string): Promise<boolean> {
    return (await this.getValue(IosLocators.giftShowProduct.senderInput)).includes(name);
  }
  async extractTotalRecipients(): Promise<number> {
    return Number((await this.getText(IosLocators.giftShowProduct.totalRecipients)).replace(/\D/g, '')) || 0;
  }
  async fillRecipientPhoneNumber(phoneNumber: string) { await this.fill(IosLocators.giftShowProduct.recipientPhoneNumberInput, phoneNumber); }
  async fillRecipientName(name: string) { await this.fill(IosLocators.giftShowProduct.recipientNameInput, name); }
  async clickPaymentButton() { await this.click(IosLocators.giftShowProduct.paymentButton); }
}
