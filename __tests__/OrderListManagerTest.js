import OrderListManager from '../src/models/OrderListManager.js';
import MenuList from '../src/models/MenuList.js';

const mockMenuData = [
  { type: '애피타이저', name: '양송이수프', price: 6000 },
  { type: '메인', name: '티본스테이크', price: 30000 },
  { type: '메인', name: '바비큐립', price: 28000 },
  { type: '메인', name: '해산물파스타', price: 35000 },
  { type: '디저트', name: '초코케이크', price: 12000 },
  { type: '음료', name: '제로콜라', price: 2000 },
  { type: '음료', name: '샴페인', price: 25000 },
];

const selectedVisitDate = 15;
const selectedMenu = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';

const orderMonkData = [
  { type: '메인', name: '티본스테이크', price: 30000 },
  { type: '메인', name: '바비큐립', price: 28000 },
  { type: '디저트', name: '초코케이크', price: 12000 },
  { type: '음료', name: '제로콜라', price: 2000 },
];

const menuList = new MenuList(mockMenuData);

describe('OrderListManager 테스트', () => {
  let orderListManager;
  beforeEach(() => {
    orderListManager = new OrderListManager(menuList, selectedVisitDate, selectedMenu);
  });

  test('주문 목록이 제대로 초기화되는지 확인', () => {
    // then
    const ordersLists = orderListManager.getOrders();
    expect(ordersLists).toHaveLength(4);

    ordersLists.forEach((order, index) => {
      const mockItem = orderMonkData[index];
      expect(order.getMenu().getName()).toBe(mockItem.name);
      expect(order.getCount()).toBe(index === 2 ? 2 : 1); // 초코케이크는 2개 주문
    });
  });

  test('getOrderMenuNameCount() : 주문 목록이 [menuName , count]로 제대로 변환되는지 확인', () => {
    // when
    const orderMenuNameCount = orderListManager.getOrderMenuNameCount();

    // then
    expect(orderMenuNameCount).toEqual([
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
  });

  test('calculateOrderTotalPrice() : 총 주문 금액이 제대로 계산되는지 확인', () => {
    // given
    const selectedVisitDate = 15;
    const selectedMenu = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';
    const orderListManager = new OrderListManager(
      menuList,
      selectedVisitDate,
      selectedMenu,
    );

    // when
    const totalPrice = orderListManager.calculateOrderTotalPrice();

    // then
    expect(totalPrice).toBe(30000 + 28000 + 2 * 12000 + 2000);
  });
});
