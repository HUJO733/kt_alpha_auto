import { test, check } from '../../fixtures/web/mw.fixture';
import { LoginSteps } from '../../steps/mw/login.steps';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
};

test.describe('로그인 (MW)', () => {

  let loginSteps: LoginSteps;

  test.beforeEach(async ({ basePage }) => {
    loginSteps = new LoginSteps(basePage);
  });

  check('일반 계정 로그인 확인', () => loginSteps.verifyLocalLogin(ENV.id, ENV.pw));

});
