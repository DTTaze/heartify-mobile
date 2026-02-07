import { Text, View } from 'react-native';

export default function InfoRow({
  icon,
  label,
  value,
  unit,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  active?: boolean;
}) {
  return (
    <View
      className={[
        'flex-row items-center justify-between rounded-lg px-4 py-3',
        active ? 'border border-error-500' : 'border border-transparent',
      ].join(' ')}
    >
      <View className="flex-row items-center gap-3">
        {icon}
        <Text className="text-h3 font-semibold text-gray-800">{label}</Text>
      </View>

      <View className="flex-row items-end gap-1">
        <Text className="text-h2 font-bold text-neutral-black-500">
          {value}
        </Text>
        <Text className="mb-1 text-2 text-primary-800">{unit}</Text>
      </View>
    </View>
  );
}
