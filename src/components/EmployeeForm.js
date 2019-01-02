import React from 'react';
import { Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions/Employee';

const pickerLabel = {
  fontSize: 18,
  paddingLeft: 20,
};

const EmployeeForm = ({
  name, phone, shift, eu,
}) => (
  <View>
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
  </View>
);

EmployeeForm.defaultProps = {
  name: '',
  phone: '',
  shift: '',
};
EmployeeForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  eu: PropTypes.func.isRequired,
};

const mapStateToProps = ({ employee: { name, phone, shift } }) => ({ name, phone, shift });
const mapDispatchToProps = dispatch => ({
  eu: (prop, value) => dispatch(employeeUpdate({ prop, value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
