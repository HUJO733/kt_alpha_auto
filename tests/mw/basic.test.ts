import { test, expect } from '../../fixtures/web/mw.fixture';

test('KT알파 쇼핑 메인 페이지 접속 (MW)', async ({ appPage }) => {
  await appPage.waitForTimeout(5000);

  const title = await appPage.title();

  console.log(title);

  expect(title).toContain('KT알파 쇼핑');
});