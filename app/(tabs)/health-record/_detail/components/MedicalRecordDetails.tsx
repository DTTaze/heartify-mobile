import InfoRow from '@/app/(tabs)/health-record/_detail/components/InfoRow';
import { CookieIcon } from '@/components/icons/CookieIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';
import InfoCircleIcon from '@/components/icons/InfoCircleIcon';
import { PulseIcon } from '@/components/icons/PulseIcon';
import { Text, View } from 'react-native';

type HealthKey = 'heartRate' | 'bmi' | 'bloodPressure';

const activeReviews: HealthKey[] = ['heartRate', 'bloodPressure'];

export default function MedicalRecordDetails() {
  return (
    <View className="gap-2 py-2">
      <View className="gap2.5 px-4 py-2">
        <Text className="text-h3">Medical Record Details</Text>

        <Text className="text-2">
          Based on your latest saved medical records
        </Text>
      </View>

      <View className="mx-4 gap-2 rounded-xl border border-primary-100 p-2">
        <Text className="font-qu-semibold text-1 text-primary-600">
          Health Insights
        </Text>

        {activeReviews.includes('heartRate') && (
          <View className="flex-row gap-1">
            <InfoCircleIcon size={20} />
            <Text className="font-qu-semibold text-2">
              Heart Rate shows signs of cardiovascular strain
            </Text>
          </View>
        )}

        {activeReviews.includes('bmi') && (
          <View className="flex-row gap-1">
            <InfoCircleIcon size={20} />
            <Text className="font-qu-semibold text-2">
              BMI is in a high-risk range
            </Text>
          </View>
        )}

        {activeReviews.includes('bloodPressure') && (
          <View className="flex-row gap-1">
            <InfoCircleIcon size={20} />
            <Text className="font-qu-semibold text-2">
              Blood Pressure is significantly above the healthy range
            </Text>
          </View>
        )}
      </View>

      <View className="gap-4 px-4">
        <InfoRow
          active={activeReviews.includes('heartRate')}
          icon={<PulseIcon size={18} color="#3b82f6" />}
          label="Heart Rate"
          value="75"
          unit="bpm"
        />

        <InfoRow
          active={activeReviews.includes('bmi')}
          icon={<CookieIcon size={18} color="#3b82f6" />}
          label="BMI"
          value="75"
          unit="kg/m²"
        />

        <InfoRow
          active={activeReviews.includes('bloodPressure')}
          icon={<HeartIcon size={18} color="#3b82f6" />}
          label="Blood Pressure"
          value="115/75"
          unit="mmHG"
        />
      </View>
    </View>
  );
}
