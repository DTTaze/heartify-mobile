import { Pressable, Text, View } from 'react-native';

import { Footprint } from '@/assets/icons';

import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import InfoCircleIcon from '@/components/icons/InfoCircleIcon';

import { weeklyProgress } from './data';
import { BubbleCallout, ProgressRing, StatBlock, SurfaceCard } from './shared';

export default function StepCountSection() {
  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View className="rounded-full bg-primary-500 p-2">
            <Footprint width={20} height={20} />
          </View>
          <Text className="font-qu-bold text-h3 text-neutral-black-500">
            Step Count
          </Text>
        </View>

        <InfoCircleIcon color="#2761E6" />
      </View>

      <SurfaceCard className="gap-4 p-3">
        <View className="flex-row items-center justify-between rounded-xl px-2">
          <View className="gap-4">
            <StatBlock label="Total step" value="4.00" />
            <StatBlock label="Distance (km)" value="140" />
          </View>

          <ProgressRing value="3650" unit="kcal" progress={0.82} />
        </View>

        <BubbleCallout text="All metrics are within healthy ranges. Keep up the good work!" />

        <View className="gap-4 rounded-[20px] border border-neutral-white-400 bg-white p-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-qu-bold text-base text-neutral-black-500">
              Calendar
            </Text>

            <Pressable className="flex-row items-center gap-2 rounded-full border border-neutral-white-400 px-2 py-1">
              <ChevronLeftIcon size={9} color="#536380" />
              <Text className="font-qu-regular text-sm text-neutral-black-500">
                This week
              </Text>
              <ChevronRightIcon size={14} color="#536380" />
            </Pressable>
          </View>

          <View className="flex-row items-end justify-between">
            {weeklyProgress.map((item) => (
              <View key={item.day} className="items-center gap-1.5">
                <View className="h-[104px] w-[28px] justify-end rounded-md bg-primary-50">
                  <View
                    className="w-full rounded-b-md rounded-t-md bg-primary-500"
                    style={{ height: `${item.value * 100}%` }}
                  />
                </View>
                <Text className="font-qu-regular text-xs text-neutral-black-200">
                  {item.day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable className="items-center rounded-full bg-primary-500 px-4 py-3">
          <Text className="font-qu-semibold text-base text-white">Start</Text>
        </Pressable>
      </SurfaceCard>
    </View>
  );
}
