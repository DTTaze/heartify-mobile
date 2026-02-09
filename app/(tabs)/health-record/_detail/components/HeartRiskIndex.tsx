import { RISK_LEVELS } from '@/app/(tabs)/health-record/constants/riskConfig';
import { RiskLevel } from '@/app/(tabs)/health-record/types/health';
import LocationHeartMarkerIcon from '@/components/icons/LocationHeartMarkerIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';
import { cn } from '@/lib/utils';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View } from 'react-native';

type Props = {
  riskScore?: number;
};

function getRiskLevel(percent: number): RiskLevel {
  return (
    RISK_LEVELS.find((level) => percent >= level.min && percent < level.max) ??
    RISK_LEVELS[0]
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <View className={cn('flex-row items-center')}>
      <View className={cn('mr-2 h-3 w-3 rounded-full', color)} />
      <Text className={cn('text-sm', 'text-gray-700')}>{label}</Text>
    </View>
  );
}

function getMarkerLeft(percent: number, barWidth: number) {
  const MAX_RISK = 55;
  const clamped = Math.min(Math.max(percent, 0), MAX_RISK);

  return (clamped / MAX_RISK) * barWidth;
}

export default function HeartRiskIndex({ riskScore = 0 }: Props) {
  const risk = getRiskLevel(riskScore);
  const [barWidth, setBarWidth] = useState(0);
  const markerLeft = getMarkerLeft(riskScore, barWidth);

  return (
    <View className={cn('flex gap-5', 'bg-white')}>
      <View className={cn('items-center gap-2')}>
        <View className={cn('flex-row items-center gap-2')}>
          <ShieldIcon size={28} />

          <Text className={cn('text-h1 font-semibold', 'text-primary-700')}>
            Heart Risk Index
          </Text>
        </View>

        <Text className={cn('text-1', 'text-neutral-black-300')}>
          A 10-year cardiovascular risk score
        </Text>
      </View>

      <View
        className={cn('flex-row items-center justify-between', 'px-3 py-1')}
      >
        <Text className={cn('text-h3 font-medium', 'text-neutral-black-500')}>
          Heart Status
        </Text>

        <View
          style={{
            backgroundColor: risk.bgColor,
            borderColor: risk.borderColor,
          }}
          className={cn('flex-row', 'rounded-[4px] border', 'px-3 py-1')}
        >
          <Text
            className={cn(
              'p-1',
              'text-2 font-semibold',
              'text-neutral-black-500',
            )}
          >
            {risk.feeling}
          </Text>

          <Text
            style={{ color: risk.dotColor }}
            className={cn('self-center pb-1')}
          >
            ●
          </Text>
        </View>
      </View>

      <View className={cn('mb-6 items-center')}>
        <View
          className={cn(
            'h-40 w-40',
            'items-center justify-center',
            'rounded-full',
          )}
        >
          <Ionicons name="heart" size={140} color={risk.heartColor} />

          <Text
            className={cn(
              'absolute',
              'text-2xl font-bold',
              'text-neutral-black-500',
            )}
          >
            {riskScore.toFixed(2)}%
          </Text>
        </View>
      </View>

      <Text
        className={cn(
          'px-4 py-1',
          'text-center text-2',
          'text-neutral-black-500',
        )}
      >
        This percentage shows how likely you are to develop heart disease in the
        next 10 years
      </Text>

      <View className={cn('gap-5', 'px-4 py-2')}>
        <View>
          <Text className={cn('text-h3', 'text-neutral-black-500')}>
            Risk Level Bar
          </Text>

          <Text className={cn('text-2', 'text-neutral-black-500')}>
            This bar shows how your heart risk compares to standard levels
          </Text>
        </View>

        <View className="w-full">
          <View className={cn('relative h-8')}>
            {barWidth > 0 && (
              <View
                style={{ left: markerLeft }}
                className={cn('absolute -top-5 z-50', '-translate-x-1/2')}
              >
                <LocationHeartMarkerIcon />
              </View>
            )}
          </View>

          <View
            className={cn('h-3', 'flex-row overflow-hidden', 'rounded-full')}
            onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
          >
            <View className="flex-[10] bg-green-500" />

            <View className="flex-[15] bg-yellow-400" />

            <View className="flex-[30] bg-red-500" />
          </View>

          <View className={cn('mt-2', 'flex-row justify-between')}>
            <Text className="text-xs text-gray-500">10%</Text>

            <Text className="text-xs text-gray-500">15%</Text>

            <Text className="text-xs text-gray-500">30%</Text>
          </View>
        </View>

        <View className={cn('mt-6', 'space-y-2')}>
          <Legend color="bg-success-500" label="Low Risk" />

          <Legend color="bg-[#FEE41C]" label="Moderate Risk" />

          <Legend color="bg-[#E7000B]" label="High Risk" />
        </View>
      </View>
    </View>
  );
}
