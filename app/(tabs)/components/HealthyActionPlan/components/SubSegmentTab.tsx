import { TouchableOpacity, Text } from 'react-native';

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
      className={`flex-1 items-center rounded-full py-2 ${
        active ? 'bg-primary-500' : ''
      }`}
    >
      <Text
        className={`font-qu-semibold text-sm ${active ? 'text-white' : 'text-black'}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
