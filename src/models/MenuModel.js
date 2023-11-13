class MenuModel {
  #type;
  // #name;
  #price;
  constructor(type, name, price) {
    this.#type = type;
    // this.#name = name;
    this.name = name;
    this.#price = price;
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
}

export default MenuModel;
