import { HealthRecordHeader } from '@/app/(tabs)/health-record/_components/HealthRecordHeader';
import HealthRecordList from '@/app/(tabs)/health-record/_components/HealthRecordList';
import { HealthRiskLegend } from '@/app/(tabs)/health-record/_components/HealthRiskLegend';
import { ScrollView, View } from 'react-native';

export default function HealthRecord() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="gap-6 px-4 pt-7">
          <HealthRecordHeader />
          <HealthRiskLegend />
          <HealthRecordList />
        </View>
      </ScrollView>
    </View>
  );
}
