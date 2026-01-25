import { BlueHeart, Cookie, Pulse } from '@/assets/icons';
import { TextCustom } from '@/components/ui/TextCustom';
import { cn } from '@/lib/utils';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HEALTH_METRICS = [
  {
    id: 'bmi',
    label: 'BMI',
    value: '75',
    unit: 'kg/m²',
    icon: Cookie,
    color: 'text-blue-500',
  },
  {
    id: 'heart',
    label: 'Heart Rate',
    value: '75',
    unit: 'bpm',
    icon: Pulse,
    color: 'text-blue-400',
  },
  {
    id: 'bp',
    label: 'Blood Pressure',
    value: '115/75',
    unit: 'mmHG',
    icon: BlueHeart,
    color: 'text-blue-600',
    fullWidth: true,
  },
];

const HealthSummarySection = () => {
  return (
    <View>
      <TextCustom className="font-qu-semibold text-h2">
        Health Summary Widgets
      </TextCustom>
      <TextCustom className="mt-1 font-qu-regular text-base text-neutral-black-500">
        Current Body Status{' '}
        <TextCustom className="font-qu-semibold text-[#666666]">
          (updated 3 months ago)
        </TextCustom>
      </TextCustom>
      <View className="mt-8 flex-row flex-wrap justify-between gap-y-4 py-2">
        {HEALTH_METRICS.map((item) => {
          const IconComponent = item.icon;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              className={cn(
                'rounded-lg bg-white p-4',
                'border border-neutral-white-400 shadow-2xl',
                item.fullWidth ? 'w-full' : 'w-[48%]',
              )}
            >
              {/* Header của Card: Label + Icon ? */}
              <View className="mb-2 flex-row items-center justify-between">
                <Text className="font-qu-bold text-lg text-[#1A1A1A]">
                  {item.label}
                </Text>
                <View className="h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                  <Text className="text-[10px] text-gray-400">?</Text>
                </View>
              </View>

              {/* Value & Unit */}
              <View className="flex-row items-center gap-1">
                <IconComponent className={cn('h-6 w-6', item.color)} />
                <Text className="font-qu-semibold text-h2 text-primary-700">
                  {item.value}
                </Text>
                <Text className="ml-1 font-qu-semibold text-neutral-white-800">
                  {item.unit}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default HealthSummarySection;
