import { test, expect } from '../../fixtures/web/pc.fixture';
import { GsProductSteps } from '../../steps/pc/gs_product.steps';

const ENV = {
  name: process.env.NAME ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

test.describe('GS 상품', () => {

  let gsProductSteps: GsProductSteps;

  test.beforeEach(async ({ basePage }) => {
    gsProductSteps = new GsProductSteps(basePage);
  });

  test('기프티쇼 > 상품 > 좋아요 추가 및 삭제 확인', async () => {
    const result = await gsProductSteps.gsVerifyProductLike();
    expect.soft(result, '기프티쇼 > 상품 > 좋아요 추가 및 삭제 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 상세정보 탭 노출 확인', async () => {
    const result = await gsProductSteps.gsVerifyProductDetailInfo();
    expect.soft(result, '기프티쇼 > 상품 > 상세정보 탭 노출 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 구매정보 탭 노출 확인', async () => {
    const result = await gsProductSteps.gsVerifyProductBuyInfo();
    expect.soft(result, '기프티쇼 > 상품 > 구매정보 탭 노출 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 선물하기 주문서 이동 확인', async () => {
    const result = await gsProductSteps.gsVerifyProductGift();
    expect.soft(result, '기프티쇼 > 상품 > 선물하기 주문서 이동 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 선물하기 > 기프티쇼 대표 번호로 보내기 확인', async () => {
    const result = await gsProductSteps.gsVerifyGiftShowMainPhoneNumber(ENV.name);
    expect.soft(result, '기프티쇼 > 상품 > 선물하기 > 기프티쇼 대표 번호로 보내기 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 선물하기 > 내 번호로 보내기 확인', async () => {
    const result = await gsProductSteps.gsVerifyMyPhoneNumber(ENV.name);
    expect.soft(result, '기프티쇼 > 상품 > 선물하기 > 내 번호로 보내기 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 선물하기 > 받는 사람 확인', async () => {
    const result = await gsProductSteps.gsVerifyRecipient(ENV.phoneNumber, ENV.name);
    expect.soft(result, '기프티쇼 > 상품 > 선물하기 > 받는 사람 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인', async () => {
    const result = await gsProductSteps.gsVerifyPayment();
    expect.soft(result, '기프티쇼 > 상품 > 선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인 실패').toBe(true);
  });

  test('기프티쇼 > 상품 > 나에게 보내기 주문서 이동 확인', async () => {
    const result = await gsProductSteps.gsVerifyProductSendToMe();
    expect.soft(result, '기프티쇼 > 상품 > 나에게 보내기 주문서 이동 확인 실패').toBe(true);
  });

});
