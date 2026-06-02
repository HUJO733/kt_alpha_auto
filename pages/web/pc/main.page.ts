import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class MainPage extends BasePage {

  // GNB 개수 확인
  async getNavItemCount(): Promise<number> {
    return await this.count(PcLocators.main.navItems);
  }

  // GNB 전체 순회 - 각 항목 클릭 후 main 영역 노출 여부 반환
  async verifyAllNavItems(): Promise<{ index: number; isVisible: boolean }[]> {
    const count = await this.count(PcLocators.main.navItems);
    const results: { index: number; isVisible: boolean }[] = [];

    for (let i = 0; i < count; i++) {
      await this.nthClick(PcLocators.main.navItems, i);
      const isVisible = await this.isVisible(PcLocators.main.mainArea);
      results.push({ index: i, isVisible });
    }

    return results;
  }

  // ON AIR 클릭
  async clickOnAirButton() {
    await this.click(PcLocators.main.onAirBtn);
  }

  // ON AIR 모달 img 노출 여부
  async isOnAirModalImgVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.main.onAirModalImg);
  }

  // ON AIR > 바로구매 버튼 클릭
  async clickDirectBuyButton() {
    await this.click(PcLocators.main.onAirDirectBuyBtn);
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 개수 확인
  async getOptionCount(): Promise<number> {
    return await this.count(PcLocators.main.onAirDirectBuyOption);
  }

  // ON AIR > 바로구매 버튼 클릭 > 활성화된 옵션 클릭 (비활성화 건너뜀)
  async clickFirstEnabledOption() {
    const count = await this.count(PcLocators.main.onAirDirectBuyOption);

    if (count === 0) return;

    for (let i = 0; i < count; i++) {
      const option = this.page.locator(PcLocators.main.onAirDirectBuyOption).nth(i);

      if (await option.isEnabled()) {
        await option.click();
        return;
      }
    }
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택
  async selectOnAirOption() {
    await this.goToHome();
    await this.clickOnAirButton();
    await this.clickDirectBuyButton();
    await this.clickFirstEnabledOption();
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 선물하기 클릭
  async clickOnAirGiftButton() {
    await this.click(PcLocators.main.onAirGiftButton);
  }

  // 선물하기 주문서 페이지 URL 확인
  async isGiftOrderPage(): Promise<boolean> {
    return this.urlContains(PcLocators.urls.onAirGiftOrder);
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 장바구니 클릭
  async clickOnAirCartButton(): Promise<boolean> {
    const exists = await this.isVisible(PcLocators.main.onAirCartButton);

    if (!exists) return false;

    await this.click(PcLocators.main.onAirCartButton);
    return true;
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 구매하기 클릭
  async clickOnAirBuyButton() {
    await this.click(PcLocators.main.onAirBuyButton);
  }

  // 구매하기 주문서 페이지 URL 확인
  async isBuyOrderPage(): Promise<boolean> {
    return this.urlContains(PcLocators.urls.onAirBuyOrder);
  }
}
