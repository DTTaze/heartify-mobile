import { ScrollView, View, ActivityIndicator, Text } from 'react-native';

import { BubuCheckInCard } from '@/app/(tabs)/health-record/_detail/components/BubuCheckInCard';
import HeartRiskIndex from '@/app/(tabs)/health-record/_detail/components/HeartRiskIndex';
import MedicalRecordDetails from '@/app/(tabs)/health-record/_detail/components/MedicalRecordDetails';
import MedicalRecordSection from '@/app/(tabs)/health-record/_detail/components/MedicalRecordSection';
import { NoteCard } from '@/app/(tabs)/health-record/_detail/components/NoteCard';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import EditIcon from '@/components/icons/PenIcon';
import { Button } from '@/components/ui/Button';
import { TextCustom } from '@/components/ui/TextCustom';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { HealthRecordApi } from '@/src/api/healthRecord.api';
import { HealthRecord } from '@/app/(tabs)/health-record/types/health';
import { formatDate } from '@/utils/format';

export default function HeartHealthOverview() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [record, setRecord] = useState<HealthRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchRecord = async () => {
      try {
        const res = await HealthRecordApi.getRecord(id);
        if (res.ok && res.data?.data) {
          setRecord(res.data.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecord();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!record) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Record not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 pb-24 pt-2">
        <View className="flex flex-row justify-between">
          <Button
            onPress={() => router.push('/(tabs)/health-record')}
            className="mb-3 flex w-fit flex-row gap-2 rounded-full bg-primary-500 px-3 py-1"
          >
            <ChevronLeftIcon />
            <TextCustom className="text-1 text-neutral-white-100">
              Back
            </TextCustom>
          </Button>

          <Button className="flex w-fit flex-row gap-1 rounded-lg bg-neutral-white-400 px-3">
            <EditIcon />

            <TextCustom className="text-1">Edit Record</TextCustom>
          </Button>
        </View>

        <View className="flex flex-col gap-5">
          <MedicalRecordSection
            recordName={record.healthRecordName}
            date={formatDate(record.date)}
            location={record.medicalFacilityName}
            type={'HOSPITAL_VISIT'}
          />

          <View className="space-y-5 rounded-2xl border border-neutral-white-400 py-4 shadow-card">
            <HeartRiskIndex riskScore={Number(record.riskScore)} />

            <MedicalRecordDetails record={record} />

            <BubuCheckInCard record={record} />
          </View>

          <NoteCard />
        </View>
      </ScrollView>
    </View>
  );
}
