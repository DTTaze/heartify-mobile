import { CookieIcon } from '@/components/icons/CookieIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';
import { PulseIcon } from '@/components/icons/PulseIcon';
import { Text, View } from 'react-native';

export default function MedicalRecordDetails() {
  return (
    <View className="gap-2 py-2">
      <View className="gap2.5 px-4 py-2">
        <Text className="text-h3">Medical Record Details</Text>

        <Text className="text-2">
          Based on your latest saved medical records
        </Text>
      </View>
      <View className="gap-4 px-4">
        <InfoRow
          icon={<PulseIcon size={18} color="#3b82f6" />}
          label="Heart Rate"
          value="75"
          unit="bpm"
        />

        <InfoRow
          icon={<CookieIcon size={18} color="#3b82f6" />}
          label="BMI"
          value="75"
          unit="kg/m²"
        />

        <InfoRow
          icon={<HeartIcon size={18} color="#3b82f6" />}
          label="Blood Pressure"
          value="115/75"
          unit="mmHG"
        />
      </View>
    </View>
  );
}

function InfoRow({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        {icon}
        <Text className="text-h3 font-semibold text-gray-800">{label}</Text>
      </View>

      <View className="flex-row items-end gap-1">
        <Text className="text-h2 font-bold text-neutral-black-500 ">
          {value}
        </Text>
        <Text className="mb-1 text-2 text-primary-800">{unit}</Text>
      </View>
    </View>
  );
}
