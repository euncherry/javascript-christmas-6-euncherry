class Menu {
  #type;
  // #name;
  #price;

  constructor(type, name, price) {
    this.#type = type;
    this.name = name;
    this.#price = Number(price);
  }

  getMenuItem() {
    // return { type: this.#type, name: this.#name, price: this.#price };
    return { type: this.#type, name: this.name, price: this.#price };
  }
  getMenuName() {
    // return this.#name;
    return this.name;
  }
  getMenuPrice() {
    return this.#price;
  }

  getMenuType() {
    return this.#type;
  }
}

export default Menu;
