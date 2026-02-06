import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { BuBuIcon } from '@/components/icons/BuBuIcon';
import { MessageIcon } from '@/components/icons/MessageIcon';
import { Pressable, Text, View } from 'react-native';

type Props = {
  onPressTips?: () => void;
};

export function BubuCheckInCard({ onPressTips }: Props) {
  return (
    <View className="gap-2 px-4 py-2">
      <View className="flex-row items-center gap-1">
        <BuBuIcon size={24} />

        <Text className="text-h3 text-neutral-black-500">Bubu’s Check-in</Text>
      </View>

      <View className="rounded-lg border border-primary-400 p-2">
        <Text className="text-1 leading-6 text-gray-800">
          Your heart risk is currently low, which means your body is responding
          well to your daily habits. Keep maintaining a balanced routine, stay
          mindful of your health signals, and continue making small, positive
          choices each day to stay on track.
        </Text>
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
