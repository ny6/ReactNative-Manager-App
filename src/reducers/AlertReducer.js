import {
  SEND_ERROR, SEND_MESSAGE, RESET_ALERTS,
  LOADING_START, LOADING_FINISH,
} from '../actions';

const defaultState = { error: '', message: '', loading: false };

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEND_ERROR:
      return { ...state, error: payload, message: '' };
    case SEND_MESSAGE:
      return { ...state, error: '', message: payload };
    case LOADING_START:
      return { ...state, loading: true };
    case LOADING_FINISH:
      return { ...state, loading: false };
    case RESET_ALERTS:
      return { ...state, error: '', message: '' };
    default:
      return state;
  }
};
