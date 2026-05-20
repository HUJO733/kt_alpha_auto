import { test, expect } from '../../fixtures/web/pc.fixture';

test('PC browser open', async ({ appPage }) => {
  const title = await appPage.title();

  console.log(title);

  expect(title).toContain('Google');
});