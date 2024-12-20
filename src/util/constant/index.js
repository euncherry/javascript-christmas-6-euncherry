const MENU_ITEMS = [
  { type: '애피타이저', name: '양송이수프', price: 6000 },
  { type: '애피타이저', name: '타파스', price: 5500 },
  { type: '애피타이저', name: '시저샐러드', price: 8000 },
  { type: '메인', name: '티본스테이크', price: 55000 },
  { type: '메인', name: '바비큐립', price: 54000 },
  { type: '메인', name: '해산물파스타', price: 35000 },
  { type: '메인', name: '크리스마스파스타', price: 25000 },
  { type: '디저트', name: '초코케이크', price: 15000 },
  { type: '디저트', name: '아이스크림', price: 5000 },
  { type: '음료', name: '제로콜라', price: 3000 },
  { type: '음료', name: '레드와인', price: 60000 },
  { type: '음료', name: '샴페인', price: 25000 },
];

const INPUT_QUERY = {
  VISIT_DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  ORDER_MENU:
    '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const ERROR_MESSAGE = {
  INVALID_VISIT_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  INVALID_ORDER_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
};

const ATTENTION_MESSAGE = {
  TITLE: '❗️이벤트 주의사항',
  MINIMUM_EVENT_AMOUNT: '총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.',
  DRINK_ONLY_ORDER: '음료만 주문 시, 주문할 수 없습니다.',
  MAXIMUM_ORDER_LIMIT:
    '메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.\n(e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)',
};

const OUTPUT_PRINT = {
  WELCOME_MESSAGE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  PREVIEW_MESSAGE: ['12월 ', '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!'],
  ORDER_MENU_TITLE: '<주문 메뉴>',
  TOTAL_PRICE_BEFORE_DISCOUNT_TITLE: '<할인 전 총주문 금액>',
  GIFT_MENU_TITLE: '<증정 메뉴>',
  BENEFIT_EVENT_DETAIL_TITLE: '<혜택 내역>',
  TOTAL_BENEFITS_AMOUNT_TITLE: '<총혜택 금액>',
  FINAL_EXPECT_PRICE_TITLE: '<할인 후 예상 결제 금액>',
  EVENT_BADGE_TITLE: '<12월 이벤트 배지>',
  NO_DATA: '없음',
};

const BENEFIT_EVENT_NAME = {
  CHRISTMAS_DDAY: '크리스마스 디데이 할인: ',
  WEEKDAY: '평일 할인: ',
  WEEKEND: '주말 할인: ',
  SPECIAL: '특별 할인: ',
  GIFT: '증정 이벤트: ',
};

const D_DAY_EVENT = {
  START_DATE: 1,
  END_DATE: 25,
  DISCOUNT_STANDARD_PRICE: 1000,
  DISCOUNT_ADDITIONAL_PRICE: 100,
  MIN_EVENT_TOTAL_PRICE: 10000,
};

const GIFT_MENU_NAME = '샴페인';

const GIFT_EVENT = {
  START_DATE: 1,
  END_DATE: 31,
  MIN_EVENT_TOTAL_PRICE: 120000,
};

const WEEKDAY_EVENT = {
  START_DATE: 1,
  END_DATE: 31,
  YEAR: 2023,
  MONTH: 12,
  WEEKDAY_NUMBERS: [0, 1, 2, 3, 4],
  DISCOUNT_MENU_TYPE: '디저트',
  DISCOUNT_PRICE: 2023,
  MIN_EVENT_TOTAL_PRICE: 10000,
};

const WEEKEND_EVENT = {
  START_DATE: 1,
  END_DATE: 31,
  YEAR: 2023,
  MONTH: 12,
  WEEKEND_NUMBERS: [5, 6],
  DISCOUNT_MENU_TYPE: '메인',
  DISCOUNT_PRICE: 2023,
  MIN_EVENT_TOTAL_PRICE: 10000,
};

const SPECIAL_EVENT = {
  STAR_DAY: [3, 10, 17, 24, 25, 31],
  DISCOUNT_PRICE: 1000,
  MIN_EVENT_TOTAL_PRICE: 10000,
};

const BADGE_INFO = [
  { name: '별', price: 5000 },
  { name: '트리', price: 10000 },
  { name: '산타', price: 20000 },
];

export {
  MENU_ITEMS,
  INPUT_QUERY,
  ERROR_MESSAGE,
  OUTPUT_PRINT,
  BENEFIT_EVENT_NAME,
  D_DAY_EVENT,
  GIFT_MENU_NAME,
  GIFT_EVENT,
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
  SPECIAL_EVENT,
  BADGE_INFO,
  ATTENTION_MESSAGE,
};
