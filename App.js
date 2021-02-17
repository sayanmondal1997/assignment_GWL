import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NotificationPage from './pages/notification'
import DashboardPage from "./pages/dashboard"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (

      <Navigator />

    );
  }
}



const MainNavigator = createStackNavigator({
  Home:DashboardPage,
  NotificationPage: NotificationPage,
 
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },

  },
  {
    initialRouteName: 'Home'
  }
);

export default App
const Navigator = createAppContainer(MainNavigator);


