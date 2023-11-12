import MenuModel from '../models/menuModel.js';
import { MENU_LIST } from '../util/constant/index.js';

class EventPlannerController {
  #menuList;
  constructor() {
    this.#menuList = MENU_LIST.map((menuItem) => this.setMenuList(menuItem));
  }
  setMenuList(menuItem) {
    const { type, name, price } = menuItem;
    return new MenuModel(type, name, price);
  }

  getMenuList() {
    this.#menuList.forEach((v) => console.log(v.getMenuItem()));

    return this.#menuList;
  }
}
export default EventPlannerController;
