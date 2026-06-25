import { IosFixture } from '../../fixtures/mobile/ios.fixture';
import { GsProductSteps } from '../../steps/ios/gs_product.steps';
import { createMobileRun } from '../../utils/step-runner';

const ENV = {
  name: process.env.NAME ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

describe('기프티쇼 상품 (iOS)', () => {
  const fixture = new IosFixture();
  let gsProductSteps: GsProductSteps;

  before(async () => {
    const basePage = await fixture.setup();
    gsProductSteps = new GsProductSteps(basePage);
  });

  after(async () => { await fixture.teardown(); });

  it('기프티쇼 상품', async () => {
    const { run, finish } = createMobileRun('iOS', '기프티쇼 상품');
    await run('기프티쇼 > 상품 > 좋아요 추가 및 삭제 확인', () => gsProductSteps.gsVerifyProductLike());
    await run('기프티쇼 > 상품 > 상세정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductDetailInfo());
    await run('기프티쇼 > 상품 > 구매정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductBuyInfo());
    await run('기프티쇼 > 상품 > 선물하기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductGift());
    await run('기프티쇼 > 상품 > 선물하기 > 기프티쇼 대표 번호로 보내기 확인', () => gsProductSteps.gsVerifyGiftShowMainPhoneNumber(ENV.name));
    await run('기프티쇼 > 상품 > 선물하기 > 내 번호로 보내기 확인', () => gsProductSteps.gsVerifyMyPhoneNumber(ENV.name));
    await run('기프티쇼 > 상품 > 선물하기 > 받는 사람 확인', () => gsProductSteps.gsVerifyRecipient(ENV.phoneNumber, ENV.name));
    await run('기프티쇼 > 상품 > 선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인', () => gsProductSteps.gsVerifyPayment());
    await run('기프티쇼 > 상품 > 나에게 보내기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductSendToMe());
    finish();
  });
});
