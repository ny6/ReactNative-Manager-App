import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions';

const defaultState = { email: '', password: '', user: null };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, password: payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload };
    default:
      return state;
  }
};
