import GiftEvent from '../models/GiftEvent.js';
import ChristmasDdayEvent from '../models/ChristmasDdayEvent.js';
import WeekdayEvent from '../models/WeekdayEvent.js';
import WeekendEvent from '../models/WeekendEvent.js';
import SpecialEvent from '../models/SpecialEvent.js';

class EventController {
  #giftEvent;
  #christmasDdayEvent;
  #weekdayEvent;
  #weekendEvent;
  #specialEvent;

  constructor(visitDate, orderList, orderTotalPrice, giftMenu) {
    this.#giftEvent = new GiftEvent(visitDate, orderTotalPrice, giftMenu);
    this.#christmasDdayEvent = new ChristmasDdayEvent(visitDate, orderTotalPrice);
    this.#weekdayEvent = new WeekdayEvent(visitDate, orderList, orderTotalPrice);
    this.#weekendEvent = new WeekendEvent(visitDate, orderList, orderTotalPrice);
    this.#specialEvent = new SpecialEvent(visitDate, orderTotalPrice);
  }

  getGiftEvent() {
    return this.#giftEvent;
  }

  getMe() {
    console.log('증정이벤트', this.#giftEvent.getIsGiftEvent());
    console.log('증정이벤트 메뉴명', this.#giftEvent.getGiftMenu());
    console.log('증정이벤트 할인금액', this.#giftEvent.getDiscountPrice());

    console.log(
      '크리크마스디에이이벤트',
      this.#christmasDdayEvent.getIsChristmasDdayEvent(),
    );

    console.log(
      '크리크마스디에이이벤트할인금액',
      this.#christmasDdayEvent.getDiscountPrice(),
    );

    console.log('주중이벤트', this.#weekdayEvent.getIsWeekdayEvent());
    console.log('주중이벤트 할인금액', this.#weekdayEvent.getDiscountPrice());

    console.log('주말이벤트', this.#weekendEvent.getIsWeekendEvent());
    console.log('주말이벤트 할인금액', this.#weekendEvent.getDiscountPrice());

    console.log('특별이벤트', this.#specialEvent.getIsSpecialEvent());
    console.log('특별이벤트 할인', this.#specialEvent.getDiscountPrice());
  }

  calculateGiftMenu() {}
}
export default EventController;
