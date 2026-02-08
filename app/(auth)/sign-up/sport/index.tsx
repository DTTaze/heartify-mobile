import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Flame,
  Dumbbell,
  Trophy,
  Shuffle,
  Sparkles,
} from 'lucide-react-native';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';

const SPORT_OPTIONS = [
  {
    id: 'cardio',
    label: 'Cardio',
    description: 'Walking, running, cycling',
    icon: Flame,
  },
  {
    id: 'light_recovery',
    label: 'Light / recovery',
    description: 'Yoga, stretching',
    icon: Sparkles,
  },
  {
    id: 'strength_gym',
    label: 'Strength / gym',
    description: '',
    icon: Dumbbell,
  },
  {
    id: 'sports',
    label: 'Sports',
    description: '',
    icon: Trophy,
  },
  {
    id: 'mix',
    label: 'Mix',
    description: '',
    icon: Shuffle,
  },
];

export default function SportScreen() {
  const router = useRouter();
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleSport = (id: string) => {
    setSelectedSports((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleComplete = () => {
    // In a real app, save data here
    router.replace('/(tabs)');
  };

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
              <View className="absolute -top-8 left-[100%] -translate-x-1/2 items-center">
                <View className="mb-1 rounded-md bg-neutral-100 px-2 py-0.5">
                  <Text className="font-qu-bold text-xs text-neutral-black-500">
                    100%
                  </Text>
                </View>
              </View>
            </View>
            <Progress
              value={100}
              className="h-1 bg-primary-100"
              indicatorClassName="bg-primary-500"
            />
          </View>

          {/* Header Texts */}
          <View className="mb-6 rounded-2xl border border-dashed border-primary-200 p-4">
            <Text className="mb-2 font-qu-bold text-lg text-neutral-black-500">
              What would you like to work on?
            </Text>
            <Text className="font-qu-medium text-sm text-gray-500">
              You can always update your goals later in settings.
            </Text>
          </View>

          {/* Frequency/Sport Selection Section */}
          <View className="mb-8 rounded-2xl border border-dashed border-primary-200 p-4">
            <Text className="mb-2 font-qu-bold text-lg text-neutral-black-500">
              Your Exercise Frequency
            </Text>
            <Text className="mb-4 font-qu-medium text-sm text-gray-500">
              Tell us how often you usually work out.
              {'\n\n'}
              Choose one or many options
            </Text>

            <View className="gap-3">
              {SPORT_OPTIONS.map((option) => {
                const isSelected = selectedSports.includes(option.id);
                const Icon = option.icon;

                return (
                  <Pressable
                    key={option.id}
                    onPress={() => toggleSport(option.id)}
                    className={`flex-row items-center rounded-xl border p-4 ${
                      isSelected
                        ? 'border-[#3B82F6] bg-[#3B82F6]' // Blue-500 distinct from Intensity screen dark blue? User said "color 4".
                        : // Image 4 shows standard blue primary logic.
                          // Wait, user said "same as image 4". Let's stick to standard blue.
                          'border-gray-200 bg-white'
                    }`}
                  >
                    <View className="mr-3">
                      <Icon
                        size={24}
                        color={isSelected ? 'white' : '#1F2937'} // White or Dark Gray
                      />
                    </View>
                    <View className="flex-1">
                      <Text
                        className={`font-qu-bold text-base ${
                          isSelected ? 'text-white' : 'text-neutral-black-500'
                        }`}
                      >
                        {option.label}
                      </Text>
                      {option.description ? (
                        <Text
                          className={`font-qu-medium text-sm ${
                            isSelected ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {option.description}
                        </Text>
                      ) : null}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Footer */}
          <View className="mt-auto pb-8">
            <Button
              className="w-full rounded-3xl bg-primary-500"
              onPress={handleComplete}
            >
              <Text className="font-qu-bold text-base text-white">
                Complete
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
