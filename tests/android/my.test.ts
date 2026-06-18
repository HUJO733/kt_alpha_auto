import { AndroidFixture, check } from '../../fixtures/mobile/android.fixture';
import { MySteps } from '../../steps/android/my.steps';

const ENV = {
  name: process.env.NAME ?? '',
  year: process.env.YEAR ?? '',
  month: process.env.MONTH ?? '',
  day: process.env.DAY ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

describe('마이 쇼핑 (Android)', () => {
  const fixture = new AndroidFixture();
  let mySteps: MySteps;

  before(async () => {
    const basePage = await fixture.setup();
    mySteps = new MySteps(basePage);
  });

  after(async () => {
    await fixture.teardown();
  });

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
});
