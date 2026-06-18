import { remote } from 'webdriverio';
import { androidCaps } from '../configs/appium/android.capabilities';

export async function createAndroidDriver(): Promise<WebdriverIO.Browser> {
  return await remote({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities: androidCaps,
  });
}
