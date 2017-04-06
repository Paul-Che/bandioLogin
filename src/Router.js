import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import MonthlySummaryTemperature from './components/MonthlySummaryTemperature';
import Demo from './components/Demo';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar={true}  />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar={true} />
      <Scene key="Demo" component={Demo} hideNavBar={true} />
      <Scene key="MonthlySummaryTemperature" component={MonthlySummaryTemperature} title="Temperature History" hideNavBar={true} initial />
    </Router>
  );
};

export default RouterComponent;
