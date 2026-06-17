import { test, expect } from '../../fixtures/web/pc.fixture';
import { GsMainSteps } from '../../steps/pc/gs_main.steps';

test.describe('GS 메인', () => {

  let gsMainSteps: GsMainSteps;

  test.beforeEach(async ({ basePage }) => {
    gsMainSteps = new GsMainSteps(basePage);
  });

  test('기프티쇼 GNB 메뉴별 화면 노출 확인', async () => {
    const result = await gsMainSteps.gsVerifyAllNavItems();
    expect.soft(result, '기프티쇼 GNB 메뉴별 화면 노출 확인 실패').toBe(true);
  });

  test('기프티쇼 카테고리 및 필터 기능 확인', async () => {
    const result = await gsMainSteps.gsVerifyCategory();
    expect.soft(result, '기프티쇼 카테고리 및 필터 기능 확인 실패').toBe(true);
  });

  test('기프티쇼 검색 후 상품 상세 페이지 이동 확인', async () => {
    const result = await gsMainSteps.gsVerifySearch();
    expect.soft(result, '기프티쇼 검색 후 상품 상세 페이지 이동 확인 실패').toBe(true);
  });

});
