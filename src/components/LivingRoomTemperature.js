import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G, Path } from 'react-native-svg';
import CircularSlider from './common/CircularSlider';
import StaticCircle from './common/StaticCircle';
import TimerText from './common/TimerText';

const pi = Math.PI;

function roundAngleToFives(angle) {
  const fiveMinuteAngle = 2 * pi / 144;
  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

function calculateTemperaturesFromAngle(angle) {
  let desiredTemp = Math.round(angle / (2 * pi / (12 * 12)) / 6);
  if (desiredTemp < 13) {
    desiredTemp += 25;
  }
  return desiredTemp;
}

class LivingRoomTemperature extends Component {

  state = {
    startAngle: 10/9 * pi,
    angleLength: 1.8 * pi,
    temperatures: [],
    error: ''
  }

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/16qbyn')
      .then(response => this.setState({ temperatures: response.data.temperatures }))
      .catch(this.onGetLastTempFail.bind(this));
  }

  onGetLastTempFail() {
    this.setState({
      error: 'Request to get last temperature failed'
    });
  }

  onUpdate = ({ startAngle, angleLength }) => {
    this.setState({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength)
    });
  }

  renderLastTemperature() {
    return this.state.temperatures[0]
  }

  render() {

    const { startAngle, angleLength, temperatures } = this.state;
    const { textStyle, centerItems, SliderContainer } = styles;

    return (
      <View>

        <Text style={[centerItems, textStyle, { top: 30, fontSize: 20 }]}>Living Room</Text>

        <View style={SliderContainer}>
          <StaticCircle
            startAngle={10/9 * pi}
            angleLength={1.8 * pi}
            segments={20}
            strokeWidth={37}
            radius={130}
            gradientColorFrom="#0083FF"
            gradientColorTo="#800000"
            bgCircleColor="white"
          />
        </View>
        <View style={SliderContainer}>
          <CircularSlider
            startAngle={startAngle}
            angleLength={angleLength}
            onUpdate={this.onUpdate}
            segments={20}
            strokeWidth={37}
            radius={130}
            buttonColor="white"
            buttonBorderColor="white"
          />
        </View>

        <Text style={[centerItems, textStyle, { top: 220, fontSize: 14 }]}>Desired Temp.</Text>

        <TimerText
          style={[centerItems, { top: 237 }]}
          fontSize={75}
          textStyle={textStyle}
          desiredTemp={calculateTemperaturesFromAngle(startAngle)}
        />

        <Text style={[centerItems, textStyle, { top: 500, fontSize: 14 }]}>Current Temp.</Text>
        <Text style={[centerItems, textStyle, { top: 517, fontSize: 75 }]}>{this.renderLastTemperature()}</Text>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerItems: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  textStyle:{
    fontFamily: 'HelveticaNeue-Light',
    color: '#A4A4A4'
  },
  SliderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 120
  }
});

export default LivingRoomTemperature;
