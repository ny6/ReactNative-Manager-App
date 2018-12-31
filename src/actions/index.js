import { auth } from 'firebase';

export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export const emailChange = text => dispatch => dispatch({
  type: EMAIL_CHANGED, payload: text,
});
export const passwordChange = text => dispatch => dispatch({
  type: PASSWORD_CHANGED, payload: text,
});

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    return dispatch({ type: LOGIN_USER_SUCCESS, payload: res.user });
  } catch (err) {
    console.log(err);
  }
};
