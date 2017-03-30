import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import CircularSliderTest from './components/CircularSliderTest';
import CircularSliderTest2 from './components/CircularSliderTest2';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar={true} />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar={true} />
      <Scene key="CircularSliderTest" component={CircularSliderTest} hideNavBar={true} initial />
      <Scene key="CircularSliderTest2" component={CircularSliderTest2} hideNavBar={true} />
    </Router>
  );
};

export default RouterComponent;
