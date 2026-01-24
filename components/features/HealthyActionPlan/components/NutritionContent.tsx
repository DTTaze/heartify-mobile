import { View, Text } from 'react-native';

export default function NutritionContent() {
  return (
    <View>
      <Text className="mb-3 text-xl font-semibold text-primary-700">
        Recommendations
      </Text>

      <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        <Text className="mb-3 text-base">
          🍎 <Text className="font-semibold">Today’s suggestion</Text>
          {'\n'}
          Add 1 serving of fruit today
        </Text>

        <Text className="mb-1 font-semibold">🥬 Heart-friendly foods</Text>
        <View className="mb-3 ml-4">
          <Text>• Leafy greens</Text>
          <Text>• Oats</Text>
          <Text>• Nuts</Text>
        </View>

        <Text className="mb-1 font-semibold">🚫 Limit</Text>
        <View className="ml-4">
          <Text>• Alcohol</Text>
          <Text>• High-sodium foods</Text>
        </View>
      </View>
    </View>
  );
}
