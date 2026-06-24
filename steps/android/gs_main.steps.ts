import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';
import { GsMainPage } from '../../pages/mobile/android/gs_main.page';
import { parameter } from 'allure-js-commons';

export class GsMainSteps {
  private gsMainPage: GsMainPage;

  constructor(basePage: MobileBasePage) {
    this.gsMainPage = new GsMainPage(basePage.getDriver());
  }

  /** 기프티쇼 GNB 메뉴별 화면 노출 확인 */
  async gsVerifyAllNavItems(): Promise<boolean> {
    await this.gsMainPage.clickGiftShowButton();
    const results = await this.gsMainPage.isAllNavItemsVisible();
    return results.every(({ isVisible }) => isVisible);
  }

  /** 기프티쇼 카테고리 및 필터 기능 확인 */
  async gsVerifyCategory(): Promise<boolean> {
    await this.gsMainPage.clickGiftShowButton();
    await this.gsMainPage.clickGiftShowOneDepth();
    await this.gsMainPage.clickCategoryTwoDepth();
    await this.gsMainPage.clickGiftShowThreeDepth();
    const beforeQuantity = await this.gsMainPage.extractProductQuantity();
    await this.gsMainPage.clickFirstFilterButton();
    const afterQuantity = await this.gsMainPage.extractProductQuantity();

    if (beforeQuantity === false || afterQuantity === false) return false;

    return beforeQuantity >= afterQuantity;
  }

  /** 기프티쇼 검색 후 상품 상세 페이지 이동 확인 */
  async gsVerifySearch(): Promise<boolean> {
    await this.gsMainPage.clickGiftShowButton();
    await this.gsMainPage.clickSearchButton();
    const popularWord = await this.gsMainPage.clickPopularWord();
    await this.gsMainPage.clickSearchProduct();

    await parameter('선택한 인기 검색어', popularWord);
    await parameter('상품 클릭 후 URL', await this.gsMainPage.getCurrentURL());

    return await this.gsMainPage.isProductDetailPage();
  }
}
