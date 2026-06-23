import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class QuickPage extends BasePage {

  /** ON AIR 버튼 클릭 */
  async clickOnAirButton() {
    await this.click(PcLocators.main.onAirButton);
  }

  /** ON AIR 모달 img 노출 여부 반환 */
  async isOnAirModalImgVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.quick.onAirModalImg);
  }

  /** ON AIR > 바로구매 버튼 Text 추출 */
  async getDirectBuyButtonText(): Promise<string> {
    return await this.getText(PcLocators.quick.onAirDirectBuyButton);
  }

  /** ON AIR > 바로구매 버튼 클릭 */
  async clickDirectBuyButton() {
    await this.click(PcLocators.quick.onAirDirectBuyButton);
  }

  /** ON AIR > 바로구매 > 옵션 선택 (중첩 옵션박스 대응) */
  async selectFirstEnabledOption() {
    let prevCount = 0;

    while (true) {
      const count = await this.count(PcLocators.product.optionBox);
      if (count === 0 || count === prevCount) return;
      prevCount = count;
      await this.clickFirstEnabled(PcLocators.main.onAirDirectBuySecondOption);
    }
  }

  /** ON AIR > 바로구매 > 옵션 선택까지 수행 */
  async selectOnAirOption(): Promise<boolean> {
    await this.goToHome();
    await this.clickOnAirButton();
    const text = await this.getDirectBuyButtonText();
    await this.clickDirectBuyButton();
    if (text === "상담 신청") return false;
    await this.selectFirstEnabledOption();
    return true;
  }

  /** ON AIR > 선물하기 버튼 클릭 */
  async clickOnAirGiftButton() {
    await this.click(PcLocators.main.onAirGiftButton);
  }

  /** 선물하기 주문서 페이지 URL 확인 */
  async isGiftOrderPage(): Promise<boolean> {
    return this.urlContains(PcLocators.urls.onAirGiftOrder);
  }

  /** ON AIR 상품 이름 추출 */
  async getOnAirProductName(): Promise<string> {
    return (await this.getText(PcLocators.quick.onAirProductName)).replace(/\s/g, '');
  }

  /** ON AIR > 장바구니 버튼 클릭 (버튼 없으면 false 반환) */
  async clickOnAirCartButton(): Promise<boolean> {
    const exists = await this.isVisible(PcLocators.main.onAirCartButton);

    if (!exists) return false;

    await this.click(PcLocators.main.onAirCartButton);
    return true;
  }

  /** ON AIR > 장바구니 > 바로가기 버튼 클릭 */
  async clickOnAirCartMoveButton() {
    await this.click(PcLocators.main.onAirCartMoveButton);
  }

  /** 장바구니 상품 이름 추출 */
  async getCartProductName(): Promise<string> {
    return (await this.getText(PcLocators.main.cartProductName)).replace(/\s/g, '');
  }

  /** 장바구니 선택 삭제 버튼 클릭 (dialog 자동 수락) */
  async clickCartDeleteButton() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.click(PcLocators.main.cartDeleteButton);
  }

  /** ON AIR > 구매하기 버튼 클릭 */
  async clickOnAirBuyButton() {
    await this.click(PcLocators.main.onAirBuyButton);
  }

  /** 구매하기 주문서 페이지 URL 확인 */
  async isBuyOrderPage(): Promise<boolean> {
    return this.urlContains(PcLocators.urls.onAirBuyOrder);
  }
}
