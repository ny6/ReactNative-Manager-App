import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED } from '../actions';

const defaultState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [payload.prop]: payload.value };
    case EMPLOYEE_ADDED:
      return { ...state, ...defaultState };
    default:
      return state;
  }
};
