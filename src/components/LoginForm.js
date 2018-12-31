import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
  Card, CardSection, Input, Button,
} from './common';
import { emailChange, passwordChange, loginUser } from '../actions/Auth';

const errorClass = { fontSize: 20, alignSelf: 'center', color: 'red' };

const LoginForm = ({
  email, password, ec, pc, lu, error,
}) => (
  <Card>
    <CardSection>
      <Input
        label="Email"
        placeholder="name@email.com"
        onChangeText={ec}
        value={email}
      />
    </CardSection>
    <CardSection>
      <Input
        label="Password"
        placeholder="password"
        secureTextEntry
        onChangeText={pc}
        value={password}
      />
    </CardSection>
    <Text style={errorClass}>{error}</Text>
    <CardSection>
      <Button text="Login" onPress={() => lu({ email, password })} />
    </CardSection>
  </Card>
);

LoginForm.defaultProps = {
  email: '',
  password: '',
  error: '',
};
LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  ec: PropTypes.func.isRequired,
  pc: PropTypes.func.isRequired,
  lu: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = ({
  auth: { email, password },
  alert: { error },
}) => ({
  email, password, error,
});
const mapDispatchToProps = dispatch => ({
  ec: text => dispatch(emailChange(text)),
  pc: text => dispatch(passwordChange(text)),
  lu: values => dispatch(loginUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
