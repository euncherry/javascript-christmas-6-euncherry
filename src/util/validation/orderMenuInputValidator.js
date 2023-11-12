import { ERROR_MESSAGE } from '../constant/index.js';

const orderMenuInputValidator = {
  format(rawInput) {
    if (!/^([a-zA-Z가-힣]+-\d+)(,[a-zA-Z가-힣]+-\d+)*$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER_MENU);
    }
  },

  validateOrder(order, orderMenuMap, menuListName) {
    const [orderName, orderCount] = order.split('-');

    if (
      orderMenuMap.has(orderName) ||
      !menuListName.includes(orderName) ||
      !(Number(orderCount) > 0)
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER_MENU);
    }

    return { orderName, orderCount: Number(orderCount) };
  },

  getMenuListNameType(menuArray) {
    return menuArray.reduce((result, menu) => {
      result[menu.name] = menu.type;
      return result;
    }, {});
  },
  calculateTotalCounts(orderMenuMap, menuListNameType) {
    let totalCount = 0;
    let totalType = new Set();

    for (const order of orderMenuMap) {
      const [orderName, orderCount] = order;
      totalCount += orderCount;
      totalType.add(menuListNameType[orderName]);
    }
    return { totalCount, totalType };
  },

  validateTotalOrder(orderMenuMap, menuArray) {
    const menuListNameType = this.getMenuListNameType(menuArray);
    const { totalCount, totalType } = this.calculateTotalCounts(
      orderMenuMap,
      menuListNameType
    );

    if (totalType.has('음료') && totalType.size === 1) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER_MENU);
    }

    if (totalCount > 20) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER_MENU);
    }
  },

  data(rawInput, menuArray) {
    const menuListName = menuArray.map((menu) => menu.name);
    const input = rawInput.split(',');
    const orderMenuMap = new Map();

    for (const order of input) {
      const { orderName, orderCount } = this.validateOrder(
        order,
        orderMenuMap,
        menuListName
      );

      orderMenuMap.set(orderName, orderCount);
    }
    this.validateTotalOrder(orderMenuMap, menuArray);
  },
};

export default orderMenuInputValidator;
