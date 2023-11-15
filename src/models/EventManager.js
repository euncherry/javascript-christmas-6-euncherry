import GiftEvent from './GiftEvent.js';
import ChristmasDdayEvent from './ChristmasDdayEvent.js';
import WeekdayEvent from './WeekdayEvent.js';
import WeekendEvent from './WeekendEvent.js';
import SpecialEvent from './SpecialEvent.js';

class EventManager {
  #events = [];
  #originalTotalPrice;

  constructor(orderListManager, giftMenuName) {
    const visitDate = orderListManager.getVisitDate();
    const orderList = orderListManager.getOrdersArray();
    const giftMenu = orderListManager.getMenuList().findMenuByName(giftMenuName);
    this.#originalTotalPrice = orderListManager.calculateOrderTotalPrice();

    this.initialize(visitDate, orderList, giftMenu);
  }

  initialize(visitDate, orderList, giftMenu) {
    this.#events.push(new GiftEvent(visitDate, this.#originalTotalPrice, giftMenu));
    this.#events.push(new ChristmasDdayEvent(visitDate, this.#originalTotalPrice));
    this.#events.push(new WeekdayEvent(visitDate, orderList, this.#originalTotalPrice));
    this.#events.push(new WeekendEvent(visitDate, orderList, this.#originalTotalPrice));
    this.#events.push(new SpecialEvent(visitDate, this.#originalTotalPrice));
  }

  // 증정 메뉴 계산 메소드
  calculateGiftMenu() {
    const giftEvent = this.#getEventByName('GiftEvent');
    return giftEvent.isEventActive() ? giftEvent.getGiftMenu() : null;
  }

  // 혜택 내역 계산 메소드
  calculateBenefits() {
    return this.#events.reduce((benefits, event) => {
      const updatedBenefits = {
        ...benefits,
        [event.getName()]: event.getDiscountPrice(),
      };
      return updatedBenefits;
    }, {});
  }

  // 총 혜택 금액 계산 메소드
  calculateTotalBenefits() {
    const benefitsDiscounts = Object.values(this.calculateBenefits());
    return benefitsDiscounts.reduce((totalPrice, discount) => totalPrice + discount, 0);
  }

  // 할인 후 예상 결제 금액 계산 메소드
  calculateDiscountedPayment() {
    const discountAmount = this.#events.reduce((totalDiscount, event) => {
      if (event.getName() === 'GiftEvent') return totalDiscount;
      return totalDiscount + event.getDiscountPrice();
    }, 0);

    return this.#originalTotalPrice - discountAmount;
  }

  // 이벤트 이름으로 이벤트 객체 가져오기
  #getEventByName(eventName) {
    return this.#events.find((event) => event.getName() === eventName);
  }

  getMe() {
    console.log('증정 메뉴 계산 메소드', this.calculateGiftMenu());
    console.log(
      '혜택받은 이벤트가 존재하는지 확인하는 메소드',
      this.calculateIsEventsActive(),
    );
    console.log('혜택 내역 계산 메소드', this.calculateBenefits());
    console.log('총 혜택 금액 계산 메소드', this.calculateTotalBenefits());
    console.log(
      '할인 후 예상 결제 금액 계산 메소드',
      this.calculateDiscountedPayment(142000),
    );
  }
}

export default EventManager;
