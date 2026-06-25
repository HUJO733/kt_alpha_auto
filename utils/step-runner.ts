import { test, expect } from '@playwright/test';
import { writeFileSync, mkdirSync } from 'fs';
import { randomUUID } from 'crypto';
import { join } from 'path';

function writeStepResult(name: string, epic: string, feature: string, status: 'passed' | 'failed', start: number, stop: number, errorMsg?: string) {
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
      { name: 'story', value: name },
    ],
  };
  if (errorMsg) result['statusDetails'] = { message: errorMsg };
  mkdirSync('allure-results', { recursive: true });
  writeFileSync(join('allure-results', `${uuid}-result.json`), JSON.stringify(result));
}

export function createMobileRun(epicName: string, featureName: string) {
  const softErrors: string[] = [];

  const run = async (name: string, fn: () => Promise<boolean>, hard = false) => {
    const start = Date.now();
    let passed = true;
    let errorMsg: string | undefined;
    try {
      const result = await fn();
      if (!result) { passed = false; errorMsg = 'expected true but received false'; }
    } catch (e) {
      passed = false;
      errorMsg = String(e);
    } finally {
      writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), errorMsg);
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

export function createRun(epicName: string, featureName: string) {
  return async (name: string, fn: () => Promise<boolean>, hard = false) => {
    const start = Date.now();
    let passed = true;
    let errorMsg: string | undefined;
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
      writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), errorMsg);
    }
  };
}
