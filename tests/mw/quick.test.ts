import { test } from '../../fixtures/web/mw.fixture';
import { QuickSteps } from '../../steps/mw/quick.steps';
import { createRun } from '../../utils/step-runner';

test('독바 (MW)', async ({ basePage }) => {
  const quickSteps = new QuickSteps(basePage);
  const run = createRun('MW Web', '독바');

  await run('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirGift());
  await run('ON AIR > 바로구매 > 장바구니 상품 추가 확인', () => quickSteps.verifyOnAirCart());
  await run('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirBuy());
});
