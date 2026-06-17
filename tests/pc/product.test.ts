import { test, expect } from '../../fixtures/web/pc.fixture';
import { ProductSteps } from '../../steps/pc/product.steps';

test.describe('상품 페이지', () => {

  let productSteps: ProductSteps;

  test.beforeEach(async ({ basePage }) => {
    productSteps = new ProductSteps(basePage);
  });

  test('ON AIR > VOD 영상 재생 확인', async () => {
    const result = await productSteps.verifyVOD();
    expect.soft(result, 'ON AIR > VOD 영상 재생 확인 실패').toBe(true);
  });

  test('편성표 > 방송알림 신청 및 등록 완료 확인', async () => {
    const result = await productSteps.verifyBroadcastNotification();
    expect.soft(result, '편성표 > 방송알림 신청 및 등록 완료 확인 실패').toBe(true);
  });

  test('상품 > 좋아요 추가 및 삭제 확인', async () => {
    const result = await productSteps.verifyProductLike();
    expect.soft(result, '상품 > 좋아요 추가 및 삭제 확인 실패').toBe(true);
  });

  test('상품 > 상세정보 탭 노출 확인', async () => {
    const result = await productSteps.verifyProductDetailInfo();
    expect.soft(result, '상품 > 상세정보 탭 노출 확인 실패').toBe(true);
  });

  test('상품 > 구매정보 탭 노출 확인', async () => {
    const result = await productSteps.verifyProductBuyInfo();
    expect.soft(result, '상품 > 구매정보 탭 노출 확인 실패').toBe(true);
  });

  test('상품 > 상품평 탭 노출 확인', async () => {
    const result = await productSteps.verifyProductReview();
    expect.soft(result, '상품 > 상품평 탭 노출 확인 실패').toBe(true);
  });

  test('상품 > 상품문의 탭 노출 확인', async () => {
    const result = await productSteps.verifyProductQna();
    expect.soft(result, '상품 > 상품문의 탭 노출 확인 실패').toBe(true);
  });

  test('상품 > 선물하기 주문서 페이지 이동 확인', async () => {
    const result = await productSteps.verifyProductGift();
    expect.soft(result, '상품 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

  test('상품 > 장바구니 상품 추가 확인', async () => {
    const result = await productSteps.verifyProductCart();
    expect.soft(result, '상품 > 장바구니 상품 추가 확인 실패').toBe(true);
  });

  test('상품 > 구매하기 주문서 페이지 이동 확인', async () => {
    const result = await productSteps.verifyProductBuy();
    expect.soft(result, '상품 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

});
