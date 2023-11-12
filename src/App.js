import EventPlannerController from './controllers/EventPlannerController.js';

class App {
  constructor() {
    this.EventPlannerController = new EventPlannerController();
  }

  async run() {
    this.EventPlannerController.getMenuList();
  }
}

export default App;
