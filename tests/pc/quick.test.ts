import { test, check } from '../../fixtures/web/pc.fixture';
import { QuickSteps } from '../../steps/pc/quick.steps';

test.describe('독바', () => {

  let quickSteps: QuickSteps;

  test.beforeEach(async ({ basePage }) => {
    quickSteps = new QuickSteps(basePage);
  });

  check('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirGift());
  check('ON AIR > 바로구매 > 장바구니 상품 추가 확인', () => quickSteps.verifyOnAirCart());
  check('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', () => quickSteps.verifyOnAirBuy());

});
