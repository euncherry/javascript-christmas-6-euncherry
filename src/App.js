import { MENU_ITEMS, GIFT_MENU_NAME } from './util/constant/index.js';

import MenuList from './models/MenuList.js';
import OrderListManager from './models/OrderListManager.js';
import EventManager from './models/EventManager.js';
import BadgeGenerator from './models/BadgeGenerator.js';

import EventPlannerController from './controllers/EventPlannerController.js';

import { InputView, OutputView } from './views/index.js';

class App {
  #menuList;
  #eventPlannerController;

  constructor() {
    this.#menuList = new MenuList(MENU_ITEMS);
  }

  async userPreOrderInput() {
    const selectedVisitDate = await InputView.handleUserInput('date');
    const selectedMenu = await InputView.handleUserInput(
      'menu',
      this.#menuList.getMenusArray(),
    );

    return { orderDate: selectedVisitDate, orderMenu: selectedMenu };
  }

  async run() {
    OutputView.printEventAttentionMessage();
    OutputView.printWelcome();
    const { orderDate, orderMenu } = await this.userPreOrderInput();

    const orderListManager = new OrderListManager(this.#menuList, orderDate, orderMenu);
    const eventManager = new EventManager(orderListManager, GIFT_MENU_NAME);
    const badgeGenerator = new BadgeGenerator(eventManager.calculateTotalBenefits());

    this.#eventPlannerController = new EventPlannerController(
      orderListManager,
      eventManager,
      badgeGenerator,
    );

    this.#eventPlannerController.start();
  }
}

export default App;
