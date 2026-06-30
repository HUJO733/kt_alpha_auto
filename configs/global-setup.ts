/**
 * 모든 테스트 시작 전 한 번만 실행 (playwright.config.ts의 globalSetup)
 *
 * TEST_RUN_TIMESTAMP는 step-runner.ts에서 Allure feature 라벨에 사용되어
 * Allure 리포트에서 실행 회차별로 결과를 구분함
 */
export default async function globalSetup() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  process.env.TEST_RUN_TIMESTAMP = timestamp;

  const required = ['LOGIN_ID', 'LOGIN_PW', 'NAME', 'YEAR', 'MONTH', 'DAY', 'PHONE_NUMBER'];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`필수 환경변수 누락: ${missing.join(', ')}`);
  }
}
