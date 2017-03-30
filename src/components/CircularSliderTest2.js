import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G, Path } from 'react-native-svg';
import StaticCircle from './common/StaticCircle';
import TimerText from './common/TimerText';


class CircularSliderTest2 extends Component {

  render() {
    const pi = Math.PI;

    return (
      <View>

        <View style={styles.container}>
          <Text style={styles.currentTempText}>Current Temp.</Text>
          <StaticCircle
            startAngle={10/9 * pi}
            angleLength={ 1.8 * pi}
            segments={20}
            strokeWidth={37}
            radius={130}
            gradientColorFrom="#0083FF"
            gradientColorTo="#800000"
            bgCircleColor="white"
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle:{
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
    alignSelf: 'center',
    color: '#A4A4A4'
  },
  currentTempContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  currentTempText:{
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 14,
    alignSelf: 'center',
    color: '#A4A4A4',
    justifyContent: 'center',
    top: 120,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default CircularSliderTest2;
