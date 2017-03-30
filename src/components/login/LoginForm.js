import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from '../common';
import Title from './Title';
import BottomPhrase from './BottomPhrase';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    const { containerStyle, sectionStyle, iconStyle, lineStyle, textInputStyle } = styles;

    return(
      <View>
        <Title titleText={'booq'} />

        <View style={{ padding: 20 }}>
          <View style={ sectionStyle }>
            <View style={ iconStyle }>
              <Icon name="user-o" style={{ fontSize: 24, color: '#FE1743' }} />
            </View>
            <View style={ textInputStyle }>
              <TextInput
                style={{ height: 40, width: 300 }}
                placeholder="Username"
                placeholderTextColor= '#FE1743'
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </View>
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
        </View>

        <View style={{ marginTop: 100 }}>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  textInputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 300,
    borderBottomColor: '#FE1743',
    borderBottomWidth: 1
  },
  lineStyle: {
    marginLeft: 20,
    borderBottomColor: '#FE1743',
    width: 300,
    height: 20,
    borderBottomWidth: 1,
    borderWidth: 1
  },
  iconStyle: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default LoginForm;
