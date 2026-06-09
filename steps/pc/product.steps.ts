import { BasePage } from '../../pages/common/BasePage';
import { ProductPage } from '../../pages/web/pc/product.page';
import { parameter } from 'allure-js-commons';

export class ProductSteps {
  private productPage: ProductPage;

  constructor(basePage: BasePage) {
    this.productPage = new ProductPage(basePage.getPage());
  }

  // ON AIR > VOD 영상 재생 확인
  async verifyVOD(): Promise<boolean> {
    await this.productPage.goToHome();
    await this.productPage.clickOnAirButton();
    await this.productPage.playVideo();
    return await this.productPage.isVideoPlaying();
  }

  // 편성표 > 방송알림 신청 팝업 확인 및 방송알림 등록 완료 확인
  async verifyBroadcastNotification() : Promise<boolean> {
    await this.productPage.goToHome();
    await this.productPage.clickBroadcastSchedule();
    await this.productPage.clickAlarmButton();
    const popup = await this.productPage.isBroadcastNotificationPopupVisible();
    await this.productPage.clickSmsConsentCheckbox();
    await this.productPage.clickBroadcastNotificationRegisterButton();
    await this.productPage.clickMyBroadcastNotificationButton();
    const register = await this.productPage.isDisableNotificationButtonVisible();
    await this.productPage.clickDisableNotificationButton();
    await this.productPage.clickConfirmButton();

    await parameter('방송알림 신청 팝업', `${popup}`);
    await parameter('방송알림 등록 완료', `${register}`);

    return popup && register;
  }
}
