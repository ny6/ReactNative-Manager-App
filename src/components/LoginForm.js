import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Card, CardSection, Input, Button,
} from './common';
import { emailChange, passwordChange, loginUser } from '../actions';

const LoginForm = ({
  email, password, ec, pc, lu,
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
    <CardSection>
      <Button text="Login" onPress={() => lu({ email, password })} />
    </CardSection>
  </Card>
);

LoginForm.defaultProps = {
  email: '',
  password: '',
};
LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  ec: PropTypes.func.isRequired,
  pc: PropTypes.func.isRequired,
  lu: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { email, password } }) => ({ email, password });
const mapDispatchToProps = dispatch => ({
  ec: text => dispatch(emailChange(text)),
  pc: text => dispatch(passwordChange(text)),
  lu: values => dispatch(loginUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
