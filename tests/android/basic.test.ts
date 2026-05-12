import { remote } from 'webdriverio';
import { androidCaps } from '../../configs/appium/android.capabilities';

async function main() {
  const driver = await remote({
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: androidCaps,
  });

  console.log('SESSION CREATED');

  await driver.pause(3000);

  await driver.deleteSession();
}

main();