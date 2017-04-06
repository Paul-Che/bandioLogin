import React from 'react';
import { Text } from 'react-native';

const MyAppText = (props) => {
  return (
    <Text style={[styles.containerStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = {
  containerStyle: {
    fontFamily: 'HelveticaNeue-Light',
    color: '#A4A4A4',
    fontSize: 12,
    padding: 1
  }
};

export { MyAppText };
