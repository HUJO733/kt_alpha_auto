export class BasePage {
  constructor(protected driver: WebdriverIO.Browser) {}

  async click(selector: string) {
    const element = await $(selector);

    await element.waitForDisplayed();

    await element.click();
  }

  async input(selector: string, text: string) {
    const element = await $(selector);

    await element.waitForDisplayed();

    await element.setValue(text);
  }

  async waitLoading() {
    await driver.pause(2000);
  }
}