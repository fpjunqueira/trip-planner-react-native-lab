import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen/index'
import { Text } from 'react-native' 

const TripsScreen = props => {
  return(
    <Text style={{paddingTop: 200}}>Text</Text>
  )
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)