import { Pencil } from '@/assets/icons';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import { WindowIcon } from '@/components/icons/WindowIcon';
import { Text } from '@/components/ui/Text';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const InterestsSection = () => {
  return (
    <View className="gap-2.5 rounded-xl border border-primary-600 px-3 py-2">
      <View className="flex-row items-center justify-between p-1">
        <View className="flex-row items-center gap-1">
          <View className="h-8 w-8 items-center justify-center rounded-full border-primary-500 bg-primary-400 p-1">
            <WindowIcon size={20} />
          </View>

          <Text className="font-qu-semibold text-1 text-primary-500">
            Interests & Preferences
          </Text>
        </View>

        <TouchableOpacity>
          <Pencil width={20} height={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="flex-1 text-1 text-neutral-black-200">
          Select activities and topics you enjoy. This helps us tailor tips,
          reminders, and content for you.
        </Text>

        <ChevronDownIcon />
      </View>

      <View className="gap-2.5">
        <Text className="text-enutral-black-500 font-qu-medium text-2">
          • Walking
        </Text>

        <Text className="text-enutral-black-500 font-qu-medium text-2">
          • Gym workouts
        </Text>

        <Text className="text-enutral-black-500 font-qu-medium text-2">
          • Cycling
        </Text>

        <Text className="text-enutral-black-500 font-qu-medium text-2">
          • Healthy cooking
        </Text>

        <Text className="text-enutral-black-500 font-qu-medium text-2">
          • Listening to podcasts
        </Text>
      </View>
    </View>
  );
};
