import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class UserInterfaceController {
  static printWelcome() {
    return OutputView.printWelcome();
  }

  static async setDateInput() {
    const inputDate = await InputView.handleUserInput('date');

    return inputDate;
  }

  static async setMenuInput(menuArray) {
    const inputOrderMenu = await InputView.handleUserInput('menu', menuArray);

    return inputOrderMenu;
  }
}

export default UserInterfaceController;
