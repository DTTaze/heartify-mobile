import { BubuRecommend } from '@/assets/icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const QuickAccessSection = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      {/* Container chính với màu nền xanh dương */}
      <View className="w-full rounded-xl border border-[#E5E5E5] bg-primary-400">
        {/* Header: Chào mừng Barchen */}
        <View className="flex-row items-center p-6">
          <Image
            source={require('@/assets/images/mock-avatar.png')}
            className="h-12 w-12 rounded-full border-2 border-white/50"
          />
          <View className="ml-3">
            <Text className="font-qu-bold text-2xl text-white">
              Welcome back, Barchen
            </Text>
            <Text className="font-qu-semibold text-base text-white">
              BuBu is monitoring your health today
            </Text>
          </View>
        </View>

        {/* Nội dung màu trắng bên dưới */}
        <View className="mx-4 mb-6 items-center rounded-xl bg-white p-4">
          <Text className="mb-1 font-qu-bold text-xl text-primary-700">
            Your Health Status
          </Text>
          <Text className="mb-6 text-sm text-neutral-black-200">
            Based on your most recent health check
          </Text>

          {/* Dòng trạng thái Risk */}
          <View className="mb-4 w-full flex-row items-center justify-between">
            <Text className="font-qu-bold text-xl text-neutral-black-500">
              BuBu Penguin
            </Text>
            <View className="flex-row items-center rounded-md border border-[#A8D5BA] bg-[#D3EADD] px-3 py-1">
              <Text className="mr-1 font-qu-semibold text-sm text-neutral-black-500">
                Low Risk
              </Text>
              <View className="h-2 w-2 rounded-full bg-[#009966]" />
            </View>
          </View>

          {/* Ảnh Penguin trung tâm */}
          <Image
            source={require('@/assets/images/Bubu-low-risk.png')}
            className="h-48 w-48"
            resizeMode="contain"
          />

          {/* Hộp thoại thông báo phía dưới */}
          <View className="mt-6 w-full flex-row items-start gap-2">
            {/* Icon Penguin nhỏ */}
            <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-300">
              <BubuRecommend />
            </View>
            <View className="flex-1 rounded-lg border border-primary-400 p-2">
              <Text className="font-medium leading-5 text-black">
                All metrics are within healthy ranges. Keep up the good work!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuickAccessSection;
