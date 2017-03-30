import React from 'react';
import { Text, View } from 'react-native';

const Title = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{props.titleText}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    //borderWidth: 1,
    //borderColor: 'red',
    marginTop: 20,
    paddingTop: 120,
    paddingBottom: 80
  },
  textStyle: {
    fontSize: 70,
    fontFamily: 'Cochin',
    color: 'rgb( 120, 20, 51)',
    letterSpacing: 3,
    textAlign: 'center'
  }
}

export default Title;
