import { TextCustom } from '@/components/ui/TextCustom';
import React from 'react';
import { Text, View } from 'react-native';

const modal = () => {
  return (
    <View>
      <Text className="font-light text-white">Modal</Text>
      <Text className="font-medium text-white">Modal</Text>
      <Text className="font-bold text-white">Modal</Text>
      <TextCustom className="text-white">Modal</TextCustom>
    </View>
  );
};

export default modal;
