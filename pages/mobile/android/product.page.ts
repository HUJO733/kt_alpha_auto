import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class ProductPage extends MobileBasePage {

  /** ON AIR 버튼 클릭 */
  async clickOnAirButton() {
    await this.click(AndroidLocators.main.onAirButton);
  }

  /** ON AIR > VOD 재생 */
  async playVideo() {
    await this.click(AndroidLocators.product.onAirVideo);
  }

  /** ON AIR Video 재생 여부 반환 */
  async isVideoPlaying(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.onAirVideo);
  }

  /** 편성표 탭 클릭 */
  async clickBroadcastSchedule() {
    await this.click(AndroidLocators.main.navItems);
  }

  /** 방송알림 버튼 클릭 */
  async clickAlarmButton() {
    await this.click(AndroidLocators.product.alarmButton);
  }

  /** 방송알림 신청 팝업 노출 여부 반환 */
  async isBroadcastNotificationPopupVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.broadcastNotificationPopupHeader);
  }

  /** SMS 수신 동의 체크박스 클릭 */
  async clickSmsConsentCheckbox() {
    await this.click(AndroidLocators.product.smsConsentCheckbox);
  }

  /** 방송알림 등록하기 버튼 클릭 */
  async clickBroadcastNotificationRegisterButton() {
    await this.click(AndroidLocators.product.broadcastNotificationRegisterButton);
  }

  /** 내 방송알림보기 버튼 클릭 */
  async clickMyBroadcastNotificationButton() {
    await this.click(AndroidLocators.product.myBroadcastNotificationButton);
  }

  /** 알림해제 버튼 노출 여부 반환 */
  async isDisableNotificationButtonVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.disableNotificationButton);
  }

  /** 알림해제 버튼 클릭 */
  async clickDisableNotificationButton() {
    await this.click(AndroidLocators.product.disableNotificationButton);
  }

  /** 확인 버튼 클릭 */
  async clickConfirmButton() {
    await this.click(AndroidLocators.common.confirmButton);
  }

  /** 상품 클릭 */
  async clickProduct() {
    await this.click(AndroidLocators.login.mdsPickProduct);
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

  /** 상품평 탭 클릭 */
  async clickProductReviewTab() {
    await this.click(AndroidLocators.product.productReviewTab);
  }

  /** 상품평 영역 노출 여부 반환 */
  async isProductReviewVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.productReview);
  }

  /** 상품문의 탭 클릭 */
  async clickProductQnaTab() {
    await this.click(AndroidLocators.product.productQnaTab);
  }

  /** 상품문의 영역 노출 여부 반환 */
  async isProductQnaVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.product.productQna);
  }

  /** 선물하기 버튼 클릭 */
  async clickProductGift() {
    await this.click(AndroidLocators.giftShowProduct.sendToMeButton);
  }

  /** 선물하기 주문서 페이지 확인 */
  async isGiftOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.onAirGiftOrder);
  }

  /** 상품명 추출 */
  async getProductName(): Promise<string> {
    return (await this.getText(AndroidLocators.product.productName)).replace(/\s/g, '');
  }

  /** 장바구니 버튼 클릭 (없으면 false 반환) */
  async clickProductCart(): Promise<boolean> {
    const exists = await this.isVisible(AndroidLocators.main.onAirCartButton);
    if (!exists) return false;
    await this.click(AndroidLocators.main.onAirCartButton);
    return true;
  }

  /** 장바구니 바로가기 버튼 클릭 */
  async clickProductCartMoveButton() {
    await this.click(AndroidLocators.main.onAirCartMoveButton);
  }

  /** 장바구니 상품명 추출 */
  async getCartProductName(): Promise<string> {
    return (await this.getText(AndroidLocators.main.cartProductName)).replace(/\s/g, '');
  }

  /** 장바구니 삭제 버튼 클릭 */
  async clickCartDeleteButton() {
    await this.click(AndroidLocators.main.cartDeleteButton);
  }

  /** 구매하기 버튼 클릭 */
  async clickProductBuy() {
    await this.click(AndroidLocators.login.buyButton);
  }

  /** 구매하기 주문서 페이지 확인 */
  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.onAirBuyOrder);
  }
}
