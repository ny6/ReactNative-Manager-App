import { SEND_ERROR, SEND_MESSAGE, RESET_ALERTS } from '../actions';

const defaultState = { error: '', message: '' };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEND_ERROR:
      return { error: payload, message: '' };
    case SEND_MESSAGE:
      return { error: '', message: payload };
    case RESET_ALERTS:
      return defaultState;
    default:
      return state;
  }
};
