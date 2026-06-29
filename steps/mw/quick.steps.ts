import { BasePage } from '../../pages/common/BasePage';
import { QuickPage } from '../../pages/web/mw/quick.page';
import { parameter } from '../../utils/step-runner';

export class QuickSteps {
  private quickPage: QuickPage;

  constructor(basePage: BasePage) {
    this.quickPage = new QuickPage(basePage.getPage());
  }

  /** 독바 > ON AIR > 바로구매 > 선물하기 주문서 이동 확인 */
  async verifyOnAirGift(): Promise<boolean> {
    const counsel = await this.quickPage.selectOnAirOption();
    if (!counsel) return await this.quickPage.isBuyOrderPage();
    await this.quickPage.clickOnAirGiftButton();
    return await this.quickPage.isGiftOrderPage();
  }

  /** 독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인 */
  async verifyOnAirCart(): Promise<boolean> {
    await this.quickPage.selectOnAirOption();
    const onAirProductName = await this.quickPage.getOnAirProductName();
    const clicked = await this.quickPage.clickOnAirCartButton();
    if (!clicked) {
      await parameter('독바 > ON AIR > 바로구매 > 장바구니', '장바구니 버튼 없는 케이스');
      return true;
    }

    await this.quickPage.clickOnAirCartMoveButton();
    const cartProductName = await this.quickPage.getCartProductName();
    await this.quickPage.clickCartDeleteButton();

    await parameter('ON AIR 상품명', onAirProductName);
    await parameter('장바구니 상품명', cartProductName);

    return cartProductName.includes(onAirProductName);
  }

  /** 독바 > ON AIR > 바로구매 > 구매하기 주문서 이동 확인 */
  async verifyOnAirBuy(): Promise<boolean> {
    await this.quickPage.selectOnAirOption();
    await this.quickPage.clickOnAirBuyButton();
    return await this.quickPage.isBuyOrderPage();
  }
}
