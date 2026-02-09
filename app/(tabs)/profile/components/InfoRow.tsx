import { Text } from '@/components/ui/Text';
import React from 'react';
import { View } from 'react-native';

type InfoRowProps = {
  label: string;
  value: string;
};

export const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <View className="flex-row gap-1">
      <Text className="font-qu-semibold text-1 text-neutral-black-500">
        {label}:
      </Text>

      <Text className="font-qu-semibold text-1 text-primary-600">{value}</Text>
    </View>
  );
};
