import visitDateInputValidator from './visitDateInputValidator.js';
import orderMenuInputValidator from './orderMenuInputValidator.js';

const validation = {
  visitDateInput(input) {
    visitDateInputValidator.format(input);
    visitDateInputValidator.data(input);
  },
  orderMenuInput(input, menuArray) {
    orderMenuInputValidator.format(input);
    orderMenuInputValidator.data(input, menuArray);
  },
};

export default validation;
