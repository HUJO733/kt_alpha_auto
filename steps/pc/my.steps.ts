import { BasePage } from '../../pages/common/BasePage';
import { MyPage } from '../../pages/web/pc/my.page';
import { parameter } from 'allure-js-commons';

export class MySteps {
  private myPage: MyPage;

  constructor(basePage: BasePage) {
    this.myPage = new MyPage(basePage.getPage());
  }

  // 나의 쇼핑 현황 > 주문 내역 확인
  async verifyOrderHistory(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickOrderHistory();
    return await this.myPage.isOrderListVisible();
  }

  // 나의 쇼핑 현황 > 취소/교환/반품 내역 확인
  async verifyClaimHistory(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickClaimHistory();
    return await this.myPage.isOrderListVisible();
  }

  // 나의 쇼핑 현황 > 기프티쇼 선물함 확인
  async verifyGiftShow(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickGiftShow();
    return await this.myPage.isGiftShowVisible();
  }

  // 나의 쇼핑 현황 > 잔액형 상품권 내역 확인
  async verifyGiftShowBalance(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickGiftShowBalance();
    return await this.myPage.isGiftShowBalanceVisible();
  }

  // 나의 쇼핑 현황 > 거래 증빙 서류 신청/조회 확인
  async verifyTaxList(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickTaxList();
    return await this.myPage.isTaxListVisible();
  }

  // 나의 쇼핑 정보 관리 > 배송지 관리 확인
  async verifyDeliveryAddress(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickDeliveryAddress();
    return await this.myPage.isDeliveryAddressVisible();
  }

  // 나의 쇼핑 정보 관리 > 연락처 관리 확인
  async verifyPhoneAddress(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickPhoneAddress();
    return await this.myPage.isPhoneAddressVisible();
  }

  // 나의 쇼핑 정보 관리 > 환불 계좌 관리 확인
  async verifyRefundAccount(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickRefundAccount();
    return await this.myPage.isRefundAccountVisible();
  }

  // 나의 쇼핑 정보 관리 > 선물 메시지 관리 확인
  async verifyGiftMessage(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickGiftMessage();
    return await this.myPage.isGiftMessageVisible();
  }

  // 나의 쇼핑 정보 관리 > 알파포인트 확인
  async verifyAlphaPoint(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickAlphaPoint();
    return await this.myPage.isAlphaPointVisible();
  }

  // 나의 쇼핑 정보 관리 > 이용권등록 확인
  async verifyTicket(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickTicket();
    return await this.myPage.isTicketVisible();
  }

  // 나의 쇼핑 정보 관리 > 방송 알림 설정 확인
  async verifyBroadcastNotification(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickBroadcastNotification();
    return await this.myPage.isBroadcastNotificationVisible();
  }

  // 나의 쇼핑 정보 관리 > 간편 로그인 연결 확인
  async verifySimpleLogin(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickSimpleLogin();
    return await this.myPage.isSimpleLoginVisible();
  }

  // 나의 쇼핑 정보 관리 > 회원 정보 수정 확인
  async verifyModifyCustomerInfo(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickModifyCustomerInfo();
    return await this.myPage.isModifyCustomerInfoVisible();
  }

  // 나의 쇼핑 정보 관리 > 혜택 관리 확인
  async verifyBenefit(): Promise<boolean> {
    await this.myPage.clickMyButton();
    await this.myPage.clickBenefit();
    return await this.myPage.isModifyCustomerInfoVisible();
  }
}
