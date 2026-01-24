import { ScrollView, View } from 'react-native';

import Header from '@/components/ui/Header';
import HealthyActionPlan from './components/HealthyActionPlan';

export default function HomeScreen() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <HealthyActionPlan />
      </ScrollView>
    </View>
  );
}
