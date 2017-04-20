import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { MonthlyTempDetail } from './Index';

class MonthlyTempScrollView extends Component {
  state = { monthDatas: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/mado7')
      .then(response => this.setState({ monthDatas: response.data }));
  }

  renderMonthData() {
    return this.state.monthDatas.map(monthData =>
      <MonthlyTempDetail key={monthData.month} monthData={monthData} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderMonthData()}
      </ScrollView>
    );
  }
}

export { MonthlyTempScrollView };
