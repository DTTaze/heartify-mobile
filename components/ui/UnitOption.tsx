import { Pressable, Text, View } from 'react-native';

export default function UnitOption({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center gap-2">
      {/* Radio */}
      <View
        className={`h-5 w-5 items-center justify-center rounded-full border
        ${selected ? 'border-primary-600' : 'border-gray-400'}`}
      >
        {selected && <View className="h-3 w-3 rounded-full bg-primary-600" />}
      </View>

      <Text className="text-base text-neutral-black-500">{label}</Text>
    </Pressable>
  );
}
