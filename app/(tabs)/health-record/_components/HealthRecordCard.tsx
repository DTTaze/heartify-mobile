import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import RiskBadge from './RiskBadge';
import { HealthRecord } from '@/app/(tabs)/health-record/types/health';
import { formatDate } from '@/utils/format';
import { DateTimeFormat } from '@/constants/dateTime';

export default function HealthRecordCard({ item }: { item: HealthRecord }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/(tabs)/health-record/[id]',
          params: { id: item.id },
        })
      }
      className="mb-3"
    >
      <View className="gap-2 rounded-2xl border border-primary-500 px-4 py-2">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-qu-semibold text-1">
            {item.healthRecordName}
          </Text>

          <View className="flex flex-row items-center">
            <Text className="px-[2px] text-3 text-neutral-black-150">
              {formatDate(item.date, DateTimeFormat.DDMMYYYY)}
            </Text>
            <ChevronRightIcon size={16} />
          </View>
        </View>

        <View className="gap-1 px-4 py-2">
          {[
            `BMI: ${item.measurements?.bmi ?? '--'}`,
            `impact factor: ${Number(item.riskPercentage) * 100}%`,
            `Blood Pressure: ${item.bloodPressure}`,
          ].map((text) => (
            <View key={text}>
              <Text>{text}</Text>
              <View className="h-px bg-neutral-black-50" />
            </View>
          ))}
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="gap-1 text-2">
            <LocationIcon size={18} /> {item.medicalFacilityName}
          </Text>
          <RiskBadge risk={item.risk} />
        </View>
      </View>
    </Pressable>
  );
}
