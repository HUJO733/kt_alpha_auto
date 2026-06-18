import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class MyPage extends MobileBasePage {

  /** 마이 버튼 클릭 */
  async clickMyButton() {
    await this.click(AndroidLocators.my.myButton);
  }

  /** 주문 내역 탭 클릭 */
  async clickOrderHistoryTab() {
    await this.click(AndroidLocators.my.orderHistoryTab);
  }

  /** 주문 목록 노출 여부 반환 */
  async isOrderListVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.orderList);
  }

  /** 취소/교환/반품 내역 탭 클릭 */
  async clickClaimHistoryTab() {
    await this.click(AndroidLocators.my.claimHistoryTab);
  }

  /** 기프티쇼 탭 클릭 */
  async clickGiftShowTab() {
    await this.click(AndroidLocators.my.giftShowTab);
  }

  /** 기프티쇼 콘텐츠 노출 여부 반환 */
  async isGiftShowContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.giftShowContent);
  }

  /** 잔액형 상품권 탭 클릭 */
  async clickGiftShowBalanceTab() {
    await this.click(AndroidLocators.my.giftShowBalanceTab);
  }

  /** 잔액형 상품권 콘텐츠 노출 여부 반환 */
  async isGiftShowBalanceContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.giftShowBalanceContent);
  }

  /** 거래 증빙 서류 탭 클릭 */
  async clickTaxListTab() {
    await this.click(AndroidLocators.my.taxListTab);
  }

  /** 거래 증빙 서류 콘텐츠 노출 여부 반환 */
  async isTaxListContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.taxListContent);
  }

  /** 배송지 관리 탭 클릭 */
  async clickDeliveryAddressTab() {
    await this.click(AndroidLocators.my.deliveryAddressTab);
  }

  /** 배송지 관리 콘텐츠 노출 여부 반환 */
  async isDeliveryAddressContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.deliveryAddressContent);
  }

  /** 연락처 관리 탭 클릭 */
  async clickPhoneAddressTab() {
    await this.click(AndroidLocators.my.phoneAddressTab);
  }

  /** 연락처 관리 콘텐츠 노출 여부 반환 */
  async isPhoneAddressContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.phoneAddressContent);
  }

  /** 환불 계좌 관리 탭 클릭 */
  async clickRefundAccountTab() {
    await this.click(AndroidLocators.my.refundAccountTab);
  }

  /** 환불 계좌 관리 콘텐츠 노출 여부 반환 */
  async isRefundAccountContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.refundAccountContent);
  }

  /** 선물 메시지 관리 탭 클릭 */
  async clickGiftMessageTab() {
    await this.click(AndroidLocators.my.giftMessageTab);
  }

  /** 선물 메시지 관리 콘텐츠 노출 여부 반환 */
  async isGiftMessageContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.giftMessageContent);
  }

  /** 알파포인트 탭 클릭 */
  async clickAlphaPointTab() {
    await this.click(AndroidLocators.my.alphaPointTab);
  }

  /** 알파포인트 콘텐츠 노출 여부 반환 */
  async isAlphaPointContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.alphaPointContent);
  }

  /** 이용권등록 탭 클릭 */
  async clickTicketTab() {
    await this.click(AndroidLocators.my.ticketTab);
  }

  /** 이용권등록 콘텐츠 노출 여부 반환 */
  async isTicketContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.ticketContent);
  }

  /** 방송 알림 설정 탭 클릭 */
  async clickBroadcastNotificationTab() {
    await this.click(AndroidLocators.my.broadcastNotificationTab);
  }

  /** 방송 알림 설정 콘텐츠 노출 여부 반환 */
  async isBroadcastNotificationContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.broadcastNotificationContent);
  }

  /** 간편 로그인 연결 탭 클릭 */
  async clickSimpleLoginTab() {
    await this.click(AndroidLocators.my.simpleLoginTab);
  }

  /** 간편 로그인 연결 콘텐츠 노출 여부 반환 */
  async isSimpleLoginContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.simpleLoginContent);
  }

  /** 회원 정보 수정 탭 클릭 */
  async clickModifyCustomerInfoTab() {
    await this.click(AndroidLocators.my.modifyCustomerInfoTab);
  }

  /** 본인인증 모달 노출 여부 반환 */
  async isModalVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.common.modalContainer);
  }

  /** 이름 입력 */
  async fillName(name: string) {
    await this.fill(AndroidLocators.my.nameInput, name);
  }

  /** 다음 버튼 클릭 */
  async clickNextButton() {
    await this.click(AndroidLocators.my.nextButton);
  }

  /** 연도 입력 */
  async fillYear(year: string) {
    await this.fill(AndroidLocators.my.yearInput, year);
  }

  /** 월 입력 */
  async fillMonth(month: string) {
    await this.fill(AndroidLocators.my.monthInput, month);
  }

  /** 일 입력 */
  async fillDay(day: string) {
    await this.fill(AndroidLocators.my.dayInput, day);
  }

  /** KT 통신사 버튼 클릭 */
  async clickKtAgencyButton() {
    await this.click(AndroidLocators.my.ktAgencyButton);
  }

  /** 휴대폰 번호 입력 */
  async fillPhoneNumber(phoneNumber: string) {
    await this.fill(AndroidLocators.my.phoneNumberInput, phoneNumber);
  }

  /** 회원 정보 수정 콘텐츠 노출 여부 반환 */
  async isModifyCustomerInfoContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.modifyCustomerInfoContent);
  }

  /** 혜택 관리 탭 클릭 */
  async clickBenefitTab() {
    await this.click(AndroidLocators.my.benefitTab);
  }

  /** 장바구니 탭 클릭 */
  async clickCartTab() {
    await this.click(AndroidLocators.my.cartTab);
  }

  /** 장바구니 콘텐츠 노출 여부 반환 */
  async isCartContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.cartContent);
  }

  /** 좋아요 탭 클릭 */
  async clickLikeTab() {
    await this.click(AndroidLocators.my.likeTab);
  }

  /** 좋아요 콘텐츠 노출 여부 반환 */
  async isLikeContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.likeContent);
  }

  /** 상품평 탭 클릭 */
  async clickReviewTab() {
    await this.click(AndroidLocators.my.reviewTab);
  }

  /** 상품평 콘텐츠 노출 여부 반환 */
  async isReviewContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.reviewContent);
  }

  /** 최근 본 상품 탭 클릭 */
  async clickRecentlyTab() {
    await this.click(AndroidLocators.my.recentlyTab);
  }

  /** 최근 본 상품 콘텐츠 노출 여부 반환 */
  async isRecentlyContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.recentlyContent);
  }

  /** 1:1 문의하기 탭 클릭 */
  async clickInquiryTab() {
    await this.click(AndroidLocators.my.inquiryTab);
  }

  /** 1:1 문의하기 콘텐츠 노출 여부 반환 */
  async isInquiryContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.inquiryContent);
  }

  /** 문의 내역 탭 클릭 */
  async clickInquiryListTab() {
    await this.click(AndroidLocators.my.inquiryListTab);
  }

  /** 문의 내역 콘텐츠 노출 여부 반환 */
  async isInquiryListContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.inquiryListContent);
  }

  /** 공지 사항 탭 클릭 */
  async clickNoticeTab() {
    await this.click(AndroidLocators.my.noticeTab);
  }

  /** 공지 사항 콘텐츠 노출 여부 반환 */
  async isNoticeContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.noticeContent);
  }

  /** 자주하는 질문 탭 클릭 */
  async clickFaqTab() {
    await this.click(AndroidLocators.my.faqTab);
  }

  /** 자주하는 질문 콘텐츠 노출 여부 반환 */
  async isFaqContentVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.my.faqContent);
  }
}
