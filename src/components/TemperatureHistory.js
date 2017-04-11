import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
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

class TemperatureHistory extends Component {

  render() {
    const { headerStyle } = styles;

    return (
      <View>
        <StatusBar
      
          hidden={false}
          barStyle="light-content"
        />
        <View style={{ marginTop: 70, backgroundColor: '#EFF0F1' }}>

          <View style={headerStyle}>
            <View style={{ padding: 4 }}>
              <MyAppText style={{ fontWeight: 'bold' }}>Total consumption</MyAppText>
              <MyAppText>12 394 kwh</MyAppText>
            </View>
            <View style={{ paddingRight: window.width / 4, padding: 4 }}>
              <MyAppText style={{ fontWeight: 'bold' }}>Eco rating</MyAppText>
              <ListIcons name="tree" number={4} score={3} />
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            <CardSectionGraph temp={dataTemp} hum={dataHum} />
          </View>

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

export default TemperatureHistory;
