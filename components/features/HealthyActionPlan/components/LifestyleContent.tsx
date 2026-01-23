import { View, Text } from 'react-native';

export default function LifestyleContent() {
  return (
    <View className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <Text className="mb-2 font-semibold">🛌 Sleep better</Text>
      <Text>• Sleep 7–8 hours per night</Text>
      <Text>• Avoid screens before bed</Text>

      <Text className="mb-2 mt-4 font-semibold">🚶 Daily habits</Text>
      <Text>• Walk at least 6,000 steps</Text>
      <Text>• Take short breaks when working</Text>
    </View>
  );
}
