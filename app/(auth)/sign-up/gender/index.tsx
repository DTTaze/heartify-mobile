import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  ArrowRight,
  Mars as MarsIcon,
  Venus as VenusIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';
import { useSignUp } from '../context';
import { Gender } from '@/src/types/user';

export default function SignUpGenderScreen() {
  const router = useRouter();
  const { data, updateData } = useSignUp();
  const [selectedGender, setSelectedGender] = useState<Gender | null>(
    data.gender || null,
  );

  const handleGenderSelect = (gender: Gender) => {
    setSelectedGender(gender);
    updateData({ gender });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
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
        <View className="mb-20 mt-2">
          <View className="relative mb-2 w-full flex-row justify-center">
            <View className="absolute -top-8 left-[60%] -translate-x-1/2 items-center">
              <View className="mb-1 rounded-md bg-neutral-100 px-2 py-0.5">
                <Text className="font-qu-bold text-xs text-neutral-black-500">
                  60%
                </Text>
              </View>
            </View>
          </View>
          <Progress
            value={60}
            className="h-1 bg-primary-100"
            indicatorClassName="bg-primary-500"
          />
        </View>

        {/* Content */}
        <View className="mt-4 flex-1">
          <View className="mb-8">
            <Text className="mb-2 font-qu-bold text-xl text-neutral-black-500">
              What is your gender?
            </Text>
            <Text className="font-qu-medium text-base leading-5 text-neutral-black-500">
              You can adjust it when you have finished registation
            </Text>
          </View>

          <View className="mt-6 flex-row justify-center gap-6 p-6">
            <Pressable
              onPress={() => handleGenderSelect(Gender.MALE)}
              className={cn(
                'h-32 w-32 items-center justify-center rounded-md border-2 transition-all',
                selectedGender === Gender.MALE
                  ? 'border-primary-400 bg-primary-500'
                  : 'border-primary-400 bg-white',
              )}
            >
              <View className="items-center">
                <Text
                  className={cn(
                    'mb-2 font-qu-bold text-xl text-neutral-black-500',
                    selectedGender === Gender.MALE
                      ? 'text-white'
                      : 'text-neutral-black-500',
                  )}
                >
                  Male
                </Text>
                <MarsIcon
                  size={48}
                  color={selectedGender === Gender.MALE ? '#EDF4FB' : '#4892D3'}
                  strokeWidth={2.5}
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => handleGenderSelect(Gender.FEMALE)}
              className={cn(
                'h-32 w-32 items-center justify-center rounded-md border-2 transition-all',
                selectedGender === Gender.FEMALE
                  ? 'border-primary-400 bg-[#EF7979]'
                  : 'border-primary-400 bg-white',
              )}
            >
              <View className="items-center">
                <Text
                  className={cn(
                    'mb-2 font-qu-bold text-xl text-neutral-black-500',
                    selectedGender === Gender.FEMALE
                      ? 'text-white'
                      : 'text-neutral-black-500',
                  )}
                >
                  Female
                </Text>
                <VenusIcon
                  size={48}
                  color={
                    selectedGender === Gender.FEMALE ? '#FFFFFF' : '#EF7979'
                  }
                  strokeWidth={2.5}
                />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View className="pb-8 pt-4">
          <Button
            disabled={!selectedGender}
            className="w-full rounded-3xl bg-primary-500"
            onPress={() => router.push('/sign-up/measurements' as any)}
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
    </SafeAreaView>
  );
}
