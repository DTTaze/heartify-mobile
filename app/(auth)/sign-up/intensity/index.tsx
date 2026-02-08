import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  LayoutChangeEvent,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight, Zap } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { RunIcon } from '@/assets/icons';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';

const INTENSITY_LEVELS = [
  {
    label: 'Walking\nStretching\nLight chores.',
    color: '#60A5FA', // Blue-400
    trackColor: '#93C5FD', // Blue-300
  },
  {
    label: 'Breath faster.',
    color: '#34D399', // Emerald-400
    trackColor: '#6EE7B7', // Emerald-300
  },
  {
    label: 'Intense activity.',
    color: '#FBBF24', // Amber-400
    trackColor: '#FCD34D', // Amber-300
  },
];

const FREQUENCY_OPTIONS = [
  {
    id: 'very_active',
    label: 'Very Active',
    subLabel: '6-7 days per week',
    zaps: 4,
  },
  {
    id: 'active',
    label: 'Active',
    subLabel: '4-5 days per week',
    zaps: 3,
  },
  {
    id: 'regular',
    label: 'Regular',
    subLabel: '2-3 days per week',
    zaps: 2,
  },
  {
    id: 'occasionally',
    label: 'Occasionally',
    subLabel: 'One day per week',
    zaps: 1,
  },
];

