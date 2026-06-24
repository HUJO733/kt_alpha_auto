import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class GsProductPage extends MobileBasePage {

  /** 기프티쇼 상품 클릭 */
  async clickProduct() {
    await this.click(AndroidLocators.giftShowProduct.giftProduct);
  }

  /** 상품 좋아요 버튼 클릭 */
  async clickProductLikeButton() {
    await this.click(AndroidLocators.product.productLikeButton);
  }

  /** 좋아요 페이지로 이동 */
  async gotoLikePage() {
    await this.click(AndroidLocators.my.likeTab);
  }

  /** 좋아요 페이지의 좋아요 버튼 노출 여부 반환 */
  async isLikeButtonVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.likePageLikeButton);
  }

  /** 좋아요 페이지의 좋아요 버튼 클릭 */
  async clickLikePageLikeButton() {
    await this.click(AndroidLocators.product.likePageLikeButton);
  }

  /** 상세정보 탭 클릭 */
  async clickProductDetailInfoTab() {
    await this.click(AndroidLocators.product.productDetailInfoTab);
  }

  /** 상세정보 영역 노출 여부 반환 */
  async isProductDetailInfoVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.productDetailInfo);
  }

  /** 구매정보 탭 클릭 */
  async clickProductBuyInfoTab() {
    await this.click(AndroidLocators.product.productBuyInfoTab);
  }

  /** 구매정보 영역 노출 여부 반환 */
  async isProductBuyInfoVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.productBuyInfo);
  }

  /** 선물하기 버튼 클릭 */
  async clickProductGift() {
    await this.click(AndroidLocators.giftShowProduct.sendToMeButton);
  }

  /** 선물하기 주문서 페이지 확인 */
  async isGiftOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.giftShowGiftOrder);
  }

  /** 나에게 보내기 버튼 클릭 */
  async clickSendToMeButton() {
    await this.click(AndroidLocators.giftShowProduct.sendToMeButton);
  }

  /** 나에게 보내기 버튼 재클릭 */
  async reClickSendToMeButton() {
    await this.click(AndroidLocators.giftShowProduct.sendToMeButton);
  }

  /** 결제 페이지 확인 */
  async isPaymentPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.giftShowPaymentOrder);
  }

  /** 기프티쇼 대표 번호로 보내기 버튼 클릭 */
  async clickGiftShowMainPhoneNumberButton() {
    await this.click(AndroidLocators.giftShowProduct.giftShowMainPhoneNumberButton);
  }

  /** 보내는 사람 input Empty 여부 반환 */
  async isSenderInputEmpty(): Promise<boolean> {
    return await this.isEmpty(AndroidLocators.giftShowProduct.senderInput);
  }

  /** 보내는 사람 input 입력 및 검증 */
  async fillAndVerify(name: string): Promise<boolean> {
    await this.fill(AndroidLocators.giftShowProduct.senderInput, name);
    return (await this.getValue(AndroidLocators.giftShowProduct.senderInput)) === name;
  }

  /** 내 번호로 보내기 버튼 클릭 */
  async clickMyPhoneNumberButton() {
    await this.click(AndroidLocators.giftShowProduct.myPhoneNumberButton);
  }

  /** 보내는 사람 input값 추출 */
  async getSenderInputValue(): Promise<string> {
    return await this.getValue(AndroidLocators.giftShowProduct.senderInput);
  }

  /** 받는 사람 수 추출 */
  async extractTotalRecipients(): Promise<number | false> {
    const text = await this.getText(AndroidLocators.giftShowProduct.totalRecipients);
    return this.extractNumber(text);
  }

  /** 받는 사람 휴대폰 번호 입력 */
  async fillRecipientPhoneNumber(phoneNumber: string) {
    await this.fill(AndroidLocators.giftShowProduct.recipientPhoneNumberInput, phoneNumber);
  }

  /** 받는 사람 이름 입력 */
  async fillRecipientName(name: string) {
    await this.fill(AndroidLocators.giftShowProduct.recipientNameInput, name);
  }

  /** 결제 버튼 클릭 */
  async clickPaymentButton() {
    await this.click(AndroidLocators.giftShowProduct.paymentButton);
  }
}
