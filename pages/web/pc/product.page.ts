import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class ProductPage extends BasePage {

  // ON AIR 클릭
  async clickOnAirButton() {
    await this.click(PcLocators.main.onAirButton);
  }

  // ON AIR > 비디오 재생
  async playVideo() {
    await this.click(PcLocators.product.onAirVideo);
  }

  // 비디오 재생 여부
  async isVideoPlaying(): Promise<boolean> {
    return await this.getAttribute(PcLocators.product.onAirVideo, 'autoplay') !== null;
  }

  // 편성표 클릭
  async clickBroadcastSchedule() {
    await this.firstClick(PcLocators.main.navItems);
  }

  // 알람 버튼 클릭
  async clickAlarmButton() {
    await this.lastClick(PcLocators.product.alarmButton);
  }

  // 방송 알림 신청 팝업 확인
  async isBroadcastNotificationPopupVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.product.broadcastNotificationPopupHeader);
  }

  // 광고성 SMS 수신 동의
  async clickSmsConsentCheckbox() {
    await this.click(PcLocators.product.smsConsentCheckbox);
  }

  // 방송 알림 등록하기 버튼 클릭
  async clickBroadcastNotificationRegisterButton() {
    await this.click(PcLocators.product.broadcastNotificationRegisterButton);
  }

  // 방송 알림 등록하기 > 내 방송알림보기 버튼 클릭
  async clickMyBroadcastNotificationButton() {
    await this.click(PcLocators.product.myBroadcastNotificationButton);
  }

  // 내 방송알림보기 > 알림 해제 버튼 확인
  async isDisableNotificationButtonVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.product.disableNotificationButton);
  }

  // 내 방송알림보기 > 알림 해제 버튼 클릭
  async clickDisableNotificationButton() {
    await this.click(PcLocators.product.disableNotificationButton);
  }
}
