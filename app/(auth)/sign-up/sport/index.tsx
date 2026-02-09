import { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Heart,
  Activity,
  Zap,
  Weight,
  Moon,
  Smile,
  Utensils,
  Flame,
  Dumbbell,
  Trophy,
  Shuffle,
  Sparkles,
} from 'lucide-react-native';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';

const GOAL_OPTIONS = [
  {
    id: 'heart_health',
    label: 'Improve heart health',
    icon: Heart,
    fullWidth: true,
  },
  {
    id: 'track_health',
    label: 'Track my health data',
    icon: Activity,
    fullWidth: true,
  },
  {
    id: 'be_active',
    label: 'Be more active',
    icon: Zap,
    fullWidth: false,
  },
  {
    id: 'manage_weight',
    label: 'Manage weight',
    icon: Weight,
    fullWidth: false,
  },
  {
    id: 'sleep_better',
    label: 'Sleep better',
    icon: Moon,
    fullWidth: false,
  },
  {
    id: 'reduce_stress',
    label: 'Reduce stress',
    icon: Smile,
    fullWidth: false,
  },
  {
    id: 'eat_healthier',
    label: 'Eat healthier',
    icon: Utensils,
    fullWidth: true,
    isLast: true,
  },
];

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
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

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

          {/* Goals Section: What would you like to work on? */}
          <View className="mb-8 rounded-2xl border border-dashed border-primary-200 p-4">
            <View className="mb-4">
              <Text className="mb-2 font-qu-bold text-h3 text-neutral-black-500">
                What would you like to work on?
              </Text>
              <Text className="font-qu-medium text-base text-gray-500">
                You can always update your goals later in settings.
              </Text>
            </View>

            <View className="flex-row flex-wrap justify-center gap-4">
              {GOAL_OPTIONS.map((option) => {
                const isSelected = selectedGoals.includes(option.id);
                const Icon = option.icon;

                return (
                  <View
                    key={option.id}
                    className={`${
                      option.fullWidth ? 'w-full px-8' : 'w-[45%]'
                    } ${option.isLast ? 'w-auto' : ''}`}
                  >
                    <Pressable
                      onPress={() => toggleGoal(option.id)}
                      className={`flex-row items-center justify-center rounded-full border p-4 ${
                        isSelected
                          ? 'border-primary-500 bg-blue-50'
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      <Icon
                        size={20}
                        color={isSelected ? '#3B82F6' : '#6B7280'}
                        className="mr-2"
                      />
                      <Text
                        className={`ml-1 font-qu-bold text-sm ${
                          isSelected
                            ? 'text-neutral-black-500'
                            : 'text-neutral-black-500'
                        }`}
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Frequency Section: Your Exercise Frequency */}
          <View className="mb-8 rounded-2xl border border-dashed border-primary-200 p-4">
            <Text className="mb-2 font-qu-bold text-h3 text-neutral-black-500">
              Your Exercise Frequency
            </Text>
            <Text className="mb-4 font-qu-medium text-base text-gray-500">
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
                        ? 'border-primary-600 bg-primary-600'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <View className="mr-3">
                      <Icon size={24} color={isSelected ? '#fff' : '#1F2937'} />
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
                            isSelected ? 'text-white' : 'text-gray-500'
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
              className="w-full rounded-3xl bg-primary-500 shadow-md shadow-blue-200"
              onPress={handleComplete}
              disabled={
                selectedGoals.length === 0 && selectedSports.length === 0
              }
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
