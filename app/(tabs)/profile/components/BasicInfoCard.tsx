import { InfoRow } from '@/app/(tabs)/profile/components/InfoRow';
import { Text } from '@/components/ui/Text';
import { UserProfile } from '@/src/types/profile';
import React from 'react';
import { View } from 'react-native';

interface Props {
  profile: UserProfile;
}

export const BasicInfoCard = ({ profile }: Props) => {
  const age =
    new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear();

  return (
    <View className="gap-6">
      <Text className="font-qu-bold text-h1">Basic information</Text>

      <View className="gap-5 rounded-xl border border-neutral-black-150 p-3">
        <View className="gap-2">
          <InfoRow label="Age" value={`${age}`} />
          <InfoRow
            label="Gender"
            value={profile.gender === 'male' ? 'Male' : 'Female'}
          />
          <InfoRow label="Country" value={profile.country} />
          <InfoRow
            label="Height"
            value={`${profile.latestMeasurements.height.value} ${profile.latestMeasurements.height.unit}`}
          />
          <InfoRow
            label="Weight"
            value={`${profile.latestMeasurements.weight.value} ${profile.latestMeasurements.weight.unit}`}
          />
        </View>
      </View>
    </View>
  );
};
