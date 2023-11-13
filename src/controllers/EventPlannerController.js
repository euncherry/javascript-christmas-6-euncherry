import OutputView from '../views/OutputView.js';

class EventPlannerController {
  #orderList;
  #orderTotalPrice;
  constructor(orderList) {
    this.#orderList = orderList;
    this.#orderTotalPrice = this.setOrderTotalPrice(orderList);
  }
  setOrderTotalPrice(orderList) {
    let totalPrice = orderList.reduce((result, order) => {
      const menuPrice = order.menu.getMenuPrice();
      const menuCount = order.count;
      return (result += menuPrice * menuCount);
    }, 0);
    return totalPrice;
  }

  calculateOrderMenu(orderList) {
    return orderList.map((order) => [order.menu.getMenuName(), order.count]);
  }

  getOrderTotalPrice() {
    return this.#orderTotalPrice;
  }

  orderPreview(visitDate) {
    OutputView.printPreviewMessage(visitDate);

    const orderMenu = this.calculateOrderMenu(this.#orderList);

    OutputView.printMenu(orderMenu);
    OutputView.printTotalPriceBeforeDiscount(this.#orderTotalPrice);

    console.log('할인 전 총 주문 금액', this.#orderTotalPrice);
  }

  calculateGiftMenu(orderTotalPrice) {}
}
export default EventPlannerController;
