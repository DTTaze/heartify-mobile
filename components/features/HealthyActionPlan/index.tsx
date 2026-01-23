import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LifestyleContent from './components/LifestyleContent';
import NutritionContent from './components/NutritionContent';
import SportsContent from './components/SportsContent';
import SubSegmentTab from './components/SubSegmentTab';
import SegmentTab from './components/SegmentTab';

export default function HealthyActionPlan() {
  const [activeTab, setActiveTab] = useState('BMI');
  const [activeSubTab, setActiveSubTab] = useState('Nutritions');

  return (
    <View className="flex-1 bg-white px-5 pt-10">
      <Text className="mb-4 font-semibold text-2xl text-primary-800">
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

      <View className="mb-7 rounded-2xl bg-gray-100 p-4">
        <View className="mb-7 flex-row items-center gap-3">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-300">
            <Image
              source={require('../../../assets/images/BuBu.png')}
              className="h-8 w-8"
            />
          </View>

          <Text className="flex-1 text-gray-700">
            All vitals are in the green zone! Here is how to stay there
          </Text>
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

        <Text className="mb-3 font-semibold text-xl text-primary-700">
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
            <Text className="text-white">Ask BuBu</Text>
          </View>

          <View className="h-6 w-6 items-center justify-center rounded-full bg-white shadow-2xl">
            <Image
              source={require('../../../assets/images/BuBu.png')}
              className="h-9 w-9"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
