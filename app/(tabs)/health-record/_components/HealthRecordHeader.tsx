import { Text, View } from 'react-native';

export function HealthRecordHeader() {
  return (
    <View className="gap-3">
      <View>
        <Text className="font-qu-bold text-h1 text-primary-700">
          Health Record
        </Text>
        <Text className="font-qu-semibold text-1 text-neutral-black-300">
          Welcome to your personal health diary.
        </Text>
      </View>

      <Text className="font-qu-semibold text-1 text-neutral-black-500">
        Here you can track, manage, and edit all your vital signs over time.
        Keep your records updated for more accurate heart health analysis.
      </Text>
    </View>
  );
}
