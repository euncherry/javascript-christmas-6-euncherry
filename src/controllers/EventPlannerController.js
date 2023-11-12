import MenuModel from '../models/menuModel.js';
import { MENU_LIST } from '../util/constant/index.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class EventPlannerController {
  #menuList = [];
  #menuArray = [];
  #visitDate = null;
  #orderMenu = null;

  constructor() {
    this.#menuList = MENU_LIST.map(
      (menu) => new MenuModel(menu.type, menu.name, menu.price)
    );
    this.#menuArray = this.#menuList.map((menu) => menu.getMenuItem());
  }
  getMenuList() {
    console.log(this.#menuArray);
    console.log(this.getMenuListSortName());
    return this.#menuList;
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

  async setUserInput(inputType) {
    if (inputType === 'date') {
      this.#visitDate = await InputView.handleUserInput('date');
    }
    if (inputType === 'menu') {
      this.#orderMenu = await InputView.handleUserInput(
        'menu',
        this.#menuArray
      );
    }
  }

  getVisitDate() {
    return this.#visitDate;
  }

  printNotifyMessage(type) {
    switch (type) {
      case 'welcome':
        return OutputView.printWelcome();
      case 'previewMessage':
        return OutputView.printPreviewMessage(this.#visitDate);
    }
  }
}
export default EventPlannerController;
