import { ScrollView, View } from 'react-native';

import HealthOverviewSection from './HealthOverviewSection';
import HealthStatusSection from './HealthStatusSection';
import HeroSection from './HeroSection';
import LastCheckupSection from './LastCheckupSection';
import RecipesSection from './RecipesSection';
import StepCountSection from './StepCountSection';
import WellnessBlueprintSection from './WellnessBlueprintSection';

export default function HomeScreenContent() {
  return (
    <View className="flex-1 bg-neutral-white-300">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="gap-8 px-4 pb-8 pt-6">
          <HeroSection />
          <LastCheckupSection />
          <HealthStatusSection />
          <HealthOverviewSection />
          <WellnessBlueprintSection />
          <RecipesSection />
          <StepCountSection />
        </View>
      </ScrollView>
    </View>
  );
}
