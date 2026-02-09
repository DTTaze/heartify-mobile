import { HealthProfile } from '@/app/(tabs)/profile/components/HealthProfile';
import { ProfileApi } from '@/src/api/profile.api';
import { User } from '@/src/types/profile';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { BasicInfoCard } from './components/BasicInfoCard';
import { ProfileBanner } from './components/ProfileBanner';
import { RecordsButton } from './components/RecordsButton';

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await ProfileApi.getProfile();

        if (res.ok && res.data?.success) {
          setUser(res.data.data);
        }
      } catch (error) {
        console.error('Fetch profile error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) return null;

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="gap-1 py-6">
        <View className="gap-6 px-4">
          <ProfileBanner profile={user.profile} />

          <BasicInfoCard profile={user.profile} />

          <RecordsButton />

          <HealthProfile />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
