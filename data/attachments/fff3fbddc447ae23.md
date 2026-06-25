# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pc/integrated.test.ts >> 통합 테스트
- Location: tests/pc/integrated.test.ts:21:5

# Error details

```
Error: Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.kshop.co.kr/", waiting until "load"


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { Page } from '@playwright/test';
  2   | import { CommonLocators } from './common.locators';
  3   | 
  4   | export class BasePage {
  5   |   constructor(protected page: Page) {}
  6   | 
  7   |   getPage(): Page {
  8   |     return this.page;
  9   |   }
  10  | 
  11  |   /** 모달 확인 */
  12  |   async isModalVisible(): Promise<boolean> {
  13  |     return await this.isVisible(CommonLocators.modal.modal);
  14  |   }
  15  | 
  16  |   /** 공통 팝업 모달 닫기 (모달이 없으면 무시) */
  17  |   async closeModal() {
  18  |     try {
  19  |       await this.waitForElement(CommonLocators.modal.closeBtn, 3);
  20  |     } catch {
  21  |       return;
  22  |     }
  23  |     while (await this.isVisible(CommonLocators.modal.closeBtn)) {
  24  |       await this.click(CommonLocators.modal.closeBtn);
  25  |       await this.wait(1);
  26  |     }
  27  |   }
  28  | 
  29  |   /** 홈페이지로 이동 */
  30  |   async goToHome() {
  31  |     await this.goToUrl(CommonLocators.urls.homePage);
  32  |     await this.closeModal();
  33  |   }
  34  | 
  35  |   /** 상단 기프티쇼 버튼 클릭 */
  36  |     async clickGiftShowButton() {
  37  |       await this.goToHome();
  38  |       await this.click(CommonLocators.button.giftShowButton);
  39  |       await this.closeModal();
  40  |     }
  41  | 
  42  |   /** 메인페이지 전환 대기 */
  43  |   async waitMainPage() {
  44  |     await this.waitForURLContains(CommonLocators.urls.homePage);
  45  |   }
  46  | 
  47  |   /** 메인페이지 이동 확인 */
  48  |   async isMainPage(): Promise<boolean> {
  49  |     return this.urlContains(CommonLocators.urls.homePage);
  50  |   }
  51  | 
  52  |   /** 확인 버튼 클릭 */
  53  |   async clickConfirmButton() {
  54  |     await this.click(CommonLocators.modal.confirmButton);
  55  |   }
  56  | 
  57  |   /** 지정한 URL로 이동 */
  58  |   async goToUrl(url: string) {
  59  |     try {
> 60  |       await this.page.goto(url);
      |                       ^ Error: page.goto: Target page, context or browser has been closed
  61  |     } catch (e: any) {
  62  |       if (e.message?.includes('ERR_ABORTED') || e.message?.includes('interrupted by another navigation')) {
  63  |         await this.page.goto(url);
  64  |       } else throw e;
  65  |     }
  66  |   }
  67  | 
  68  |   /** 페이지 새로고침 */
  69  |   async reload() {
  70  |     await this.page.reload();
  71  |   }
  72  | 
  73  |   /** 요소 단일 클릭 */
  74  |   async click(selector: string, force = false, timeout = 3) {
  75  |     await this.waitForElement(selector, timeout);
  76  |     await this.page.locator(selector).first().click({ force });
  77  |   }
  78  | 
  79  |   /** index번째 요소 클릭 */
  80  |   async nthClick(selector: string, index: number) {
  81  |     await this.page.locator(selector).nth(index).click();
  82  |   }
  83  | 
  84  |   /** 마지막 요소 클릭 */
  85  |   async lastClick(selector: string) {
  86  |     await this.page.locator(selector).last().click();
  87  |   }
  88  | 
  89  |   /** 요소 더블 클릭 */
  90  |   async doubleClick(selector: string) {
  91  |     await this.page.locator(selector).dblclick();
  92  |   }
  93  | 
  94  |   /** 요소 개수 추출 */
  95  |   async count(selector: string): Promise<number> {
  96  |     await this.waitForElement(selector, 5).catch(() => {});
  97  |     return await this.page.locator(selector).count();
  98  |   }
  99  | 
  100 |   /** input 요소에 텍스트를 키 이벤트로 한 글자씩 입력 (React controlled input 대응) */
  101 |   async pressSequentially(selector: string, text: string) {
  102 |     await this.page.locator(selector).pressSequentially(text);
  103 |   }
  104 | 
  105 |   /** input 요소의 값 초기화 */
  106 |   async clear(selector: string) {
  107 |     await this.page.locator(selector).clear();
  108 |   }
  109 | 
  110 |   /** select 요소에서 옵션 선택 (value, label, index 모두 가능) */
  111 |   async selectOption(selector: string, value: string) {
  112 |     await this.page.locator(selector).selectOption(value);
  113 |   }
  114 | 
  115 |   /** 요소에 마우스 호버 */
  116 |   async hover(selector: string) {
  117 |     await this.page.locator(selector).hover();
  118 |   }
  119 | 
  120 |   /** 키보드 키 입력 (예: 'Enter', 'Tab', 'Escape') */
  121 |   async pressKey(key: string) {
  122 |     await this.page.keyboard.press(key);
  123 |   }
  124 | 
  125 |   /** 요소의 텍스트 내용 반환 */
  126 |   async getText(selector: string): Promise<string> {
  127 |     return await this.page.locator(selector).innerText();
  128 |   }
  129 | 
  130 |   /** index번째 요소의 텍스트 내용 반환 */
  131 |   async getIndexText(selector: string, index: number): Promise<string> {
  132 |     return await this.page.locator(selector).nth(index).innerText();
  133 |   }
  134 | 
  135 |   /** 요소의 지정 attribute 값 반환 */
  136 |   async getAttribute(selector: string, attribute: string): Promise<string | null> {
  137 |     return await this.page.locator(selector).getAttribute(attribute);
  138 |   }
  139 | 
  140 |   /** input 요소의 현재 입력값 반환 */
  141 |   async getValue(selector: string): Promise<string> {
  142 |     return await this.page.locator(selector).inputValue();
  143 |   }
  144 | 
  145 |   /** input 요소의 값이 비어있는지 여부 반환 */
  146 |   async isEmpty(selector: string): Promise<boolean> {
  147 |     return (await this.getValue(selector)) === '';
  148 |   }
  149 | 
  150 |   /** 문자열에서 숫자만 추출하여 number로 반환 (숫자 없으면 false) */
  151 |   extractNumber(text: string): number | false {
  152 |     const digits = text.replace(/\D/g, '');
  153 |     return digits.length > 0 ? Number(digits) : false;
  154 |   }
  155 | 
  156 |   /** 요소가 화면에 보이는지 여부 반환 */
  157 |   async isVisible(selector: string): Promise<boolean> {
  158 |     await this.waitForElement(selector, 3).catch(() => {});
  159 |     return await this.page.locator(selector).isVisible();
  160 |   }
```