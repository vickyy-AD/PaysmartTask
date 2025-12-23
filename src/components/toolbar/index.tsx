import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../utils/colors';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TOOLBAR_ICONS } from '../../utils/images';

type ToolbarProps = {
  header: string;
};

export const Toolbar = ({ header }: ToolbarProps) => {
  const navigation = useNavigation<any>();
  const openDrawerSafe = () => {
    let nav: any = navigation as any;
     while (nav) {
      if (typeof nav.openDrawer === 'function') {
        nav.openDrawer();
        return;
      }
      nav = typeof nav.getParent === 'function' ? nav.getParent() : null;
    }

     navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 12,
        elevation: 4,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        borderBottomColor: colors.border,
        borderBottomWidth: 0.5,
      }}
    >
      <TouchableOpacity onPress={openDrawerSafe}>
        <Image
          source={TOOLBAR_ICONS.PROFILE}
          style={{ width: 42, height: 42, borderRadius: 21, marginRight: 12 }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
           color: colors.white,
        }}
      >
        {header}
      </Text>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Image
          source={TOOLBAR_ICONS.NOTIFICATION}
          style={{ width: 24, height: 24, marginLeft: 'auto' }}
        />
      </TouchableOpacity>
    </View>
  );
};
