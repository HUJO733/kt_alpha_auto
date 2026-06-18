import { remote } from 'webdriverio';
import { iosCaps } from '../configs/appium/ios.capabilities';

export async function createIosDriver(): Promise<WebdriverIO.Browser> {
  return await remote({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities: iosCaps,
  });
}
