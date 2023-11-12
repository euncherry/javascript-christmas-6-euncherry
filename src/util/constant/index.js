const MENU_LIST = [
  { type: '애피타이저', name: '양송이수프', price: '6000' },
  { type: '애피타이저', name: '타파스', price: '5500' },
  { type: '애피타이저', name: '시저샐러드', price: '8000' },
  { type: '메인', name: '티본스테이크', price: '55000' },
  { type: '메인', name: '바비큐립', price: '54000' },
  { type: '메인', name: '해산물파스타', price: '35000' },
  { type: '메인', name: '크리스마스파스타', price: '25000' },
  { type: '디저트', name: '초코케이크', price: '15000' },
  { type: '디저트', name: '아이스크림', price: '5000' },
  { type: '음료', name: '제로콜라', price: '3000' },
  { type: '음료', name: '레드와인', price: '60000' },
  { type: '음료', name: '샴페인', price: '25000' },
];

const INPUT_QUERY = {
  VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  ORDER_MENU:
    '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const ERROR_MESSAGE = {
  INVALID_VISIT_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  INVALID_ORDER_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
};

const OUTPUT_PRINT = {
  WELCOME_MESSAGE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  PREVIEW_MESSAGE: [
    '12월 ',
    '일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  ],
};

export { MENU_LIST, INPUT_QUERY, ERROR_MESSAGE, OUTPUT_PRINT };
