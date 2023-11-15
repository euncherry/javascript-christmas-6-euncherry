import InputView from '../src/views/InputView.js';
import { MENU_ITEMS } from '../src/util/constant/index.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Input 예외 테스트', () => {
  describe('방문날짜 입력 예외 테스트', () => {
    const INVALID_DATE_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

    test('format : 숫자만 입력 가능 ', async () => {
      //given

      const INPUTS_TO_END = ['5'];

      const logSpy = getLogSpy();

      mockQuestions(['', 'a', 'a1', '!', ...INPUTS_TO_END]);
      //when
      await InputView.handleUserInput('date');
      //then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
    });

    test.each(['1', '31'])(
      'data : 1에서 31사이의 숫자를 입력하지 않은 경우',
      async (rightDate) => {
        //given
        const logSpy = getLogSpy();

        mockQuestions(['0', '100', '32', rightDate]);
        //when
        await InputView.handleUserInput('date');
        //then
        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining(INVALID_DATE_MESSAGE),
        );
      },
    );
  });
  describe('주문 입력 예외 테스트', () => {
    const INVALID_ORDER_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
    test('format : 메뉴형식이 다른 경우 ', async () => {
      //given
      const INPUTS_TO_END = ['해산물파스타-2'];
      const logSpy = getLogSpy();
      mockQuestions([
        '해산물파스타 2,제로콜라 3',
        '해산물파스타-2 제로콜라-3',
        ...INPUTS_TO_END,
      ]);
      // when
      await InputView.handleUserInput('menu', MENU_ITEMS);
      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
    });

    test.each(['백반-3', '해산물파스타-0', '해산물파스타-a', '바비큐립-1,바비큐립-1'])(
      'data : 메뉴판에 없는 메뉴 입력 / 메뉴의 개수가 1이상의 숫자가 아님 / 메뉴를 중복해서 입력함',
      async (inputMenu) => {
        //given
        const INPUTS_TO_END = ['해산물파스타-2'];
        const logSpy = getLogSpy();
        mockQuestions([inputMenu, ...INPUTS_TO_END]);
        // when
        await InputView.handleUserInput('menu', MENU_ITEMS);
        // then
        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining(INVALID_ORDER_MESSAGE),
        );
      },
    );
    test('data : 주문한 메뉴가 총 20개가 넘는 경우 ', async () => {
      //given
      const INPUTS_TO_END = ['시저샐러드-3,티본스테이크-1'];
      const logSpy = getLogSpy();
      mockQuestions(['해산물파스타 20', '해산물파스타-16,제로콜라-4', ...INPUTS_TO_END]);
      // when
      await InputView.handleUserInput('menu', MENU_ITEMS);
      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
    });

    test('data : 음료만 주문한 경우', async () => {
      //given
      const INPUTS_TO_END = ['시저샐러드-3,티본스테이크-1'];
      const logSpy = getLogSpy();
      mockQuestions(['제로콜라-2,레드와인-3,샴페인-1', '제로콜라-4', ...INPUTS_TO_END]);
      // when
      await InputView.handleUserInput('menu', MENU_ITEMS);
      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
    });
  });
});
