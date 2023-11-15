import MenuList from '../src/models/MenuList.js';

const mockMenuData = [
  { type: '메인', name: '티본스테이크', price: 30000 },
  { type: '메인', name: '바비큐립', price: 28000 },
  { type: '디저트', name: '초코케이크', price: 12000 },
  { type: '음료', name: '제로콜라', price: 2000 },
  { type: '음료', name: '샴페인', price: 25000 },
];

describe('MenuList 테스트', () => {
  let menuList;

  beforeEach(() => {
    menuList = new MenuList(mockMenuData);
  });

  test('MenuList로 초기화할 때 Menu가 입력된 만큼 Menu가 생성되는지 확인', () => {
    const menus = menuList.getMenus();

    expect(menus).toHaveLength(mockMenuData.length);

    menus.forEach((menu, index) => {
      const mockItem = mockMenuData[index];
      expect(menu.getType()).toBe(mockItem.type);
      expect(menu.getName()).toBe(mockItem.name);
      expect(menu.getPrice()).toBe(mockItem.price);
    });
  });

  test('getMenusArray()가 올바른 배열을 반환하는지 확인', () => {
    const menuArray = menuList.getMenusArray();

    expect(menuArray).toHaveLength(mockMenuData.length);

    menuArray.forEach((menuDetails, index) => {
      const mockItem = mockMenuData[index];
      expect(menuDetails).toEqual({
        type: mockItem.type,
        name: mockItem.name,
        price: mockItem.price,
      });
    });
  });

  test('findMenuByName()가 존재하는 메뉴를 검색했을 때 올바른 Menu를 반환하는지 확인', () => {
    const menuName = '티본스테이크';
    const foundMenu = menuList.findMenuByName(menuName);
    const mockItem = mockMenuData.find((item) => item.name === menuName);

    expect(foundMenu).toBeDefined();
    expect(foundMenu.getName()).toBe(menuName);
    expect(foundMenu.getType()).toBe(mockItem.type);
    expect(foundMenu.getPrice()).toBe(mockItem.price);
  });

  test('findMenuByName()가 존재하지 않는 메뉴를 검색했을 때 undefined를 반환하는지 확인', () => {
    const menuName = '카레카레숑띠숑띠';
    const foundMenu = menuList.findMenuByName(menuName);

    expect(foundMenu).toBeUndefined();
  });
});
