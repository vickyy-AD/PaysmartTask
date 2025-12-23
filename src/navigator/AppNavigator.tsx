import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/landing/splash';
import MainScreen from '../screens/main';
import HomeScreen from '../screens/main/tabs/home';
import HistoryScreen from '../screens/main/tabs/history';
import MyBussinessScreen from '../screens/main/tabs/myBussiness';
import MyWalletScreen from '../screens/main/tabs/myWallet';
import ScanScreen from '../screens/main/tabs/scan';

export type RootStackParamList = {
  SplashScreen: undefined;
  MainScreen: undefined;
  HomeScreen: undefined;
  HistoryScreen: undefined;
  MyBussinessScreen: undefined;
  MyWalletScreen: undefined;
  ScanScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyBussinessScreen"
        component={MyBussinessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyWalletScreen"
        component={MyWalletScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
