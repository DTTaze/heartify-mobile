import { Text } from '@/components/ui/Text';
import { UserProfile } from '@/src/types/profile';
import React from 'react';
import { Image, View } from 'react-native';

interface Props {
  profile: UserProfile;
}

export const ProfileBanner = ({ profile }: Props) => {
  return (
    <View className="relative h-[120px] overflow-hidden rounded-2xl">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
        }}
        className="absolute inset-0 h-full w-full"
        resizeMode="cover"
      />

      <View className="absolute bottom-4 left-4">
        <View className="h-20 w-20 overflow-hidden rounded-full border-2 border-[#999999]">
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            className="h-full w-full"
          />
        </View>

        <Text className="font-qu-bold text-2xl text-white">
          {profile.firstName} {profile.lastName}
        </Text>
      </View>
    </View>
  );
};
