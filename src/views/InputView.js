import { Console } from '@woowacourse/mission-utils';
import { INPUT_QUERY } from '../util/constant/index.js';
import validation from '../util/validation/index.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_QUERY.VISIT_DATE);
    return input;
  },
  async readMenu() {
    const input = await Console.readLineAsync(INPUT_QUERY.ORDER_MENU);
    return input;
  },

  async validationDateInput() {
    while (true) {
      try {
        const userInput = await this.readDate();
        validation.visitDateInput(userInput);
        return userInput;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async handleUserInput(inputType, ...menuArray) {
    if (inputType === 'date') return this.validationDateInput();
  },
};

export default InputView;