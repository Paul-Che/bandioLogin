import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class TimerText extends Component {

  render() {
    const { minutesLong, ...rest } = this.props;

    const hours = Math.floor(minutesLong / 60);
    const minutes = minutesLong - hours * 60;

    return (
      <View {...rest}>
        <View style={styles.timerContainer}>
          <Text style={styles.time}>{minutesLong}°</Text>

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
  },
  time: {
    color: '#A4A4A4',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 75,
    fontWeight: "300",
  }
});
