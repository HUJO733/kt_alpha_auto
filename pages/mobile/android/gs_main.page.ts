import { MobileBasePage } from '../common/MobileBasePage';
import { AndroidLocators } from './locators';

export class GsMainPage extends MobileBasePage {

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

  /** 카테고리 1depth(기프티쇼) 클릭 */
  async clickGiftShowOneDepth() {
    await this.click(AndroidLocators.giftShowMain.giftShowOneDepthButton);
  }

  /** 카테고리 2depth 랜덤 클릭 */
  async clickCategoryTwoDepth() {
    const count = await this.count(AndroidLocators.main.categoryTwoDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(AndroidLocators.main.categoryTwoDepthButton, randomNum);
  }

  /** 기프티쇼 3depth 랜덤 클릭 */
  async clickGiftShowThreeDepth() {
    const count = await this.count(AndroidLocators.giftShowMain.giftShowThreeDepthButton);
    const randomNum = this.getRandomIndex(count - 1);
    await this.nthClick(AndroidLocators.giftShowMain.giftShowThreeDepthButton, randomNum);
    await this.wait(3);
  }

  /** 첫번째 필터 클릭 */
  async clickFirstFilterButton() {
    await this.click(AndroidLocators.giftShowMain.firstButtonInFilter);
    await this.click(AndroidLocators.giftShowMain.filterSearchButton);
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
