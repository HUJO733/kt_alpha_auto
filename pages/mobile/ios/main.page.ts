import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class MainPage extends MobileBasePage {

  async isAllNavItemsVisible(): Promise<{ index: number; isVisible: boolean }[]> {
    const count = await this.count(IosLocators.main.navItems);
    const results: { index: number; isVisible: boolean }[] = [];

    for (let i = 0; i < count; i++) {
      await this.nthClick(IosLocators.main.navItems, i);
      const isVisible = await this.isVisible(IosLocators.main.mainArea);
      results.push({ index: i, isVisible });
    }

    return results;
  }

  async isOnAirDisplayVisible(): Promise<boolean> {
    return await this.isVisible(IosLocators.main.onAirDisplay);
  }

  async clickDirectBuyButton() {
    await this.click(IosLocators.main.onAirDirectBuyButton);
  }

  async selectFirstEnabledOption() {
    let prevCount = 0;

    while (true) {
      const count = await this.count(IosLocators.product.optionBox);
      if (count === 0 || count === prevCount) return;
      prevCount = count;
      await this.clickFirstEnabled(IosLocators.main.onAirDirectBuyFirstOption);
    }
  }

  async selectOnAirOption() {
    await this.goToHome();
    await this.clickDirectBuyButton();
    await this.selectFirstEnabledOption();
  }

  async clickOnAirGiftButton() {
    await this.click(IosLocators.main.onAirGiftButton);
  }

  async isGiftOrderPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.onAirGiftOrder);
  }

  async getOnAirProductName(): Promise<string> {
    return (await this.getText(IosLocators.main.onAirProductName)).replace(/\s/g, '');
  }

  async clickOnAirCartButton(): Promise<boolean> {
    const exists = await this.isVisible(IosLocators.main.onAirCartButton);
    if (!exists) return false;
    await this.click(IosLocators.main.onAirCartButton);
    return true;
  }

  async clickOnAirCartMoveButton() {
    await this.click(IosLocators.main.onAirCartMoveButton);
  }

  async getCartProductName(): Promise<string> {
    return (await this.getText(IosLocators.main.cartProductName)).replace(/\s/g, '');
  }

  async clickCartDeleteButton() {
    await this.click(IosLocators.main.cartDeleteButton);
  }

  async clickOnAirBuyButton() {
    await this.click(IosLocators.main.onAirBuyButton);
  }

  async isBuyOrderPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.onAirBuyOrder);
  }

  async clickCategoryButton() {
    await this.click(IosLocators.main.categoryButton);
  }

  async clickCategoryTwoDepth() {
    const count = await this.count(IosLocators.main.categoryTwoDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(IosLocators.main.categoryTwoDepthButton, randomNum);
  }

  async clickCategoryThreeDepth() {
    const count = await this.count(IosLocators.main.categoryThreeDepthButton);
    const randomNum = this.getRandomIndex(count);
    await this.nthClick(IosLocators.main.categoryThreeDepthButton, randomNum);
  }

  async clickFirstFilterButton() {
    await this.click(IosLocators.main.firstFilterButton);
    await this.wait(2);
  }

  async extractProductQuantity(): Promise<number | false> {
    const text = await this.getText(IosLocators.main.productQuantity);
    return this.extractNumber(text);
  }

  async clickSearchButton() {
    await this.click(IosLocators.main.searchButton);
  }

  async clickPopularWord(): Promise<string> {
    const count = await this.count(IosLocators.main.popularWords);
    const randomNum = this.getRandomIndex(count);
    const word = await this.getIndexText(IosLocators.main.popularWords, randomNum);
    await this.nthClick(IosLocators.main.popularWords, randomNum);
    return word;
  }

  async clickSearchProduct() {
    await this.click(IosLocators.main.searchProduct);
  }

  async isProductDetailPage(_productName: string): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.productDetail);
  }
}
