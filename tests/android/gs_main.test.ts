import { AndroidFixture, check } from '../../fixtures/mobile/android.fixture';
import { GsMainSteps } from '../../steps/android/gs_main.steps';

describe('기프티쇼 메인 (Android)', () => {
  const fixture = new AndroidFixture();
  let gsMainSteps: GsMainSteps;

  before(async () => {
    const basePage = await fixture.setup();
    gsMainSteps = new GsMainSteps(basePage);
  });

  after(async () => {
    await fixture.teardown();
  });

  check('기프티쇼 GNB 메뉴별 화면 노출 확인', () => gsMainSteps.gsVerifyAllNavItems());
  check('기프티쇼 카테고리 및 필터 기능 확인', () => gsMainSteps.gsVerifyCategory());
  check('기프티쇼 검색 후 상품 상세 페이지 이동 확인', () => gsMainSteps.gsVerifySearch());
});
