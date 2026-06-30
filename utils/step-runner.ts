import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'fs';
import { randomUUID } from 'crypto';
import { join } from 'path';

// workers: 1 환경 전제 — 테스트가 순차 실행되므로 모듈 레벨 전역 변수로 관리해도 안전
let _params: Array<{ name: string; value: string }> = [];

export function parameter(name: string, value: string): void {
  _params.push({ name, value });
}

/**
 * allure-playwright 없이 Allure 결과 JSON을 직접 작성하는 함수
 *
 * allure-playwright는 Playwright test 구조 기준으로 결과를 생성하지만,
 * 이 함수는 스텝 단위로 독립된 결과 파일을 생성해 Allure 리포트에서 스텝별 통계를 볼 수 있게 함
 */
function writeStepResult(
  name: string,
  epic: string,
  feature: string,
  status: 'passed' | 'failed',
  start: number,
  stop: number,
  params: Array<{ name: string; value: string }>,
  errorMsg?: string,
  screenshot?: Buffer,
) {
  const uuid = randomUUID();
  const result: Record<string, unknown> = {
    uuid,
    name,
    status,
    start,
    stop,
    labels: [
      { name: 'epic', value: epic },
      { name: 'feature', value: `${feature} (${process.env.TEST_RUN_TIMESTAMP})` },
    ],
  };
  if (params.length > 0) result['parameters'] = params;
  if (errorMsg) result['statusDetails'] = { message: errorMsg };
  if (screenshot) {
    const attachUUID = randomUUID();
    const attachFile = `${attachUUID}-attachment.png`;
    writeFileSync(join('allure-results', attachFile), screenshot);
    result['attachments'] = [{ name: 'screenshot', type: 'image/png', source: attachFile }];
  }
  mkdirSync('allure-results', { recursive: true });
  writeFileSync(join('allure-results', `${uuid}-result.json`), JSON.stringify(result));
}

/**
 * 모바일 테스트용 run 함수 생성기
 *
 * createRun과 달리 Playwright의 test.step으로 래핑하지 않음
 * (모바일은 Appium 기반이라 test.step API를 사용하지 않음)
 *
 * @param hard true면 해당 스텝 실패 시 테스트 즉시 중단, false면 soft fail로 계속 진행
 */
export function createMobileRun(epicName: string, featureName: string) {
  const softErrors: string[] = [];

  const run = async (name: string, fn: () => Promise<boolean>, hard = false) => {
    const start = Date.now();
    let passed = true;
    let errorMsg: string | undefined;
    _params = [];
    try {
      const result = await fn();
      if (!result) { passed = false; errorMsg = 'expected true but received false'; }
    } catch (e) {
      passed = false;
      errorMsg = String(e);
    } finally {
      writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), [..._params], errorMsg);
      _params = [];
    }
    if (!passed) {
      if (hard) throw new Error(errorMsg);
      softErrors.push(`[${name}] ${errorMsg}`);
    }
  };

  const finish = () => {
    if (softErrors.length > 0) throw new Error(softErrors.join('\n'));
  };

  return { run, finish };
}

/**
 * PC 웹 테스트용 run 함수 생성기
 *
 * 각 스텝을 Playwright의 test.step으로 래핑하고, 결과를 Allure JSON으로 저장
 * 실패 시 스크린샷을 자동 첨부함
 *
 * @param hard true면 해당 스텝 실패 시 테스트 즉시 중단, false면 soft fail로 계속 진행
 */
export function createRun(epicName: string, featureName: string, page?: Page) {
  return async (name: string, fn: () => Promise<boolean>, hard = false) => {
    const start = Date.now();
    let passed = true;
    let errorMsg: string | undefined;
    _params = [];
    try {
      await test.step(name, async () => {
        try {
          const result = await fn();
          if (!result) { passed = false; errorMsg = 'expected true but received false'; }
          (hard ? expect : expect.soft)(result).toBe(true);
        } catch (e) {
          passed = false;
          errorMsg = String(e);
          if (hard) throw e;
          expect.soft(false, String(e)).toBe(true);
        }
      });
    } catch (e) {
      if (hard) throw e;
    } finally {
      const screenshot = (!passed && page)
        ? await page.screenshot({ fullPage: false }).catch(() => undefined)
        : undefined;
      writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), [..._params], errorMsg, screenshot);
      _params = [];
    }
  };
}
