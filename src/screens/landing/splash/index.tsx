import { Image, StatusBar, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { RootStackParamList } from '../../../navigator/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './style';
type SplashNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavProp>();

  useEffect(() => {
     setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainScreen' }],
      });
    }, 2000); 
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={styles.containerImage}
      >
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <Image source={require('../../../assets/png/logo.jpg')} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
