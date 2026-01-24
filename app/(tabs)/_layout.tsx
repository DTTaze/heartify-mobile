import { Tabs } from 'expo-router';
import React from 'react';

import TabBarCustom from '@/components/ui/TabBarCustom';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBarCustom {...props} />}
      screenOptions={{ headerShown: false }}
    />
  );
}
