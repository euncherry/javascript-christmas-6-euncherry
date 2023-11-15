import { OutputView } from '../views/index.js';

class EventPlannerController {
  #orderListManager;
  #eventManager;
  #badgeGenerator;

  constructor(orderListManager, eventManager, badgeGenerator) {
    this.#orderListManager = orderListManager;
    this.#eventManager = eventManager;
    this.#badgeGenerator = badgeGenerator;
  }

  orderPreview() {
    const visitDate = this.#orderListManager.getVisitDate();
    OutputView.printPreviewMessage(visitDate);

    const orderMenu = this.#orderListManager.getOrderMenuNameCount();
    OutputView.printMenu(orderMenu);

    const originalTotalPrice = this.#orderListManager.calculateOrderTotalPrice();
    OutputView.printTotalPriceBeforeDiscount(originalTotalPrice);
  }

  eventPreview() {
    const giftMenuResult = this.#eventManager.calculateGiftMenu();
    OutputView.printGiftMenu(giftMenuResult);

    const totalBenefitsAmountResult = this.#eventManager.calculateTotalBenefits();
    const benefitDetailResult = this.#eventManager.calculateBenefits();
    OutputView.printBenefitDetail(benefitDetailResult, totalBenefitsAmountResult);
    OutputView.printTotalBenefitsAmount(totalBenefitsAmountResult);

    const finalExpectPriceResult = this.#eventManager.calculateDiscountedPayment();
    OutputView.printFinalExpectPrice(finalExpectPriceResult);
  }

  badgePreview() {
    const eventBadge = this.#badgeGenerator.getBadge();
    OutputView.printEventBadge(eventBadge);
  }

  start() {
    this.orderPreview();
    this.eventPreview();
    this.badgePreview();
  }
}

export default EventPlannerController;
