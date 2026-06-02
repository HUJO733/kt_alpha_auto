import { test, expect } from '../../fixtures/web/pc.fixture';
import { LoginSteps } from '../../steps/pc/login.steps';

// TODO: 실제 계정 정보로 교체
const CREDENTIALS = {
  id: '',
  pw: '',
};

test.describe('로그인', () => {

  test('정상 로그인', async ({ basePage }) => {
    const loginSteps = new LoginSteps(basePage);

    await test.step('로그인 페이지 진입', async () => {
      await loginSteps.goToLoginPage();
    });

    await test.step('계정 정보 입력 및 제출', async () => {
      await loginSteps.inputAndSubmit(CREDENTIALS.id, CREDENTIALS.pw);
    });

    await test.step('메인페이지 이동 확인', async () => {
      await basePage.waitForURL(/kshop\.co\.kr/);
      expect(basePage.getCurrentURL()).toContain('kshop.co.kr');
    });
  });

});
