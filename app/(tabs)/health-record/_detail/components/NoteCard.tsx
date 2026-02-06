import { BuBuIcon } from '@/components/icons/BuBuIcon';
import PenIcon from '@/components/icons/PenIcon';
import { Pressable, Text, View } from 'react-native';

type Props = {
  onEdit?: () => void;
  onAskBuBu?: () => void;
};

export function NoteCard({ onEdit, onAskBuBu }: Props) {
  return (
    <View className="mb-10 gap-2">
      <View className="flex-row justify-between py-2">
        <Text className="text-h3 text-[#485D81]">Note</Text>

        <Pressable
          onPress={onEdit}
          className="h-9 w-9 items-center justify-center rounded-full bg-neutral-white-400"
        >
          <PenIcon size={20} color="#000000" />
        </Pressable>
      </View>

      <View className="relative rounded-xl border border-[#999999] px-3 pb-16 pt-3">
        <Text className="text-1 text-neutral-black-500">
          <Text className="font-semibold">Nutrition:</Text> Continue a balanced
          diet rich in fiber, lean proteins, and whole grains to sustain your
          current energy levels.
          {'\n\n'}
          <Text className="font-semibold">Activity:</Text> Aim for at least 150
          minutes of moderate aerobic activity per week to maintain heart
          health.
          {'\n\n'}
          <Text className="font-semibold">Doctors Note:</Text> Your weight is in
          a healthy range, reducing the risk of heart-related issues.
        </Text>

        <Pressable
          onPress={onAskBuBu}
          className="absolute bottom-3 right-3 flex-row items-center gap-2 rounded-full bg-gray-500 px-3 py-1.5"
        >
          <Text className="text-sm font-medium text-white">Ask BuBu</Text>
          <BuBuIcon size={18} />
        </Pressable>
      </View>
    </View>
  );
}
