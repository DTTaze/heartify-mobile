import { ScrollView, View } from 'react-native';

import Header from '@/components/ui/Header';
import CaloriesSection from './components/CaloriesSection';
import HealthSummarySection from './components/HealthSummarySection';
import HealthyActionPlan from './components/HealthyActionPlan';
import QuickAccessSection from './components/QuickAccessSection';

export default function HomeScreen() {
  return (
    <View className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View className="flex gap-6 p-4">
          <QuickAccessSection />
          <HealthSummarySection />
          <HealthyActionPlan />
          <CaloriesSection />
        </View>
      </ScrollView>
    </View>
  );
}
