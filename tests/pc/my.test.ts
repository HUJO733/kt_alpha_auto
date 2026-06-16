import { test, expect } from '../../fixtures/web/pc.fixture';
import { MySteps } from '../../steps/pc/my.steps';

const ENV = {
  name: process.env.NAME ?? '',
  year: process.env.YEAR ?? '',
  month: process.env.MONTH ?? '',
  day: process.env.DAY ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

test.describe('마이 쇼핑', () => {

  let mySteps: MySteps;

  test.beforeEach(async ({ basePage }) => {
    mySteps = new MySteps(basePage);
  });

  test('주문 내역 확인', async () => {
    await test.step('주문 내역 확인', async () => {
      const result = await mySteps.verifyOrderHistory();
      expect.soft(result, '주문 내역 확인 실패').toBe(true);
    });
  });

  test('취소/교환/반품 내역 확인', async () => {
    await test.step('취소/교환/반품 내역 확인', async () => {
      const result = await mySteps.verifyClaimHistory();
      expect.soft(result, '취소/교환/반품 내역 확인 실패').toBe(true);
    });
  });

  test('기프티쇼 선물함 확인', async () => {
    await test.step('기프티쇼 선물함 확인', async () => {
      const result = await mySteps.verifyGiftShow();
      expect.soft(result, '기프티쇼 선물함 확인 실패').toBe(true);
    });
  });

  test('잔액형 상품권 내역 확인', async () => {
    await test.step('잔액형 상품권 내역 확인', async () => {
      const result = await mySteps.verifyGiftShowBalance();
      expect.soft(result, '잔액형 상품권 내역 확인 실패').toBe(true);
    });
  });

  test('거래 증빙 서류 신청/조회 확인', async () => {
    await test.step('거래 증빙 서류 신청/조회 확인', async () => {
      const result = await mySteps.verifyTaxList();
      expect.soft(result, '거래 증빙 서류 신청/조회 확인 실패').toBe(true);
    });
  });

  test('배송지 관리 확인', async () => {
    await test.step('배송지 관리 확인', async () => {
      const result = await mySteps.verifyDeliveryAddress();
      expect.soft(result, '배송지 관리 확인 실패').toBe(true);
    });
  });

  test('연락처 관리 확인', async () => {
    await test.step('연락처 관리 확인', async () => {
      const result = await mySteps.verifyPhoneAddress();
      expect.soft(result, '연락처 관리 확인 실패').toBe(true);
    });
  });

  test('환불 계좌 관리 확인', async () => {
    await test.step('환불 계좌 관리 확인', async () => {
      const result = await mySteps.verifyRefundAccount();
      expect.soft(result, '환불 계좌 관리 확인 실패').toBe(true);
    });
  });

  test('선물 메시지 관리 확인', async () => {
    await test.step('선물 메시지 관리 확인', async () => {
      const result = await mySteps.verifyGiftMessage();
      expect.soft(result, '선물 메시지 관리 확인 실패').toBe(true);
    });
  });

  test('알파포인트 확인', async () => {
    await test.step('알파포인트 확인', async () => {
      const result = await mySteps.verifyAlphaPoint();
      expect.soft(result, '알파포인트 확인 실패').toBe(true);
    });
  });

  test('이용권등록 확인', async () => {
    await test.step('이용권등록 확인', async () => {
      const result = await mySteps.verifyTicket();
      expect.soft(result, '이용권등록 확인 실패').toBe(true);
    });
  });

  test('방송 알림 설정 확인', async () => {
    await test.step('방송 알림 설정 확인', async () => {
      const result = await mySteps.verifyBroadcastNotification();
      expect.soft(result, '방송 알림 설정 확인 실패').toBe(true);
    });
  });

  test('간편 로그인 연결 확인', async () => {
    await test.step('간편 로그인 연결 확인', async () => {
      const result = await mySteps.verifySimpleLogin();
      expect.soft(result, '간편 로그인 연결 확인 실패').toBe(true);
    });
  });

  test('회원 정보 수정 확인', async () => {
    await test.step('회원 정보 수정 확인', async () => {
      const result = await mySteps.verifyModifyCustomerInfo(ENV.name, ENV.year, ENV.month, ENV.day, ENV.phoneNumber);
      expect.soft(result, '회원 정보 수정 확인 실패').toBe(true);
    });
  });

  test('혜택 관리 확인', async () => {
    await test.step('혜택 관리 확인', async () => {
      const result = await mySteps.verifyBenefit();
      expect.soft(result, '혜택 관리 확인 실패').toBe(true);
    });
  });

  test('장바구니 확인', async () => {
    await test.step('장바구니 확인', async () => {
      const result = await mySteps.verifyCart();
      expect.soft(result, '장바구니 확인 실패').toBe(true);
    });
  });

  test('좋아요 확인', async () => {
    await test.step('좋아요 확인', async () => {
      const result = await mySteps.verifyLike();
      expect.soft(result, '좋아요 확인 실패').toBe(true);
    });
  });

  test('상품평 확인', async () => {
    await test.step('상품평 확인', async () => {
      const result = await mySteps.verifyReview();
      expect.soft(result, '상품평 확인 실패').toBe(true);
    });
  });

  test('최근 본 상품 확인', async () => {
    await test.step('최근 본 상품 확인', async () => {
      const result = await mySteps.verifyRecently();
      expect.soft(result, '최근 본 상품 확인 실패').toBe(true);
    });
  });

  test('1:1 문의하기 확인', async () => {
    await test.step('1:1 문의하기 확인', async () => {
      const result = await mySteps.verifyInquiry();
      expect.soft(result, '1:1 문의하기 확인 실패').toBe(true);
    });
  });

  test('문의 내역 확인', async () => {
    await test.step('문의 내역 확인', async () => {
      const result = await mySteps.verifyInquiryList();
      expect.soft(result, '문의 내역 확인 실패').toBe(true);
    });
  });

  test('공지 사항 확인', async () => {
    await test.step('공지 사항 확인', async () => {
      const result = await mySteps.verifyNotice();
      expect.soft(result, '공지 사항 확인 실패').toBe(true);
    });
  });

  test('자주하는 질문 확인', async () => {
    await test.step('자주하는 질문 확인', async () => {
      const result = await mySteps.verifyFaq();
      expect.soft(result, '자주하는 질문 확인 실패').toBe(true);
    });
  });

});
