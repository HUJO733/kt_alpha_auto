import { remote } from 'webdriverio';
import type { Browser } from 'webdriverio';
import { androidCaps } from '../../configs/appium/android.capabilities';

export async function createAndroidDriver(): Promise<Browser> {
  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: androidCaps,
  });

  return driver;
}

export async function closeAndroidDriver(driver: Browser) {
  if (driver) {
    await driver.deleteSession();
  }
}

export async function restartAndroidApp(driver: Browser) {
  await driver.terminateApp('com.android.settings');
  await driver.activateApp('com.android.settings');
}