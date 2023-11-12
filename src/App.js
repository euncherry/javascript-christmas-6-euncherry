import EventPlannerController from './controllers/EventPlannerController.js';

class App {
  #eventPlanner;

  constructor() {
    this.#eventPlanner = new EventPlannerController();
  }

  async run() {
    this.#eventPlanner.getMenuList();

    this.#eventPlanner.printNotifyMessage('welcome');

    await this.makeReservation();

    this.#eventPlanner.printNotifyMessage('previewMessage');
  }

  async makeReservation() {
    await this.#eventPlanner.setUserInput('date');
    await this.#eventPlanner.setUserInput('menu');
  }
}

export default App;
