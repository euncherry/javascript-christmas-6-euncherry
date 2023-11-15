import { GIFT_EVENT } from '../util/constant/index.js';

class GiftEvent {
  #isEvent;

  #gift;

  constructor(visitDate, orderTotalPrice, giftMenu) {
    this.#isEvent = this.setIsEvent(visitDate, orderTotalPrice);
    this.#gift = this.#isEvent ? giftMenu : null;
    this.orderTotalPrice = orderTotalPrice;
  }

  setIsEvent(visitDate, orderTotalPrice) {
    if (visitDate < GIFT_EVENT.START_DATE || visitDate > GIFT_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < GIFT_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return true;
  }

  isEventActive() {
    return this.#isEvent;
  }

  getName() {
    return 'GiftEvent';
  }

  getGiftMenu() {
    return this.#gift ? this.#gift.getName() : null;
  }

  getDiscountPrice() {
    return this.#gift ? this.#gift.getPrice() : 0;
  }
}
export default GiftEvent;
