import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import CircleSlider from './common/CircleSlider';
import CircularSlider from './common/CircularSlider';
import TimerText from './common/TimerText';

function roundAngleToFives(angle) {
  const fiveMinuteAngle = 2 * Math.PI / 144;
  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

function calculateTemperaturesFromAngle(angle) {
  return Math.round(angle / (2 * Math.PI / (12 * 12)) / 6);
}

class LivingRoomTemperature extends Component {
  state = { value: 15, startAngle: Math.PI * 10/8, angleLength: Math.PI * 12/8 };

  onUpdate = ({ startAngle, angleLength }) => {
    this.setState({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength)
    });
  }

  render() {
    const { container } = styles;
    const { startAngle, angleLength } = this.state;

    return(
      <View>
        <StatusBar hidden={true} />
        <View style={{ paddingTop: 10, paddingBottom: 10, borderWidth: 1 }}>
          <Text style={{ fontFamily: 'HelveticaNeue-Light', fontSize: 17, alignSelf: 'center', color: '#A4A4A4' }}>Living Room</Text>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, borderWidth: 1 }}>
          <Text style={{ fontFamily: 'HelveticaNeue-Light', fontSize: 17, alignSelf: 'center', color: '#A4A4A4' }}>Current temp.</Text>
        </View>

        <View style={styles.containerCircular}>
          <View>
            <TimerText
              style={styles.currentTempContainer}
              minutesLong={calculateTemperaturesFromAngle(startAngle)}
            />
            <View style={styles.currentTempText}>
              <Text>Current temp.</Text>
            </View>
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
            />
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  containerCircular: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  currentTempText: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100/2,
    backgroundColor: 'red'
  }
};

export default LivingRoomTemperature;
