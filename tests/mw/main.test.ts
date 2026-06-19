import { test, check } from '../../fixtures/web/mw.fixture';
import { MainSteps } from '../../steps/mw/main.steps';
import { epic, feature } from 'allure-js-commons';

test.describe('메인 페이지 (MW)', () => {

  let mainSteps: MainSteps;

  test.beforeEach(async ({ basePage }) => {
    mainSteps = new MainSteps(basePage);
    await epic('MW Web');
    await feature(`메인 페이지 (${process.env.TEST_RUN_TIMESTAMP})`);
  });

  check('GNB 메뉴별 화면 확인', () => mainSteps.verifyAllNavItems());
  check('ON AIR > 현재 방송 중인 상품 정보 노출 확인', () => mainSteps.verifyOnAirModal());
  check('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', () => mainSteps.verifyOnAirGift());
  check('ON AIR > 바로구매 > 장바구니 상품 추가 확인', () => mainSteps.verifyOnAirCart());
  check('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', () => mainSteps.verifyOnAirBuy());
  check('카테고리 정상 노출 및 필터 기능 확인', () => mainSteps.verifyCategory());
  check('검색 후 상품 상세 페이지 이동 확인', () => mainSteps.verifySearch());

});
