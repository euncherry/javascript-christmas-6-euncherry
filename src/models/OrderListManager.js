import Order from './Order.js';

class OrderListManager {
  #menuList;
  #visitDate;
  #orderList;

  /**
   * @param {MenuList} menuList - MenuList 모델 인스턴스
   * @param {Number} selectedVisitDate - 고객이 선택한 방문 날짜
   * @param {String} selectedMenu - 고객이 선택한 메뉴
   */
  constructor(menuList, selectedVisitDate, selectedMenu) {
    this.#menuList = menuList;
    this.#visitDate = selectedVisitDate;
    this.#orderList = this.parseOrderMenu(selectedMenu);
  }

  parseOrderMenu(selectedMenu) {
    return selectedMenu
      .split(',')
      .map((menu) => menu.split('-'))
      .map(([orderName, orderCount]) => {
        const menuItem = this.#menuList.findMenuByName(orderName);
        return new Order(menuItem, Number(orderCount));
      });
  }

  getMenuList() {
    return this.#menuList;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  getOrders() {
    return this.#orderList;
  }

  getOrdersArray() {
    return this.#orderList.map((order) => order.getMenuItem());
  }

  /**
   * @returns {Array} [주문한메뉴이름 , 주문한 메뉴 개수]
   */
  getOrderMenuNameCount() {
    return this.#orderList.map((order) => [
      order.getMenuItem().menu.getName(),
      order.getMenuItem().count,
    ]);
  }

  calculateOrderTotalPrice() {
    const orderListArray = this.getOrdersArray();

    const orderTotalPrice = orderListArray.reduce((totalPrice, order) => {
      const menuPrice = order.menu.getPrice();
      const menuCount = order.count;

      return totalPrice + this.calculateMenuTotalPrice(menuPrice, menuCount);
    }, 0);

    return orderTotalPrice;
  }

  calculateMenuTotalPrice(menuPrice, menuCount) {
    return menuPrice * menuCount;
  }
}

export default OrderListManager;
