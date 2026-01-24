import { Notification, Settings } from '@/assets/icons';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View className="mt-11 flex-row items-center justify-between bg-white px-4 py-[13px]">
      <Settings />
      <Text className="font-logo text-h2 text-primary-700">Heartify</Text>
      <Notification />
    </View>
  );
};

export default Header;
