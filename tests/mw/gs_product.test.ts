import { test, check } from '../../fixtures/web/mw.fixture';
import { GsProductSteps } from '../../steps/mw/gs_product.steps';
import { epic, feature } from 'allure-js-commons';

const ENV = {
  name: process.env.NAME ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

test.describe('기프티쇼 상품 (MW)', () => {

  let gsProductSteps: GsProductSteps;

  test.beforeEach(async ({ basePage }) => {
    gsProductSteps = new GsProductSteps(basePage);
    await epic('MW Web');
    await feature(`기프티쇼 상품 (${process.env.TEST_RUN_TIMESTAMP})`);
  });

  check('좋아요 추가 및 삭제 확인', () => gsProductSteps.gsVerifyProductLike());
  check('상세정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductDetailInfo());
  check('구매정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductBuyInfo());
  check('선물하기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductGift());
  check('선물하기 > 기프티쇼 대표 번호로 보내기 확인', () => gsProductSteps.gsVerifyGiftShowMainPhoneNumber(ENV.name));
  check('선물하기 > 내 번호로 보내기 확인', () => gsProductSteps.gsVerifyMyPhoneNumber(ENV.name));
  check('선물하기 > 받는 사람 확인', () => gsProductSteps.gsVerifyRecipient(ENV.phoneNumber, ENV.name));
  check('선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인', () => gsProductSteps.gsVerifyPayment());
  check('나에게 보내기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductSendToMe());

});
