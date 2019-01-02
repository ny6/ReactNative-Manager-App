import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardSection } from './common';

const styles = {
  alertClass: {
    fontSize: 20,
    alignSelf: 'center',
  },
};
class EmployeeList extends Component {
  componentDidMount() {}

  renderAlerts = () => {
    const { error, message } = this.props;
    const { alertClass } = styles;
    if (error) return <Text style={[alertClass, { color: 'red' }]}>{error}</Text>;
    if (message) return <Text style={[alertClass, { color: 'green' }]}>{message}</Text>;
    return null;
  };

  render() {
    return (
      <Card>
        {this.renderAlerts()}
        <CardSection />
      </Card>
    );
  }
}

EmployeeList.defaultProps = {
  error: '',
  message: '',
};
EmployeeList.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};

const mapDispatchToProps = ({ alert: { error, message } }) => ({ error, message });

export default connect(mapDispatchToProps)(EmployeeList);
