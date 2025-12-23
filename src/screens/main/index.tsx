import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScanScreen from './tabs/scan';
import HomeScreen from './tabs/home';
import MyWalletScreen from './tabs/myWallet';
import MyBussinessScreen from './tabs/myBussiness';
import HistoryScreen from './tabs/history';
import CustomDrawerContent from '../../components/drawer';
import { styles } from './style';
import { TAB_ICONS } from '../../utils/images';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const getTabIcon = (routeName: string, color: string) => {
  let iconSource;

  switch (routeName) {
    case 'Home':
      iconSource = TAB_ICONS.HOME;
      break;
    case 'My Wallet':
      iconSource = TAB_ICONS.WALLET;
      break;
    case 'Scan':
      iconSource = TAB_ICONS.SCAN;
      break;
    case 'My Network':
      iconSource = TAB_ICONS.NETWORK;
      break;
    case 'History':
      iconSource = TAB_ICONS.HISTORY;
      break;
    default:
      iconSource = TAB_ICONS.HOME;
  }

   if (routeName === 'Scan') {
    return (
      <View style={styles.scanWrapper}>
        <Image source={iconSource} style={styles.scanIcon} />
      </View>
    );
  }

  return (
    <Image source={iconSource} style={[styles.tabIcon, { tintColor: color }]} />
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#19191970',
        tabBarIcon: ({ color }) => getTabIcon(route.name, color),
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabel : styles.inactiveLabel}>
            {route.name}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Network" component={MyBussinessScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="My Wallet" component={MyWalletScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default MainScreen;


