import { test, expect } from '../../fixtures/web/pc.fixture';

test('KShop 메인 페이지 접속', async ({ appPage }) => {
  await appPage.waitForTimeout(5000);

  const title = await appPage.title();

  console.log(title);

  expect(title).toContain('KT알파 쇼핑');
});