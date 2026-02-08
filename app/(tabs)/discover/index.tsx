import BookIcon from '@/components/icons/BookIcon';
// import Button from '@/components/ui/Button';
import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SegmentTab from './components/SegmentTab';
import RecipesSegment from './recipes/RecipesSegment';
import SportsSegment from './sports/SportsSegment';

const Discover = () => {
  const [activeTab, setActiveTab] = useState('Recipes');

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-col gap-6 bg-white p-4">
          <View className="flex gap-3">
            <Text className="text-center font-qu-bold text-h2 text-primary-700">
              Discover Your Health Journey
            </Text>
            <Text className="font-qu-semibold text-base">
              Discover a curated collection of recipes, workouts, and lifestyle
              habits tailored to your current health goals. From real-time
              insights to personalized advice,{' '}
              <Text className="font-qu-semibold text-base text-primary-500">
                every recommendation is designed to fit your journey today
              </Text>
            </Text>
            <View className="flex items-end">
              <Button className="h-7 flex-row items-center gap-1 rounded-md border border-primary-500 bg-white p-0 px-3">
                <BookIcon color="#4892D3" size={16} />
                <Text className="font-qu-semibold text-base text-primary-600">
                  Library
                </Text>
              </Button>
            </View>
          </View>

          <View className="flex-row items-center justify-between rounded-full border border-neutral-white-500 bg-neutral-white-200 p-2 shadow-lg ">
            <SegmentTab
              label="Recipes"
              active={activeTab === 'Recipes'}
              onPress={() => setActiveTab('Recipes')}
            />
            <SegmentTab
              label="Sports"
              active={activeTab === 'Sports'}
              onPress={() => setActiveTab('Sports')}
            />
            <SegmentTab
              label="Lifestyle"
              active={activeTab === 'Lifestyle'}
              onPress={() => setActiveTab('Lifestyle')}
            />
          </View>

          {activeTab === 'Recipes' && <RecipesSegment />}
          {activeTab === 'Sports' && <SportsSegment />}
          {activeTab === 'Lifestyle' && <RecipesSegment />}
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;
