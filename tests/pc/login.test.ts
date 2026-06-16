import { test, expect } from '../../fixtures/web/pc.fixture';
import { LoginSteps } from '../../steps/pc/login.steps';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
};

test.describe('로그인', () => {

  let loginSteps: LoginSteps;
  
    test.beforeEach(async ({ basePage }) => {
      loginSteps = new LoginSteps(basePage);
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
      expect.soft(result, '임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인 실패').toBe(true);
    });
  });

});
