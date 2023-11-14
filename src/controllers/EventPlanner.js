import { MENU_ITEMS } from '../util/constant/index.js';
import MenuList from '../models/MenuList.js';
import OrderListManager from '../models/OrderListManager.js';
import EventManager from '../models/EventManager.js';
import { InputView, OutputView } from '../views/index.js';
import BadgeGenerator from '../models/BadgeGenerator.js';

class EventPlannerController {
  #menuList;
  #orderListManager;
  #eventManager;
  #badgeGenerator;

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

  checkAppliedEvents() {
    const visitDate = this.#orderListManager.getVisitDate();
    const orderListArray = this.#orderListManager.getOrdersArray();
    const orderTotalPrice = this.#orderListManager.calculateOrderTotalPrice();
    const giftMenu = this.#menuList.findMenuByName('샴페인');

    this.#eventManager = new EventManager(
      visitDate,
      orderListArray,
      orderTotalPrice,
      giftMenu,
    );
  }

  printPreviewMessage() {
    const visitDate = this.#orderListManager.getVisitDate();
    OutputView.printPreviewMessage(visitDate);
  }
  printPreOrderPreview() {
    this.printMenu();
    this.printTotalPriceBeforeDiscount();
  }

  printMenu() {
    const orderMenuResult = this.#orderListManager.getOrderMenuNameCount();
    OutputView.printMenu(orderMenuResult);
  }

  printTotalPriceBeforeDiscount() {
    const originalTotalPriceResult = this.#orderListManager.calculateOrderTotalPrice();
    OutputView.printTotalPriceBeforeDiscount(originalTotalPriceResult);
  }

  printGiftMenu() {
    const giftMenuResult = this.#eventManager.calculateGiftMenu();
    OutputView.printGiftMenu(giftMenuResult);
  }

  printBenefit() {
    const totalBenefitsAmountResult = this.#eventManager.calculateTotalBenefits();
    const benefitDetailResult = this.#eventManager.calculateBenefits();

    OutputView.printBenefitDetail(benefitDetailResult, totalBenefitsAmountResult);
    OutputView.printTotalBenefitsAmount(totalBenefitsAmountResult);
  }

  printFinalExpectPrice() {
    const originalTotalPriceResult = this.#orderListManager.calculateOrderTotalPrice();
    const finalExpectPriceResult = this.#eventManager.calculateDiscountedPayment(
      originalTotalPriceResult,
    );

    OutputView.printFinalExpectPrice(finalExpectPriceResult);
  }

  printEventBenefitPreview() {
    this.printGiftMenu();
    this.printBenefit();
    this.printFinalExpectPrice();
  }

  createBadge() {
    const totalBenefitsAmountResult = this.#eventManager.calculateTotalBenefits();
    this.#badgeGenerator = new BadgeGenerator(totalBenefitsAmountResult);
  }
  printBadge() {
    const eventBadge = this.#badgeGenerator.getBadge();
    OutputView.printEventBadge(eventBadge);
  }

  async start() {
    OutputView.printWelcome();

    await this.createPreOrder();

    this.checkAppliedEvents();

    this.printPreviewMessage();
    this.printPreOrderPreview();
    this.printEventBenefitPreview();

    this.createBadge();
    this.printBadge();
  }

  getMenuManager() {
    console.log(this.#menuList.getMenus());
    console.log(this.#menuList.getMenusArray());

    return this.#menuList;
  }
}

export default EventPlannerController;
