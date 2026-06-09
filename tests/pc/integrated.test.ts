import { test, expect } from '../../fixtures/web/pc.fixture';
import { LoginSteps } from '../../steps/pc/login.steps';
import { MainSteps } from '../../steps/pc/main.steps';

const CREDENTIALS = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
};

test.describe.serial('로그인 후 메인 페이지', () => {
  let loginSteps: LoginSteps;
  let mainSteps: MainSteps;

  test.beforeAll(async ({ sharedBasePage }) => {
    loginSteps = new LoginSteps(sharedBasePage);
    mainSteps = new MainSteps(sharedBasePage);
  });

  test('일반 계정 로그인 확인', async () => {
    await test.step('일반 계정 로그인 확인', async () => {
      const result = await loginSteps.verifyLocalLogin(CREDENTIALS.id, CREDENTIALS.pw);
      expect.soft(result, '일반 계정 로그인 확인 실패').toBe(true);
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

});
