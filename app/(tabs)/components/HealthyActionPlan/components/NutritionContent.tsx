import { View, Text } from 'react-native';

export default function NutritionContent() {
  return (
    <View>
      <View className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <Text className="mb-3 font-qu-semibold text-base">
          🍎 <Text>Today’s suggestion</Text>
          {'\n'}
          Add 1 serving of fruit today
        </Text>

        <Text className="mb-1 font-qu-semibold">🥬 Heart-friendly foods</Text>
        <View className="mb-3 ml-4">
          <Text className="font-qu-semibold">• Leafy greens</Text>
          <Text className="font-qu-semibold">• Oats</Text>
          <Text className="font-qu-semibold">• Nuts</Text>
        </View>

        <Text className="mb-1 font-qu-semibold">🚫 Limit</Text>
        <View className="ml-4">
          <Text className="font-qu-semibold">• Alcohol</Text>
          <Text className="font-qu-semibold">• High-sodium foods</Text>
        </View>
      </View>
    </View>
  );
}
