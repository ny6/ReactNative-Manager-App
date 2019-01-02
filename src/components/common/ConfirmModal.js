import React from 'react';
import { Modal, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import CardSection from './CardSection';

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};
const { cardSectionStyle, textStyle, containerStyle } = styles;

const ConfirmModal = ({
  text, onAccept, onDecline, visible,
}) => (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={f => f}
  >
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <Text style={textStyle}>{text}</Text>
      </CardSection>
      <CardSection>
        <Button text="Yes" onPress={onAccept} />
        <Button text="No" onPress={onDecline} />
      </CardSection>
    </View>
  </Modal>
);

ConfirmModal.propTypes = {
  text: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ConfirmModal;
