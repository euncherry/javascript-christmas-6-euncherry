class Order {
  #menu;

  #count;

  constructor(orderMenu, orderCount) {
    this.#menu = orderMenu;
    this.#count = orderCount;
  }

  getMenuItem() {
    return { menu: this.#menu, count: this.#count };
  }

  getMenu() {
    return this.#menu;
  }

  getCount() {
    return this.#count;
  }
}

export default Order;
