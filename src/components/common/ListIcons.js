import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListIcons = (props) => {

  const { numrows } = props.number;

  function renderRows() {
    let returnValue = [];
    for (let i=0; i < props.number; i++) {
      if (i < props.score) {
        returnValue.push(
          <Icon style={[styles.iconStyle, { color: 'green' }]} name={props.name} />
        );
      } else {
        returnValue.push(
          <Icon style={[styles.iconStyle, { color: 'black' }]} name={props.name} />
        );
      }
    };
    return returnValue;
  };

  return (
    <View style={styles.containerStyle}>
      {renderRows()}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  iconStyle: {
    fontSize: 11,
    padding: 2
  }
};

export { ListIcons };
