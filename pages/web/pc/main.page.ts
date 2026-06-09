import { BasePage } from '../../common/BasePage';
import { PcLocators } from './locators';

export class MainPage extends BasePage {

  // GNB 개수 확인
  async getNavItemCount(): Promise<number> {
    return await this.count(PcLocators.main.navItems);
  }

  // GNB 전체 순회 - 각 항목 클릭 후 main 영역 노출 여부 반환
  async isAllNavItemsVisible(): Promise<{ index: number; isVisible: boolean }[]> {
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
    await this.click(PcLocators.main.onAirButton);
  }

  // ON AIR 모달 img 노출 여부
  async isOnAirModalImgVisible(): Promise<boolean> {
    return await this.isVisible(PcLocators.main.onAirModalImg);
  }

  // ON AIR > 바로구매 버튼 클릭
  async clickDirectBuyButton() {
    await this.click(PcLocators.main.onAirDirectBuyButton);
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
    return this.urlContains(PcLocators.urls.onAirGiftOrder, PcLocators.urls.onAirGiftOrder);
  }

  // ON AIR 상품 이름 추출
  async getOnAirProductName(): Promise<string> {
    return (await this.getText(PcLocators.main.onAirProductName)).replace(/\s/g, '');
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 장바구니 클릭
  async clickOnAirCartButton(): Promise<boolean> {
    const exists = await this.isVisible(PcLocators.main.onAirCartButton);

    if (!exists) return false;

    await this.click(PcLocators.main.onAirCartButton);
    return true;
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 장바구니 > 바로가기 클릭
  async clickOnAirCartMoveButton() {
    await this.click(PcLocators.main.onAirCartMoveButton);
  }

  // 장바구니 상품 이름 추출
  async getCartProductName(): Promise<string> {
    return (await this.getText(PcLocators.main.cartProductName)).replace(/\s/g, '');
  }

  // 장바구니 선택 삭제 버튼 클릭 (dialog 자동 수락)
  async clickCartDeleteButton() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.click(PcLocators.main.cartDeleteButton);
  }

  // ON AIR > 바로구매 버튼 클릭 > 옵션 선택 > 구매하기 클릭
  async clickOnAirBuyButton() {
    await this.click(PcLocators.main.onAirBuyButton);
  }

  // 구매하기 주문서 페이지 URL 확인
  async isBuyOrderPage(): Promise<boolean> {
    return this.urlContains(PcLocators.urls.onAirBuyOrder, PcLocators.urls.onAirBuyOrder);
  }

  // 카테고리 버튼 클릭
  async clickCategoryButton() {
    await this.click(PcLocators.main.categoryButton);
  }

  // 카테고리 1depth 랜덤 인덱스 클릭
  async clickCategoryOneDepth(): Promise<number> {
    const count = await this.count(PcLocators.main.categoryOneDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(PcLocators.main.categoryOneDepthButton, randomNum);
    return randomNum;
  }

  // 카테고리 2depth 랜덤 인덱스 클릭
  async clickCategoryTwoDepth() {
    const count = await this.count(PcLocators.main.categoryTwoDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(PcLocators.main.categoryTwoDepthButton, randomNum);
  }

  // 홈쇼핑 3depth 랜덤 인덱스 클릭
  async clickHomeShoppingThreeDepth() {
    const count = await this.count(PcLocators.main.homeShoppingThreeDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(PcLocators.main.homeShoppingThreeDepthButton, randomNum);
  }

  // 기프트쇼 3depth 랜덤 인덱스 클릭
  async clickGiftShowThreeDepth() {
    const count = await this.count(PcLocators.main.giftShowThreeDepthButton);
    const randomNum = this.getRandomIndex(count - 1);
    await this.nthClick(PcLocators.main.giftShowThreeDepthButton, randomNum);
  }

  // 검색 버튼 클릭
  async clickSearchButton() {
    await this.click(PcLocators.main.searchButton);
  }

  // 검색 > 인기 검색어 랜덤 클릭
  async clickPopularWord(): Promise<string> {
    const count = await this.count(PcLocators.main.popularWords);
    const randomNum = this.getRandomIndex(count);
    const word = await this.getIndexText(PcLocators.main.popularWords, randomNum);
    await this.nthClick(PcLocators.main.popularWords, randomNum);

    return word;
  }

  // 검색 > 인기 검색어 > 첫번째 상품 클릭(상세 페이지)
  async clickSearchProduct() {
    await this.click(PcLocators.main.searchProduct);
  }

  // 상품 상세 페이지 이동 확인
  async isProductDetailPage(productName: string): Promise<boolean> {
    return this.urlContains(PcLocators.urls.productDetail, productName);
  }
}
