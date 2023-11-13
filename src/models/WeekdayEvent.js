import { WEEKDAY_EVENT } from '../util/constant/index.js';

class WeekdayEvent {
  #isWeekdayEvent;
  #discountPrice;

  constructor(visitDate, orderList, orderTotalPrice) {
    this.#isWeekdayEvent = this.setIsWeekdayEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.setDiscountPrice(orderList);
  }

  isWeekdayVisitDay(visitDate) {
    const checkDate = new Date(WEEKDAY_EVENT.YEAR, WEEKDAY_EVENT.MONTH - 1, visitDate);
    const dayOfWeek = checkDate.getDay();
    return WEEKDAY_EVENT.WEEKDAY_NUMBERS.includes(dayOfWeek);
  }

  setIsWeekdayEvent(visitDate, orderTotalPrice) {
    if (visitDate < WEEKDAY_EVENT.START_DATE || visitDate > WEEKDAY_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < WEEKDAY_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return this.isWeekdayVisitDay(visitDate);
  }

  setDiscountPrice(orderList) {
    if (!this.#isWeekdayEvent) return 0;
    const discountMenuCount = orderList.reduce((acc, order) => {
      if (order.menu.getMenuType() === WEEKDAY_EVENT.DISCOUNT_MENU_TYPE) {
        return acc + order.count;
      }
      return acc;
    }, 0);
    return discountMenuCount * WEEKDAY_EVENT.DISCOUNT_PRICE;
  }

  getIsWeekdayEvent() {
    return this.#isWeekdayEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default WeekdayEvent;
