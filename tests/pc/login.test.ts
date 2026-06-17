import { test, check } from '../../fixtures/web/pc.fixture';
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

  check('일반 계정 로그인 확인', () => loginSteps.verifyLocalLogin(ENV.id, ENV.pw));
  check('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', () => loginSteps.verifyBuyAndLogin(ENV.id, ENV.pw));

});
