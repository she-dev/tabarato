import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  const { cardSectionStyle, containerStyle, textStyle } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative'
    
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center'
  }
};

export { Confirm };

