import assert from 'assert';
import { createIOSDriver } from '../../drivers/mobile/ios.driver';
import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';

export class IosFixture {
  private driver: WebdriverIO.Browser | null = null;
  basePage: MobileBasePage | null = null;

  async setup(): Promise<MobileBasePage> {
    this.driver = await createIOSDriver();
    this.basePage = new MobileBasePage(this.driver);
    return this.basePage;
  }

  async teardown() {
    if (this.driver) {
      await this.driver.deleteSession();
      this.driver = null;
    }
  }
}

export function check(name: string, fn: () => Promise<boolean>, _hard = false) {
  it(name, async () => {
    assert.strictEqual(await fn(), true, `${name} 실패`);
  });
}
