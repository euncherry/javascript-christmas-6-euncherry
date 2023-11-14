import { MENU_ITEMS } from '../util/constant/index.js';
import MenuList from '../models/MenuList.js';
import OrderListManager from '../models/OrderListManager.js';
import EventManager from '../models/EventManager.js';
import { InputView, OutputView } from '../views/index.js';

class EventPlannerController {
  #menuList;
  #orderListManager;
  #eventManager;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.setMenuList(MENU_ITEMS);
  }

  setMenuList(menuItems) {
    this.#menuList = new MenuList(menuItems);
  }

  setOrderListManager(selectedVisitDate, selectedMenu) {
    this.#orderListManager = new OrderListManager(
      this.#menuList,
      selectedVisitDate,
      selectedMenu,
    );
  }

  async handlePreOrderInput() {
    const selectedVisitDate = await InputView.handleUserInput('date');
    const selectedMenu = await InputView.handleUserInput(
      'menu',
      this.#menuList.getMenusArray(),
    );

    return { selectedVisitDate, selectedMenu };
  }

  async createPreOrder() {
    const { selectedVisitDate, selectedMenu } = await this.handlePreOrderInput();

    this.#orderListManager = new OrderListManager(
      this.#menuList,
      selectedVisitDate,
      selectedMenu,
    );
    // this.setOrderListManager(selectedVisitDate, selectedMenu);
  }

  async start() {
    OutputView.printWelcome();

    await this.createPreOrder();
  }

  getMenuManager() {
    console.log(this.#menuList.getMenus());
    console.log(this.#menuList.getMenusArray());

    return this.#menuList;
  }
}

export default EventPlannerController;
