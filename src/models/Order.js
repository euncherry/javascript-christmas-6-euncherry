class Order {
  #orderMenu;
  #orderCount;
  constructor(orderMenu, orderCount) {
    this.#orderMenu = orderMenu;
    this.#orderCount = orderCount;
  }

  getOrderMenuItem() {
    return { menu: this.#orderMenu, count: this.#orderCount };
  }
}

export default Order;
