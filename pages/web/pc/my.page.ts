import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class MyPage extends BasePage {

  /** 마이 버튼 클릭 */
  async clickMyButton() {
    await this.goToHome();
    await this.click(PcLocators.my.myButton);
  }

  /** 마이 > 나의 쇼핑 현황 > 주문 내역 탭 클릭 */
  async clickOrderHistory() {
    await this.click(PcLocators.my.orderHistoryTab);
  }

  /** 주문/취소 내역 노출 여부 반환 */
  async isOrderListVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.orderList);
  }

  /** 마이 > 나의 쇼핑 현황 > 취소/교환/반품 탭 클릭 */
  async clickClaimHistory() {
    await this.click(PcLocators.my.claimHistoryTab);
  }

  /** 마이 > 나의 쇼핑 현황 > 기프티쇼 선물함 탭 클릭 */
  async clickGiftShow() {
    await this.click(PcLocators.my.giftShowTab);
  }

  /** 기프티쇼 선물함 노출 여부 반환 */
  async isGiftShowVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.giftShowContent);
  }

  /** 마이 > 나의 쇼핑 현황 > 잔액형 상품권 내역 조회 탭 클릭 */
  async clickGiftShowBalance() {
    await this.click(PcLocators.my.giftShowBalanceTab);
  }

  /** 잔액형 상품권 내역 노출 여부 반환 */
  async isGiftShowBalanceVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.giftShowBalanceContent);
  }

  /** 마이 > 나의 쇼핑 현황 > 거래 증빙 서류 신청/조회 탭 클릭 */
  async clickTaxList() {
    await this.click(PcLocators.my.taxListTab);
  }

  /** 거래 증빙 서류 신청/조회 내역 노출 여부 반환 */
  async isTaxListVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.taxListContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 배송지 관리 탭 클릭 */
  async clickDeliveryAddress() {
    await this.click(PcLocators.my.deliveryAddressTab);
  }

  /** 배송지 관리 노출 여부 반환 */
  async isDeliveryAddressVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.deliveryAddressContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 연락처 관리 탭 클릭 */
  async clickPhoneAddress() {
    await this.click(PcLocators.my.phoneAddressTab);
  }

  /** 연락처 관리 노출 여부 반환 */
  async isPhoneAddressVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.phoneAddressContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 환불 계좌 관리 탭 클릭 */
  async clickRefundAccount() {
    await this.click(PcLocators.my.refundAccountTab);
  }

  /** 환불 계좌 관리 노출 여부 반환 */
  async isRefundAccountVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.refundAccountContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 선물 메시지 관리 탭 클릭 */
  async clickGiftMessage() {
    await this.click(PcLocators.my.giftMessageTab);
  }

  /** 선물 메시지 관리 노출 여부 반환 */
  async isGiftMessageVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.giftMessageContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 알파포인트 탭 클릭 */
  async clickAlphaPoint() {
    await this.click(PcLocators.my.alphaPointTab);
  }

  /** 알파포인트 노출 여부 반환 */
  async isAlphaPointVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.alphaPointContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 이용권등록 탭 클릭 */
  async clickTicket() {
    await this.click(PcLocators.my.ticketTab);
  }

  /** 이용권등록 노출 여부 반환 */
  async isTicketVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.ticketContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 방송 알림 설정 탭 클릭 */
  async clickBroadcastNotification() {
    await this.click(PcLocators.my.broadcastNotificationTab);
  }

  /** 방송 알림 설정 노출 여부 반환 */
  async isBroadcastNotificationVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.broadcastNotificationContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 간편 로그인 연결 탭 클릭 */
  async clickSimpleLogin() {
    await this.click(PcLocators.my.simpleLoginTab);
  }

  /** 간편 로그인 연결 노출 여부 반환 */
  async isSimpleLoginVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.simpleLoginContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 회원 정보 수정 탭 클릭 */
  async clickModifyCustomerInfo() {
    await this.click(PcLocators.my.modifyCustomerInfoTab);
  }

  /** 회원 정보 수정 노출 여부 반환 */
  async isModifyCustomerInfoVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.my.modifyCustomerInfoContent);
  }

  /** 마이 > 나의 쇼핑 정보 관리 > 혜택 관리 탭 클릭 */
  async clickBenefit() {
    await this.click(PcLocators.my.benefitTab);
  }
}
