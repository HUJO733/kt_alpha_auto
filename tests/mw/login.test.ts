import { test, expect } from '../../fixtures/web/mw.fixture';
import { BasePage } from '../../pages/common/BasePage';
import { MwLocators } from '../../pages/web/mw/locators';

// TODO: 실제 계정 정보로 교체
const CREDENTIALS = {
  id: '',
  pw: '',
};

test('로그인', async ({ appPage }) => {
  const page = new BasePage(appPage);

  // 1. 모달창 닫기
  await page.click(MwLocators.login.modalCloseBtn);

  // 2. 마이페이지 버튼 클릭
  await page.click(MwLocators.login.myPageBtn);

  // 3. 로그인 버튼 클릭
  await page.click(MwLocators.login.loginBtn);

  // 4. 아이디 입력
  await page.fill(MwLocators.login.idInput, CREDENTIALS.id);

  // 5. 비밀번호 입력
  await page.fill(MwLocators.login.pwInput, CREDENTIALS.pw);

  // 6. 로그인 제출
  await page.click(MwLocators.login.loginSubmitBtn);

  // 7. 메인페이지로 이동 확인
  await page.waitForURL(/m\.kshop\.co\.kr/);
  expect(page.getCurrentURL()).toContain('m.kshop.co.kr');
});
