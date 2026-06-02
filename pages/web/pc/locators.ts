export const PcLocators = {
  urls: {
    onAirGiftOrder: 'custord/present/orderSheet',
    onAirBuyOrder: 'custord/orderSheet',
  },
  main: {
    navItems: '//nav//li',  // 상단 네비게이션 항목 (9개)
    mainArea: '//main',     // 페이지 본문 영역
    onAirBtn: '//button[contains(@class,"FloatingBannerActions_btnOnAirLottie")]',
    onAirModalImg: '//button[contains(@class,"ModalOnAir")]//img',
    onAirDirectBuyBtn: '//div[contains(@class,"ModalOnAir_buyBox")]//button',
    onAirDirectBuyOption: '//button[contains(@class,"SelectBox_option")]', // 옵션 항목(변동)
    onAirGiftButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="선물하기"]',
    onAirCartButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="장바구니"]',
    onAirBuyButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="구매하기"]',
  },
  login: {
    myPageBtn: '//a[text()="마이"]',
    loginBtn: '//a[text()="로그인"]',
    idInput: '//input[@placeholder="아이디"]',
    pwInput: '//input[@placeholder="비밀번호"]',
    loginSubmitBtn: '//span[text()="로그인"]',
  },
};
