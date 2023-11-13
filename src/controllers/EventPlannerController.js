class EventPlannerController {
  #giftEventModel;
  constructor(visitDate, orderList) {
    this.visitDate = visitDate;
    this.orderList = orderList;
  }
  calculateOrderMenu(orderList) {
    return orderList.map((order) => [order.menu.getMenuName(), order.count]);
  }

  calculateTotalPrice(orderList) {
    let totalPrice = orderList.reduce((result, order) => {
      const menuPrice = order.menu.getMenuPrice();
      const menuCount = order.count;
      return (result += menuPrice * menuCount);
    }, 0);
    return totalPrice;
  }

  calculateGift(orderTotalPrice) {}
}
export default EventPlannerController;
