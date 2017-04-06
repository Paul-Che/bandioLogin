import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import LivingRoomTemperature from './components/LivingRoomTemperature';
import MonthlySummaryTemperature from './components/MonthlySummaryTemperature';
import Demo from './components/Demo';

const RouterComponent = () => {
  const { navigationBarStyle, titleStyle } = styles;

  return(
    <Router>
      <Scene key="Login" component={LoginForm} hideNavBar={true}  />
      <Scene key="LivingRoomTemperature" component={LivingRoomTemperature} hideNavBar={true} />
      <Scene key="Demo" component={Demo} hideNavBar={true} />
      <Scene key="MonthlySummaryTemperature"
        component={MonthlySummaryTemperature}
        navigationBarStyle={navigationBarStyle}  titleStyle={titleStyle}
        title="Temperature History"
        hideNavBar={false}
        initial />
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: '#800000',
    height: 50
  },
  titleStyle: {
    height: 19,
    color : "#FFF",
    fontSize: 15
  }
}

export default RouterComponent;
