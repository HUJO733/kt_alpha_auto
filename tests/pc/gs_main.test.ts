import { test } from '../../fixtures/web/pc.fixture';
import { GsMainSteps } from '../../steps/pc/gs_main.steps';
import { createRun } from '../../utils/step-runner';

test('기프티쇼 메인', async ({ basePage }) => {
  const gsMainSteps = new GsMainSteps(basePage);
  const run = createRun('PC Web', '기프티쇼 메인');

  await run('GNB 메뉴별 화면 노출 확인', () => gsMainSteps.gsVerifyAllNavItems());
  await run('카테고리 및 필터 기능 확인', () => gsMainSteps.gsVerifyCategory());
  await run('검색 후 상품 상세 페이지 이동 확인', () => gsMainSteps.gsVerifySearch());
});
