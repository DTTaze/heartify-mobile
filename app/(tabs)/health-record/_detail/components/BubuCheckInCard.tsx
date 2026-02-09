import { HealthRecord } from '@/app/(tabs)/health-record/types/health';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { BuBuIcon } from '@/components/icons/BuBuIcon';
import { MessageIcon } from '@/components/icons/MessageIcon';
import { Pressable, Text, View } from 'react-native';

type Props = {
  onPressTips?: () => void;
  record?: HealthRecord;
};

export function BubuCheckInCard({ onPressTips, record }: Props) {
  // build dynamic advice based on available metrics
  const adviceParts: string[] = [];

  const bmi = record?.measurements?.bmi;
  if (typeof bmi === 'number' && bmi >= 30) {
    adviceParts.push(
      `Your BMI is ${bmi.toFixed(1)}, which is in the high range. Consider gradual weight loss through a balanced diet and regular physical activity.`,
    );
  }

  // derive systolic/diastolic either from structured fields or from bloodPressure string
  let systolic = record?.systolicBp;
  let diastolic = record?.diastolicBp;
  if ((!systolic || !diastolic) && record?.bloodPressure) {
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
    const bpText =
      typeof systolic === 'number' && typeof diastolic === 'number'
        ? `${systolic}/${diastolic}`
        : record?.bloodPressure;
    adviceParts.push(
      `Your blood pressure (${bpText}) is elevated. Monitor it regularly and consult a healthcare professional about lifestyle changes or treatment options.`,
    );
  }

  const heartRate = (record as any)?.heartRate;
  if (typeof heartRate === 'number' && (heartRate < 50 || heartRate > 100)) {
    adviceParts.push(
      `Your heart rate is ${heartRate} bpm, which is outside the normal resting range. Consider medical evaluation if symptoms are present.`,
    );
  }

  const defaultAdvice =
    'Your heart risk is currently low, which means your body is responding well to your daily habits. Keep maintaining a balanced routine and stay mindful of your health signals.';

  const adviceText = record
    ? adviceParts.length
      ? adviceParts.join('\n\n')
      : defaultAdvice
    : 'No record available to generate advice.';

  return (
    <View className="gap-2 px-4 py-2">
      <View className="flex-row items-center gap-1">
        <BuBuIcon size={24} />

        <Text className="text-h3 text-neutral-black-500">Bubu’s Check-in</Text>
      </View>

      <View className="rounded-lg border border-primary-400 p-2">
        <Text className="text-1 leading-6 text-gray-800">{adviceText}</Text>
      </View>

      <Pressable
        onPress={onPressTips}
        className="flex-row items-center justify-between rounded-2xl bg-[#6FA8DC] px-4 py-3"
      >
        <View className="flex-row items-center gap-2">
          <MessageIcon size={20} color="white" />
          <Text className="text-1 text-neutral-white-100">
            View tips to stay healthy
          </Text>
        </View>

        <ArrowRightIcon size={20} color="white" />
      </Pressable>
    </View>
  );
}
