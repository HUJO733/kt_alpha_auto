import { test, expect } from '../../fixtures/web/mw.fixture';

test('MW browser open', async ({ appPage }) => {
  const title = await appPage.title();

  console.log(title);

  expect(title).toContain('Google');
});