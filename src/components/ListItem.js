import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection } from './common';

const titleStyle = {
  fontSize: 18,
  paddingLeft: 15,
};

const ListItem = ({ name }) => (
  <CardSection>
    <Text style={titleStyle}>{name}</Text>
  </CardSection>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
