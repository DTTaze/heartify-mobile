import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Heart, Pencil } from '@/assets/icons';
import { IconSymbol } from '@/components/ui/icon-symbol';

export const InterestsSection = () => {
  return (
    <View className="mx-4 mb-8 overflow-hidden rounded-[16px] border border-blue-200 bg-white shadow-sm">
      <View className="bg-white p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-blue-400">
              <Heart width={16} height={16} color="white" />
            </View>

            <Text className="font-qu-semibold text-lg text-blue-500">
              Interests & Preferences
            </Text>
          </View>

          <TouchableOpacity>
            <Pencil width={20} height={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
        <View className="mt-2 flex-row items-center justify-between">
          <Text className="mr-2 flex-1 text-sm text-gray-500">
            Select activities and topics you enjoy. This helps us tailor tips,
            reminders, and content for you.
          </Text>

          <IconSymbol
            name="chevron.right"
            size={20}
            color="#9CA3AF"
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        </View>

        <View className="mt-3 space-y-2 pl-2">
          <Text className="font-qu-medium text-base text-gray-800">
            • Walking
          </Text>

          <Text className="font-qu-medium text-base text-gray-800">
            • Gym workouts
          </Text>

          <Text className="font-qu-medium text-base text-gray-800">
            • Cycling
          </Text>

          <Text className="font-qu-medium text-base text-gray-800">
            • Healthy cooking
          </Text>

          <Text className="font-qu-medium text-base text-gray-800">
            • Listening to podcasts
          </Text>
        </View>
      </View>
    </View>
  );
};
