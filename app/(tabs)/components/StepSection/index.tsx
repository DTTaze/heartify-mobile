import { BubuRecommend, Chat, Flamer, Footprint } from '@/assets/icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const StepSection = () => {
  return (
    <View>
      {/* Container chính */}
      <View className="w-full rounded-lg bg-white p-2 shadow-lg">
        <View className="mb-6 flex-row items-center">
          <Footprint />
          <Text className="ml-1 font-qu-bold text-base text-primary-700">
            Step
          </Text>
        </View>

        {/* Chỉ số chính: Steps và Calories */}
        <View className="h-20 flex-row items-baseline justify-between px-2">
          <View className="flex-row items-baseline">
            <Text className="font-qu-bold text-[28px] text-primary-700">
              1500
            </Text>
            <Text className="ml-2 text-lg font-semibold text-gray-600">
              Step
            </Text>
          </View>

          <View className="flex-row items-baseline">
            <Text className="ml-1 font-qu-bold text-xl text-neutral-black-500">
              <Flamer /> 150
            </Text>
            <Text className="ml-1 font-qu-semibold text-secondary-800">
              Calories
            </Text>
          </View>
        </View>

        {/* Phần gợi ý của BuBu */}
        <View className="p-2">
          <View className="mb-[10px] flex-row items-center px-2">
            <View className="h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200">
              <BubuRecommend />
            </View>
            <View className="ml-3">
              <View className="flex-row items-baseline">
                <Text className="text-xl font-bold text-primary-700">1km</Text>
                <Text className="ml-1 font-qu-semibold text-sm text-neutral-white-800">
                  (4000 steps)
                </Text>
              </View>
              <Text className="font-qu-semibold text-base text-neutral-black-500">
                Let&apos;s go a bit further with BuBu!
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center justify-center rounded-full bg-primary-500 py-1"
          >
            <Chat />
            <Text className="ml-1 font-qu-semibold text-base text-white">
              Chat with BuBu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StepSection;
