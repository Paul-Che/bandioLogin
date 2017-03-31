import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, otherButtonStyle, otherTextStyle }) => {
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
    backgroundColor: '#FE1743',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#B7254C',
    marginLeft: 100,
    marginRight: 100
  }
};

export { Button };
