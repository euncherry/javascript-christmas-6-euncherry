import Order from '../models/Order.js';

class OrderController {
  #menuController;
  #visitDate;
  #orderMenuList;

  constructor(menuController, visitDateInput, orderMenuInput) {
    this.#menuController = menuController;
    this.#visitDate = Number(visitDateInput);
    this.#orderMenuList = this.setOrderMenu(orderMenuInput);
  }

  setOrderMenu(orderMenuInput) {
    const orderMenu = orderMenuInput.split(',').map((menu) => menu.split('-'));

    return orderMenu.map((menu) => {
      const [orderName, orderCount] = menu;
      const menuItem = this.#menuController.findMenuItemByName(orderName);
      return new Order(menuItem, Number(orderCount));
    });
  }

  getVisitDate() {
    return this.#visitDate;
  }

  getOrderMenuList() {
    return this.#orderMenuList;
  }

  getOrderMenuArray() {
    return this.#orderMenuList.map((order) => order.getOrderMenuItem());
  }

  getOrderMenuNameCount() {
    return this.#orderMenuList.map((order) => [
      order.getOrderMenuItem().menu.getMenuName(),
      order.getOrderMenuItem().count,
    ]);
  }

  getOrderMenuPrice;
}

export default OrderController;
