import { Book, Camera, Heart, Home, User } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TextCustom } from '../TextCustom';
import { Icon } from '@/components/icons/Icon';

interface TabItem {
  name: string;
  label: string;
  icon: React.ElementType;
  isSpecial?: boolean;
}

// 2. Mảng dữ liệu Tabs
const TABS: TabItem[] = [
  { name: 'index', label: 'Home', icon: Home },
  { name: 'health', label: 'Health', icon: Heart },
  { name: 'record-details', label: 'Camera', icon: Camera, isSpecial: true },
  { name: 'discover', label: 'Discover', icon: Book },
  { name: 'health-record', label: 'Records', icon: Book },
  { name: 'profile', label: 'Profile', icon: User },
];

const TAB_PATHS = {
  index: '/(tabs)',
  discover: '/(tabs)/discover',
  profile: '/(tabs)/profile',
  health: '/(tabs)/health',
  'record-details': '/(tabs)/record-details',
} as const;

export default function TabBarCustom({ state, navigation }: BottomTabBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="items-center bg-transparent pb-3">
      <View className="h-[81px] flex-row items-center justify-between gap-[6px] p-[10.5px]">
        {TABS.map((tab, index) => {
          const isSpecial = tab.isSpecial;
          const isActive =
            !isSpecial &&
            // Case 1: Tab Index (xử lý riêng)
            ((tab.name === 'index' &&
              (pathname === '/' || pathname === '/home')) || // Thêm các alias nếu có
              // Case 2: Các Tab thường
              pathname === `/${tab.name}` ||
              // Case 3: Màn hình con (Nested)
              pathname.startsWith(`/${tab.name}/`));

          const onPress = () => {
            if (isSpecial) {
              router.push('/(tabs)/record-details');
              return;
            }

            if (tab.name === 'index') {
              router.push('/(tabs)');
              return;
            }

            if (tab.name === 'health-record') {
              router.push('/(tabs)/health-record');
              return;
            }

            const event = navigation.emit({
              type: 'tabPress',
              target: tab.name,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(tab.name);
            }

            // Các tab còn lại: discover, profile, health...
            router.push(TAB_PATHS[tab.name as keyof typeof TAB_PATHS] as any);
          };

          if (isSpecial) {
            return (
              <TouchableOpacity
                key={tab.name}
                activeOpacity={0.8}
                onPress={onPress}
                className="items-center justify-center"
              >
                <View className="h-[65px] w-[65px] items-center justify-center rounded-full bg-[#666666]">
                  <Icon size={35} icon={tab.icon as React.FC<any>} />
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
                <Icon size={24} icon={tab.icon as React.FC<any>} />
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
