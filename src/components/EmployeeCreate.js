import React from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Card, CardSection, Input, Spinner,
} from './common';
import { employeeUpdate, employeeCreate } from '../actions/Employee';

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
  },
  errorClass: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const EmployeeCreate = (props) => {
  const {
    name, phone, shift, eu, ec, error, loading,
  } = props;
  const { pickerLabel, errorClass } = styles;

  const renderError = () => {
    if (error) return <Text style={errorClass}>{error}</Text>;
    return null;
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Employee Name"
          value={name}
          onChangeText={value => eu('name', value)}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="Employee Phone"
          value={phone}
          onChangeText={value => eu('phone', value)}
        />
      </CardSection>
      <CardSection>
        <Text style={pickerLabel}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={value => eu('shift', value)}
          style={{ flex: 1 }}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Staturday" value="Staturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
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
  eu: PropTypes.func.isRequired,
  ec: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  employee: { name, phone, shift },
  alert: { error, loading },
}) => ({
  name, phone, shift, error, loading,
});
const mapDispatchToProps = dispatch => ({
  eu: (prop, value) => dispatch(employeeUpdate({ prop, value })),
  ec: values => dispatch(employeeCreate(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
