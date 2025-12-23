import { Image, Text, View } from 'react-native';
import { Toolbar } from '../../../../components/toolbar';
import { styles } from './styles';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Toolbar header="Scan" />
      <View
        style={styles.containerLayer}
      >
        <Image
          source={require('../../../../assets/png/comming.png')}
          style={{ width: 350, height: 350 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default ScanScreen;
