import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme,
   VictoryScatter, VictoryGroup, VictoryBar
  } from "victory-native";
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

const dataTemp = [
  {x: 1, y: 15},
  {x: 2, y: 20},
  {x: 3, y: 22},
  {x: 4, y: 18},
  {x: 5, y: 20}
];

class MonthlySummaryTemperature extends Component {




   onPressWaypoint(datum) {
      console.log(datum);
    };

  render() {

    const {
      thumbnailStyle,
      headerContentStyle,
      IconContainerStyle,
      headerTextStyle,
      otherButtonStyle,
      imageStyle
     } = styles;

    return(
      <View style={{marginTop: 20}}>
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
              <VictoryAxis name="XAxis"
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={["0h", "6h", "12h", "18h", "24h"]}
                color="red"
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
              />
              <VictoryGroup>
                <VictoryLine
                  style={{ data: { stroke: "#800000", strokeWidth:2 } }}
                  data={dataTemp}
                />
                <VictoryScatter name="ScatterGraph"
                  style={{ data: { stroke: "#800000", strokeWidth:1, fill: "white" } }}
                  data={dataTemp}
                  events={[{
                    childName: "XAxis",
                    target: "data",
                    eventHandlers: {
                      onPress: (evt, clickedProps) => {

                        const clickedIndex = clickedProps.index;
                        return [
                          {

                            eventKey: "all",
                            target: 'labels',
                            mutation: (props) => {

                              return props.index === clickedIndex ? {style: {fill: "#800000"}, text: `${props.datum.y}°C`} : null;
                            }
                          }, {
                            eventKey: "all",
                            mutation: (props) => {

                              return props.index === clickedIndex ? {style: {fill: "#800000"}} : null;
                            }
                          }, {
                            childName: ["XAxis"],
                            mutation: (props) => {
                              console.log(props)
                              return {
                                style: Object.assign({}, props.style, {fill: "tomato"})
                              };
                            }
                          }
                        ];
                      },
                    }
                  }]}
                />
              </VictoryGroup>
            </VictoryChart>
          </CardSection>

          <CardSection>

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
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16
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
    padding: 7
  }
};

export default MonthlySummaryTemperature;
