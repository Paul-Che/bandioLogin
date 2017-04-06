import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G } from "react-native-svg";
import Dimensions from 'Dimensions';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme,
   VictoryScatter, VictoryGroup, VictoryBar, VictoryPie, VictoryLabel, VictorySharedEvents
  } from "victory-native";
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';
import { MyAppText } from './common/MyAppText';
import { ListIcons } from './common/ListIcons';
import { CardSectionGraph } from './common/CardSectionGraph';

const window = Dimensions.get('window');

class MonthlySummaryTemperature extends Component {

  render() {

    const { headerStyle } = styles;

    return(
      <View style={{marginTop: 50, backgroundColor: '#EFF0F1'}}>

        <View style={headerStyle}>
          <View>
            <MyAppText style={{fontWeight: 'bold'}}>Total consumption</MyAppText>
            <MyAppText>12 394 kwh</MyAppText>
          </View>
          <View style={{paddingRight: window.width/3}}>
            <MyAppText style={{fontWeight: 'bold'}}>Eco rating</MyAppText>
            <ListIcons name="tree" number={4} score={4} />
          </View>
        </View>

        <View style={{paddingTop: 10}}>
          <CardSectionGraph />
        </View>

      </View>
    );
  }
};

const styles = {
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white'
  }
};

export default MonthlySummaryTemperature;
