import EventManager from '../src/models/EventManager.js';
import MenuList from '../src/models/MenuList.js';
import { MENU_ITEMS } from '../src/util/constant/index.js';
import OrderListManager from '../src/models/OrderListManager.js';

const selectedVisitDate = 15;
const selectedMenu = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';
const mockGiftMenuName = '샴페인';

const menuList = new MenuList(MENU_ITEMS);

describe('EventManager 테스트', () => {
  test('EventManager가 정상적으로 초기화되는지 확인', () => {
    const orderListManager = new OrderListManager(
      menuList,
      selectedVisitDate,
      selectedMenu,
    );
    const eventManager = new EventManager(orderListManager, mockGiftMenuName);
    expect(eventManager).toBeDefined();
  });

  test('calculateGiftMenu() 증정 메뉴 계산 확인', () => {
    const ADD_MENU = '해산물파스타-4';
    const orderListManager = new OrderListManager(
      menuList,
      selectedVisitDate,
      selectedMenu + ADD_MENU,
    );

    // given
    const eventManager = new EventManager(orderListManager, mockGiftMenuName);

    // when
    const giftMenu = eventManager.calculateGiftMenu();

    // then
    expect(giftMenu).toEqual(mockGiftMenuName);
  });

  test('calculateBenefits() 혜택 내역 계산 확인', () => {
    // given
    const MONK_MENU = '양송이수프-1';
    const orderListManager = new OrderListManager(menuList, selectedVisitDate, MONK_MENU);
    const eventManager = new EventManager(orderListManager, mockGiftMenuName);

    // when
    const benefits = eventManager.calculateBenefits();

    // then
    expect(benefits).toEqual({
      GiftEvent: 0,
      ChristmasDdayEvent: 0,
      WeekdayEvent: 0,
      WeekendEvent: 0,
      SpecialEvent: 0,
    });
  });

  test('calculateTotalBenefits()  총 혜택 금액 계산 확인', () => {
    // given
    const MONK_MENU = '양송이수프-1';
    const orderListManager = new OrderListManager(menuList, selectedVisitDate, MONK_MENU);
    const eventManager = new EventManager(orderListManager, mockGiftMenuName);

    // when
    const totalBenefits = eventManager.calculateTotalBenefits();

    // then
    expect(totalBenefits).toBe(0);
  });

  test('calculateDiscountedPayment()  할인 후 예상 결제 금액 계산 확인', () => {
    // given
    const orderListManager = new OrderListManager(
      menuList,
      selectedVisitDate,
      selectedMenu,
    );
    const eventManager = new EventManager(orderListManager, mockGiftMenuName);

    // when
    const discountedPayment = eventManager.calculateDiscountedPayment();

    // then
    expect(discountedPayment).toBe(135554);
  });
});
