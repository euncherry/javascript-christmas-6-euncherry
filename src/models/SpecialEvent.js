import { SPECIAL_EVENT } from '../util/constant/index.js';

class SpecialEvent {
  #specialDays = SPECIAL_EVENT.STAR_DAY;
  #discountPrice;
  #isSpecialEvent;

  constructor(visitDate, orderTotalPrice) {
    this.#isSpecialEvent = this.setIsSpecialEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.#isSpecialEvent
      ? SPECIAL_EVENT.DISCOUNT_PRICE
      : 0;
  }

  setIsSpecialEvent(visitDate, orderTotalPrice) {
    const isSpecialDay = this.#specialDays.includes(visitDate);
    const hasMinimumPrice = orderTotalPrice >= 10000;

    return isSpecialDay && hasMinimumPrice;
  }

  getIsSpecialEvent() {
    return this.#isSpecialEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default SpecialEvent;
