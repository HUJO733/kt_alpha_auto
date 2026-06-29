# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pc/integrated.test.ts >> 통합 테스트
- Location: tests/pc/integrated.test.ts:21:5

# Error details

```
Error: TimeoutError: locator.waitFor: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('//div[contains(@class,"ProductItem_box")]/button').first() to be visible


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e7]:
        - button "뒤로가기" [ref=e9] [cursor=pointer]:
          - generic:
            - img [ref=e10]
            - generic: 뒤로가기
        - heading "기프티쇼 상품 결제" [level=1] [ref=e12]:
          - strong [ref=e13]: 기프티쇼 상품 결제
    - main [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - heading "주문 상품 총 건" [level=2] [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 주문 상품
              - generic [ref=e21]: 총 건
          - generic [ref=e25] [cursor=pointer]:
            - button [ref=e26]
            - generic:
              - button:
                - strong
        - heading "결제수단 지금 결제수단 재사용 동의" [level=2] [ref=e30]:
          - text: 결제수단
          - generic [ref=e32]:
            - checkbox "지금 결제수단 재사용 동의" [checked] [ref=e33]
            - generic [ref=e34]:
              - img [ref=e35]
              - generic [ref=e37]: 지금 결제수단 재사용 동의
        - generic [ref=e41]:
          - generic [ref=e43]:
            - strong [ref=e45]: 상기 구매조건에 동의합니다.
            - button [ref=e46] [cursor=pointer]:
              - img [ref=e47]
          - button "0원 결제하기" [ref=e51] [cursor=pointer]
  - alert [ref=e52]: 주문-발송주문서작성 | 마음을 선물하다 - 기프티쇼
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import type { Page } from '@playwright/test';
  3  | import { writeFileSync, mkdirSync } from 'fs';
  4  | import { randomUUID } from 'crypto';
  5  | import { join } from 'path';
  6  | 
  7  | function writeStepResult(name: string, epic: string, feature: string, status: 'passed' | 'failed', start: number, stop: number, errorMsg?: string, screenshot?: Buffer) {
  8  |   const uuid = randomUUID();
  9  |   const result: Record<string, unknown> = {
  10 |     uuid,
  11 |     name,
  12 |     status,
  13 |     start,
  14 |     stop,
  15 |     labels: [
  16 |       { name: 'epic', value: epic },
  17 |       { name: 'feature', value: `${feature} (${process.env.TEST_RUN_TIMESTAMP})` },
  18 |       { name: 'story', value: name },
  19 |     ],
  20 |   };
  21 |   if (errorMsg) result['statusDetails'] = { message: errorMsg };
  22 |   if (screenshot) {
  23 |     const attachUUID = randomUUID();
  24 |     const attachFile = `${attachUUID}-attachment.png`;
  25 |     writeFileSync(join('allure-results', attachFile), screenshot);
  26 |     result['attachments'] = [{ name: 'screenshot', type: 'image/png', source: attachFile }];
  27 |   }
  28 |   mkdirSync('allure-results', { recursive: true });
  29 |   writeFileSync(join('allure-results', `${uuid}-result.json`), JSON.stringify(result));
  30 | }
  31 | 
  32 | export function createMobileRun(epicName: string, featureName: string) {
  33 |   const softErrors: string[] = [];
  34 | 
  35 |   const run = async (name: string, fn: () => Promise<boolean>, hard = false) => {
  36 |     const start = Date.now();
  37 |     let passed = true;
  38 |     let errorMsg: string | undefined;
  39 |     try {
  40 |       const result = await fn();
  41 |       if (!result) { passed = false; errorMsg = 'expected true but received false'; }
  42 |     } catch (e) {
  43 |       passed = false;
  44 |       errorMsg = String(e);
  45 |     } finally {
  46 |       writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), errorMsg);
  47 |     }
  48 |     if (!passed) {
  49 |       if (hard) throw new Error(errorMsg);
  50 |       softErrors.push(`[${name}] ${errorMsg}`);
  51 |     }
  52 |   };
  53 | 
  54 |   const finish = () => {
  55 |     if (softErrors.length > 0) throw new Error(softErrors.join('\n'));
  56 |   };
  57 | 
  58 |   return { run, finish };
  59 | }
  60 | 
  61 | export function createRun(epicName: string, featureName: string, page?: Page) {
  62 |   return async (name: string, fn: () => Promise<boolean>, hard = false) => {
  63 |     const start = Date.now();
  64 |     let passed = true;
  65 |     let errorMsg: string | undefined;
  66 |     try {
  67 |       await test.step(name, async () => {
  68 |         try {
  69 |           const result = await fn();
  70 |           if (!result) { passed = false; errorMsg = 'expected true but received false'; }
  71 |           (hard ? expect : expect.soft)(result).toBe(true);
  72 |         } catch (e) {
  73 |           passed = false;
  74 |           errorMsg = String(e);
  75 |           if (hard) throw e;
> 76 |           expect.soft(false, String(e)).toBe(true);
     |                                         ^ Error: TimeoutError: locator.waitFor: Timeout 3000ms exceeded.
  77 |         }
  78 |       });
  79 |     } catch (e) {
  80 |       if (hard) throw e;
  81 |     } finally {
  82 |       const screenshot = (!passed && page)
  83 |         ? await page.screenshot({ fullPage: false }).catch(() => undefined)
  84 |         : undefined;
  85 |       writeStepResult(name, epicName, featureName, passed ? 'passed' : 'failed', start, Date.now(), errorMsg, screenshot);
  86 |     }
  87 |   };
  88 | }
  89 | 
```