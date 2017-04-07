import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableHighlight, Dimensions } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { CircularSlider, StaticCircle, TimerText } from './common/index';

const pi = Math.PI;
const window = Dimensions.get('window');

function roundAngleToFives(angle) {
  const fiveMinuteAngle = (2 * pi) / 144;
  return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
}

function calculateTemperaturesFromAngle(angle) {
  let desiredTemp = Math.round(angle / ((2 * pi) / (12 * 12)) / 6);
  if (desiredTemp < 13) {
    desiredTemp += 25;
  }
  return desiredTemp;
}

class LivingRoomTemperature extends Component {

  state = {
    startAngle: (10 / 9) * pi,
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
    return this.state.temperatures[0];
  }

  render() {
    const { startAngle, angleLength } = this.state;
    const { textStyle, centerContainer } = styles;

    return (
      <View style={{ height: window.height, width: window.width }}>
        <StatusBar hidden />

        <View style={[centerContainer, { height: window.height / 5 }]}>
          <Text style={[textStyle, { fontSize: 25, color: '#5F5F5F' }]}>Living Room</Text>
        </View>

        <View style={[centerContainer, { flex: 1 }]}>
          <View style={{ position: 'absolute' }}>
            <StaticCircle
              startAngle={(10 / 9) * pi}
              angleLength={1.8 * pi}
              segments={20}
              strokeWidth={37}
              radius={130}
              gradientColorFrom="#0083FF"
              gradientColorTo="#800000"
              bgCircleColor="white"
            />
          </View>
          <View style={{ position: 'absolute' }}>
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

          <Text style={textStyle}>Desired Temp.</Text>

          <TimerText
            textStyle={[textStyle, { fontSize: 75 }]}
            desiredTemp={calculateTemperaturesFromAngle(startAngle)}
          />
        </View>

        <View style={[centerContainer, { height: window.height / 4 }]}>
          <Text style={textStyle}>Current Temp.</Text>
          <Text style={[textStyle, { fontSize: 75 }]}>{this.renderLastTemperature()}</Text>
        </View>


        <TouchableHighlight onPress={() => Actions.MonthlySummaryTemperature()}>
          <Icon name="arrow-right" style={[textStyle, { fontSize: 18, alignSelf: 'flex-end' }]} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: 'HelveticaNeue-Light',
    color: '#A4A4A4',
    fontSize: 14
  }
});

export default LivingRoomTemperature;
