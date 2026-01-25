import { BubuRecommend } from '@/assets/icons';
import { TextCustom } from '@/components/ui/TextCustom';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LifestyleContent from './components/LifestyleContent';
import NutritionContent from './components/NutritionContent';
import SegmentTab from './components/SegmentTab';
import SportsContent from './components/SportsContent';
import SubSegmentTab from './components/SubSegmentTab';

export default function HealthyActionPlan() {
  const [activeTab, setActiveTab] = useState('BMI');
  const [activeSubTab, setActiveSubTab] = useState('Nutritions');

  return (
    <View className="flex-1 bg-white pt-10">
      <Text className="mb-4 font-qu-semibold text-2xl text-primary-800">
        Healthy action plan
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-5"
        contentContainerStyle={{ gap: 10 }}
      >
        <SegmentTab
          label="BMI"
          active={activeTab === 'BMI'}
          onPress={() => setActiveTab('BMI')}
        />
        <SegmentTab
          label="Heart Rate"
          active={activeTab === 'Heart Rate'}
          onPress={() => setActiveTab('Heart Rate')}
        />
        <SegmentTab
          label="Blood Pressure"
          active={activeTab === 'Blood Pressure'}
          onPress={() => setActiveTab('Blood Pressure')}
        />
      </ScrollView>

      <View className="mb-7 rounded-lg bg-gray-100 p-4">
        <View className="mb-7 flex-row  items-start gap-3">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-300">
            <BubuRecommend />
          </View>

          <View className="flex-1 rounded-[4px_16px_16px_16px] bg-neutral-white-100 px-2 py-1 shadow-lg">
            <TextCustom className="flex-1 font-qu-semibold text-black">
              All vitals are in the green zone! Here is how to stay there
            </TextCustom>
          </View>
        </View>

        <View className="mb-6 flex-row rounded-full bg-neutral-black-200 p-2">
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

        <Text className="mb-3 font-qu-bold text-xl text-primary-700">
          Recommendations
        </Text>

        {activeSubTab === 'Nutritions' && <NutritionContent />}
        {activeSubTab === 'Lifestyle' && <LifestyleContent />}
        {activeSubTab === 'Sports' && <SportsContent />}

        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute bottom-6 right-10 flex-row items-center"
        >
          <View className="z-10 mb-4 mr-[-6px] rounded-full bg-neutral-black-200 px-2 py-1">
            <Text className="font-qu-medium text-xs text-white">Ask BuBu</Text>
          </View>

          <View className="h-6 w-6 items-center justify-center rounded-full bg-white shadow-2xl">
            <BubuRecommend />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
