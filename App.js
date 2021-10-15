import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)