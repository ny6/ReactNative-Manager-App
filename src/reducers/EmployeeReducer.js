import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED, FETCH_EMPLOYEE } from '../actions';

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
    case FETCH_EMPLOYEE:
      return { ...state, employees: payload };
    default:
      return state;
  }
};
