import { IosFixture, check } from '../../fixtures/mobile/ios.fixture';
import { ProductSteps } from '../../steps/ios/product.steps';

describe('상품 페이지 (iOS)', () => {
  const fixture = new IosFixture();
  let productSteps: ProductSteps;

  before(async () => {
    const basePage = await fixture.setup();
    productSteps = new ProductSteps(basePage);
  });

  after(async () => {
    await fixture.teardown();
  });

  check('ON AIR > VOD 영상 재생 확인', () => productSteps.verifyVOD());
  check('편성표 > 방송알림 신청 및 등록 완료 확인', () => productSteps.verifyBroadcastNotification());
  check('상품 > 좋아요 추가 및 삭제 확인', () => productSteps.verifyProductLike());
  check('상품 > 상세정보 탭 노출 확인', () => productSteps.verifyProductDetailInfo());
  check('상품 > 구매정보 탭 노출 확인', () => productSteps.verifyProductBuyInfo());
  check('상품 > 상품평 탭 노출 확인', () => productSteps.verifyProductReview());
  check('상품 > 상품문의 탭 노출 확인', () => productSteps.verifyProductQna());
  check('상품 > 선물하기 주문서 페이지 이동 확인', () => productSteps.verifyProductGift());
  check('상품 > 장바구니 상품 추가 확인', () => productSteps.verifyProductCart());
  check('상품 > 구매하기 주문서 페이지 이동 확인', () => productSteps.verifyProductBuy());
});
