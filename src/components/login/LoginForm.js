import React, { Component } from 'react';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from '../common';
import Title from './Title';
import BottomPhrase from './BottomPhrase';

class LoginForm extends Component {
  state = { password: '' };

  render() {
    const { containerStyle, sectionStyle, iconStyle, textInputStyle } = styles;
    console.log(this.state)

    return(
      <View>

        <View style={{ width : Dimensions.get('window').width / 2 }}>
          <Image
            style={{ width: 150, height: 350, position: 'absolute', alignSelf: 'flex-end' }}
            source={require('../../img/wolf.jpeg')}
          />
        </View>


        <View style={ sectionStyle }>
          <View style={ iconStyle }>
            <Icon name="key" style={{ fontSize: 24, color: '#FE1743' }} />
          </View>
          <View style={ textInputStyle }>
            <TextInput
              style={{ height: 40, width: 300 }}
              placeholder="Password"
              placeholderTextColor= '#FE1743'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
        </View>

        <View style={{ marginTop: 550 }}>
          <Button onPress={() => Actions.LivingRoomTemperature()}>
            <Icon
              name="sign-in"
              size={20}
              color="white"
            />
          </Button>
        </View>
        <BottomPhrase />
      </View>
    );
  }
}

const styles = {
  sectionStyle: {
    alignItems: 'center',
    position: 'absolute',
    top: 450,
    flexDirection: 'row'
  },
  textInputStyle: {
    width: 300,
    borderBottomColor: '#FE1743',
    borderBottomWidth: 1
  },
  iconStyle: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default LoginForm;
