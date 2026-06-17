import { test, expect } from '../../fixtures/web/pc.fixture';
import { LoginSteps } from '../../steps/pc/login.steps';
import { MainSteps } from '../../steps/pc/main.steps';
import { ProductSteps } from '../../steps/pc/product.steps';
import { QuickSteps } from '../../steps/pc/quick.steps';
import { MySteps } from '../../steps/pc/my.steps';
import { GsMainSteps } from '../../steps/pc/gs_main.steps';
import { GsProductSteps } from '../../steps/pc/gs_product.steps';

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
  let gsMainSteps: GsMainSteps;
  let gsProductSteps: GsProductSteps;

  test.beforeAll(async ({ sharedBasePage }) => {
    loginSteps = new LoginSteps(sharedBasePage);
    mainSteps = new MainSteps(sharedBasePage);
    productSteps = new ProductSteps(sharedBasePage);
    quickSteps = new QuickSteps(sharedBasePage);
    mySteps = new MySteps(sharedBasePage);
    gsMainSteps = new GsMainSteps(sharedBasePage);
    gsProductSteps = new GsProductSteps(sharedBasePage);
  });

  test('일반 계정 로그인 확인', async () => {
    const result = await loginSteps.verifyLocalLogin(ENV.id, ENV.pw);
    expect.soft(result, '일반 계정 로그인 확인 실패').toBe(true);
  });

  test('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', async () => {
    const result = await loginSteps.verifyBuyAndLogin(ENV.id, ENV.pw);
    expect(result, '임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인 실패').toBe(true);
  });

  test('GNB 메뉴별 화면 확인', async () => {
    const result = await mainSteps.verifyAllNavItems();
    expect.soft(result, 'GNB 메뉴별 화면 확인 실패').toBe(true);
  });

  test('ON AIR > 현재 방송 중인 상품 정보 노출 확인', async () => {
    const result = await mainSteps.verifyOnAirModal();
    expect.soft(result, 'ON AIR > 현재 방송 중인 상품 정보 노출 확인 실패').toBe(true);
  });

  test('ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
    const result = await mainSteps.verifyOnAirGift();
    expect.soft(result, 'ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

  test('ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
    const result = await mainSteps.verifyOnAirCart();
    expect.soft(result, 'ON AIR > 바로구매 > 장바구니 상품 추가 확인 실패').toBe(true);
  });

  test('ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
    const result = await mainSteps.verifyOnAirBuy();
    expect.soft(result, 'ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

  test('카테고리 정상 노출 및 필터 기능 확인', async () => {
    const result = await mainSteps.verifyCategory();
    expect.soft(result, '카테고리 정상 노출 및 필터 기능 확인 실패').toBe(true);
  });

  test('검색 후 상품 상세 페이지 이동 확인', async () => {
    const result = await mainSteps.verifySearch();
    expect.soft(result, '검색 후 상품 상세 페이지 이동 확인 실패').toBe(true);
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

  test('독바 > ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인', async () => {
    const result = await quickSteps.verifyOnAirGift();
    expect.soft(result, '독바 > ON AIR > 바로구매 > 선물하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

  test('독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인', async () => {
    const result = await quickSteps.verifyOnAirCart();
    expect.soft(result, '독바 > ON AIR > 바로구매 > 장바구니 상품 추가 확인 실패').toBe(true);
  });

  test('독바 > ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인', async () => {
    const result = await quickSteps.verifyOnAirBuy();
    expect.soft(result, '독바 > ON AIR > 바로구매 > 구매하기 주문서 페이지 이동 확인 실패').toBe(true);
  });

  test('주문 내역 확인', async () => {
    const result = await mySteps.verifyOrderHistory();
    expect.soft(result, '주문 내역 확인 실패').toBe(true);
  });

  test('취소/교환/반품 내역 확인', async () => {
    const result = await mySteps.verifyClaimHistory();
    expect.soft(result, '취소/교환/반품 내역 확인 실패').toBe(true);
  });

  test('기프티쇼 선물함 확인', async () => {
    const result = await mySteps.verifyGiftShow();
    expect.soft(result, '기프티쇼 선물함 확인 실패').toBe(true);
  });

  test('잔액형 상품권 내역 확인', async () => {
    const result = await mySteps.verifyGiftShowBalance();
    expect.soft(result, '잔액형 상품권 내역 확인 실패').toBe(true);
  });

  test('거래 증빙 서류 신청/조회 확인', async () => {
    const result = await mySteps.verifyTaxList();
    expect.soft(result, '거래 증빙 서류 신청/조회 확인 실패').toBe(true);
  });

  test('배송지 관리 확인', async () => {
    const result = await mySteps.verifyDeliveryAddress();
    expect.soft(result, '배송지 관리 확인 실패').toBe(true);
  });

  test('연락처 관리 확인', async () => {
    const result = await mySteps.verifyPhoneAddress();
    expect.soft(result, '연락처 관리 확인 실패').toBe(true);
  });

  test('환불 계좌 관리 확인', async () => {
    const result = await mySteps.verifyRefundAccount();
    expect.soft(result, '환불 계좌 관리 확인 실패').toBe(true);
  });

  test('선물 메시지 관리 확인', async () => {
    const result = await mySteps.verifyGiftMessage();
    expect.soft(result, '선물 메시지 관리 확인 실패').toBe(true);
  });

  test('알파포인트 확인', async () => {
    const result = await mySteps.verifyAlphaPoint();
    expect.soft(result, '알파포인트 확인 실패').toBe(true);
  });

  test('이용권등록 확인', async () => {
    const result = await mySteps.verifyTicket();
    expect.soft(result, '이용권등록 확인 실패').toBe(true);
  });

  test('방송 알림 설정 확인', async () => {
    const result = await mySteps.verifyBroadcastNotification();
    expect.soft(result, '방송 알림 설정 확인 실패').toBe(true);
  });

  test('간편 로그인 연결 확인', async () => {
    const result = await mySteps.verifySimpleLogin();
    expect.soft(result, '간편 로그인 연결 확인 실패').toBe(true);
  });

  test('회원 정보 수정 확인', async () => {
    const result = await mySteps.verifyModifyCustomerInfo(ENV.name, ENV.year, ENV.month, ENV.day, ENV.phoneNumber);
    expect.soft(result, '회원 정보 수정 확인 실패').toBe(true);
  });

  test('혜택 관리 확인', async () => {
    const result = await mySteps.verifyBenefit();
    expect.soft(result, '혜택 관리 확인 실패').toBe(true);
  });

  test('장바구니 확인', async () => {
    const result = await mySteps.verifyCart();
    expect.soft(result, '장바구니 확인 실패').toBe(true);
  });

  test('좋아요 확인', async () => {
    const result = await mySteps.verifyLike();
    expect.soft(result, '좋아요 확인 실패').toBe(true);
  });

  test('상품평 확인', async () => {
    const result = await mySteps.verifyReview();
    expect.soft(result, '상품평 확인 실패').toBe(true);
  });

  test('최근 본 상품 확인', async () => {
    const result = await mySteps.verifyRecently();
    expect.soft(result, '최근 본 상품 확인 실패').toBe(true);
  });

  test('1:1 문의하기 확인', async () => {
    const result = await mySteps.verifyInquiry();
    expect.soft(result, '1:1 문의하기 확인 실패').toBe(true);
  });

  test('문의 내역 확인', async () => {
    const result = await mySteps.verifyInquiryList();
    expect.soft(result, '문의 내역 확인 실패').toBe(true);
  });

  test('공지 사항 확인', async () => {
    const result = await mySteps.verifyNotice();
    expect.soft(result, '공지 사항 확인 실패').toBe(true);
  });

  test('자주하는 질문 확인', async () => {
    const result = await mySteps.verifyFaq();
    expect.soft(result, '자주하는 질문 확인 실패').toBe(true);
  });

  test('기프티쇼 GNB 메뉴별 화면 노출 확인', async () => {
    const result = await gsMainSteps.gsVerifyAllNavItems();
    expect.soft(result, '기프티쇼 GNB 메뉴별 화면 노출 확인 실패').toBe(true);
  });

  test('기프티쇼 카테고리 및 필터 기능 확인', async () => {
    const result = await gsMainSteps.gsVerifyCategory();
    expect.soft(result, '기프티쇼 카테고리 및 필터 기능 확인 실패').toBe(true);
  });

  test('기프티쇼 검색 후 상품 상세 페이지 이동 확인', async () => {
    const result = await gsMainSteps.gsVerifySearch();
    expect.soft(result, '기프티쇼 검색 후 상품 상세 페이지 이동 확인 실패').toBe(true);
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
