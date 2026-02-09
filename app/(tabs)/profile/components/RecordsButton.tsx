import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import { Text } from '@/components/ui/Text';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const RecordsButton = () => {
  return (
    <TouchableOpacity className="flex-row items-center justify-between rounded-3xl border border-neutral-black-150 bg-neutral-white-500 px-3 py-2">
      <View className="flex-row items-center gap-1">
        <DocumentIcon size={24} color="#1F2937" />

        <Text className="font-qu-semibold text-1 text-neutral-black-500">
          View all records
        </Text>
      </View>

      <ArrowRightIcon color="#1F2937" size={24} />
    </TouchableOpacity>
  );
};
