import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";
import LoadingScreen from "./src/containers/LoadingScreen";
import HomeScreen from "./src/containers/HomeScreen";
import DetailsScreen from "./src/containers/DetailsScreen";
import FormScreen from "./src/containers/FormScreen";
 
const RootStack = StackNavigator({
  Loading: {
    screen: LoadingScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Form: {
    screen: FormScreen,
  }
},
{
  initialRouteName: 'Loading',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}