import { remote } from 'webdriverio';
import type { Browser } from 'webdriverio';
import { iosCaps } from '../../configs/appium/ios.capabilities';

export async function createIOSDriver(): Promise<Browser> {
  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: iosCaps,
  });

  return driver;
}

export async function closeIOSDriver(driver: Browser) {
  if (driver) {
    await driver.deleteSession();
  }
}