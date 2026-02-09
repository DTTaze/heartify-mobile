import { Notification, Settings } from '@/assets/icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Header = () => {
  const router = useRouter();

  return (
    <View className="mt-11 flex-row items-center justify-between bg-white px-4 py-[13px]">
      <Pressable onPress={() => router.push('/setting')}>
        <Settings />
      </Pressable>
      <Text className="font-logo text-h2 text-primary-700">Heartify</Text>
      <Notification />
    </View>
  );
};

export default Header;
