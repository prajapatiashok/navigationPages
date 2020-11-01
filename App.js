import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
  
})

const App = createAppContainer(stackNavigator);

export default () => {
    return(
      <App/>
    );
};