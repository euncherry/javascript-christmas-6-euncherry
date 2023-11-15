import { WEEKDAY_EVENT } from '../util/constant/index.js';

class WeekdayEvent {
  #isEvent;
  #discountPrice;

  constructor(visitDate, orderList, orderTotalPrice) {
    this.#isEvent = this.setIsEvent(visitDate, orderTotalPrice);
    this.#discountPrice = this.setDiscountPrice(orderList);
  }

  isWeekdayVisitDay(visitDate) {
    const checkDate = new Date(WEEKDAY_EVENT.YEAR, WEEKDAY_EVENT.MONTH - 1, visitDate);
    const dayOfWeek = checkDate.getDay();
    return WEEKDAY_EVENT.WEEKDAY_NUMBERS.includes(dayOfWeek);
  }

  setIsEvent(visitDate, orderTotalPrice) {
    if (visitDate < WEEKDAY_EVENT.START_DATE || visitDate > WEEKDAY_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < WEEKDAY_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return this.isWeekdayVisitDay(visitDate);
  }

  setDiscountPrice(orderList) {
    if (!this.#isEvent) return 0;
    const discountMenuCount = orderList.reduce((acc, order) => {
      if (order.menu.getType() === WEEKDAY_EVENT.DISCOUNT_MENU_TYPE) {
        return acc + order.count;
      }
      return acc;
    }, 0);
    return discountMenuCount * WEEKDAY_EVENT.DISCOUNT_PRICE;
  }

  getName() {
    return 'WeekdayEvent';
  }

  isEventActive() {
    return this.#isEvent;
  }

  getDiscountPrice() {
    return this.#discountPrice;
  }
}

export default WeekdayEvent;
