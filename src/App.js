import EventPlannerController from './controllers/EventPlannerController.js';
import MenuController from './controllers/MenuController.js';
import UserInterfaceController from './controllers/UserInterfaceController.js';
import OrderController from './controllers/OrderController.js';
import EventController from './controllers/EventController.js';

class App {
  #eventPlanner;
  #menuController;
  #orderController;
  #eventController;

  constructor() {
    // this.#eventPlanner = new EventPlannerController();
    this.#menuController = new MenuController();
  }

  async run() {
    this.getMenuList();

    UserInterfaceController.printWelcome();

    this.#orderController = await this.makeReservation();

    const visitDate = this.#orderController.getVisitDate();
    const orderListArray = this.#orderController.getOrderMenuArray();

    console.log(visitDate);
    console.log('orderListArray\n', orderListArray);

    this.#eventPlanner = new EventPlannerController(orderListArray);

    this.#eventPlanner.orderPreview(visitDate);

    const orderTotalPrice = this.#eventPlanner.getOrderTotalPrice();

    this.#eventController = new EventController(
      visitDate,
      orderListArray,
      orderTotalPrice,
      this.#menuController.findMenuItemByName('샴페인'),
    );

    this.#eventController.getMe();
  }

  async makeReservation() {
    const visitDate = await UserInterfaceController.setDateInput();
    const orderMenu = await UserInterfaceController.setMenuInput(
      this.#menuController.getMenuArray(),
    );

    return new OrderController(this.#menuController, visitDate, orderMenu);
  }

  getMenuList() {
    console.log(this.#menuController.getMenuList());
    this.#menuController.getMenuList().forEach((menuList) => {
      console.log(menuList);
    });
    console.log(this.#menuController.getMenuArray());
    console.log(this.#menuController.getMenuListSortName());
  }
}

export default App;
