import { D_DAY_EVENT } from '../util/constant/index.js';

class ChristmasDdayEvent {
  #isChristmasDdayEvent;
  #discountPrice;

  /**
   * @param {number} visitDate 예약한 방문날짜
   */
  constructor(visitDate, orderTotalPrice) {
    this.#isChristmasDdayEvent = this.setIsChristmasDdayEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.setDiscount(visitDate);
  }

  setIsChristmasDdayEvent(visitDate, orderTotalPrice) {
    if (visitDate < D_DAY_EVENT.START_DATE || visitDate > D_DAY_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < D_DAY_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return true;
  }

  setDiscount(visitDate) {
    if (this.#isChristmasDdayEvent) {
      let additionalDiscount = D_DAY_EVENT.DISCOUNT_ADDITIONAL_PRICE * (visitDate - 1);
      return additionalDiscount + D_DAY_EVENT.DISCOUNT_STANDARD_PRICE;
    }
    return 0;
  }

  getIsChristmasDdayEvent() {
    return this.#isChristmasDdayEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default ChristmasDdayEvent;
