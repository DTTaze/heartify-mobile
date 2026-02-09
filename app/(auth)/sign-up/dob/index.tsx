import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  Calendar as CalendarIcon,
  ArrowRight,
} from 'lucide-react-native';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSignUp } from '../context';

export default function SignUpDobScreen() {
  const router = useRouter();
  const { data, updateData } = useSignUp();
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState<Date>(
    data.dateOfBirth ? new Date(data.dateOfBirth) : new Date(),
  );

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowModal(false);
    setDate(currentDate);
    updateData({ dateOfBirth: currentDate.toISOString() });
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
        <View className="mb-8 mt-2">
          <View className="mb-2 flex-row items-center">
            <View className="rounded-md bg-neutral-100 px-2 py-0.5">
              <Text className="font-qu-bold text-xs text-neutral-black-500">
                30%
              </Text>
            </View>
          </View>
          <Progress
            value={30}
            className="h-1 bg-primary-100"
            indicatorClassName="bg-primary-500"
          />
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="mb-8">
            <Text className="mb-2 font-qu-bold text-2xl text-neutral-black-500">
              What is your date of birth
            </Text>
            <Text className="font-qu-medium text-sm leading-5 text-neutral-black-500">
              Choose your birthday, you can also adjust it when you have
              finished
              {'\n'}
              <Text className="text-xs text-neutral-black-300">
                We use your age to estimate heart risk more accurately.
              </Text>
            </Text>
          </View>

          {/* Date Input Simulation */}
          <View className="mb-4">
            <Text className="mb-1 font-qu-semibold text-sm text-gray-700">
              Birthday
            </Text>
            <Pressable
              onPress={() => setShowModal(true)}
              className="flex-row items-center rounded-xl border border-gray-300 bg-white px-4 py-3"
            >
              <CalendarIcon size={20} color="#4892D3" className="mr-2" />
              <Text className="font-qu-medium text-base text-neutral-black-500">
                {date.toDateString()}
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View className="pb-8">
          <Button
            className="w-full rounded-3xl bg-primary-500 font-qu-semibold text-base text-white"
            onPress={() => {
              updateData({ dateOfBirth: date.toISOString() });
              router.push('/sign-up/gender' as any);
            }}
          >
            <View className="flex-row items-center space-x-2">
              <Text className="mr-2 font-qu-bold text-white">Next step</Text>
              <ArrowRight size={20} color="white" />
            </View>
          </Button>
        </View>
        {showModal && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
