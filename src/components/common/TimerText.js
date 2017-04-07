import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TimerText extends Component {

  render() {
    const { desiredTemp, fontSize, textStyle, ...rest } = this.props;

    return (
      <View {...rest}>
        <View style={styles.timerContainer}>
          <Text style={[{ fontSize }, textStyle]}>{desiredTemp}°</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  }
});

export { TimerText };
