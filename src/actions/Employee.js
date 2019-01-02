import { database, auth } from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED } from '.';
import {
  startLoading, sendError, finishLoading, sendMessage,
} from './Alert';

export const employeeUpdate = ({ prop, value }) => dispatch => dispatch({
  type: EMPLOYEE_UPDATE, payload: { prop, value },
});

export const employeeCreate = values => async (dispatch) => {
  try {
    startLoading(dispatch);
    const { currentUser } = auth();
    if (!currentUser) throw new Error('You are not authorized!');

    await database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push(values);
    sendMessage(dispatch, 'Employee added!');
    dispatch({ type: EMPLOYEE_ADDED });
    finishLoading(dispatch);
    return Actions.pop();
  } catch ({ code, message }) {
    finishLoading(dispatch);
    const error = message || 'Something went wrong!';
    return sendError(dispatch, error);
  }
};
