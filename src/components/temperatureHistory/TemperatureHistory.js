import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { CardSectionGraph } from '../common/index';
import Header from './Header';
import MonthlyTempScrollView from './MonthlyTempScrollView';

const dataTemp = [
  { x: 1, y: 15 },
  { x: 2, y: 20 },
  { x: 3, y: 22 },
  { x: 4, y: 18 },
  { x: 5, y: 20 }
];
const dataHum = [
  { x: 1, y: 10 },
  { x: 2, y: 12 },
  { x: 3, y: 11 },
  { x: 4, y: 15 },
  { x: 5, y: 4 }
];

class TemperatureHistory extends Component {

  render() {
    return (
      <View>
        <StatusBar
          hidden={false}
          barStyle="light-content"
        />
        <View style={{ marginTop: 70, backgroundColor: '#EFF0F1' }}>

          <Header />

          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <CardSectionGraph
              iconName="thermometer-quarter"
              title="Periodic Summary of Temperatures"
              subtitle="Today"
              axisValues={['0h', '6h', '12h', '18h', '24h']}
              firstButtonName="Temperature"
              firstUnit='°C'
              secondButtonName="Humidity"
              secondUnit='%'
              temp={dataTemp}
              hum={dataHum}
            />
          </View>

          <MonthlyTempScrollView />

        </View>
      </View>
    );
  }
}

export default TemperatureHistory;
