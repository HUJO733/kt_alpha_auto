import { AndroidFixture, check } from '../../fixtures/mobile/android.fixture';
import { LoginSteps } from '../../steps/android/login.steps';
import { MainSteps } from '../../steps/android/main.steps';
import { ProductSteps } from '../../steps/android/product.steps';
import { MySteps } from '../../steps/android/my.steps';
import { GsMainSteps } from '../../steps/android/gs_main.steps';
import { GsProductSteps } from '../../steps/android/gs_product.steps';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
  name: process.env.NAME ?? '',
  year: process.env.YEAR ?? '',
  month: process.env.MONTH ?? '',
  day: process.env.DAY ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

describe('통합 테스트 (Android)', () => {
  const fixture = new AndroidFixture();
  let loginSteps: LoginSteps;
  let mainSteps: MainSteps;
  let productSteps: ProductSteps;
  let mySteps: MySteps;
  let gsMainSteps: GsMainSteps;
  let gsProductSteps: GsProductSteps;

  before(async () => {
    const basePage = await fixture.setup();
    loginSteps = new LoginSteps(basePage);
    mainSteps = new MainSteps(basePage);
    productSteps = new ProductSteps(basePage);
    mySteps = new MySteps(basePage);
    gsMainSteps = new GsMainSteps(basePage);
    gsProductSteps = new GsProductSteps(basePage);
  });

  after(async () => {
    await fixture.teardown();
  });

  check('일반 계정 로그인 확인', () => loginSteps.verifyLocalLogin(ENV.id, ENV.pw));
  check('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', () => loginSteps.verifyBuyAndLogin(ENV.id, ENV.pw));

  check('GNB 메뉴별 화면 확인', () => mainSteps.verifyAllNavItems());
  check('ON AIR > 현재 방송 중인 상품 정보 노출 확인', () => mainSteps.verifyOnAirModal());
  check('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', () => mainSteps.verifyOnAirGift());
  check('ON AIR > 바로구매 > 장바구니 상품 추가 확인', () => mainSteps.verifyOnAirCart());
  check('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', () => mainSteps.verifyOnAirBuy());
  check('카테고리 정상 노출 및 필터 기능 확인', () => mainSteps.verifyCategory());
  check('검색 후 상품 상세 페이지 이동 확인', () => mainSteps.verifySearch());

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

  check('주문 내역 확인', () => mySteps.verifyOrderHistory());
  check('취소/교환/반품 내역 확인', () => mySteps.verifyClaimHistory());
  check('기프티쇼 선물함 확인', () => mySteps.verifyGiftShow());
  check('잔액형 상품권 내역 확인', () => mySteps.verifyGiftShowBalance());
  check('거래 증빙 서류 신청/조회 확인', () => mySteps.verifyTaxList());
  check('배송지 관리 확인', () => mySteps.verifyDeliveryAddress());
  check('연락처 관리 확인', () => mySteps.verifyPhoneAddress());
  check('환불 계좌 관리 확인', () => mySteps.verifyRefundAccount());
  check('선물 메시지 관리 확인', () => mySteps.verifyGiftMessage());
  check('알파포인트 확인', () => mySteps.verifyAlphaPoint());
  check('이용권등록 확인', () => mySteps.verifyTicket());
  check('방송 알림 설정 확인', () => mySteps.verifyBroadcastNotification());
  check('간편 로그인 연결 확인', () => mySteps.verifySimpleLogin());
  check('회원 정보 수정 확인', () => mySteps.verifyModifyCustomerInfo(ENV.name, ENV.year, ENV.month, ENV.day, ENV.phoneNumber));
  check('혜택 관리 확인', () => mySteps.verifyBenefit());
  check('장바구니 확인', () => mySteps.verifyCart());
  check('좋아요 확인', () => mySteps.verifyLike());
  check('상품평 확인', () => mySteps.verifyReview());
  check('최근 본 상품 확인', () => mySteps.verifyRecently());
  check('1:1 문의하기 확인', () => mySteps.verifyInquiry());
  check('문의 내역 확인', () => mySteps.verifyInquiryList());
  check('공지 사항 확인', () => mySteps.verifyNotice());
  check('자주하는 질문 확인', () => mySteps.verifyFaq());

  check('기프티쇼 GNB 메뉴별 화면 노출 확인', () => gsMainSteps.gsVerifyAllNavItems());
  check('기프티쇼 카테고리 및 필터 기능 확인', () => gsMainSteps.gsVerifyCategory());
  check('기프티쇼 검색 후 상품 상세 페이지 이동 확인', () => gsMainSteps.gsVerifySearch());

  check('기프티쇼 > 상품 > 좋아요 추가 및 삭제 확인', () => gsProductSteps.gsVerifyProductLike());
  check('기프티쇼 > 상품 > 상세정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductDetailInfo());
  check('기프티쇼 > 상품 > 구매정보 탭 노출 확인', () => gsProductSteps.gsVerifyProductBuyInfo());
  check('기프티쇼 > 상품 > 선물하기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductGift());
  check('기프티쇼 > 상품 > 선물하기 > 기프티쇼 대표 번호로 보내기 확인', () => gsProductSteps.gsVerifyGiftShowMainPhoneNumber(ENV.name));
  check('기프티쇼 > 상품 > 선물하기 > 내 번호로 보내기 확인', () => gsProductSteps.gsVerifyMyPhoneNumber(ENV.name));
  check('기프티쇼 > 상품 > 선물하기 > 받는 사람 확인', () => gsProductSteps.gsVerifyRecipient(ENV.phoneNumber, ENV.name));
  check('기프티쇼 > 상품 > 선물하기 > 결제 진행 및 상품 결제 페이지 이동 확인', () => gsProductSteps.gsVerifyPayment());
  check('기프티쇼 > 상품 > 나에게 보내기 주문서 이동 확인', () => gsProductSteps.gsVerifyProductSendToMe());
});
