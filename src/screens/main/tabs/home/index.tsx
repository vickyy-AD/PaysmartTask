import { Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar } from '../../../../components/toolbar';
import { styles } from './style';
import { COMMON_IMAGES } from '../../../../utils/images';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Toolbar header="Welcome Back" />
      <View
        style={styles.container}
      >
        <Image
          source={COMMON_IMAGES.COMMING_SOON}
          style={{ width: 350, height: 350 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
