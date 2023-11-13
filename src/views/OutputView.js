import { OUTPUT_PRINT, BENEFIT_EVENT_DETAIL } from '../util/constant/index.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(orderMenu) {
    Console.print(OUTPUT_PRINT.ORDER_MENU_TITLE);
    orderMenu.forEach((menu) => {
      const [menuName, menuCount] = menu;
      Console.print(`${menuName} ${menuCount}개`);
    });
    // ...
  },
  printWelcome() {
    Console.print(OUTPUT_PRINT.WELCOME_MESSAGE);
  },
  printPreviewMessage(visitDate) {
    const [MONTH, MESSAGE] = OUTPUT_PRINT.PREVIEW_MESSAGE;
    Console.print(MONTH + `${visitDate}` + MESSAGE);
  },

  printPrice(price) {
    const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    Console.print(`${formatPrice}` + '원');
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print(OUTPUT_PRINT.TOTAL_PRICE_BEFORE_DISCOUNT_TITLE);
    this.printPrice(price);
  },

  printGiftMenuTitle() {
    Console.print(OUTPUT_PRINT.GIFT_MENU_TITLE);
  },

  // ...
};

export default OutputView;
