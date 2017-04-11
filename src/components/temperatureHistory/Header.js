import React from 'react';
import { View, Dimensions } from 'react-native';
import { MyAppText, ListIcons } from '../common/index';

const window = Dimensions.get('window');

const Header = () => {
  const { headerStyle } = styles;

  return (
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
  );
};

const styles = {
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white'
  }
};

export { Header };
