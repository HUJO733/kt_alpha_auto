import { test } from '../../fixtures/web/pc.fixture';
import { MySteps } from '../../steps/pc/my.steps';
import { createRun } from '../../utils/step-runner';

const ENV = {
  name: process.env.NAME ?? '',
  year: process.env.YEAR ?? '',
  month: process.env.MONTH ?? '',
  day: process.env.DAY ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

test('마이 쇼핑', async ({ basePage }) => {
  const mySteps = new MySteps(basePage);
  const run = createRun('PC Web', '마이 쇼핑');

  await run('주문 내역 확인', () => mySteps.verifyOrderHistory());
  await run('취소/교환/반품 내역 확인', () => mySteps.verifyClaimHistory());
  await run('기프티쇼 선물함 확인', () => mySteps.verifyGiftShow());
  await run('잔액형 상품권 내역 확인', () => mySteps.verifyGiftShowBalance());
  await run('거래 증빙 서류 신청/조회 확인', () => mySteps.verifyTaxList());
  await run('배송지 관리 확인', () => mySteps.verifyDeliveryAddress());
  await run('연락처 관리 확인', () => mySteps.verifyPhoneAddress());
  await run('환불 계좌 관리 확인', () => mySteps.verifyRefundAccount());
  await run('선물 메시지 관리 확인', () => mySteps.verifyGiftMessage());
  await run('알파포인트 확인', () => mySteps.verifyAlphaPoint());
  await run('이용권등록 확인', () => mySteps.verifyTicket());
  await run('방송 알림 설정 확인', () => mySteps.verifyBroadcastNotification());
  await run('간편 로그인 연결 확인', () => mySteps.verifySimpleLogin());
  await run('회원 정보 수정 확인', () => mySteps.verifyModifyCustomerInfo(ENV.name, ENV.year, ENV.month, ENV.day, ENV.phoneNumber));
  await run('혜택 관리 확인', () => mySteps.verifyBenefit());
  await run('장바구니 확인', () => mySteps.verifyCart());
  await run('좋아요 확인', () => mySteps.verifyLike());
  // await run('상품평 확인', () => mySteps.verifyReview());
  await run('최근 본 상품 확인', () => mySteps.verifyRecently());
  await run('1:1 문의하기 확인', () => mySteps.verifyInquiry());
  await run('문의 내역 확인', () => mySteps.verifyInquiryList());
  await run('공지 사항 확인', () => mySteps.verifyNotice());
  await run('자주하는 질문 확인', () => mySteps.verifyFaq());
});
