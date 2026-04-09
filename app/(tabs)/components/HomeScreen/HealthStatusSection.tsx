import { Image, Text, View } from 'react-native';

import { bubuImage } from './data';
import { BubbleCallout, StatusChip, SurfaceCard } from './shared';

export default function HealthStatusSection() {
  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <Text className="font-qu-bold text-h3 text-neutral-black-500">
          Your Health status
        </Text>
        <Text className="font-qu-regular text-xs text-neutral-black-200">
          3 months ago
        </Text>
      </View>

      <View className="flex-row flex-wrap gap-2">
        <StatusChip
          label="General Check-up"
          backgroundClassName="bg-primary-50"
          textClassName="text-primary-500"
        />
        <StatusChip
          label="Dr.Prahama"
          backgroundClassName="bg-primary-50"
          textClassName="text-primary-500"
        />
        <StatusChip
          label="Feeling Good"
          backgroundClassName="bg-success-100"
          textClassName="text-neutral-black-500"
          showDot
        />
      </View>

      <SurfaceCard className="gap-4 p-3">
        <View className="flex-row items-start justify-between">
          <Text className="font-qu-semibold text-sm text-neutral-black-500">
            BuBu Penguin
          </Text>
          <StatusChip
            label="Feeling Good"
            backgroundClassName="bg-success-100"
            textClassName="text-neutral-black-500"
            showDot
          />
        </View>

        <Image
          source={bubuImage}
          resizeMode="contain"
          className="h-36 w-full"
        />

        <BubbleCallout text="All metrics are within healthy ranges. Keep up the good work!" />
      </SurfaceCard>
    </View>
  );
}
