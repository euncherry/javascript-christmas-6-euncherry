import Menu from '../models/Menu.js';
import { MENU_LIST } from '../util/constant/index.js';

class MenuController {
  #menuList = [];

  constructor() {
    this.#menuList = MENU_LIST.map(
      (menu) => new Menu(menu.type, menu.name, menu.price)
    );
  }

  getMenuList() {
    return this.#menuList;
  }

  getMenuArray() {
    return this.#menuList.map((menu) => menu.getMenuItem());
  }

  getMenuListSortName() {
    const menuListSortName = {};

    this.#menuList.forEach((menu) => {
      menuListSortName[menu.getMenuItem().name] = {
        type: menu.getMenuItem().type,
        price: menu.getMenuItem().price,
      };
    });
    return menuListSortName;
  }

  findMenuItemByName(menuName) {
    return this.#menuList.find((menu) => menu.getMenuName() === menuName);
  }
}

export default MenuController;
