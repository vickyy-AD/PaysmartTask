import React, { useRef, useEffect } from 'react';
import { colors } from '../../utils/colors';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  trackWidth?: number;
  trackHeight?: number;
  thumbSize?: number;
  style?: object;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  trackWidth = 50,
  trackHeight = 28,
  thumbSize = 22,
  style = {},
}) => {
  const translateX = useRef(new Animated.Value(value ? 1 : 0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: value ? 1 : 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [value]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  const knobTranslateX = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [
      (trackHeight - thumbSize) / 2,  
      trackWidth - thumbSize - (trackHeight - thumbSize) / 2, 
    ],
  });

  const containerWidth = trackWidth + 4;
  const containerHeight = trackHeight + 4;

  return (
    <View
      style={[
        styles.container,
        { width: containerWidth, height: containerHeight },
        style,
      ]}
    >
 
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        disabled={disabled}
        style={styles.touchable}
      >
        <Animated.View
          style={[
            styles.switchTrack,
            {
              width: trackWidth,
              height: trackHeight,
              backgroundColor: value ? colors.primary : colors.disabled,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.switchThumb,
              {
                width: thumbSize,
                height: thumbSize,
                transform: [{ translateX: knobTranslateX }],
              },
            ]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchTrack: {
    borderRadius: 14,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  switchThumb: {
    backgroundColor: colors.white,
    borderRadius: 11,
    position: 'absolute',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default CustomSwitch;
