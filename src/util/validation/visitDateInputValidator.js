import { ERROR_MESSAGE } from '../constant/index.js';

const visitDateInputValidator = {
  format(rawInput) {
    if (!/^[0-9]+$/.test(rawInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_VISIT_DATE);
    }
  },
  data(rawInput) {
    const input = Number(rawInput);

    if (input < 1 || input > 31) {
      throw new Error(ERROR_MESSAGE.INVALID_VISIT_DATE);
    }
  },
};

export default visitDateInputValidator;
