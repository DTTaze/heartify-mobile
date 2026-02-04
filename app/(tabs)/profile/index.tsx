import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { ProfileBanner } from './components/ProfileBanner';
import { BasicInfoCard } from './components/BasicInfoCard';
import { RecordsButton } from './components/RecordsButton';
import { HealthGoalSection } from './components/HealthGoalSection';
import { InterestsSection } from './components/InterestsSection';

const ProfilePage = () => {
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <ProfileBanner />

      <Text className="mx-4 mb-3 mt-6 font-qu-bold text-h3 text-slate-800">
        Basic information
      </Text>

      <BasicInfoCard />

      <RecordsButton />

      <Text className="mx-4 mb-3 mt-8 font-qu-bold text-h3 text-slate-800">
        Health Profile
      </Text>

      <HealthGoalSection />

      <InterestsSection />
    </ScrollView>
  );
};

export default ProfilePage;
