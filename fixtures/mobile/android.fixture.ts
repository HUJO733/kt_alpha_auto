import assert from 'assert';
import { createAndroidDriver } from '../../drivers/mobile/android.driver';
import { MobileBasePage } from '../../pages/mobile/common/MobileBasePage';

export class AndroidFixture {
  private driver: WebdriverIO.Browser | null = null;
  basePage: MobileBasePage | null = null;

  async setup(): Promise<MobileBasePage> {
    this.driver = await createAndroidDriver();
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
