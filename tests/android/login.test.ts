import { AndroidFixture } from '../../fixtures/mobile/android.fixture';
import { LoginSteps } from '../../steps/android/login.steps';
import { createMobileRun } from '../../utils/step-runner';

const ENV = {
  id: process.env.LOGIN_ID ?? '',
  pw: process.env.LOGIN_PW ?? '',
};

describe('로그인 (Android)', () => {
  const fixture = new AndroidFixture();
  let loginSteps: LoginSteps;

  before(async () => {
    const basePage = await fixture.setup();
    loginSteps = new LoginSteps(basePage);
  });

  after(async () => { await fixture.teardown(); });

  it('로그인', async () => {
    const { run, finish } = createMobileRun('Android', '로그인');
    await run('일반 계정 로그인 확인', () => loginSteps.verifyLocalLogin(ENV.id, ENV.pw));
    await run('임의 상품 상세 > 구매하기 > 일반 계정 로그인 확인', () => loginSteps.verifyBuyAndLogin(ENV.id, ENV.pw));
    finish();
  });
});
