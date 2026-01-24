import { TextCustom } from '@/components/ui/TextCustom';
import React from 'react';
import { Text, View } from 'react-native';

const modal = () => {
  return (
    <View>
      <Text className="font-logo text-h2 text-primary-700">Modal</Text>
      <Text className="font-qu-medium text-black">Modal</Text>
      <Text className="font-qu-bold text-black">Modal</Text>
      <TextCustom className="text-black">Modal</TextCustom>
    </View>
  );
};

export default modal;
