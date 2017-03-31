import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme, VictoryScatter
  } from "victory-native";
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

const MonthlySummaryTemperature = ({ temperatures }) => {
  const data2012 = [
    {hour: 1, temperature: 15},
    {hour: 2, temperature: 20},
    {hour: 3, temperature: 22},
    {hour: 4, temperature: 18},
    {hour: 5, temperature: 20}
  ];

  const {
    thumbnailStyle,
    headerContentStyle,
    IconContainerStyle,
    headerTextStyle,
    otherButtonStyle,
    imageStyle
   } = styles;

  return(
    <View style={{marginTop: 50}}>
      <Card>
        <CardSection>
          <View style={IconContainerStyle}>
            <Icon style={{ fontSize: 20 }} name="thermometer-quarter" />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>Periodic Summary of Temperatures</Text>
            <Text>Since Mai 2016</Text>
          </View>
        </CardSection>

        <CardSection>
          <VictoryChart
            domainPadding={10}
            domain={{x: [1, 5], y: [10, 30]}}
            theme={VictoryTheme.grayscale}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={["0h", "6h", "12h", "18h", "24h"]}
              style={{
                axis: {stroke: "white"}
              }}
            />
            <VictoryAxis
              style={{
                axis: {stroke: "white"},
                grid: {stroke: "grey", strokeWidth: 1}
              }}
              dependentAxis
              tickFormat={(y) => `${y}°C`}
            />
            <VictoryLine
              style={{ data: { stroke: "#800000", strokeWidth:2 } }}
              data={data2012}
              x="hour"
              y="temperature"
            />
            <VictoryScatter
              style={{ data: { stroke: "#800000", strokeWidth:2 } }}
              data={[
                {hour: "0h", profit: 15, loss: 1},
                {hour: "6h", profit: 20, loss: 2},
                {hour: "12h", profit: 22, loss: 3},
                {hour: "18h", profit: 18, loss: 4},
                {hour: "24h", profit: 20, loss: 5}
              ]}
              x="hour"
              y={(datum) => datum.profit - datum.loss}
            />
          </VictoryChart>
        </CardSection>

        <CardSection style={{ justifyContent: 'space-around' }}>
          <Button otherButtonStyle={otherButtonStyle} otherTextStyle={{ color: 'black' }}>
            Temperatures
          </Button>
          <Button otherButtonStyle={otherButtonStyle} otherTextStyle={{ color: 'black' }}>
            Humidity
          </Button>
        </CardSection>

      </Card>
    </View>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  IconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  otherButtonStyle:{
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#800000',
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 100,
    marginRight: 100
  }
};

export default MonthlySummaryTemperature;
