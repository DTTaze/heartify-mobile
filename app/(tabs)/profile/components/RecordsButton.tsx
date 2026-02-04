import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import FileIcon from '@/components/icons/FileIcon';

export const RecordsButton = () => {
  return (
    <TouchableOpacity className="mx-4 mt-4 flex-row items-center justify-between rounded-full bg-gray-100 px-4 py-3">
      <View className="flex-row items-center">
        <FileIcon size={20} color="#1F2937" />

        <Text className="ml-2 font-qu-semibold text-gray-900">
          View all records
        </Text>
      </View>

      <ArrowRightIcon color="#1F2937" size={20} />
    </TouchableOpacity>
  );
};
