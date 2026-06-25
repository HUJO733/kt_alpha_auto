import { AndroidFixture } from '../../fixtures/mobile/android.fixture';
import { ProductSteps } from '../../steps/android/product.steps';
import { createMobileRun } from '../../utils/step-runner';

describe('상품 페이지 (Android)', () => {
  const fixture = new AndroidFixture();
  let productSteps: ProductSteps;

  before(async () => {
    const basePage = await fixture.setup();
    productSteps = new ProductSteps(basePage);
  });

  after(async () => { await fixture.teardown(); });

  it('상품 페이지', async () => {
    const { run, finish } = createMobileRun('Android', '상품 페이지');
    await run('ON AIR > VOD 영상 재생 확인', () => productSteps.verifyVOD());
    await run('편성표 > 방송알림 신청 및 등록 완료 확인', () => productSteps.verifyBroadcastNotification());
    await run('상품 > 좋아요 추가 및 삭제 확인', () => productSteps.verifyProductLike());
    await run('상품 > 상세정보 탭 노출 확인', () => productSteps.verifyProductDetailInfo());
    await run('상품 > 구매정보 탭 노출 확인', () => productSteps.verifyProductBuyInfo());
    await run('상품 > 상품평 탭 노출 확인', () => productSteps.verifyProductReview());
    await run('상품 > 상품문의 탭 노출 확인', () => productSteps.verifyProductQna());
    await run('상품 > 선물하기 주문서 페이지 이동 확인', () => productSteps.verifyProductGift());
    await run('상품 > 장바구니 상품 추가 확인', () => productSteps.verifyProductCart());
    await run('상품 > 구매하기 주문서 페이지 이동 확인', () => productSteps.verifyProductBuy());
    finish();
  });
});
