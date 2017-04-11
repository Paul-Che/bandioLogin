import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MonthlyTempDetail from './MonthlyTempDetail';

class MonthlyTempScrollView extends Component {
  state = { monthDatas: [] };

  componentWillMount() {
    axios.get('https:/...')
      .then(response => this.setState({ monthDatas: response.data }));
  }

  renderMonthData() {
    return this.state.monthDatas.map(monthData =>
      <MonthlyTempDetail key={monthData.title} monthData={monthData} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderMonthData()}
      </ScrollView>
    );
  }
}

export { MonthlyTempScrollView };
