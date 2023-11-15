import Menu from './Menu.js';

class MenuList {
  #menus = [];

  /**
   * @param {Array} items - 메뉴의 type, name, price를 가지는 배열
   */
  constructor(items) {
    this.#menus = items.map((item) => new Menu(item.type, item.name, item.price));
  }

  getMenus() {
    return this.#menus;
  }

  getMenusArray() {
    return this.#menus.map((menu) => menu.getDetails());
  }

  findMenuByName(menuName) {
    return this.#menus.find((menu) => menu.getName() === menuName);
  }
}

export default MenuList;
