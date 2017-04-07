import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress, otherButtonStyle, otherTextStyle }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, otherButtonStyle]}>
      <Text style={[textStyle, otherTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#B7254C'
  }
};

export { Button };
