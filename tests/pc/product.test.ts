import { test, expect } from '../../fixtures/web/pc.fixture';
import { ProductSteps } from '../../steps/pc/product.steps';

test.describe('상품 페이지', () => {

  let productSteps: ProductSteps;

  test.beforeEach(async ({ basePage }) => {
    productSteps = new ProductSteps(basePage);
  });

  test('ON AIR > VOD 영상 재생 확인', async () => {
    await test.step('ON AIR > VOD 영상 재생 확인', async () => {
      const isPlaying = await productSteps.verifyVOD();
      expect.soft(isPlaying, 'ON AIR > VOD 영상 재생 확인 실패').toBe(true);
    });
  });

  test('편성표 > 방송알림 신청 및 등록 완료 확인', async () => {
    await test.step('편성표 > 방송알림 신청 및 등록 완료 확인', async () => {
      const isRegistered = await productSteps.verifyBroadcastNotification();
      expect.soft(isRegistered, '편성표 > 방송알림 신청 및 등록 완료 확인 실패').toBe(true);
    });
  });

  test('상품 > 좋아요 추가 및 삭제 확인', async () => {
    await test.step('상품 > 좋아요 추가 및 삭제 확인', async () => {
      const isLiked = await productSteps.verifyProductLike();
      expect.soft(isLiked, '상품 > 좋아요 추가 및 삭제 확인 실패').toBe(true);
    });
  });

  test('상품 > 상세정보 탭 노출 확인', async () => {
    await test.step('상품 > 상세정보 탭 노출 확인', async () => {
      const isVisible = await productSteps.verifyProductDetailInfo();
      expect.soft(isVisible, '상품 > 상세정보 탭 노출 확인 실패').toBe(true);
    });
  });

  test('상품 > 구매정보 탭 노출 확인', async () => {
    await test.step('상품 > 구매정보 탭 노출 확인', async () => {
      const isVisible = await productSteps.verifyProductBuyInfo();
      expect.soft(isVisible, '상품 > 구매정보 탭 노출 확인 실패').toBe(true);
    });
  });

  test('상품 > 상품평 탭 노출 확인', async () => {
    await test.step('상품 > 상품평 탭 노출 확인', async () => {
      const isVisible = await productSteps.verifyProductReview();
      expect.soft(isVisible, '상품 > 상품평 탭 노출 확인 실패').toBe(true);
    });
  });

  test('상품 > 상품문의 탭 노출 확인', async () => {
    await test.step('상품 > 상품문의 탭 노출 확인', async () => {
      const isVisible = await productSteps.verifyProductQna();
      expect.soft(isVisible, '상품 > 상품문의 탭 노출 확인 실패').toBe(true);
    });
  });

  test('상품 > 선물하기 주문서 페이지 이동 확인', async () => {
    await test.step('상품 > 선물하기 주문서 페이지 이동 확인', async () => {
      const isGiftOrder = await productSteps.verifyProductGift();
      expect.soft(isGiftOrder, '상품 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
  });

  test('상품 > 장바구니 상품 추가 확인', async () => {
    await test.step('상품 > 장바구니 상품 추가 확인', async () => {
      const isMatched = await productSteps.verifyProductCart();
      expect.soft(isMatched, '상품 > 장바구니 상품 추가 확인 실패').toBe(true);
    });
  });

  test('상품 > 구매하기 주문서 페이지 이동 확인', async () => {
    await test.step('상품 > 구매하기 주문서 페이지 이동 확인', async () => {
      const isBuyOrder = await productSteps.verifyProductBuy();
      expect.soft(isBuyOrder, '상품 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
  });

});
