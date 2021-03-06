import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, MyAppText } from '../common';

const MonthlyTempDetail = ({ monthData }) => {
  const { month, avgTempRoom, avgHumidity, position } = monthData;
  const { unitStyle } = styles;

  return (
    <Card>
      <CardSection>
        <Icon style={{ fontSize: 17 }} name="calendar-check-o" />
        <MyAppText style={{ paddingLeft: 10, fontWeight: 'bold' }}>{month}</MyAppText>
      </CardSection>
      <CardSection style={{ justifyContent: 'space-between' }}>
        <View style={{ paddingRight: 5 }}>
          <MyAppText>avg Temperature</MyAppText>
          <Text style={unitStyle}>{avgTempRoom} °C</Text>
        </View>
        <View style={{ paddingLeft: 5 }}>
          <MyAppText>avg Humidity</MyAppText>
          <Text style={[unitStyle, { alignSelf: 'flex-end' }]}>{avgHumidity} %</Text>
        </View>
        <View>
          <MyAppText>Position</MyAppText>
          <Text style={[unitStyle, { alignSelf: 'flex-end' }]}>{position}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  unitStyle: {
    fontWeight: 'bold',
    paddingTop: 2
  }
};

export { MonthlyTempDetail };
