import {
  OUTPUT_PRINT,
  BENEFIT_EVENT_NAME,
  ATTENTION_MESSAGE,
} from '../util/constant/index.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcome() {
    Console.print(OUTPUT_PRINT.WELCOME_MESSAGE);
  },

  printEventAttentionMessage() {
    Console.print('\n' + ATTENTION_MESSAGE.TITLE);
    Console.print(ATTENTION_MESSAGE.MINIMUM_EVENT_AMOUNT);
    Console.print(ATTENTION_MESSAGE.DRINK_ONLY_ORDER);
    Console.print(ATTENTION_MESSAGE.MAXIMUM_ORDER_LIMIT + '\n');
  },

  printMenu(orderMenu) {
    Console.print('\n' + OUTPUT_PRINT.ORDER_MENU_TITLE);

    orderMenu.forEach(([menuName, menuCount]) => {
      Console.print(`${menuName} ${menuCount}개`);
    });
  },

  printPreviewMessage(visitDate) {
    const [MONTH, MESSAGE] = OUTPUT_PRINT.PREVIEW_MESSAGE;

    Console.print(`${MONTH}${visitDate}${MESSAGE}`);
  },

  printTotalPriceBeforeDiscount(price) {
    Console.print('\n' + OUTPUT_PRINT.TOTAL_PRICE_BEFORE_DISCOUNT_TITLE);
    Console.print(this.formatPrice(price));
  },

  printGiftMenu(giftMenu) {
    Console.print('\n' + OUTPUT_PRINT.GIFT_MENU_TITLE);

    if (giftMenu === null) {
      Console.print(OUTPUT_PRINT.NO_DATA);
    } else {
      Console.print(`${giftMenu} 1개`);
    }
  },

  printBenefitDetail(benefitDetail, totalBenefitsAmount) {
    Console.print('\n' + OUTPUT_PRINT.BENEFIT_EVENT_DETAIL_TITLE);

    if (totalBenefitsAmount !== 0) {
      this.printEventDiscountContent(benefitDetail);
    } else {
      Console.print(OUTPUT_PRINT.NO_DATA);
    }
  },

  formatEventName(eventName) {
    const eventNames = {
      ChristmasDdayEvent: BENEFIT_EVENT_NAME.CHRISTMAS_DDAY,
      WeekdayEvent: BENEFIT_EVENT_NAME.WEEKDAY,
      WeekendEvent: BENEFIT_EVENT_NAME.WEEKEND,
      SpecialEvent: BENEFIT_EVENT_NAME.SPECIAL,
      GiftEvent: BENEFIT_EVENT_NAME.GIFT,
    };

    return eventNames[eventName];
  },

  printEventDiscountContent(benefitDetail) {
    for (const [eventName, discount] of Object.entries(benefitDetail)) {
      if (discount === 0) continue;

      Console.print(`${this.formatEventName(eventName)}-${this.formatPrice(discount)}`);
    }
  },

  printTotalBenefitsAmount(totalBenefitsAmount) {
    Console.print('\n' + OUTPUT_PRINT.TOTAL_BENEFITS_AMOUNT_TITLE);
    const formattedAmount =
      (totalBenefitsAmount !== 0 ? '-' : '') + `${this.formatPrice(totalBenefitsAmount)}`;
    Console.print(formattedAmount);
  },

  printFinalExpectPrice(finalExpectPrice) {
    Console.print('\n' + OUTPUT_PRINT.FINAL_EXPECT_PRICE_TITLE);
    Console.print(this.formatPrice(finalExpectPrice));
  },

  printEventBadge(eventBadge) {
    Console.print('\n' + OUTPUT_PRINT.EVENT_BADGE_TITLE);

    Console.print(eventBadge || OUTPUT_PRINT.NO_DATA);
  },

  formatPrice(price) {
    const PriceWithCommas = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${PriceWithCommas}원`;
  },
};

export default OutputView;
