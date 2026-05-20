import {
  createAndroidDriver,
  closeAndroidDriver,
} from '../../drivers/mobile/android.driver'

(async () => {
  const driver = await createAndroidDriver();

  try {
    console.log('SESSION CREATED');

    const source = await driver.getPageSource();
    console.log(source);
  } finally {
    await closeAndroidDriver(driver);
  }
})();