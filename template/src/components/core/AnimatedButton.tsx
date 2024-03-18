// External Library Import
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// Internal Library Import
import {Colors} from 'constant';
import {DimensionWidth} from 'utils';
import AppText from './AppText';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

interface AnimatedBtnLoaderProps {
  buttonText: string;
  handlePress: () => void;
  setBtnClicked: (arg: boolean) => void;
  btnClicked: boolean;
}

const AnimatedButton: React.FC<AnimatedBtnLoaderProps> = ({
  buttonText,
  handlePress,
  setBtnClicked,
  btnClicked,
}) => {
  const btnWidth = DimensionWidth / 1.2;
  const animatedWidth = useSharedValue(btnWidth);
  const animatedRadius = useSharedValue(15);

  useEffect(() => {
    // Update animation values when btnClicked changes
    if (btnClicked) {
      animatedWidth.value = withTiming(50, {duration: 500});
      animatedRadius.value = withTiming(25, {duration: 500});
    } else {
      animatedWidth.value = withTiming(btnWidth, {duration: 500});
      animatedRadius.value = withTiming(15, {duration: 500});
    }
  }, [btnClicked]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedRadius.value,
    };
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedBtn
        style={[
          {
            width: btnWidth,
            height: 50,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
          },
          animatedStyle,
        ]}
        onPress={() => {
          handlePress();
        }}>
        {btnClicked ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <AppText
            text={buttonText}
            style={{
              color: Colors.SECONDARY,
              fontSize: 20,
              fontWeight: '800',
            }}
          />
        )}
      </AnimatedBtn>
    </View>
  );
};

export default AnimatedButton;
