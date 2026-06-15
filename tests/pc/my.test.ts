import { test, expect } from '../../fixtures/web/pc.fixture';
import { MySteps } from '../../steps/pc/my.steps';

test.describe('마이 페이지', () => {

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

});
