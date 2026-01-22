import { View, Text } from "react-native";

export default function LifestyleContent() {
    return (
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <Text className="font-semibold mb-2">🛌 Sleep better</Text>
            <Text>• Sleep 7–8 hours per night</Text>
            <Text>• Avoid screens before bed</Text>

            <Text className="font-semibold mt-4 mb-2">🚶 Daily habits</Text>
            <Text>• Walk at least 6,000 steps</Text>
            <Text>• Take short breaks when working</Text>
        </View>
    );
}
