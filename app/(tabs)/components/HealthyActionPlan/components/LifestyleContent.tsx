import { BubuRecommend } from '@/assets/icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function LifestyleContent() {
  return (
    <View className="rounded-2xl border border-[#B6D3ED] bg-white p-4 shadow-sm">
      <Text className="mb-2 font-qu-semibold">🛌 Sleep better</Text>
      <Text className="font-qu-semibold">• Sleep 7–8 hours per night</Text>
      <Text className="font-qu-semibold">• Avoid screens before bed</Text>

      <Text className="mb-2 mt-4 font-qu-semibold">🚶 Daily habits</Text>
      <Text className="font-qu-semibold">• Walk at least 6,000 steps</Text>
      <Text className="font-qu-semibold">• Take short breaks when working</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        className="absolute bottom-3 right-5 flex-row items-center"
      >
        <View className="z-10 mb-4 mr-[-6px] rounded-full bg-neutral-black-200 px-2 py-1">
          <Text className="font-qu-medium text-xs text-white">Ask BuBu</Text>
        </View>

        <View className="h-6 w-6 items-center justify-center rounded-full bg-white shadow-2xl">
          <BubuRecommend />
        </View>
      </TouchableOpacity>
    </View>
  );
}
