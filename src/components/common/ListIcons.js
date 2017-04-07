import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListIcons = (props) => {
  function renderRows() {
    const returnValue = [];
    for (let i = 0; i < props.number; i++) {
      if (i < props.score) {
        returnValue.push(
          <Icon key={i} style={[styles.iconStyle, { color: 'green' }]} name={props.name} />
        );
      } else {
        returnValue.push(
          <Icon key={i} style={[styles.iconStyle, { color: 'black' }]} name={props.name} />
        );
      }
    }
    return returnValue;
  }

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

export { ListIcons };
