import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, MyAppText } from '../common/index';

class MonthlyTempScrollView extends Component {
  /*state = { monthDatas: [] };

  componentWillMount() {
    axios.get('https:/...')
      .then(response => this.setState({ monthDatas: response.data }));
  }

  renderMonthData() {
    return this.state.monthDatas.map(monthData =>
      <MonthlyTempDetail key={monthData.title} monthData={monthData} />
    );
  }*/

  render() {
    const { unitStyle } = styles;
    
    return (
      <Card>
        <CardSection>
          <Icon style={{ fontSize: 17 }} name="calendar-check-o" />
          <MyAppText style={{ paddingLeft: 10, fontWeight: 'bold' }}>August</MyAppText>
        </CardSection>
        <CardSection style={{ justifyContent: 'space-between' }}>
          <View style={{ paddingRight: 5 }}>
            <MyAppText>avg Temperature</MyAppText>
            <Text style={unitStyle}>19 °C</Text>
          </View>
          <View style={{ paddingLeft: 5 }}>
            <MyAppText>avg Humidity</MyAppText>
            <Text style={[unitStyle, { alignSelf: 'flex-end' }]}>12 %</Text>
          </View>
          <View>
            <MyAppText>Position</MyAppText>
            <Text style={[unitStyle, { alignSelf: 'flex-end' }]}>3</Text>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  unitStyle: {
    fontWeight: 'bold',
    paddingTop: 2
  }
};

export { MonthlyTempScrollView };
