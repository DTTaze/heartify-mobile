import MeasurementContext from '@/app/(tabs)/record-details/components/MeasurementContext';
import DatePickerModal from '@/components/DatePickerModal';
import { Button } from '@/components/ui/Button';
import Header from '@/components/ui/Header';
import { ScrollView, Text, View } from 'react-native';
import BloodLipidsSection from './components/BloodLipidsSection';
import BloodPressureSection from './components/BloodPressureSection';
import BMICalculatorSection from './components/BMICalculatorSection';
import LifestyleSection from './components/LifestyleSection';
import NotesSection from './components/NotesSection';

export default function RecordDetailsScreen() {
  return (
    <View>
      <Header />
      <ScrollView className="bg-white px-4 py-2">
        <View className="gap-5">
          <View className="gap-1 py-2">
            <Text className="text-center font-qu-bold text-h1 text-primary-700">
              Record Details
            </Text>

            <Text className="text-center font-qu-semibold text-1 text-neutral-black-400">
              Complete your health profile by filling in the details from your
              medical report.
            </Text>
          </View>

          <DatePickerModal />

          <MeasurementContext />

          <BloodPressureSection />

          <BloodLipidsSection />

          <LifestyleSection />

          <BMICalculatorSection />

          <NotesSection />
        </View>

        <View className="mb-10">
          <Button className="rounded-3xl bg-primary-500">Submit</Button>
        </View>
      </ScrollView>
    </View>
  );
}
