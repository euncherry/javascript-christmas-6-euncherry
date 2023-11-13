import { GIFT_EVENT } from '../util/constant/index.js';

class GiftEvent {
  #isGiftEvent;
  #gift;

  constructor(visitDate, orderTotalPrice, giftMenu) {
    this.#isGiftEvent = this.setIsGiftEvent(visitDate, orderTotalPrice);
    this.#gift = this.#isGiftEvent ? giftMenu : null;
    this.orderTotalPrice = orderTotalPrice;
  }

  setIsGiftEvent(visitDate, orderTotalPrice) {
    if (visitDate < GIFT_EVENT.START_DATE || visitDate > GIFT_EVENT.END_DATE) {
      return false;
    }
    if (orderTotalPrice < GIFT_EVENT.MIN_EVENT_TOTAL_PRICE) {
      return false;
    }
    return true;
  }

  getIsGiftEvent() {
    return this.#isGiftEvent;
  }

  getGiftMenu() {
    return this.#gift ? this.#gift.getMenuName() : null;
  }
  getDiscountPrice() {
    return this.#gift ? this.#gift.getMenuPrice() : 0;
  }
}
export default GiftEvent;
