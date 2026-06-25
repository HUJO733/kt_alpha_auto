import { test } from '../../fixtures/web/pc.fixture';
import { QuickSteps } from '../../steps/pc/quick.steps';
import { createRun } from '../../utils/step-runner';

test('독바', async ({ basePage }) => {
  const quickSteps = new QuickSteps(basePage);
  const run = createRun('PC Web', '독바', basePage.getPage());

  await run('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirGift());
  await run('ON AIR > 바로구매 > 장바구니 상품 추가 확인', () => quickSteps.verifyOnAirCart());
  await run('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirBuy());
});
