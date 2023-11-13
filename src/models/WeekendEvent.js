import { WEEKEND_EVENT } from '../util/constant/index.js';

class WeekendEvent {
  #isWeekendEvent;
  #discountPrice;

  constructor(visitDate, orderList, orderTotalPrice) {
    this.#isWeekendEvent = this.setIsWeekendEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.setDiscountPrice(orderList);
  }

  isWeekendVisitDay(visitDate) {
    const dayOfWeek = new Date(
      WEEKEND_EVENT.YEAR,
      WEEKEND_EVENT.MONTH - 1,
      visitDate,
    ).getDay();

    return WEEKEND_EVENT.WEEKEND_NUMBERS.includes(dayOfWeek);
  }

  setIsWeekendEvent(visitDate, orderTotalPrice) {
    if (visitDate < WEEKEND_EVENT.START_DATE || visitDate > WEEKEND_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < WEEKEND_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return this.isWeekendVisitDay(visitDate);
  }

  setDiscountPrice(orderList) {
    if (!this.#isWeekendEvent) return 0;
    const discountMenuCount = orderList.reduce((acc, order) => {
      if (order.menu.getMenuType() === WEEKEND_EVENT.DISCOUNT_MENU_TYPE) {
        return acc + order.count;
      }
      return acc;
    }, 0);
    return discountMenuCount * WEEKEND_EVENT.DISCOUNT_PRICE;
  }

  getIsWeekendEvent() {
    return this.#isWeekendEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default WeekendEvent;
