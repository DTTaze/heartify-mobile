import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Footprint } from '@/assets/icons';
import { Plus } from 'lucide-react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export const HealthGoalSection = () => {
  return (
    <View className="mx-4 mb-4 overflow-hidden rounded-[16px] border border-blue-200 bg-white shadow-sm">
      <View className="border-b border-blue-100 bg-blue-50/50 p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-blue-400">
              <Footprint width={16} height={16} color="white" />
            </View>

            <Text className="font-qu-semibold text-lg text-blue-500">
              Health goal
            </Text>
          </View>

          <TouchableOpacity>
            <Plus size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <View className="mt-2 flex-row items-center justify-between">
          <Text className="mr-2 flex-1 text-sm text-gray-500">
            Tell us about your daily activity and lifestyle so we can better
            understand your routine.
          </Text>

          <IconSymbol
            name="chevron.right"
            size={20}
            color="#9CA3AF"
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        </View>
      </View>

      <View className="px-4 py-2">
        <View className="flex-row items-center justify-between py-3">
          <Text className="font-qu-medium text-gray-800">
            Daily steps (avg): 6,500 steps
          </Text>

          <IconSymbol name="checkmark.circle" size={20} color="#10B981" />
        </View>

        <View className="h-[1px] bg-gray-100" />

        <View className="flex-row items-center justify-between py-3">
          <Text className="font-qu-medium text-gray-800">
            Physical activity level: Moderately active
          </Text>

          <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
        </View>
        <View className="h-[1px] bg-gray-100" />

        <View className="flex-row items-center justify-between py-3">
          <Text className="font-qu-medium text-gray-800">
            Exercise frequency: 3-4 times / week
          </Text>

          <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
        </View>
        <View className="h-[1px] bg-gray-100" />

        <View className="flex-row items-center justify-between py-3">
          <Text className="font-qu-medium text-gray-800">
            Screen time: High (8-9 hours/day)
          </Text>

          <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
        </View>
      </View>
    </View>
  );
};
