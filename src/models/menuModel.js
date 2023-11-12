class MenuModel {
  #type;
  #name;
  #price;
  constructor(type, name, price) {
    this.#type = type;
    this.#name = name;
    this.#price = price;
  }

  getMenuItem() {
    return [this.#type, this.#name, this.#price];
  }
}

export default MenuModel;
