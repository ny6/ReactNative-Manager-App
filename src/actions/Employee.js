import { database, auth } from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED, FETCH_EMPLOYEE } from '.';
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
  } catch ({ message }) {
    finishLoading(dispatch);
    return sendError(dispatch, message);
  }
};

export const fetchEmployees = () => (dispatch) => {
  try {
    const { currentUser } = auth();
    if (!currentUser) throw new Error('You are not authorized!');
    return database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => dispatch({ type: FETCH_EMPLOYEE, payload: snapshot.val() }));
  } catch ({ message }) { return sendError(dispatch, message); }
};
