import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/Text';

export const BasicInfoCard = () => {
  return (
    <View className="mx-4 rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
      <View className="space-y-2">
        <Text className="text-base text-gray-800">
          <Text className="font-qu-semibold text-gray-900">Age:</Text> 34
        </Text>

        <Text className="text-base text-gray-800">
          <Text className="font-qu-semibold text-gray-900">Gender:</Text> Male
        </Text>

        <Text className="text-base text-gray-800">
          <Text className="font-qu-semibold text-gray-900">Location:</Text> San
          Jose, California, USA
        </Text>

        <Text className="text-base text-gray-800">
          <Text className="font-qu-semibold text-gray-900">Height:</Text> 178 cm
          (5&apos;10&quot;)
        </Text>

        <Text className="text-base text-gray-800">
          <Text className="font-qu-semibold text-gray-900">Weight:</Text> 82kg
          (181 lbs)
        </Text>
      </View>
    </View>
  );
};
