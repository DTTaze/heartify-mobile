import { ScrollView, View } from 'react-native';

import Header from '@/components/ui/Header';
import HealthyActionPlan from './components/HealthyActionPlan';
import QuickAccessSection from './components/QuickAccessSection';

export default function HomeScreen() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View className="flex gap-6 p-4">
          <QuickAccessSection />
          <HealthyActionPlan />
        </View>
      </ScrollView>
    </View>
  );
}
