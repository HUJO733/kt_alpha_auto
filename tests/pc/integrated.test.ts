import { test, expect } from '../../fixtures/web/pc.fixture';
import { LoginSteps } from '../../steps/pc/login.steps';
import { MainSteps } from '../../steps/pc/main.steps';
import { MySteps } from '../../steps/pc/my.steps';
import { ProductSteps } from '../../steps/pc/product.steps';
import { QuickSteps } from '../../steps/pc/quick.steps';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
  name: process.env.NAME ?? '',
  year: process.env.YEAR ?? '',
  month: process.env.MONTH ?? '',
  day: process.env.DAY ?? '',
  phoneNumber: process.env.PHONE_NUMBER ?? '',
};

test.describe.serial('메인 페이지', () => {
  let loginSteps: LoginSteps;
  let mainSteps: MainSteps;
  let productSteps: ProductSteps;
  let quickSteps: QuickSteps;
  let mySteps: MySteps;

  test.beforeAll(async ({ sharedBasePage }) => {
    loginSteps = new LoginSteps(sharedBasePage);
    mainSteps = new MainSteps(sharedBasePage);
    productSteps = new ProductSteps(sharedBasePage);
    quickSteps = new QuickSteps(sharedBasePage);
    mySteps = new MySteps(sharedBasePage);
  });

  test('일반 계정 로그인 확인', async () => {
    await test.step('일반 계정 로그인 확인', async () => {
      const result = await loginSteps.verifyLocalLogin(ENV.id, ENV.pw);
      expect.soft(result, '일반 계정 로그인 확인 실패').toBe(true);
    });
  });

  test('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', async () => {
    await test.step('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', async () => {
      const result = await loginSteps.verifyBuyAndLogin(ENV.id, ENV.pw);
      expect(result, '임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인 실패').toBe(true);
    });
  });

  test('GNB 메뉴별 화면 확인', async () => {
    await test.step('GNB 메뉴별 화면 확인', async () => {
      const allVisible = await mainSteps.verifyAllNavItems();
      expect.soft(allVisible, 'GNB 메뉴별 화면 확인 실패').toBe(true);
    });
  });

  test('ON AIR > 현재 방송 중인 상품 정보 노출 확인', async () => {
    await test.step('ON AIR > 현재 방송 중인 상품 정보 노출 확인', async () => {
      const isVisible = await mainSteps.verifyOnAirModal();
      expect.soft(isVisible, 'ON AIR > 현재 방송 중인 상품 정보 노출 확인 실패').toBe(true);
    });
  });

  test('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
    await test.step('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
      const isGiftOrder = await mainSteps.verifyOnAirGift();
      expect.soft(isGiftOrder, 'ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
  });

  test('ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
    await test.step('ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
      const isMatched = await mainSteps.verifyOnAirCart();
      expect.soft(isMatched, 'ON AIR > 바로구매 > 장바구니 상품 추가 확인 실패').toBe(true);
    });
  });

  test('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
    await test.step('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
      const isBuyOrder = await mainSteps.verifyOnAirBuy();
      expect.soft(isBuyOrder, 'ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
  });

  test('카테고리 정상 노출 및 필터 기능 확인', async () => {
    await test.step('카테고리 정상 노출 및 필터 기능 확인', async () => {
      const result = await mainSteps.verifyCategory();
      expect.soft(result, '카테고리 정상 노출 및 필터 기능 확인 실패').toBe(true);
    });
  });

  test('검색 후 상품 상세 페이지 이동 확인', async () => {
    await test.step('검색 후 상품 상세 페이지 이동 확인', async () => {
      const isDetailPage = await mainSteps.verifySearch();
      expect.soft(isDetailPage, '검색 후 상품 상세 페이지 이동 확인 실패').toBe(true);
    });
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

  test('독바 > ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
    await test.step('독바 > ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
      const isGiftOrder = await quickSteps.verifyOnAirGift();
      expect.soft(isGiftOrder, '독바 > ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
  });

  test('독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
    await test.step('독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
      const isMatched = await quickSteps.verifyOnAirCart();
      expect.soft(isMatched, '독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인 실패').toBe(true);
    });
  });

  test('독바 > ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
    await test.step('독바 > ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
      const isBuyOrder = await quickSteps.verifyOnAirBuy();
      expect.soft(isBuyOrder, '독바 > ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
    });
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
