import React from 'react';
import { Text, View } from 'react-native';

const BottomPhrase = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>Don t Have an account? Get out</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    marginTop: 40
  }
}

export default BottomPhrase;
