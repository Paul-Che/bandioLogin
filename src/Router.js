import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import TemperatureHistory from './components/temperatureHistory/TemperatureHistory';

const RouterComponent = () => {
  const { navigationBarStyle, titleStyle } = styles;

  return (
    <Router barButtonIconStyle={{ tintColor: 'white' }} >
      <Scene key="Login" component={LoginForm} hideNavBar />
      <Scene
        key="LivingRoomTemperature"
        component={LivingRoomTemperature}
        hideNavBar
        initial
      />
      <Scene
        key="TemperatureHistory"
        component={TemperatureHistory}
        navigationBarStyle={navigationBarStyle}
        titleStyle={titleStyle}
        title="Temperature History"
        hideNavBar={false}
      />
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: '#800000',
    alignSelf: 'center',
    height: 60,
    margin: 0.4,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 2
  },
  titleStyle: {
    height: 19,
    color: '#FFF',
    fontSize: 15
  }
};

export default RouterComponent;
