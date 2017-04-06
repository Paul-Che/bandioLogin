import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { G } from "react-native-svg";
import Dimensions from 'Dimensions';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme,
   VictoryScatter, VictoryGroup, VictoryBar, VictoryPie, VictoryLabel
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

const window = Dimensions.get('window');

class MonthlySummaryTemperature extends Component {

  render() {

    const {
      thumbnailStyle,
      headerContentStyle,
      IconContainerStyle,
      headerTextStyle,
      otherButtonStyle,
      otherTextStyle,
      imageStyle
     } = styles;

    return(
      <View style={{marginTop: 30}}>
        <Card>
          <CardSection>
            <View style={IconContainerStyle}>
              <Icon style={{ fontSize: 17 }} name="thermometer-quarter" />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>Periodic Summary of Temperatures</Text>
              <Text style={{fontSize: 10}}>Since Mai 2016</Text>
            </View>
          </CardSection>

          <CardSection style={{justifyContent: 'center', height: 150}}>
            <Svg height={150}>
              <VictoryChart width={400} height={150}>
                <VictoryAxis name="XAxis"
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={["0h", "6h", "12h", "18h", "24h"]}
                  style={{
                    axis: {stroke: "white"},
                    tickLabels: {fontSize: 20}
                  }}
                />
                <VictoryAxis dependentAxis
                  tickFormat={[]}
                  style={{
                    axis: {stroke: "white"},
                    grid: {stroke: "grey"},
                    tickLabels: {fontSize: 10}
                  }}
                />
                <VictoryLine
                  style={{ data: { stroke: "#800000", strokeWidth:3 } }}
                  data={dataTemp}
                  interpolation="cardinal"
                  domain={[1, 3]}
                />
                <VictoryScatter name="ScatterGraph"
                  style={{ data: { stroke: "#800000", strokeWidth:2, fill: "white" } }}
                  data={dataTemp}
                  size= {5}
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
                              return props.index === clickedIndex ? {style: {fill: "#800000", fontSize: 20}, text: `${props.datum.y}°C`} : null;
                            }
                          }, {
                            eventKey: "all",
                            mutation: (props) => {
                              return props.index === clickedIndex ? {style: {fill: "#800000", strokeWidth:4 }} : null;
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
              </VictoryChart>
            </Svg>
          </CardSection>


          <CardSection style={{ justifyContent: 'space-around' }}>
            <Button otherButtonStyle={otherButtonStyle} otherTextStyle={otherTextStyle}>
              Temperatures
            </Button>
            <Button otherButtonStyle={otherButtonStyle} otherTextStyle={otherTextStyle}>
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
    fontSize: 12
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
    backgroundColor: null,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#800000',
    paddingLeft: 20,
    paddingRight: 20
  },
  otherTextStyle: {
    fontSize: 10,
    color: 'black'
  }
};

export default MonthlySummaryTemperature;
