import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class MainPage extends MobileBasePage {

  /** GNB 전체 순회 - 각 항목 클릭 후 main 영역 노출 여부 반환 */
  async isAllNavItemsVisible(): Promise<{ index: number; isVisible: boolean }[]> {
    const count = await this.count(AndroidLocators.main.navItems);
    const results: { index: number; isVisible: boolean }[] = [];

    for (let i = 0; i < count; i++) {
      await this.nthClick(AndroidLocators.main.navItems, i);
      const isVisible = await this.isVisible(AndroidLocators.main.mainArea);
      results.push({ index: i, isVisible });
    }

    return results;
  }

  /** ON AIR 상품 노출 여부 반환 */
  async isOnAirDisplayVisible(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.main.onAirDisplay);
  }

  /** ON AIR > 바로구매 버튼 클릭 */
  async clickDirectBuyButton() {
    await this.click(AndroidLocators.main.onAirDirectBuyButton);
  }

  /** ON AIR > 바로구매 > 옵션 선택 (중첩 옵션박스 대응) */
  async selectFirstEnabledOption() {
    let prevCount = 0;

    while (true) {
      const count = await this.count(AndroidLocators.product.optionBox);
      if (count === 0 || count === prevCount) return;
      prevCount = count;
      await this.clickFirstEnabled(AndroidLocators.main.onAirDirectBuyFirstOption);
    }
  }

  /** ON AIR > 바로구매 > 옵션 선택까지 수행 */
  async selectOnAirOption() {
    await this.goToHome();
    await this.clickDirectBuyButton();
    await this.selectFirstEnabledOption();
  }

  /** ON AIR > 선물하기 버튼 클릭 */
  async clickOnAirGiftButton() {
    await this.click(AndroidLocators.main.onAirGiftButton);
  }

  /** 선물하기 주문서 페이지 확인 */
  async isGiftOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.onAirGiftOrder);
  }

  /** ON AIR 상품 이름 추출 */
  async getOnAirProductName(): Promise<string> {
    return (await this.getText(AndroidLocators.main.onAirProductName)).replace(/\s/g, '');
  }

  /** ON AIR > 장바구니 버튼 클릭 (버튼 없으면 false 반환) */
  async clickOnAirCartButton(): Promise<boolean> {
    const exists = await this.isVisible(AndroidLocators.main.onAirCartButton);
    if (!exists) return false;
    await this.click(AndroidLocators.main.onAirCartButton);
    return true;
  }

  /** ON AIR > 장바구니 > 바로가기 버튼 클릭 */
  async clickOnAirCartMoveButton() {
    await this.click(AndroidLocators.main.onAirCartMoveButton);
  }

  /** 장바구니 상품 이름 추출 */
  async getCartProductName(): Promise<string> {
    return (await this.getText(AndroidLocators.main.cartProductName)).replace(/\s/g, '');
  }

  /** 장바구니 선택 삭제 버튼 클릭 */
  async clickCartDeleteButton() {
    await this.click(AndroidLocators.main.cartDeleteButton);
  }

  /** ON AIR > 구매하기 버튼 클릭 */
  async clickOnAirBuyButton() {
    await this.click(AndroidLocators.main.onAirBuyButton);
  }

  /** 구매하기 주문서 페이지 확인 */
  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.onAirBuyOrder);
  }

  /** 카테고리 버튼 클릭 */
  async clickCategoryButton() {
    await this.click(AndroidLocators.main.categoryButton);
  }

  /** 카테고리 2depth 랜덤 클릭 */
  async clickCategoryTwoDepth() {
    const count = await this.count(AndroidLocators.main.categoryTwoDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(AndroidLocators.main.categoryTwoDepthButton, randomNum);
  }

  /** 카테고리 3depth 랜덤 클릭 */
  async clickCategoryThreeDepth() {
    const count = await this.count(AndroidLocators.main.categoryThreeDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(AndroidLocators.main.categoryThreeDepthButton, randomNum);
  }

  /** 첫번째 필터 클릭 */
  async clickFirstFilterButton() {
    await this.click(AndroidLocators.main.firstFilterButton);
    await this.wait(2);
  }

  /** 상품 개수 추출 */
  async extractProductQuantity(): Promise<number | false> {
    const text = await this.getText(AndroidLocators.main.productQuantity);
    return this.extractNumber(text);
  }

  /** 검색 버튼 클릭 */
  async clickSearchButton() {
    await this.click(AndroidLocators.main.searchButton);
  }

  /** 검색 > 인기 검색어 랜덤 클릭 후 검색어 반환 */
  async clickPopularWord(): Promise<string> {
    const count = await this.count(AndroidLocators.main.popularWords);
    const randomNum = this.getRandomIndex(count);
    const word = await this.getIndexText(AndroidLocators.main.popularWords, randomNum);
    await this.nthClick(AndroidLocators.main.popularWords, randomNum);
    return word;
  }

  /** 검색 결과 첫 번째 상품 클릭 */
  async clickSearchProduct() {
    await this.click(AndroidLocators.main.searchProduct);
  }

  /** 상품 상세 페이지 이동 확인 */
  async isProductDetailPage(): Promise<boolean> {
    return await this.isVisible(AndroidLocators.urls.productDetail);
  }
}
