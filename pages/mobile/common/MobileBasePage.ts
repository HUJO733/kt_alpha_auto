export class MobileBasePage {
  constructor(protected driver: WebdriverIO.Browser) {}

  getDriver(): WebdriverIO.Browser {
    return this.driver;
  }

  /** 요소 단일 클릭 */
  async click(selector: string) {
    await this.driver.$(selector).click();
  }

  /** index번째 요소 클릭 */
  async nthClick(selector: string, index: number) {
    const els = await this.driver.$$(selector) as unknown as WebdriverIO.Element[];
    await els[index].click();
  }

  /** 첫 번째 요소 클릭 */
  async firstClick(selector: string) {
    const els = await this.driver.$$(selector) as unknown as WebdriverIO.Element[];
    await els[0].click();
  }

  /** 마지막 요소 클릭 */
  async lastClick(selector: string) {
    const els = await this.driver.$$(selector) as unknown as WebdriverIO.Element[];
    await els[els.length - 1].click();
  }

  /** 요소에 텍스트 입력 */
  async fill(selector: string, text: string) {
    await this.driver.$(selector).setValue(text);
  }

  /** 요소 값 초기화 */
  async clear(selector: string) {
    await this.driver.$(selector).clearValue();
  }

  /** 요소 개수 반환 */
  async count(selector: string): Promise<number> {
    return (await this.driver.$$(selector) as unknown as WebdriverIO.Element[]).length;
  }

  /** 요소의 텍스트 반환 */
  async getText(selector: string): Promise<string> {
    return await this.driver.$(selector).getText();
  }

  /** index번째 요소의 텍스트 반환 */
  async getIndexText(selector: string, index: number): Promise<string> {
    const els = await this.driver.$$(selector) as unknown as WebdriverIO.Element[];
    return await els[index].getText();
  }

  /** 요소의 attribute 값 반환 */
  async getAttribute(selector: string, attribute: string): Promise<string | null> {
    return await this.driver.$(selector).getAttribute(attribute);
  }

  /** input 요소의 값 반환 */
  async getValue(selector: string): Promise<string> {
    return String(await this.driver.$(selector).getValue());
  }

  /** input 요소의 값이 비어있는지 여부 반환 */
  async isEmpty(selector: string): Promise<boolean> {
    return (await this.getValue(selector)) === '';
  }

  /** 요소가 화면에 보이는지 여부 반환 */
  async isVisible(selector: string): Promise<boolean> {
    return await this.driver.$(selector).isDisplayed();
  }

  /** 요소가 활성화 상태인지 여부 반환 */
  async isEnabled(selector: string): Promise<boolean> {
    return await this.driver.$(selector).isEnabled();
  }

  /** 요소가 visible 상태가 될 때까지 대기 */
  async waitForElement(selector: string, seconds = 10) {
    await this.driver.$(selector).waitForDisplayed({ timeout: seconds * 1000 });
  }

  /** 요소가 사라질 때까지 대기 */
  async waitForHidden(selector: string, seconds = 10) {
    await this.driver.$(selector).waitForDisplayed({ timeout: seconds * 1000, reverse: true });
  }

  /** 활성화된 첫 번째 요소 클릭 */
  async clickFirstEnabled(selector: string) {
    const els = await this.driver.$$(selector) as unknown as WebdriverIO.Element[];
    for (const el of els) {
      if (await el.isEnabled() && await el.isDisplayed()) {
        await el.click();
        return;
      }
    }
  }

  /** 문자열에서 숫자만 추출하여 number로 반환 */
  extractNumber(text: string): number | false {
    const digits = text.replace(/\D/g, '');
    return digits.length > 0 ? Number(digits) : false;
  }

  /** 0 ~ count-1 사이의 랜덤 정수 반환 */
  getRandomIndex(count: number): number {
    return Math.floor(Math.random() * count);
  }

  /** 지정한 시간(초)만큼 대기 */
  async wait(seconds: number) {
    await this.driver.pause(seconds * 1000);
  }

  /** 앱 홈 화면으로 이동 */
  async goToHome() {
    const bundleId = this.driver.capabilities['appium:bundleId'] as string | undefined;
    if (bundleId) await this.driver.activateApp(bundleId);
  }

  /** 공통 팝업 모달 닫기 */
  async closeModal() {
    // Override in platform-specific page
  }

  /** 모달 노출 여부 반환 */
  async isModalVisible(): Promise<boolean> {
    return false;
  }

  /** 기프티쇼 버튼 클릭 */
  async clickGiftShowButton() {
    await this.goToHome();
  }

  /** 확인 버튼 클릭 */
  async clickConfirmButton() {
    // Override in platform-specific page
  }

  /** 현재 페이지가 홈인지 확인 */
  async isMainPage(): Promise<boolean> {
    return false;
  }

  /** 현재 페이지의 URL 반환 */
  async getCurrentURL(): Promise<string> {
    return await this.driver.getUrl();
  }
}
