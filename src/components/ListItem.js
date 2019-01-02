import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const titleStyle = {
  fontSize: 18,
  paddingLeft: 15,
};

const ListItem = employee => employee.name && (
  <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({ employee })}>
    <View>
      <CardSection>
        <Text style={titleStyle}>{employee.name}</Text>
      </CardSection>
    </View>
  </TouchableWithoutFeedback>
);

ListItem.defaultProps = { employee: {} };
ListItem.propTypes = {
  employee: PropTypes.shape({}),
};

export default ListItem;
