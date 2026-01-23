import { View, Text } from "react-native";

export default function NutritionContent() {
    return (
        <View>
            <Text className="text-xl font-semibold mb-3 text-primary-700">
                Recommendations
            </Text>

            <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <Text className="text-base mb-3">
                    🍎 <Text className="font-semibold">Today’s suggestion</Text>{"\n"}
                    Add 1 serving of fruit today
                </Text>

                <Text className="font-semibold mb-1">
                    🥬 Heart-friendly foods
                </Text>
                <View className="ml-4 mb-3">
                    <Text>• Leafy greens</Text>
                    <Text>• Oats</Text>
                    <Text>• Nuts</Text>
                </View>

                <Text className="font-semibold mb-1">
                    🚫 Limit
                </Text>
                <View className="ml-4">
                    <Text>• Alcohol</Text>
                    <Text>• High-sodium foods</Text>
                </View>
            </View>
        </View>
    );
}
