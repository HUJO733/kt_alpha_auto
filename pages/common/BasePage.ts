export class BasePage {
  constructor(protected driver: WebdriverIO.Browser) {}

  // 요소 클릭
  async click(selector: string) {
    const element = await $(selector);

    await element.waitForDisplayed();

    await element.click();
  }

  // input 요소에 text 삽입
  async input(selector: string, text: string) {
    const element = await $(selector);

    await element.waitForDisplayed();

    await element.setValue(text);
  }

  // 암묵적 대기
  async waitLoading() {
    await driver.pause(2000);
  }
}