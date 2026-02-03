import { useState } from 'react';
import { Text, View } from 'react-native';
import LifestyleContent from './components/LifestyleContent';
import NutritionContent from './components/NutritionContent';
import SportsContent from './components/SportsContent';
import SubSegmentTab from './components/SubSegmentTab';

export default function HealthyActionPlan() {
  const [activeSubTab, setActiveSubTab] = useState('Nutritions');

  return (
    <View className="flex-1 bg-white pt-10">
      <Text className="mb-2 font-qu-bold text-h2 text-primary-800">
        Daily Wellness Blueprint
      </Text>

      <Text className="font-qu-semibold text-base">
        Personalized insights based on your current well-being
      </Text>

      <View className="mb-7 mt-6 rounded-lg">
        <View className="mb-6 flex-row rounded-full border border-primary-500 bg-white p-2">
          <SubSegmentTab
            label="Nutritions"
            active={activeSubTab === 'Nutritions'}
            onPress={() => setActiveSubTab('Nutritions')}
          />

          <SubSegmentTab
            label="Lifestyle"
            active={activeSubTab === 'Lifestyle'}
            onPress={() => setActiveSubTab('Lifestyle')}
          />

          <SubSegmentTab
            label="Sports"
            active={activeSubTab === 'Sports'}
            onPress={() => setActiveSubTab('Sports')}
          />
        </View>

        {activeSubTab === 'Nutritions' && <NutritionContent />}
        {activeSubTab === 'Lifestyle' && <LifestyleContent />}
        {activeSubTab === 'Sports' && <SportsContent />}
      </View>
    </View>
  );
}
