import { View, Text } from "react-native";

export default function SportsContent() {
    return (
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Text className="font-semibold mb-2">🏃 Recommended exercises</Text>
            <Text>• Cardio 3–4 times / week</Text>
            <Text>• Light strength training</Text>

            <Text className="font-semibold mt-4 mb-2">⏱ Duration</Text>
            <Text>• 30–45 minutes / session</Text>
        </View>
    );
}
