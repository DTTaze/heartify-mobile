import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import Header from '@/components/ui/Header';
import TabBarCustom from '@/components/ui/TabBarCustom';
import { api } from '@/src/services/api.instance';
import { View } from 'react-native';

export default function TabLayout() {
  useEffect(() => {
    api.setAuthToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhYjljZDU3LWIwNDEtNGE2ZC1iYTg1LWQ2NDYwMTJhMGM1ZSIsImlhdCI6MTc3MDUzMzE2MywiZXhwIjoxODAyMDY5MTYzfQ.RRxdkLHykl8h-GQEaGoc7BeuIAuKSlDEcnCjW7OQuFM',
    );
  }, []);

  return (
    <View className="flex-1">
      <Header />

      <Tabs
        tabBar={(props) => <TabBarCustom {...props} />}
        screenOptions={{ headerShown: false }}
      />
    </View>
  );
}
