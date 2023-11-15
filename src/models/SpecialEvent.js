import { SPECIAL_EVENT } from '../util/constant/index.js';

class SpecialEvent {
  #specialDays = SPECIAL_EVENT.STAR_DAY;

  #discountPrice;

  #isEvent;

  constructor(visitDate, orderTotalPrice) {
    this.#isEvent = this.setIsEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.#isEvent ? SPECIAL_EVENT.DISCOUNT_PRICE : 0;
  }

  setIsEvent(visitDate, orderTotalPrice) {
    const isSpecialDay = this.#specialDays.includes(visitDate);
    const hasMinimumPrice = orderTotalPrice >= 10000;

    return isSpecialDay && hasMinimumPrice;
  }

  isEventActive() {
    return this.#isEvent;
  }

  getName() {
    return 'SpecialEvent';
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default SpecialEvent;
