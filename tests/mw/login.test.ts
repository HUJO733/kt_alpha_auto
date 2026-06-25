import { test } from '../../fixtures/web/mw.fixture';
import { LoginSteps } from '../../steps/mw/login.steps';
import { createRun } from '../../utils/step-runner';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
};

test('로그인 (MW)', async ({ basePage }) => {
  const loginSteps = new LoginSteps(basePage);
  const run = createRun('MW Web', '로그인');

  await run('일반 계정 로그인 확인', () => loginSteps.verifyLocalLogin(ENV.id, ENV.pw));
});
