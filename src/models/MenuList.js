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

  getMenuListSortedByName() {
    const menuListSortedByName = {};

    this.#menus.forEach((menu) => {
      menuListSortedByName[menu.getName()] = {
        type: menu.getType(),
        price: menu.getPrice(),
      };
    });

    return menuListSortedByName;
  }

  findMenuByName(menuName) {
    return this.#menus.find((menu) => menu.getName() === menuName);
  }
}

export default MenuList;
