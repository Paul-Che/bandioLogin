import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { MyAppText, ListIcons, CardSectionGraph } from './common/index';

const window = Dimensions.get('window');

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

class MonthlySummaryTemperature extends Component {

  render() {
    const { headerStyle } = styles;

    return (
      <View style={{ marginTop: 50, backgroundColor: '#EFF0F1' }}>

        <View style={headerStyle}>
          <View style={{ padding: 3 }}>
            <MyAppText style={{ fontWeight: 'bold' }}>Total consumption</MyAppText>
            <MyAppText>12 394 kwh</MyAppText>
          </View>
          <View style={{ paddingRight: window.width / 3, padding: 3 }}>
            <MyAppText style={{ fontWeight: 'bold' }}>Eco rating</MyAppText>
            <ListIcons name="tree" number={4} score={3} />
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>
          <CardSectionGraph temp={dataTemp} hum={dataHum} />
        </View>

      </View>
    );
  }
}

const styles = {
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white'
  }
};

export default MonthlySummaryTemperature;
