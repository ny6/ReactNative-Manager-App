import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Card, CardSection, Spinner,
} from './common';
import { employeeCreate } from '../actions/Employee';
import EmployeeForm from './EmployeeForm';

const styles = {
  errorClass: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const EmployeeCreate = (props) => {
  const {
    name, phone, shift, ec, loading, error,
  } = props;
  const renderError = () => {
    const { errorClass } = styles;
    if (error) return <CardSection><Text style={errorClass}>{error}</Text></CardSection>;
    return null;
  };

  return (
    <Card>
      <EmployeeForm />
      {renderError()}
      <CardSection>
        {loading ? <Spinner /> : <Button text="Save" onPress={() => ec({ name, phone, shift: shift || 'Monday' })} />}
      </CardSection>
    </Card>
  );
};

EmployeeCreate.defaultProps = {
  name: '',
  phone: '',
  shift: '',
  error: '',
};
EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  ec: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  employee: { name, phone, shift },
  alert: { error, loading },
}) => ({
  name, phone, shift, error, loading,
});
const mapDispatchToProps = dispatch => ({
  ec: values => dispatch(employeeCreate(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
