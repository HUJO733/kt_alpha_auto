import { test, expect } from '../../fixtures/web/pc.fixture';
import { MainSteps } from '../../steps/pc/main.steps';

test.describe('메인 페이지', () => {

  test('네비게이션 각 항목 클릭 후 main 영역 존재 확인', async ({ basePage }) => {
    const mainSteps = new MainSteps(basePage);

    await test.step('네비게이션 전체 항목 순차 클릭 및 main 영역 검증', async () => {
      const results = await mainSteps.verifyAllNavItems();

      for (const { index, isVisible } of results) {
        expect.soft(isVisible, `nav[${index}] 클릭 후 main 영역이 존재하지 않습니다.`).toBe(true);
      }
    });
  });

  test('ON AIR 버튼 클릭 후 상품 이미지 노출 확인', async ({ basePage }) => {
    const mainSteps = new MainSteps(basePage);

    await test.step('ON AIR 버튼 클릭', async () => {
      const isVisible = await mainSteps.verifyOnAirModal();

      expect.soft(isVisible, 'ON AIR 모달 내 상품 이미지가 존재하지 않습니다.').toBe(true);
    });
  });

});
