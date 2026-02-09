import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import { WindowIcon } from '@/components/icons/WindowIcon';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Text } from '@/components/ui/Text';
import { Plus } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const HealthGoalSection = () => {
  return (
    <View className="gap-2.5 rounded-xl border border-primary-600 px-3 py-2">
      <View className="flex-row items-center justify-between p-1">
        <View className="flex-row items-center gap-1">
          <View className="h-8 w-8 items-center justify-center rounded-full border-primary-500 bg-primary-400 p-1">
            <WindowIcon size={20} />
          </View>

          <Text className="font-qu-semibold text-1 text-primary-500">
            Health goal
          </Text>
        </View>

        <TouchableOpacity className="rounded-full border border-neutral-black-150">
          <Plus size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="flex-1 text-1 text-neutral-black-200">
          Tell us about your daily activity and lifestyle so we can better
          understand your routine.
        </Text>

        <ChevronDownIcon />
      </View>

      <View className="flex-row items-center justify-between px-1 py-2">
        <Text className="font-qu-semibold text-2 text-neutral-black-500">
          Daily steps (avg): 6,500 steps
        </Text>

        <IconSymbol name="checkmark.circle" size={20} color="#10B981" />
      </View>

      <View className="h-[1px] bg-primary-100" />

      <View className="flex-row items-center justify-between py-3">
        <Text className="font-qu-semibold text-2 text-neutral-black-500">
          Physical activity level: Moderately active
        </Text>

        <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
      </View>

      <View className="h-[1px] bg-primary-100" />

      <View className="flex-row items-center justify-between py-3">
        <Text className="font-qu-semibold text-2 text-neutral-black-500">
          Exercise frequency: 3-4 times / week
        </Text>

        <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
      </View>

      <View className="h-[1px] bg-primary-100" />

      <View className="flex-row items-center justify-between py-3">
        <Text className="font-qu-semibold text-2 text-neutral-black-500">
          Screen time: High (8-9 hours/day)
        </Text>

        <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
      </View>
    </View>
  );
};
