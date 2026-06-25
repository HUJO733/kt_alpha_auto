import { IosFixture } from '../../fixtures/mobile/ios.fixture';
import { GsMainSteps } from '../../steps/ios/gs_main.steps';
import { createMobileRun } from '../../utils/step-runner';

describe('기프티쇼 메인 (iOS)', () => {
  const fixture = new IosFixture();
  let gsMainSteps: GsMainSteps;

  before(async () => {
    const basePage = await fixture.setup();
    gsMainSteps = new GsMainSteps(basePage);
  });

  after(async () => { await fixture.teardown(); });

  it('기프티쇼 메인', async () => {
    const { run, finish } = createMobileRun('iOS', '기프티쇼 메인');
    await run('기프티쇼 GNB 메뉴별 화면 노출 확인', () => gsMainSteps.gsVerifyAllNavItems());
    await run('기프티쇼 카테고리 및 필터 기능 확인', () => gsMainSteps.gsVerifyCategory());
    await run('기프티쇼 검색 후 상품 상세 페이지 이동 확인', () => gsMainSteps.gsVerifySearch());
    finish();
  });
});
