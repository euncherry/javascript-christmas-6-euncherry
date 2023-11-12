import visitDateInputValidator from './visitDateInputValidator.js';

const validation = {
  visitDateInput(input) {
    visitDateInputValidator.format(input);
    visitDateInputValidator.data(input);
  },
};

export default validation;