export default function IntensityScreen() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [intensityLevel, setIntensityLevel] = useState(0); // 0, 1, 2
  const [frequency, setFrequency] = useState<string | null>(null);

  // Shared values
  const translateX = useSharedValue(0);
  const context = useSharedValue(0);
  const sliderWidthSV = useSharedValue(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    sliderWidthSV.value = width;

    // Initialize position based on current level if width changes
    if (width > 0 && translateX.value === 0) {
      translateX.value = width / 6 - 16;
    }
  };

  const updateIntensityLevel = (level: number) => {
    setIntensityLevel(level);
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = translateX.value;
    })
    .onUpdate((event) => {
      let newValue = context.value + event.translationX;
      // Constrain to slider bounds
      const width = sliderWidthSV.value;
      if (width > 0) {
        if (newValue < -16) newValue = -16;
        if (newValue > width - 16) newValue = width - 16;
        translateX.value = newValue;
      }
    })
    .onEnd(() => {
      const width = sliderWidthSV.value;
      if (width <= 0) return;

      const segmentWidth = width / 3;
      const currentCenter = translateX.value + 16;

      let index = Math.floor(currentCenter / segmentWidth);
      if (index < 0) index = 0;
      if (index > 2) index = 2;

      const targetX = index * segmentWidth + segmentWidth / 2 - 16;

      translateX.value = withSpring(targetX, { damping: 15 });
      runOnJS(updateIntensityLevel)(index);
    });

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Animated styles for text labels to show/hide based on position
  const TextStyle = (index: number) =>
    useAnimatedStyle(() => {
      const width = sliderWidthSV.value;
      if (width <= 0) return { opacity: index === 0 ? 1 : 0 }; // Default to 0 visible

      const segmentWidth = width / 3;
      const currentPos = translateX.value + 16;
      const currentIndex = Math.floor(currentPos / segmentWidth);

      // Smooth opacity transition or just hard switch?
      // User asked it "chạy theo" (follow). If the text just switches, it's fine.
      // Let's fade in/out based on distance to center of segment?
      // Or simpler: strictly based on active segment.
      const isActive =
        currentIndex === index ||
        (currentIndex < 0 && index === 0) ||
        (currentIndex > 2 && index === 2);

      return {
        opacity: withSpring(isActive ? 1 : 0),
        // Enhance: maybe scale it too?
        transform: [{ scale: withSpring(isActive ? 1 : 0.8) }],
      };
    });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between py-4">
            <Pressable
              onPress={() => router.back()}
              className="flex-row items-center rounded-full bg-primary-400 px-3 py-1.5"
            >
              <ChevronLeft size={20} color="white" />
              <Text className="ml-1 font-qu-bold text-sm text-white">Back</Text>
            </Pressable>
          </View>

          {/* Progress */}
          <View className="mb-8 mt-2">
            <View className="relative mb-2 w-full flex-row justify-center">
              <View className="absolute -top-8 left-[90%] -translate-x-1/2 items-center">
                <View className="mb-1 rounded-md bg-neutral-100 px-2 py-0.5">
                  <Text className="font-qu-bold text-xs text-neutral-black-500">
                    90%
                  </Text>
                </View>
              </View>
            </View>
            <Progress
              value={90}
              className="h-1 bg-primary-100"
              indicatorClassName="bg-primary-500"
            />
          </View>

          {/* Intensity Slider Section */}
          <View className="mb-8 rounded-2xl border border-dashed border-primary-200 p-4">
            <Text className="mb-2 font-qu-bold text-lg text-neutral-black-500">
              What&apos;s your intensity
            </Text>
            <Text className="mb-4 font-qu-semibold text-sm text-gray-500">
              Choose the level that best matches your usual workouts.
            </Text>

            <View className="mb-16 mt-4" onLayout={handleLayout}>
              {/* Slider Track */}
              <GestureDetector gesture={panGesture}>
                <View className="relative z-10 bg-transparent py-4">
                  <View className="h-2 w-full flex-row overflow-hidden rounded-full">
                    {INTENSITY_LEVELS.map((level, index) => (
                      <View
                        key={index}
                        className="flex-1"
                        style={{ backgroundColor: level.trackColor }}
                      />
                    ))}
                  </View>

                  {/* Slider Thumb & Moving Description */}
                  <Animated.View
                    className="absolute left-0 top-1 items-center justify-center p-2"
                    style={[thumbStyle, { top: 0, width: 40, marginLeft: -4 }]} // width 40 to contain icon? Center point is what matters.
                    // Actually, translateX drives the whole view.
                    // Thumb visual center needs to be at translateX + 16 (relative to view).
                    // If view width is auto, we need to center content.
                  >
                    {/* Thumb Icon */}
                    <View className="z-20 h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
                      <RunIcon width={20} height={20} />
                    </View>

                    {/* Moving Description Bubble */}
                    <View className="absolute top-10 w-40 items-center">
                      {INTENSITY_LEVELS.map((level, index) => (
                        <Animated.View
                          key={index}
                          className="absolute top-0 items-center rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
                          style={TextStyle(index)}
                        >
                          <Text className="text-center font-qu-semibold text-xs leading-4 text-neutral-black-500">
                            {level.label}
                          </Text>
                        </Animated.View>
                      ))}
                    </View>
                  </Animated.View>
                </View>
              </GestureDetector>
            </View>
          </View>

          {/* Frequency Section */}
          <View className="mb-8 rounded-2xl border border-dashed border-primary-200 p-4">
            <Text className="mb-2 font-qu-bold text-lg text-neutral-black-500">
              Your Exercise Frequency
            </Text>
            <Text className="mb-1 font-qu-semibold text-sm text-gray-500">
              Tell us how often you usually work out.
            </Text>
            <Text className="mb-4 font-qu-semibold text-xs text-gray-400">
              Choose one option that fits you best.
            </Text>

            <View className="gap-3">
              {FREQUENCY_OPTIONS.map((option) => {
                const isSelected = frequency === option.id;
                return (
                  <Pressable
                    key={option.id}
                    onPress={() => setFrequency(option.id)}
                    className={`flex-row items-center justify-between rounded-xl border p-4 ${
                      isSelected
                        ? 'border-primary-600 bg-primary-600'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <View>
                      <Text
                        className={`font-qu-bold text-base ${
                          isSelected ? 'text-white' : 'text-neutral-black-500'
                        }`}
                      >
                        {option.label}
                      </Text>
                      <Text
                        className={`font-qu-semibold text-sm ${
                          isSelected ? 'text-gray-200' : 'text-gray-500'
                        }`}
                      >
                        {option.subLabel}
                      </Text>
                    </View>
                    <View className="flex-row gap-1">
                      {Array.from({ length: option.zaps }).map((_, i) => (
                        <Zap
                          key={i}
                          size={16}
                          fill={isSelected ? 'white' : '#60A5FA'}
                          color={isSelected ? 'white' : '#60A5FA'}
                        />
                      ))}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Footer */}
          <View className="pb-8 pt-4">
            <Button
              disabled={!frequency}
              className="w-full rounded-3xl bg-primary-500"
              onPress={() => router.push('/sign-up/sport' as any)}
            >
              <View className="flex-row items-center space-x-2">
                <Text className="mr-2 font-qu-bold text-base text-white">
                  Next step
                </Text>
                <ArrowRight size={24} color="white" />
              </View>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
