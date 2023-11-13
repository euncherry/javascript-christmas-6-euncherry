import EventPlannerController from './controllers/EventPlannerController.js';
import MenuController from './controllers/MenuController.js';
import ViewController from './controllers/ViewController.js';
import OrderController from './controllers/OrderController.js';

class App {
  #eventPlanner;
  #menuController;
  #orderController;

  constructor() {
    // this.#eventPlanner = new EventPlannerController();
    this.#menuController = new MenuController();
  }

  async run() {
    this.getMenuList();

    ViewController.printWelcome();

    this.#orderController = await this.makeReservation();

    const visitDate = this.#orderController.getVisitDate();
    const orderList = this.#orderController.getOrderMenuArray();

    ViewController.printPreviewMessage(visitDate);

    console.log(visitDate);
    console.log(orderList);

    this.#eventPlanner = new EventPlannerController(visitDate, orderList);
  }

  async makeReservation() {
    const visitDate = await ViewController.setDateInput();
    const orderMenu = await ViewController.setMenuInput(
      this.#menuController.getMenuArray()
    );

    return new OrderController(this.#menuController, visitDate, orderMenu);
  }

  orderPreview(orderList, orderTotalPrice) {
    const orderMenu = this.#eventPlanner.calculateOrderMenu(orderList);
    ViewController.printPreview(orderMenu, orderTotalPrice);

    console.log('할인 전 총 주문 금액', orderTotalPrice);
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
