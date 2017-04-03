import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import MonthlySummaryTemperature from './components/MonthlySummaryTemperature';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar={true}  />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar={true} initial />
      <Scene key="MonthlySummaryTemperature" component={MonthlySummaryTemperature} title="Temperature History" hideNavBar={false}/>
    </Router>
  );
};

export default RouterComponent;
