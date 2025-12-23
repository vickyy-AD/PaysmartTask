import {  View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import CustomSwitch from '../CustomSwitch';
import { useState } from 'react';
import { colors } from '../../utils/colors';
import { DRAWER_ICONS } from '../../utils/images';

function CustomDrawerContent(props: any) {
  const [isFingerLock, setIsFingerLock] = useState(false);
  const [isPreConfirmation, setIsPreConfirmation] = useState(false);
  const [isTransactionSound, setIsTransactionSound] = useState(true);

  return (
    <View style={styles.container} {...props}>
      <View style={styles.header}>
        <Image
          source={DRAWER_ICONS.PROFILE}
          style={styles.profileImage}
        />

        <View style={styles.headerContent}>
          <Text style={styles.headerTextName}>Hi,Vicky</Text>

          <Text style={styles.headerTextInfo}>9629031193</Text>

          <Text style={styles.headerTextInfo}>jvickysekar@gmail.com</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.HELP}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Help & Support</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.ABOUT}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>About Us</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.CONTACT}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Contact Us</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.RATE}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Rate Us</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.SHARE}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Share App</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.FAQ}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>FAQ'S</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.TRAINING}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Training Tutorial</Text>
            </View>
          </View>

          <View style={styles.separator} />
          <View style={[styles.menuItem, styles.menuItemCentered]}>
            <Image
              source={DRAWER_ICONS.HELP}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Finger Lock</Text>
            </View>
            <CustomSwitch
              value={isFingerLock}
              onValueChange={() => setIsFingerLock(!isFingerLock)}
              style={styles.switch}
            />
          </View>

          <View style={styles.separator} />
          <View style={[styles.menuItem, styles.menuItemCentered]}>
            <Image
              source={DRAWER_ICONS.CONFIRMATION}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Pre Confirmation</Text>
            </View>
            <CustomSwitch
              value={isPreConfirmation}
              onValueChange={() => setIsPreConfirmation(!isPreConfirmation)}
              style={styles.switch}
            />
          </View>

          <View style={styles.separator} />

          <View style={[styles.menuItem, styles.menuItemCentered]}>
            <Image
              source={DRAWER_ICONS.SOUND}
              style={styles.menuIcon}
            />
            <View style={styles.textWrapper}>
              <Text style={styles.menuText}>Transaction Sound</Text>
            </View>
            <CustomSwitch
              value={isTransactionSound}
              onValueChange={() => setIsTransactionSound(!isTransactionSound)}
              style={styles.switch}
            />
          </View>

          <View style={styles.separator} />

          <View style={styles.menuItem}>
            <Image
              source={DRAWER_ICONS.LOGOUT}
              style={[styles.menuIcon, { tintColor: 'red' }]}
            />
            <View style={styles.textWrapper}>
              <Text style={[styles.menuText, { color: 'red' }]}>Logout</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 20,
  },
  headerContent: {
    paddingHorizontal: 12,
  },
  headerTextName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  headerTextInfo: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 1,
    fontWeight: '500',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  menuItem: {
    flexDirection: 'row',
    gap: 10,
    padding: 12,
    alignItems: 'center',
    alignContent: 'center',
  },
  menuItemCentered: {
    justifyContent: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
  separator: {
    width: '100%',
    backgroundColor: colors.disabled,
    height: 0.5,
  },
  switch: {
    marginLeft: 'auto',
  },
});

export default CustomDrawerContent;
