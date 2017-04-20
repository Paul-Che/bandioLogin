import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Svg } from 'react-native-svg';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryScatter } from 'victory-native';
import { Card, CardSection, Button } from './index';

class CardSectionGraph extends Component {
  state = { buttonColor: 'grey' };

  render() {
    const {
      headerContentStyle, IconContainerStyle, headerTextStyle, otherButtonStyle,
      otherTextStyle
    } = styles;

    const { iconName, title, subtitle, axisValues, firstButtonName,
      firstUnit, secondButtonName, secondUnit, temp, hum } = this.props;

    const {
      pointLabel = firstUnit,
      TBColor = '#800000',
      HBColor = 'grey',
      DisplayColor = '#800000',
      data = this.props.temp
    } = this.state;

    return (
      <Card>

        <CardSection style={{ borderColor: 'white', borderRadius: 2 }}>
          <View style={IconContainerStyle}>
            <Icon style={{ fontSize: 17 }} name={iconName} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text style={{ fontSize: 10 }}>{subtitle}</Text>
          </View>
        </CardSection>

        <CardSection style={{ justifyContent: 'center', height: 150, borderColor: 'white' }}>
          <Svg height={150}>
            <VictoryChart width={370} height={150}>
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={axisValues}
                style={{
                  axis: { stroke: 'white' },
                  tickLabels: { fontSize: 15 }
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={[]}
                style={{
                  axis: { stroke: 'white' },
                  grid: { stroke: 'grey' }
                }}
              />
              <VictoryLine
                style={{ data: { stroke: DisplayColor, strokeWidth: 3 } }}
                data={data}
                interpolation="cardinal"
                domain={[1, 3]}
              />
              <VictoryScatter
                name="scatter"
                style={{ data: { stroke: DisplayColor, strokeWidth: 2, fill: 'white' } }}
                data={data}
                size={5}
                events={[{
                  childname: ['firstButtonName', 'secondButtonName'],
                  target: 'data',
                  eventHandlers: {
                    onPress: (evt, clickedProps) => {
                      const clickedIndex = clickedProps.index;
                      return [
                        {
                          eventKey: 'all',
                          target: 'labels',
                          mutation: (props) => {
                            return props.index === clickedIndex ? {
                              style: { fill: DisplayColor, fontSize: 20 },
                              text: `${props.datum.y} ${pointLabel}` } : null;
                          }
                        }, {
                          eventKey: 'all',
                          mutation: (props) => {
                            return props.index === clickedIndex ? {
                              style: { fill: DisplayColor, strokeWidth: 4 } } : null;
                          }
                        }
                      ];
                    },
                    onLoad: (evt, clickedProps) => {
                      console.log('onLoad');
                      const clickedIndex = clickedProps.index;
                      return [
                        {
                          eventKey: 'all',
                          target: 'labels',
                          mutation: (props) => {
                            return props.index === clickedIndex ? {
                              style: { fill: DisplayColor, fontSize: 20 },
                              text: `${props.datum.y} ${pointLabel}` } : null;
                          }
                        }, {
                          eventKey: 'all',
                          mutation: (props) => {
                            return props.index === clickedIndex ? {
                              style: { fill: DisplayColor, strokeWidth: 4 } } : null;
                          }
                        }
                      ];
                    }
                  }
                }]}
              />
            </VictoryChart>
          </Svg>
        </CardSection>

        <CardSection
          style={{ justifyContent: 'space-around',
            borderColor: 'white',
            borderRadius: 2 }}
        >
          <Button
            name='firstButtonName'
            otherButtonStyle={[otherButtonStyle, { borderColor: TBColor }]}
            otherTextStyle={[otherTextStyle, { color: TBColor }]}
            onPress={() => {
              console.log(this.props);
              this.setState(
                { TBColor: '#800000',
                  HBColor: 'grey',
                  DisplayColor: '#800000',
                  pointLabel: firstUnit,
                  data: temp }
              );
            }}
          >
            {firstButtonName}
          </Button>
          <Button
            name='secondButtonName'
            otherButtonStyle={[otherButtonStyle, { borderColor: HBColor }]}
            otherTextStyle={[otherTextStyle, { color: HBColor }]}
            onPress={() => {
              this.setState(
                { HBColor: '#002D88',
                  TBColor: 'grey',
                  DisplayColor: '#002D88',
                  pointLabel: secondUnit,
                  data: hum }
              );
           }}
          >
            {secondButtonName}
          </Button>
        </CardSection>

      </Card>
    );
  }
}

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
  otherButtonStyle: {
    backgroundColor: null,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
    paddingLeft: 15,
    paddingRight: 15
  },
  otherTextStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'grey',
    paddingTop: 5,
    paddingBottom: 5
  }
};

export { CardSectionGraph };
