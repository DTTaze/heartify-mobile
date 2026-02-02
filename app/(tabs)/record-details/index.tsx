import { Button } from '@/components/ui/Button';
import { ScrollView, View } from 'react-native';
import BloodLipidsSection from './components/BloodLipidsSection';
import BloodPressureSection from './components/BloodPressureSection';
import BMICalculatorSection from './components/BMICalculatorSection';
import LifestyleSection from './components/LifestyleSection';
import ManualEntrySection from './components/ManualEntrySection';
import NotesSection from './components/NotesSection';
import UploadSection from './components/UploadSection';

export default function RecordDetailsScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-5 pt-4">
      <UploadSection />
      <ManualEntrySection />
      <BloodPressureSection />
      <BloodLipidsSection />
      <LifestyleSection />
      <BMICalculatorSection />
      <NotesSection />

      <View className="mb-10">
        <Button className="rounded-3xl bg-primary-500">Submit</Button>
      </View>
    </ScrollView>
  );
}
