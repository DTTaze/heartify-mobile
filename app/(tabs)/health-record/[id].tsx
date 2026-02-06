import { ScrollView, View } from 'react-native';

import HeartRiskIndex from '@/app/(tabs)/health-record/_detail/components/HeartRiskIndex';
import MedicalRecordDetails from '@/app/(tabs)/health-record/_detail/components/MedicalRecordDetails';
import MedicalRecordSection from '@/app/(tabs)/health-record/_detail/components/MedicalRecordSection';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';
import EditIcon from '@/components/icons/PenIcon';
import { Button } from '@/components/ui/Button';
import { TextCustom } from '@/components/ui/TextCustom';
import Header from '@/components/ui/Header';
import { BubuCheckInCard } from '@/app/(tabs)/health-record/_detail/components/BubuCheckInCard';
import { NoteCard } from '@/app/(tabs)/health-record/_detail/components/NoteCard';

export default function HeartHealthOverview() {
  return (
    <View className="flex-1 bg-white">
      <Header />

      <ScrollView className="flex-1 px-4 pb-24 pt-2">
        <View className="flex flex-row justify-between">
          <Button className="flex w-fit flex-row gap-2 rounded-full bg-primary-500 px-3 py-1">
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
            recordNumber={4}
            date="October 08, 2025"
            location="General Check-up"
            type="HOSPITAL_VISIT"
          />

          <View className="space-y-5 rounded-2xl border border-neutral-white-400 py-4 shadow-card">
            <HeartRiskIndex />

            <MedicalRecordDetails />

            <BubuCheckInCard />
          </View>

          <NoteCard />
        </View>
      </ScrollView>
    </View>
  );
}
