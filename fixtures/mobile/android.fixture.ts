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
