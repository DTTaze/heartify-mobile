import { cn } from '@/lib/utils';
import React from 'react';
import { Text, View } from 'react-native';

const ChartDescriptions = () => {
  const renderLegend = (label: string, value: string, colorClass: string) => (
    <View className="mb-2 flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <View className={cn('h-3 w-3 rounded-full', colorClass)} />
        <Text className="font-qu-medium text-xs text-[#485D81]">{label}</Text>
      </View>
      <Text className="font-qu-bold text-xs text-[#485D81]">{value}</Text>
    </View>
  );

  return (
    <View className="mt-3 flex">
      <Text className="font-qu-bold text-xl text-neutral-black-500">
        Specific calories
      </Text>
      <Text className="font-qu-medium text-xs text-neutral-white-800">
        Calories are calculated based on your meals today
      </Text>
      <View className="ml-2 mt-3 flex-1">
        {renderLegend('Essential calorie', '2000 kcal', 'bg-[#E5E5E5]')}
        {renderLegend('Required calorie', '2000 kcal', 'bg-[#219653]')}
        {renderLegend('Calo in', '1700 kcal', 'bg-[#FEE41C]')}
        {renderLegend('Calo out', '250 kcal', 'bg-[#EB5757]')}
      </View>
    </View>
  );
};

export default ChartDescriptions;
