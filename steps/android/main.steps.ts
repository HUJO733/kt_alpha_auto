import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';
import { MainPage } from '../../pages/mobile/android/main.page';

export class MainSteps {
  private mainPage: MainPage;

  constructor(basePage: MobileBasePage) {
    this.mainPage = new MainPage(basePage.getDriver());
  }

  /** GNB 메뉴별 화면 노출 확인 */
  async verifyAllNavItems(): Promise<boolean> {
    await this.mainPage.goToHome();
    const results = await this.mainPage.isAllNavItemsVisible();
    return results.every(({ isVisible }) => isVisible);
  }

  /** 홈 > ON AIR 상품 노출 확인 */
  async verifyOnAirModal(): Promise<boolean> {
    await this.mainPage.goToHome();
    return await this.mainPage.isOnAirDisplayVisible();
  }

  /** 홈 > ON AIR > 바로구매 > 선물하기 주문서 이동 확인 */
  async verifyOnAirGift(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    await this.mainPage.clickOnAirGiftButton();
    return await this.mainPage.isGiftOrderPage();
  }

  /** 홈 > ON AIR > 바로구매 > 장바구니 상품 추가 확인 */
  async verifyOnAirCart(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    const onAirProductName = await this.mainPage.getOnAirProductName();
    const clicked = await this.mainPage.clickOnAirCartButton();
    if (!clicked) return true;

    await this.mainPage.clickOnAirCartMoveButton();
    const cartProductName = await this.mainPage.getCartProductName();
    await this.mainPage.clickCartDeleteButton();

    return cartProductName.includes(onAirProductName);
  }

  /** 홈 > ON AIR > 바로구매 > 구매하기 주문서 이동 확인 */
  async verifyOnAirBuy(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    await this.mainPage.clickOnAirBuyButton();
    return await this.mainPage.isBuyOrderPage();
  }

  /** 카테고리 및 필터 기능 확인 */
  async verifyCategory(): Promise<boolean> {
    await this.mainPage.goToHome();
    await this.mainPage.clickCategoryButton();
    await this.mainPage.clickCategoryTwoDepth();
    await this.mainPage.clickCategoryThreeDepth();
    const beforeQuantity = await this.mainPage.extractProductQuantity();
    await this.mainPage.clickFirstFilterButton();
    const afterQuantity = await this.mainPage.extractProductQuantity();

    if (beforeQuantity === false || afterQuantity === false) return false;

    return beforeQuantity >= afterQuantity;
  }

  /** 검색 후 상품 상세 페이지 이동 확인 */
  async verifySearch(): Promise<boolean> {
    await this.mainPage.goToHome();
    await this.mainPage.clickSearchButton();
    const popularWord = await this.mainPage.clickPopularWord();
    await this.mainPage.clickSearchProduct();

    return await this.mainPage.isProductDetailPage(popularWord);
  }
}
