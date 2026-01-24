import { Book, Camera, Heart, Home, User } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextCustom } from '../TextCustom';

interface TabItem {
  name: string;
  label: string;
  icon: React.ElementType;
  isSpecial?: boolean;
}

// 2. Mảng dữ liệu Tabs
const TABS: TabItem[] = [
  { name: 'home', label: 'Home', icon: Home },
  { name: 'health', label: 'Health', icon: Heart },
  { name: 'camera', label: 'Camera', icon: Camera, isSpecial: true },
  { name: 'records', label: 'Records', icon: Book },
  { name: 'profile', label: 'Profile', icon: User },
];

export default function TabBarCustom({ state, navigation }: BottomTabBarProps) {
  return (
    <View className="items-center bg-transparent pb-3">
      <View className="h-[81px] flex-row items-center justify-between gap-[6px] rounded-full border border-neutral-white-400 p-[10.5px]">
        {TABS.map((tab, index) => {
          const isActive = state.index === index;
          const IconComponent = tab.icon;
          const onPress = () => {
            navigation.navigate(tab.name as never);
          };

          if (tab.isSpecial) {
            return (
              <TouchableOpacity
                key={tab.name}
                activeOpacity={0.8}
                onPress={onPress}
                className="items-center justify-center"
              >
                <View className="h-[65px] w-[65px] items-center justify-center rounded-full bg-[#666666]">
                  <IconComponent size={35} />
                </View>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={onPress}
              activeOpacity={0.7}
              className="h-full flex-1 items-center justify-center"
            >
              <View
                className={cn(
                  'h-[60px] w-[60px] items-center justify-center rounded-full transition-all duration-300',
                  isActive ? 'bg-white' : 'bg-transparent',
                )}
              >
                <IconComponent size={24} />
                <TextCustom className="font-qu-bold text-xs">
                  {tab.label}
                </TextCustom>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
