class Menu {
  #type;

  #name;

  #price;

  constructor(type, name, price) {
    this.#type = type;
    this.#name = name;
    this.#price = Number(price);
  }

  getDetails() {
    return { type: this.#type, name: this.#name, price: this.#price };
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getType() {
    return this.#type;
  }
}

export default Menu;
