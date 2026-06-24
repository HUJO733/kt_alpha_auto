import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class MyPage extends MobileBasePage {

  async clickMyButton() { await this.click(IosLocators.my.myButton); }
  async clickOrderHistoryTab() { await this.click(IosLocators.my.orderHistoryTab); }
  async isOrderListVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.orderList); }
  async clickClaimHistoryTab() { await this.click(IosLocators.my.claimHistoryTab); }
  async clickGiftShowTab() { await this.click(IosLocators.my.giftShowTab); }
  async isGiftShowContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.giftShowContent); }
  async clickGiftShowBalanceTab() { await this.click(IosLocators.my.giftShowBalanceTab); }
  async isGiftShowBalanceContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.giftShowBalanceContent); }
  async clickTaxListTab() { await this.click(IosLocators.my.taxListTab); }
  async isTaxListContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.taxListContent); }
  async clickDeliveryAddressTab() { await this.click(IosLocators.my.deliveryAddressTab); }
  async isDeliveryAddressContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.deliveryAddressContent); }
  async clickPhoneAddressTab() { await this.click(IosLocators.my.phoneAddressTab); }
  async isPhoneAddressContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.phoneAddressContent); }
  async clickRefundAccountTab() { await this.click(IosLocators.my.refundAccountTab); }
  async isRefundAccountContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.refundAccountContent); }
  async clickGiftMessageTab() { await this.click(IosLocators.my.giftMessageTab); }
  async isGiftMessageContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.giftMessageContent); }
  async clickAlphaPointTab() { await this.click(IosLocators.my.alphaPointTab); }
  async isAlphaPointContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.alphaPointContent); }
  async clickTicketTab() { await this.click(IosLocators.my.ticketTab); }
  async isTicketContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.ticketContent); }
  async clickBroadcastNotificationTab() { await this.click(IosLocators.my.broadcastNotificationTab); }
  async isBroadcastNotificationContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.broadcastNotificationContent); }
  async clickSimpleLoginTab() { await this.click(IosLocators.my.simpleLoginTab); }
  async isSimpleLoginContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.simpleLoginContent); }
  async clickModifyCustomerInfoTab() { await this.click(IosLocators.my.modifyCustomerInfoTab); }
  async isModalVisible(): Promise<boolean> { return await this.isVisible(IosLocators.common.modalContainer); }
  async fillName(name: string) { await this.pressSequentially(IosLocators.my.nameInput, name); }
  async clickNextButton() { await this.click(IosLocators.my.nextButton); }
  async fillYear(year: string) { await this.pressSequentially(IosLocators.my.yearInput, year); }
  async fillMonth(month: string) { await this.pressSequentially(IosLocators.my.monthInput, month); }
  async fillDay(day: string) { await this.pressSequentially(IosLocators.my.dayInput, day); }
  async clickKtAgencyButton() { await this.click(IosLocators.my.ktAgencyButton); }
  async fillPhoneNumber(phoneNumber: string) { await this.pressSequentially(IosLocators.my.phoneNumberInput, phoneNumber); }
  async isModifyCustomerInfoContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.modifyCustomerInfoContent); }
  async clickBenefitTab() { await this.click(IosLocators.my.benefitTab); }
  async clickCartTab() { await this.click(IosLocators.my.cartTab); }
  async isCartContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.cartContent); }
  async clickLikeTab() { await this.click(IosLocators.my.likeTab); }
  async isLikeContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.likeContent); }
  async clickReviewTab() { await this.click(IosLocators.my.reviewTab); }
  async isReviewContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.reviewContent); }
  async clickRecentlyTab() { await this.click(IosLocators.my.recentlyTab); }
  async isRecentlyContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.recentlyContent); }
  async clickInquiryTab() { await this.click(IosLocators.my.inquiryTab); }
  async isInquiryContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.inquiryContent); }
  async clickInquiryListTab() { await this.click(IosLocators.my.inquiryListTab); }
  async isInquiryListContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.inquiryListContent); }
  async clickNoticeTab() { await this.click(IosLocators.my.noticeTab); }
  async isNoticeContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.noticeContent); }
  async clickFaqTab() { await this.click(IosLocators.my.faqTab); }
  async isFaqContentVisible(): Promise<boolean> { return await this.isVisible(IosLocators.my.faqContent); }
}
