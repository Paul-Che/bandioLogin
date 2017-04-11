import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderBottomColor: 'white',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
