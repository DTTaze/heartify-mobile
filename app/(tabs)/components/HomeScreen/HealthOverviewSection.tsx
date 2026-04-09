import { Pressable, Text, View } from 'react-native';

import { Cookie, Pulse } from '@/assets/icons';
import { useRouter } from 'expo-router';

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';

import { HomeMetricItem, MetricCard, SurfaceCard } from './shared';

const healthMetrics: HomeMetricItem[] = [
  {
    icon: <Pulse width={20} height={20} />,
    label: 'Heart Rate',
    value: '75',
    unit: 'bpm',
  },
  {
    icon: <Cookie width={20} height={20} />,
    label: 'BMI',
    value: '19',
    unit: 'kg / m2',
  },
  {
    icon: <HeartIcon size={18} />,
    label: 'Blood Pressure',
    value: '115/75',
    unit: 'mmHg',
  },
];

export default function HealthOverviewSection() {
  const router = useRouter();

  return (
    <View className="gap-3">
      <Text className="font-qu-bold text-h3 text-neutral-black-500">
        Health Overview
      </Text>

      <SurfaceCard className="gap-3 p-3">
        <View className="flex-row flex-wrap gap-3">
          {healthMetrics.map((item) => (
            <MetricCard
              key={item.label}
              item={item}
              fullWidth={item.label === 'Blood Pressure'}
            />
          ))}
        </View>

        <Pressable
          onPress={() => router.push('/health-record')}
          className="flex-row items-center justify-between rounded-full bg-primary-500 px-4 py-3"
        >
          <Text className="font-qu-semibold text-base text-white">
            View Details & Actions
          </Text>
          <ArrowRightIcon size={18} />
        </Pressable>
      </SurfaceCard>
    </View>
  );
}
