import { BubuRecommend } from '@/assets/icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SportsContent() {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Text className="mb-2 font-qu-semibold">🏃 Recommended exercises</Text>
      <Text className="font-qu-semibold">• Cardio 3–4 times / week</Text>
      <Text className="font-qu-semibold">• Light strength training</Text>

      <Text className="mb-2 mt-4 font-qu-semibold">⏱ Duration</Text>
      <Text className="font-qu-semibold">• 30–45 minutes / session</Text>

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
