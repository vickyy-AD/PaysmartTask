import { StatusBar, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import AppNavigator from './src/navigator/AppNavigator';
import { colors } from './src/utils/colors';

function App() {
 
  return (
    <SafeAreaProvider>
     <StatusBar
          translucent
          backgroundColor={colors.primary}
          barStyle="light-content"
        />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
