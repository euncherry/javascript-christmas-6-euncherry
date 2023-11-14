import { OUTPUT_PRINT, BENEFIT_EVENT_NAME } from '../util/constant/index.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcome() {
    Console.print(OUTPUT_PRINT.WELCOME_MESSAGE);
  },

  printMenu(orderMenu) {
    Console.print('\n' + OUTPUT_PRINT.ORDER_MENU_TITLE);
    orderMenu.forEach(([menuName, menuCount]) => {
      Console.print(`${menuName} ${menuCount}개`);
    });
  },

  printPreviewMessage(visitDate) {
    const [MONTH, MESSAGE] = OUTPUT_PRINT.PREVIEW_MESSAGE;
    Console.print(MONTH + `${visitDate}` + MESSAGE);
  },

  formatPrice(price) {
    const PriceWithCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${PriceWithCommas}원`;
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print('\n' + OUTPUT_PRINT.TOTAL_PRICE_BEFORE_DISCOUNT_TITLE);
    Console.print(this.formatPrice(price));
  },

  printGiftMenu(giftMenuResult) {
    Console.print('\n' + OUTPUT_PRINT.GIFT_MENU_TITLE);

    if (giftMenuResult === null) {
      Console.print(OUTPUT_PRINT.NO_DATA);
    } else {
      Console.print(`${giftMenuResult} 1개`);
    }
  },

  printBenefitDetail(benefitDetailResult, totalBenefitsAmountResult) {
    Console.print('\n' + OUTPUT_PRINT.BENEFIT_EVENT_DETAIL_TITLE);

    if (totalBenefitsAmountResult !== 0) {
      this.printEventDiscountContent(benefitDetailResult);
    } else {
      Console.print(OUTPUT_PRINT.NO_DATA);
    }
  },

  formatEventName(eventName) {
    const eventNames = {
      christmasDdayEvent: BENEFIT_EVENT_NAME.CHRISTMAS_DDAY,
      weekdayEvent: BENEFIT_EVENT_NAME.WEEKDAY,
      weekendEvent: BENEFIT_EVENT_NAME.WEEKEND,
      specialEvent: BENEFIT_EVENT_NAME.SPECIAL,
      giftEvent: BENEFIT_EVENT_NAME.GIFT,
    };

    return eventNames[eventName];
  },

  printEventDiscountContent(benefitDetailResult) {
    for (const [eventName, discount] of Object.entries(benefitDetailResult)) {
      if (discount === 0) continue;

      Console.print(this.formatEventName(eventName) + '-' + this.formatPrice(discount));
    }
  },

  printTotalBenefitsAmount(totalBenefitsAmountResult) {
    Console.print('\n' + OUTPUT_PRINT.TOTAL_BENEFITS_AMOUNT_TITLE);
    Console.print('-' + this.formatPrice(totalBenefitsAmountResult));
  },

  printFinalExpectPrice(finalExpectPriceResult) {
    Console.print('\n' + OUTPUT_PRINT.FINAL_EXPECT_PRICE_TITLE);
    Console.print(this.formatPrice(finalExpectPriceResult));
  },
  printEventBadge(eventBadge) {
    Console.print('\n' + OUTPUT_PRINT.EVENT_BADGE_TITLE);

    Console.print(eventBadge);
  },
};

export default OutputView;
