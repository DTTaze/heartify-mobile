import { Tabs } from 'expo-router';
import React from 'react';

import TabBarCustom from '@/components/ui/TabBarCustom';
import { View } from 'react-native';
import Header from '@/components/ui/Header';

export default function TabLayout() {
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
