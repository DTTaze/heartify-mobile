import { Flamer } from '@/assets/icons';
import React from 'react';
import { Text, View } from 'react-native';
import CaloriesChart from './components/CaloriesChart';
import ChartDescriptions from './components/ChartDescriptions';
import TargetWeight from './components/TargetWeight';

const CaloriesSection = () => {
  return (
    <View className="space-y-4 rounded-lg bg-neutral-white-200 p-2 shadow-lg">
      <View className="flex-row items-center gap-1">
        <Flamer />
        <Text className="font-qu-bold text-xl text-primary-700">
          Calories: Intake & Consumption
        </Text>
      </View>
      <Text className="font-qu-medium text-xs text-neutral-white-900">
        (updated 2 minutes ago)
      </Text>
      <View className="mt-4 flex-row items-center justify-between">
        <CaloriesChart />
        <TargetWeight />
      </View>

      <ChartDescriptions />
    </View>
  );
};

export default CaloriesSection;
