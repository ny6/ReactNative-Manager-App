import { SEND_MESSAGE, RESET_ALERTS, SEND_ERROR } from '.';

export const sendMessage = (msg, dispatch) => {
  dispatch({ type: SEND_MESSAGE, payload: msg });
  setTimeout(() => dispatch({ type: RESET_ALERTS }), 5000);
};

export const sendError = (err, dispatch) => {
  dispatch({ type: SEND_ERROR, payload: err });
  setTimeout(() => dispatch({ type: RESET_ALERTS }), 5000);
};
