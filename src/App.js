import EventPlanner from './controllers/EventPlanner.js';

class App {
  #eventPlanner;
  constructor() {
    this.#eventPlanner = new EventPlanner();
  }

  async run() {
    this.#eventPlanner.getMenuManager();

    this.#eventPlanner.start();
  }
}

export default App;
