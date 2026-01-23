import { View, Text } from 'react-native';

export default function SportsContent() {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Text className="mb-2 font-semibold">🏃 Recommended exercises</Text>
      <Text>• Cardio 3–4 times / week</Text>
      <Text>• Light strength training</Text>

      <Text className="mb-2 mt-4 font-semibold">⏱ Duration</Text>
      <Text>• 30–45 minutes / session</Text>
    </View>
  );
}
