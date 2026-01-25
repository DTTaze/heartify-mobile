import { Text, View } from 'react-native';

export default function SportsContent() {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Text className="mb-2 font-qu-semibold">🏃 Recommended exercises</Text>
      <Text className="font-qu-semibold">• Cardio 3–4 times / week</Text>
      <Text className="font-qu-semibold">• Light strength training</Text>

      <Text className="mb-2 mt-4 font-qu-semibold">⏱ Duration</Text>
      <Text className="font-qu-semibold">• 30–45 minutes / session</Text>
    </View>
  );
}
