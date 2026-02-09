import { HealthGoalSection } from '@/app/(tabs)/profile/components/HealthGoalSection';
import { InterestsSection } from '@/app/(tabs)/profile/components/InterestsSection';
import { Text, View } from 'react-native';

export const HealthProfile = () => {
  return (
    <View className="gap-6">
      <Text className="font-qu-bold text-h1 text-neutral-black-500">
        Health Profile
      </Text>

      <HealthGoalSection />

      <InterestsSection />
    </View>
  );
};
