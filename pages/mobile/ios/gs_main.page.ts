import { MobileBasePage } from '../common/MobileBasePage';
import { IosLocators } from './locators';

export class GsMainPage extends MobileBasePage {

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

  async clickGiftShowOneDepth() { await this.click(IosLocators.giftShowMain.giftShowOneDepthButton); }
  async clickCategoryTwoDepth() {
    const count = await this.count(IosLocators.main.categoryTwoDepthButton);
    await this.nthClick(IosLocators.main.categoryTwoDepthButton, this.getRandomIndex(count));
  }
  async clickGiftShowThreeDepth() {
    const count = await this.count(IosLocators.giftShowMain.giftShowThreeDepthButton);
    await this.nthClick(IosLocators.giftShowMain.giftShowThreeDepthButton, this.getRandomIndex(count - 1));
    await this.wait(3);
  }
  async clickFirstFilterButton() {
    await this.click(IosLocators.giftShowMain.firstButtonInFilter);
    await this.click(IosLocators.giftShowMain.filterSearchButton);
    await this.wait(2);
  }
  async extractProductQuantity(): Promise<number | false> {
    return this.extractNumber(await this.getText(IosLocators.main.productQuantity));
  }
  async clickSearchButton() { await this.click(IosLocators.main.searchButton); }
  async clickPopularWord(): Promise<string> {
    const count = await this.count(IosLocators.main.popularWords);
    const idx = this.getRandomIndex(count);
    const word = await this.getIndexText(IosLocators.main.popularWords, idx);
    await this.nthClick(IosLocators.main.popularWords, idx);
    return word;
  }
  async clickSearchProduct() { await this.click(IosLocators.main.searchProduct); }
  async isProductDetailPage(): Promise<boolean> {
    return await this.isVisible(IosLocators.urls.productDetail);
  }
}
