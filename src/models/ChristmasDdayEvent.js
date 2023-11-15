import { D_DAY_EVENT } from '../util/constant/index.js';

class ChristmasDdayEvent {
  #isEvent;
  #discountPrice;

  /**
   * @param {number} visitDate 예약한 방문날짜
   */
  constructor(visitDate, orderTotalPrice) {
    this.#isEvent = this.setIsEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.setDiscount(visitDate);
  }

  setIsEvent(visitDate, orderTotalPrice) {
    if (visitDate < D_DAY_EVENT.START_DATE || visitDate > D_DAY_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < D_DAY_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return true;
  }

  setDiscount(visitDate) {
    if (this.#isEvent) {
      let additionalDiscount = D_DAY_EVENT.DISCOUNT_ADDITIONAL_PRICE * (visitDate - 1);
      return additionalDiscount + D_DAY_EVENT.DISCOUNT_STANDARD_PRICE;
    }
    return 0;
  }

  getName() {
    return 'ChristmasDdayEvent';
  }

  isEventActive() {
    return this.#isEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default ChristmasDdayEvent;
