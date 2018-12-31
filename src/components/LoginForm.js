import React from 'react';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button,
} from './common';

const LoginForm = () => (
  <Card>
    <CardSection>
      <Input
        label="Email"
        placeholder="name@email.com"
      />
    </CardSection>
    <CardSection>
      <Input
        label="Password"
        placeholder="password"
        secureTextEntry
      />
    </CardSection>
    <CardSection>
      <Button text="Login" />
    </CardSection>
  </Card>
);

export default connect()(LoginForm);
