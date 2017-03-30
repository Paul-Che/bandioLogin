import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar={true} initial />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar={true}  />
    </Router>
  );
};

export default RouterComponent;
