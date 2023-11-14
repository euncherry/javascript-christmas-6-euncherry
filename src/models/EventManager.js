import GiftEvent from './GiftEvent.js';
import ChristmasDdayEvent from './ChristmasDdayEvent.js';
import WeekdayEvent from './WeekdayEvent.js';
import WeekendEvent from './WeekendEvent.js';
import SpecialEvent from './SpecialEvent.js';

class EventManager {
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

  // 증정 메뉴 계산 메소드
  calculateGiftMenu() {
    return this.#giftEvent.isEventActive() ? this.#giftEvent.getGiftMenu() : null;
  }

  //혜택받은 이벤트가 존재하는지 확인하는 메소드
  calculateIsEventsActive() {
    const eventDiscounts = [
      this.#christmasDdayEvent.isEventActive(),
      this.#weekdayEvent.getDiscountPrice() > 0,
      this.#weekendEvent.getDiscountPrice() > 0,
      this.#specialEvent.isEventActive(),
      this.#giftEvent.isEventActive(),
    ];

    return eventDiscounts.some((isActive) => isActive);
  }

  // 혜택 내역 계산 메소드
  calculateBenefits() {
    return {
      christmasDdayEvent: this.#christmasDdayEvent.getDiscountPrice(),
      weekdayEvent: this.#weekdayEvent.getDiscountPrice(),
      weekendEvent: this.#weekendEvent.getDiscountPrice(),
      specialEvent: this.#specialEvent.getDiscountPrice(),
      giftEvent: this.#giftEvent.getDiscountPrice(),
    };
  }

  // 총 혜택 금액 계산 메소드
  calculateTotalBenefits() {
    const benefitsDiscounts = Object.values(this.calculateBenefits());
    return benefitsDiscounts.reduce((totalPrice, discount) => totalPrice + discount, 0);
  }

  // 할인 후 예상 결제 금액 계산 메소드
  calculateDiscountedPayment(originalTotalPrice) {
    const discountAmount =
      this.#christmasDdayEvent.getDiscountPrice() +
      this.#weekdayEvent.getDiscountPrice() +
      this.#weekendEvent.getDiscountPrice() +
      this.#specialEvent.getDiscountPrice();
    console.log(originalTotalPrice - discountAmount);

    return originalTotalPrice - discountAmount;
  }

  getMe() {
    console.log('증정이벤트', this.#giftEvent.isEventActive());
    console.log('증정이벤트 메뉴명', this.#giftEvent.getGiftMenu());
    console.log('증정이벤트 할인금액', this.#giftEvent.getDiscountPrice());

    console.log('크리크마스디에이이벤트', this.#christmasDdayEvent.isEventActive());

    console.log(
      '크리크마스디에이이벤트할인금액',
      this.#christmasDdayEvent.getDiscountPrice(),
    );

    console.log('주중이벤트', this.#weekdayEvent.isEventActive());
    console.log('주중이벤트 할인금액', this.#weekdayEvent.getDiscountPrice());

    console.log('주말이벤트', this.#weekendEvent.isEventActive());
    console.log('주말이벤트 할인금액', this.#weekendEvent.getDiscountPrice());

    console.log('특별이벤트', this.#specialEvent.isEventActive());
    console.log('특별이벤트 할인', this.#specialEvent.getDiscountPrice());

    console.log(
      '혜택받은 이벤트가 존재하는지 확인하는 메소드',
      this.calculateIsEventsActive(),
    );
    console.log('증정 메뉴 계산 메소드', this.calculateGiftMenu());
    console.log('혜택 내역 계산 메소드', this.calculateBenefits());
    console.log('총 혜택 금액 계산 메소드', this.calculateTotalBenefits());
    console.log(
      '할인 후 예상 결제 금액 계산 메소드',
      this.calculateDiscountedPayment(142000),
    );
  }
}

export default EventManager;
