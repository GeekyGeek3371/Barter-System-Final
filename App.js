import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('XUb3eTt42XqgVh50mnJbvHx4bUL1AIJojOFodwlH', 'OgqmQFccXTuC3wnFZXeDDOZoLdgo7FAR0Pnqtjct');

Parse.serverURL = 'https://parseapi.back4app.com/'

import Login from './screens/loginScreen'
import Signup from './screens/SignupScreen'
import Home from './screens/HomeScreen'
import onboardingScreen from './screens/onboardingScreen'

const Stack = createNativeStackNavigator();
export default function App() {

  // const [loading, setLoading] = useState(true)
  // const [user, setUser] = useState(null)
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null)

  // var routeName;

  // useEffect(() => {
  //   AsyncStorage.getItem('alreadyLaunched')
  //     .then(value => {
  //       if (value === null) {
  //         AsyncStorage.setItem('alreadyLaunced', 'true')
  //         setIsFirstLaunch(true)
  //       }
  //       else {
  //         setIsFirstLaunch(false)
  //       }
  //     })

  // }, [])

  // if (isFirstLaunch === null) {
  //   return null;
  // }
  // else if (isFirstLaunch === true) {
  //   routeName = 'Onboarding'
  // }
  // else {
  //   routeName = 'Login'
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={onboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
