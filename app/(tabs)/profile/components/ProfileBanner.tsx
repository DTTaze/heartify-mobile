import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '@/components/ui/Text';

export const ProfileBanner = () => {
  return (
    <View className="relative mx-4 mt-6 h-[120px] overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <View className="absolute inset-0 bg-blue-100" />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        }}
        className="absolute inset-0 h-full w-full"
        resizeMode="cover"
      />

      <View className="absolute bottom-4 left-4 flex-row items-end">
        <View className="h-16 w-16 overflow-hidden rounded-full border-2 border-white">
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            className="h-full w-full"
          />
        </View>

        <Text
          className="mb-1 ml-3 font-qu-bold text-2xl text-white drop-shadow-md"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.3)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 3,
          }}
        >
          Barchen
        </Text>
      </View>
    </View>
  );
};
