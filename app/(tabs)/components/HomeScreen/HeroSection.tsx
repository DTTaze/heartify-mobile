import { useMemo } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { Href, useRouter } from 'expo-router';

import BellIcon from '@/components/icons/BellIcon';
import BookIcon from '@/components/icons/BookIcon';
import HandIcon from '@/components/icons/HandIcon';
import { HeartIcon } from '@/components/icons/HeartIcon';
import { WindowIcon } from '@/components/icons/WindowIcon';

import { checkupAvatar } from './data';
import { SurfaceCard } from './shared';

type QuickActionIconProps = {
  color?: string;
  size?: number;
};

type QuickActionItem = {
  icon: React.ComponentType<QuickActionIconProps>;
  label: string;
  route: Href;
};

const quickActionsIconClassName =
  'rounded-full border border-primary-100 bg-primary-50 p-3';

export default function HeroSection() {
  const router = useRouter();

  const quickActions = useMemo<QuickActionItem[]>(
    () => [
      {
        icon: WindowIcon,
        label: 'Hospital',
        route: '/discover',
      },
      {
        icon: HandIcon,
        label: 'Doctor',
        route: '/chatbot',
      },
      {
        icon: HeartIcon,
        label: 'Family',
        route: '/profile',
      },
      {
        icon: BookIcon,
        label: 'Record',
        route: '/health-record',
      },
    ],
    [],
  );

  return (
    <SurfaceCard className="gap-4 p-3">
      <View className="flex-row items-center justify-between rounded-xl px-1 py-1">
        <View className="flex-row items-center gap-3">
          <Image
            source={checkupAvatar}
            className="h-10 w-10 rounded-full border border-primary-100"
          />
          <Text className="font-qu-semibold text-h3 text-neutral-black-500">
            Adam William
          </Text>
        </View>

        <Pressable
          onPress={() => router.push('/setting')}
          className="h-10 w-10 items-center justify-center rounded-full border border-primary-500 bg-white"
        >
          <BellIcon color="#2761E6" />
        </Pressable>
      </View>

      <View className="flex-row items-start justify-between">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Pressable
              key={action.label}
              onPress={() => router.push(action.route)}
              className="items-center gap-2 px-1"
            >
              <View className={quickActionsIconClassName}>
                <Icon size={20} color="#536380" />
              </View>
              <Text className="font-qu-regular text-sm text-neutral-black-500">
                {action.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SurfaceCard>
  );
}
