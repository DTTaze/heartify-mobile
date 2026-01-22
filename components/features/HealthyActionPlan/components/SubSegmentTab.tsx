import { TouchableOpacity, Text } from "react-native";

export default function SubTab({
    label,
    active,
    onPress,
}: {
    label: string;
    active?: boolean;
    onPress?: () => void;
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.85}
            className={`flex-1 py-2 rounded-full items-center ${active ? "bg-white" : ""
                }`}
        >
            <Text className={`font-semibold ${active ? "text-black" : "text-white"}`}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}