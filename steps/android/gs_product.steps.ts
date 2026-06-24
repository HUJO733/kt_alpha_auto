import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';
import { GsProductPage } from '../../pages/mobile/android/gs_product.page';

export class GsProductSteps {
  private gsProductPage: GsProductPage;

  constructor(basePage: MobileBasePage) {
    this.gsProductPage = new GsProductPage(basePage.getDriver());
  }

  /** 기프티쇼 > 상품 > 좋아요 추가 및 삭제 확인 */
  async gsVerifyProductLike(): Promise<boolean> {
    await this.gsProductPage.clickProduct();
    await this.gsProductPage.clickProductLikeButton();
    await this.gsProductPage.gotoLikePage();
    const likePageLikeButtonBefore = await this.gsProductPage.isLikeButtonVisible();
    await this.gsProductPage.clickLikePageLikeButton();
    const likePageLikeButtonAfter = await this.gsProductPage.isLikeButtonVisible();

    return likePageLikeButtonBefore && !likePageLikeButtonAfter;
  }

  /** 기프티쇼 > 상품 > 상세정보 탭 노출 확인 */
  async gsVerifyProductDetailInfo(): Promise<boolean> {
    await this.gsProductPage.clickProduct();
    await this.gsProductPage.clickProductDetailInfoTab();
    return await this.gsProductPage.isProductDetailInfoVisible();
  }

  /** 기프티쇼 > 상품 > 구매정보 탭 노출 확인 */
  async gsVerifyProductBuyInfo(): Promise<boolean> {
    await this.gsProductPage.clickProduct();
    await this.gsProductPage.clickProductBuyInfoTab();
    return await this.gsProductPage.isProductBuyInfoVisible();
  }

  /** 기프티쇼 > 상품 > 선물하기 주문서 이동 확인 */
  async gsVerifyProductGift(): Promise<boolean> {
    await this.gsProductPage.clickProduct();
    await this.gsProductPage.clickProductGift();
    return await this.gsProductPage.isGiftOrderPage();
  }

  /** 기프티쇼 > 상품 > 선물하기 > 기프티쇼 대표 번호로 보내기 확인 */
  async gsVerifyGiftShowMainPhoneNumber(name: string): Promise<boolean> {
    await this.gsProductPage.clickGiftShowMainPhoneNumberButton();
    const empty = await this.gsProductPage.isSenderInputEmpty();
    const verify = await this.gsProductPage.fillAndVerify(name);
    return empty && verify;
  }

  /** 기프티쇼 > 상품 > 선물하기 > 내 번호로 보내기 확인 */
  async gsVerifyMyPhoneNumber(name: string): Promise<boolean> {
    await this.gsProductPage.clickMyPhoneNumberButton();
    const value = await this.gsProductPage.getSenderInputValue();
    return value.slice(0, 2) === name.slice(0, 2);
  }

  /** 기프티쇼 > 상품 > 선물하기 > 받는 사람 확인 */
  async gsVerifyRecipient(phoneNumber: string, name: string): Promise<boolean> {
    const beforeRecipients = await this.gsProductPage.extractTotalRecipients();
    await this.gsProductPage.fillRecipientPhoneNumber(phoneNumber);
    await this.gsProductPage.fillRecipientName(name);
    const afterRecipients = await this.gsProductPage.extractTotalRecipients();
    return beforeRecipients < afterRecipients;
  }

  /** 기프티쇼 > 상품 > 선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인 */
  async gsVerifyPayment(): Promise<boolean> {
    await this.gsProductPage.clickPaymentButton();
    return await this.gsProductPage.isPaymentPage();
  }

  /** 기프티쇼 > 상품 > 나에게 보내기 주문서 이동 확인 */
  async gsVerifyProductSendToMe(): Promise<boolean> {
    await this.gsProductPage.clickProduct();
    await this.gsProductPage.clickSendToMeButton();
    await this.gsProductPage.reClickSendToMeButton();
    return await this.gsProductPage.isPaymentPage();
  }
}
