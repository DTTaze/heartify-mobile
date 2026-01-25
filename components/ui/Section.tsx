import { View, Text } from 'react-native';

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <View className="mb-6">
      <Text className="text-base font-semibold text-gray-900">{title}</Text>
      {subtitle && (
        <Text className="mt-1 text-sm text-gray-500">{subtitle}</Text>
      )}
      <View className="mt-4 space-y-3">{children}</View>
    </View>
  );
}
