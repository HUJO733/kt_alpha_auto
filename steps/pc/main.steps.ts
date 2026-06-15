import { BasePage } from '../../pages/common/BasePage';
import { MainPage } from '../../pages/web/pc/main.page';
import { parameter } from 'allure-js-commons';

export class MainSteps {
  private mainPage: MainPage;

  constructor(basePage: BasePage) {
    this.mainPage = new MainPage(basePage.getPage());
  }

  // GNB 확인 - 각 항목 클릭 후 결과 반환
  async verifyAllNavItems(): Promise<boolean> {
    await this.mainPage.goToHome();
    const results = await this.mainPage.isAllNavItemsVisible();

    for (const { index, isVisible } of results) {
      await parameter(`nav[${index}]`, isVisible ? 'visible' : 'not visible');
    }

    return results.every(({ isVisible }) => isVisible);
  }

  // 홈 > ON AIR(지금 방송중) 상품 노출 확인
  async verifyOnAirModal(): Promise<boolean> {
    await this.mainPage.goToHome();
    return await this.mainPage.isOnAirDisplayVisible();
  }

  // 홈 > ON AIR(지금 방송중) > 바로구매 > 선물하기
  async verifyOnAirGift(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    await this.mainPage.clickOnAirGiftButton();
    return await this.mainPage.isGiftOrderPage();
  }

  // 홈 > ON AIR(지금 방송중) > 바로구매 > 장바구니
  async verifyOnAirCart(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    const onAirProductName = await this.mainPage.getOnAirProductName();
    const clicked = await this.mainPage.clickOnAirCartButton();
    if (!clicked) {
      await parameter('메인페이지 > ON AIR > 바로구매 > 장바구니', '장바구니 버튼 없는 케이스');
      return true;
    }

    await this.mainPage.clickOnAirCartMoveButton();
    const cartProductName = await this.mainPage.getCartProductName(); 
    await this.mainPage.clickCartDeleteButton();

    await parameter('ON AIR 상품명', onAirProductName);
    await parameter('장바구니 상품명', cartProductName);

    return cartProductName.includes(onAirProductName);
  }

  // 홈 > ON AIR(지금 방송중) > 바로구매 > 구매하기
  async verifyOnAirBuy(): Promise<boolean> {
    await this.mainPage.selectOnAirOption();
    await this.mainPage.clickOnAirBuyButton();
    return await this.mainPage.isBuyOrderPage();
  }

  // 카테고리 및 필터 기능 확인
  async verifyCategory(): Promise<boolean> {
    await this.mainPage.goToHome();
    await this.mainPage.clickCategoryButton();
    const oneDepthIndex = await this.mainPage.clickCategoryOneDepth();
    await this.mainPage.clickCategoryTwoDepth();

    if (oneDepthIndex === 0) {
      await this.mainPage.clickHomeShoppingThreeDepth();
    } else {
      await this.mainPage.clickGiftShowThreeDepth();
    }

    // TODO: 필터 기능
  }

  // 검색
  async verifySearch(): Promise<boolean> {
    await this.mainPage.goToHome();
    await this.mainPage.clickSearchButton();
    const popularWord = await this.mainPage.clickPopularWord();
    await this.mainPage.clickSearchProduct(); 

    await parameter('선택한 인기 검색어', popularWord);

    return await this.mainPage.isProductDetailPage(popularWord);
  }
}
