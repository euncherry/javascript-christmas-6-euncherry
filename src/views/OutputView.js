import { OUTPUT_PRINT } from '../util/constant/index.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  printWelcome() {
    Console.print(OUTPUT_PRINT.WELCOME_MESSAGE);
  },
  printPreviewMessage(visitDate) {
    const [MONTH, MESSAGE] = OUTPUT_PRINT.PREVIEW_MESSAGE;
    Console.print(MONTH + `${visitDate}` + MESSAGE);
  },
  // ...
};

export default OutputView;
