import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import BubuAvatar from '@/assets/images/bubu-recommend.svg';

export const TypingIndicator = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (anim: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 300,
            delay,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
        ]),
      ).start();
    };

    animate(dot1, 0);
    animate(dot2, 150);
    animate(dot3, 300);
  }, [dot1, dot2, dot3]);

  const opacity = (anim: Animated.Value) =>
    anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    });

  return (
    <View className="mb-6 flex-row justify-start">
      <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-white">
        <BubuAvatar width={32} height={32} />
      </View>
      <View className="h-14 justify-center rounded-xl rounded-tl-none border border-primary-200 bg-white p-4">
        <View className="flex-row gap-1">
          <Animated.View
            style={{ opacity: opacity(dot1) }}
            className="h-2 w-2 rounded-full bg-neutral-400"
          />
          <Animated.View
            style={{ opacity: opacity(dot2) }}
            className="h-2 w-2 rounded-full bg-neutral-400"
          />
          <Animated.View
            style={{ opacity: opacity(dot3) }}
            className="h-2 w-2 rounded-full bg-neutral-400"
          />
        </View>
      </View>
    </View>
  );
};
