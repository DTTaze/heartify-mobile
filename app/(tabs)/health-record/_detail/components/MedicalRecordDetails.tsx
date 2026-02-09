import InfoRow from '@/app/(tabs)/health-record/_detail/components/InfoRow';
import { CookieIcon } from '@/components/icons/CookieIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';
import InfoCircleIcon from '@/components/icons/InfoCircleIcon';
import { PulseIcon } from '@/components/icons/PulseIcon';
import { HealthRecord } from '@/app/(tabs)/health-record/types/health';
import { Text, View } from 'react-native';

type HealthKey = 'heartRate' | 'bmi' | 'bloodPressure';

interface MedicalRecordDetailsProps {
  record: HealthRecord;
}

export default function MedicalRecordDetails({
  record,
}: MedicalRecordDetailsProps) {
  // determine which metrics need attention based on record values
  const activeReviews: HealthKey[] = [];

  const bmiValue = record?.measurements?.bmi;
  if (typeof bmiValue === 'number') {
    // flag BMI if in high-risk range (>= 30)
    if (bmiValue >= 30) activeReviews.push('bmi');
  }

  // determine blood pressure from structured values or string
  let systolic = record.systolicBp;
  let diastolic = record.diastolicBp;
  if ((!systolic || !diastolic) && record.bloodPressure) {
    const m = String(record.bloodPressure).match(/(\d+)\s*\/\s*(\d+)/);
    if (m) {
      systolic = Number(m[1]);
      diastolic = Number(m[2]);
    }
  }
  if (
    (typeof systolic === 'number' && systolic >= 140) ||
    (typeof diastolic === 'number' && diastolic >= 90)
  ) {
    activeReviews.push('bloodPressure');
  }

  // heart rate: if present and out of normal bounds, mark it; otherwise keep as not-present
  const heartRate = (record as any).heartRate;
  if (typeof heartRate === 'number') {
    if (heartRate < 50 || heartRate > 100) activeReviews.push('heartRate');
  }

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
          value="--"
          unit="bpm"
        />

        <InfoRow
          active={activeReviews.includes('bmi')}
          icon={<CookieIcon size={18} color="#3b82f6" />}
          label="BMI"
          value={record.measurements?.bmi?.toString() || '—'}
          unit="kg/m²"
        />

        <InfoRow
          active={activeReviews.includes('bloodPressure')}
          icon={<HeartIcon size={18} color="#3b82f6" />}
          label="Blood Pressure"
          value={
            record.bloodPressure || `${record.systolicBp}/${record.diastolicBp}`
          }
          unit="mmHG"
        />
      </View>
    </View>
  );
}
