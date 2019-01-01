import {
  SEND_MESSAGE, RESET_ALERTS, SEND_ERROR,
  LOADING_START, LOADING_FINISH,
} from '.';

export const sendMessage = (dispatch, msg) => {
  dispatch({ type: SEND_MESSAGE, payload: msg });
  setTimeout(() => dispatch({ type: RESET_ALERTS }), 5000);
};

export const sendError = (dispatch, err) => {
  dispatch({ type: SEND_ERROR, payload: err });
  setTimeout(() => dispatch({ type: RESET_ALERTS }), 5000);
};

export const startLoading = dispatch => dispatch({ type: LOADING_START });
export const finishLoading = dispatch => dispatch({ type: LOADING_FINISH });
