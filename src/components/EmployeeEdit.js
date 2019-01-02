import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import forEach from 'lodash.foreach';
import { text } from 'react-native-communications';
import {
  Button, Card, CardSection, Spinner, ConfirmModal,
} from './common';
import { employeeEdit, employeeUpdate, deleteEmployee } from '../actions/Employee';
import EmployeeForm from './EmployeeForm';

const styles = {
  errorClass: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    const { eu, employee } = this.props;
    forEach(employee, (value, prop) => {
      eu({ prop, value });
    });
  }

  renderError = () => {
    const { errorClass } = styles;
    const { error } = this.props;
    if (error) return <CardSection><Text style={errorClass}>{error}</Text></CardSection>;
    return null;
  };

  render() {
    const { showModal } = this.state;
    const {
      name, phone, shift, loading,
      de, ee, employee: { uid },
    } = this.props;
    return (
      <Card>
        <EmployeeForm />
        {this.renderError()}
        <CardSection>
          {loading ? <Spinner /> : (
            <Button
              text="Save"
              onPress={() => ee({
                name, phone, uid, shift: shift || 'Monday',
              })}
            />
          )}
        </CardSection>
        <CardSection>
          <Button
            text="Send Message"
            onPress={() => text(phone, `Your upcoming shift is on ${shift}!`)}
          />
        </CardSection>
        <CardSection>
          <Button text="Delete" onPress={() => this.setState({ showModal: true })} />
        </CardSection>
        <ConfirmModal
          visible={showModal}
          text="Are you sure want to delete this?"
          onAccept={() => de(uid)}
          onDecline={() => this.setState({ showModal: false })}
        />
      </Card>
    );
  }
}

EmployeeEdit.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  error: '',
};
EmployeeEdit.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  eu: PropTypes.func.isRequired,
  ee: PropTypes.func.isRequired,
  de: PropTypes.func.isRequired,
  employee: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({
  employee: { name, phone, shift },
  alert: { error, loading },
}) => ({
  name, phone, shift, error, loading,
});
const mapDispatchToProps = dispatch => ({
  ee: values => dispatch(employeeEdit(values)),
  eu: values => dispatch(employeeUpdate(values)),
  de: id => dispatch(deleteEmployee(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
