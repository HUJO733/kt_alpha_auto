import { test, check } from '../../fixtures/web/pc.fixture';
import { GsMainSteps } from '../../steps/pc/gs_main.steps';
import { epic, feature } from 'allure-js-commons';

test.describe('GS 메인', () => {

  let gsMainSteps: GsMainSteps;

  test.beforeEach(async ({ basePage }) => {
    gsMainSteps = new GsMainSteps(basePage);
    await epic('PC Web');
    await feature(`기프티쇼 메인 (${process.env.TEST_RUN_TIMESTAMP})`);
  });

  check('GNB 메뉴별 화면 노출 확인', () => gsMainSteps.gsVerifyAllNavItems());
  check('카테고리 및 필터 기능 확인', () => gsMainSteps.gsVerifyCategory());
  check('검색 후 상품 상세 페이지 이동 확인', () => gsMainSteps.gsVerifySearch());

});
