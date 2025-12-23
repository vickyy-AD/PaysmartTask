import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar } from '../../../../components/toolbar';
import { styles } from './styles';
import { COMMON_IMAGES } from '../../../../utils/images';

const MyWalletScreen = () => {
  return (
    <View style={styles.container}>
      <Toolbar header="My Wallet" />
      <View
        style={styles.containerLayer}
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

export default MyWalletScreen;
