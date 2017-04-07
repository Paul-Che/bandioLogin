import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import MonthlySummaryTemperature from './components/MonthlySummaryTemperature';
import Demo from './components/Demo';

const RouterComponent = () => {
  const { navigationBarStyle, titleStyle } = styles;

  return (
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar />
      <Scene key="Demo" component={Demo} hideNavBar />
      <Scene
        key="MonthlySummaryTemperature"
        component={MonthlySummaryTemperature}
        navigationBarStyle={navigationBarStyle}
        titleStyle={titleStyle}
        title="Temperature History"
        hideNavBar={false}
        initial
      />
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: '#800000',
    height: 60
  },
  titleStyle: {
    height: 19,
    color: '#FFF',
    fontSize: 15
  }
};

export default RouterComponent;
