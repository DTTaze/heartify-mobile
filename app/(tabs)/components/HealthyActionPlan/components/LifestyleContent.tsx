import { Text, View } from 'react-native';

export default function LifestyleContent() {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Text className="mb-2 font-qu-semibold">🛌 Sleep better</Text>
      <Text className="font-qu-semibold">• Sleep 7–8 hours per night</Text>
      <Text className="font-qu-semibold">• Avoid screens before bed</Text>

      <Text className="mb-2 mt-4 font-qu-semibold">🚶 Daily habits</Text>
      <Text className="font-qu-semibold">• Walk at least 6,000 steps</Text>
      <Text className="font-qu-semibold">• Take short breaks when working</Text>
    </View>
  );
}
