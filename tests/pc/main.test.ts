import { test, expect } from '../../fixtures/web/pc.fixture';
import { MainSteps } from '../../steps/pc/main.steps';

test.describe('메인 페이지', () => {

  let mainSteps: MainSteps;

  test.beforeEach(async ({ basePage }) => {
    mainSteps = new MainSteps(basePage);
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

});
