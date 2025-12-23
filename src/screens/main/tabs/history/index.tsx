import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Toolbar } from '../../../../components/toolbar';
import { RootStackParamList } from '../../../../navigator/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { styles as drawerStyles } from '../../../../components/drawer';
import { styles } from './styles';
import { HISTORY_ICONS } from '../../../../utils/images';

type HistoryNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'HistoryScreen'
>;

type HistoryItem = {
  title: string;
  icon: any;
 };

const HISTORY_LIST: HistoryItem[] = [
  {
    title: 'Downline Wallet Transaction',
    icon: HISTORY_ICONS.DOWNLINE_WALLET,
   },
  {
    title: 'Downline Recharge History',
    icon: HISTORY_ICONS.RECHARGE,
   },
  {
    title: 'My Wallet Transaction',
    icon: HISTORY_ICONS.WALLET,
   },
  {
    title: 'My Transaction History',
    icon: HISTORY_ICONS.TRANSACTION,
   },
  {
    title: 'Offline Transaction',
    icon: HISTORY_ICONS.OFFLINE,
  },
  {
    title: 'My Cashback Report',
    icon: HISTORY_ICONS.CASHBACK,
  },
  {
    title: 'My Shopping History',
    icon: HISTORY_ICONS.SHOPPING,
  },
  {
    title: 'My Referral History',
    icon: HISTORY_ICONS.REFERRAL,
  },
  {
    title: 'My Reward History',
    icon: HISTORY_ICONS.REWARD,
  },
  {
    title: 'Dispute Settlement',
    icon: HISTORY_ICONS.DISPUTE,
  },
  {
    title: 'Share Settlement',
    icon: HISTORY_ICONS.DISPUTE,
  },
];

const ListItem = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: any;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.notificationItem, { marginBottom: 10 }]}
  >
    <Image source={icon} style={drawerStyles.menuIcon} tintColor="white" />

    <View style={drawerStyles.textWrapper}>
      <Text style={styles.notificationText}>{title}</Text>
    </View>

    <Image
      source={HISTORY_ICONS.RIGHT_ARROW}
      style={[drawerStyles.menuIcon, drawerStyles.switch]}
      tintColor="white"
    />
  </TouchableOpacity>
);

const HistoryScreen = () => {
  const navigation = useNavigation<HistoryNavProp>();

  const handlePress = (item: HistoryItem) => {
  console.log(item);
  };

  return (
    <View style={styles.container}>
      <Toolbar header="My History" />

      <View style={styles.headerContainer}>
        <Image
          source={HISTORY_ICONS.HEADER_BG}
          style={styles.headerImage}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View>
          {HISTORY_LIST.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => handlePress(item)}
            />
          ))}

          <View style={{ height: 350 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;
