import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G, Path } from 'react-native-svg';
import CircularSlider from './common/CircularSlider';
import TimerText from './common/TimerText';

function roundAngleToFives(angle) {
  const fiveMinuteAngle = 2 * Math.PI / 144;

  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

function calculateTemperaturesFromAngle(angle) {
  return Math.round(angle / (2 * Math.PI / (12 * 12)) / 6);
}

class CircularSliderTest extends Component {

  state = {
    startAngle: Math.PI * 10/8,
    angleLength: Math.PI * 12/8,
  }

  onUpdate = ({ startAngle, angleLength }) => {
    this.setState({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength)
    });
  }

  render() {
    const { startAngle, angleLength } = this.state;

    return (
      <View>

        <View style={{ padding: 10, top: 20, marginBottom: 50 }}>
          <Text style={styles.textStyle}>Living Room</Text>
        </View>

        <View style={styles.container}>
          <TimerText
            style={styles.currentTempContainer}
            minutesLong={calculateTemperaturesFromAngle(startAngle)}
          />
          <Text style={styles.currentTempText}>Current Temp.</Text>
          <CircularSlider
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={this.onUpdate}
            segments={20}
            strokeWidth={40}
            radius={145}
            gradientColorFrom="#0083FF"
            gradientColorTo="#800000"
            bgCircleColor="white"
            stopIcon={<Icon name="user-o" />}
            startIcon={<G scale="1.1" transform={{ translate: "-8, -8" }}></G>}
          />
        </View>

        <View>
          <Text style={{
            fontFamily: 'HelveticaNeue-Light',
            fontSize: 14,
            alignSelf: 'center',
            marginTop: 20,
            color: '#A4A4A4',
            justifyContent: 'center'
          }}>Desired Temp.</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              color: '#A4A4A4',
              fontFamily: 'HelveticaNeue-Light',
              fontSize: 75,
              fontWeight: "300"
             }}>18°</Text>
          </View>
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

export default CircularSliderTest;
