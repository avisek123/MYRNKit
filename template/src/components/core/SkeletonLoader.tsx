import LinearGradient from "react-native-linear-gradient";
import React, { memo, useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  ViewStyle,
  LayoutChangeEvent,
} from "react-native";

interface SkeletonProps {
  colors?: string[];
  gradientStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
}

const GREY = "rgb(225, 225, 225)";
const SkeletonAnimatedValue = new Animated.Value(0);

const Skeleton: React.FC<SkeletonProps> = ({
  colors,
  gradientStyle,
  wrapperStyle,
}) => {
  const [viewWidth, setViewWidth] = useState(-1);

  const gradientColors = [GREY, "#fff", GREY];

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(SkeletonAnimatedValue, {
        useNativeDriver: false,
        delay: 1100,
        duration: 750,
        toValue: 1,
      })
    ).start();
  };

  const onLayoutChange = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  const getLeftValue = () => {
    return SkeletonAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-viewWidth, viewWidth],
    });
  };

  const width = Dimensions.get("screen").width;
  const loadingStyle = { backgroundColor: GREY };
  const left = getLeftValue();

  return (
    <View
      style={{
        width: wrapperStyle?.width ?? width,
        height: wrapperStyle?.height ?? 80,
      }}
    >
      <View
        style={[styles.container, loadingStyle, wrapperStyle]}
        onLayout={onLayoutChange}
      >
        <Animated.View style={[{ flex: 1, left }, gradientStyle]}>
          <LinearGradient
            colors={colors || gradientColors}
            start={{ x: 0.3, y: 0.2 }}
            end={{ x: 0.8, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default memo(Skeleton);
