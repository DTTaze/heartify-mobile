import { TouchableOpacity, Text } from "react-native";

export default function SegmentTab({
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
            className={`px-8 py-2 rounded-full border border-neutral-white-400 ${active ? "bg-primary-500" : "bg-neutral-white-400"
                }`}
        >
            <Text className={active ? "text-white font-semibold" : "text-gray-600"}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}