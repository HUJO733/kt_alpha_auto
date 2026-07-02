const ERROR_MAP: [RegExp, string][] = [
  [/TimeoutError|Timeout.*exceeded/, '요소를 찾지 못했거나 페이지 응답이 너무 느렸습니다'],
  [/expected true but received false/, '검증 조건을 만족하지 못했습니다'],
  [/ERR_ABORTED|interrupted by another navigation/, '페이지 이동이 중단되었습니다'],
  [/net::ERR_|NS_ERROR_/, '네트워크 오류가 발생했습니다'],
  [/Navigation failed|navigation/, '페이지 이동에 실패했습니다'],
  [/Target closed|browser has been closed|context or browser/, '브라우저 또는 페이지가 예기치 않게 종료되었습니다'],
  [/not visible/, '요소가 화면에 표시되지 않습니다'],
  [/not enabled/, '요소가 비활성화 상태입니다'],
  [/strict mode violation|resolved to/, '동일한 요소가 여러 개 발견되었습니다'],
  [/뷰포트 내에 클릭 가능한 요소를 찾을 수 없음/, '화면에 클릭 가능한 요소가 없습니다'],
];

export function toFriendlyError(errorMsg: string): string {
  return ERROR_MAP.find(([pattern]) => pattern.test(errorMsg))?.[1] ?? '예기치 않은 오류가 발생했습니다';
}
