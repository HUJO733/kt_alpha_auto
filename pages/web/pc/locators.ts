export const PcLocators = {
  urls: {
    onAirGiftOrder: 'custord/present/orderSheet',
    onAirBuyOrder: 'custord/orderSheet',
    productDetail: 'display/product',
  },
  main: {
    navItems: '//nav//li',  // 상단 네비게이션 항목 (9개)
    mainArea: '//main',     // 페이지 본문 영역
    onAirBtn: '//button[contains(@class,"FloatingBannerActions_btnOnAirLottie")]',
    onAirModalImg: '//button[contains(@class,"ModalOnAir")]//img',
    onAirDirectBuyBtn: '//div[contains(@class,"ModalOnAir_buyBox")]//button',
    onAirDirectBuyOption: '//button[contains(@class,"SelectBox_option")]', // 옵션 항목(변동)
    onAirGiftButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="선물하기"]',
    onAirProductName: '//div[contains(@class,"ModalOnAir_inner")]//em[contains(@class,"ProductItem_title")]',
    onAirCartButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="장바구니"]',
    onAirCartMoveButton: '//span[text()="바로가기"]',
    cartProductName: '(//button[contains(@class,"OrderProductItem_prodName")])[last()]',
    cartDeleteButton: '//span[text()="선택 삭제"]',
    onAirBuyButton: '//div[contains(@class,"ButtonPurchase")]//span[text()="구매하기"]',
    categoryButton: '//button[text()="카테고리"]',
    categoryOneDepthButton: '//div[contains(@class,"Modal")]//div[contains(@class,"Tab_wrap")]/div/button',
    categoryTwoDepthButton: '//div[contains(@class,"categoryList")]/a',
    homeShoppingThreeDepthButton: '//div[contains(@class,"SubCategoryMenu_inner")]/button',
    giftShowThreeDepthButton: '//ul[contains(@class,"Brands_list")]/li',
    categoryThreeDepthFilter: '//ul[contains(@class,"sortList")]/li/button',
    searchButton: '//div[contains(@class,"Header_right")]/a',
    popularWords: '//ul[contains(@class,"PopularWords")]//p',
    searchProduct: '(//div[contains(@class,"ProductItem_box")])[1]',
  },
  login: {
    myPageBtn: '//a[text()="마이"]',
    loginBtn: '//a[text()="로그인"]',
    idInput: '//input[@placeholder="아이디"]',
    pwInput: '//input[@placeholder="비밀번호"]',
    loginSubmitBtn: '//span[text()="로그인"]',
  },
};
