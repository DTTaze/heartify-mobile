import { Image, Pressable, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

import CalendarIcon from '@/components/icons/CalendarIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import PlusIcon from '@/components/icons/PlusIcon';

import { checkupAvatar } from './data';
import {
  MetaRow,
  PillButton,
  SectionHeader,
  StarIcon,
  SurfaceCard,
} from './shared';

export default function LastCheckupSection() {
  const router = useRouter();

  return (
    <View className="gap-3">
      <SectionHeader title="Last Check-up" actionLabel="view all" />

      <SurfaceCard className="gap-3 p-3">
        <View className="flex-row items-start gap-3">
          <Image
            source={checkupAvatar}
            className="h-[72px] w-[72px] rounded-xl"
          />

          <View className="flex-1 gap-2">
            <View className="flex-row items-start justify-between gap-2">
              <View className="flex-1 gap-1">
                <Text className="font-qu-semibold text-base text-neutral-black-500">
                  Dr. David Jezz
                </Text>
                <View className="flex-row items-center gap-1">
                  <StarIcon />
                  <Text className="font-qu-medium text-xs text-primary-500">
                    4.4
                  </Text>
                </View>
              </View>

              <Pressable className="h-8 w-8 items-center justify-center rounded-full border border-primary-200">
                <PlusIcon color="#2761E6" size={14} strokeWidth={1.7} />
              </Pressable>
            </View>

            <View className="gap-1.5">
              <MetaRow
                icon={<CalendarIcon size={14} color="#7D8CA7" />}
                text="December 10th, 2016"
              />
              <MetaRow
                icon={<LocationIcon size={14} color="#7D8CA7" />}
                text="20 Washington, NY city"
              />
            </View>
          </View>
        </View>

        <View className="flex-row gap-2">
          <PillButton label="Re-schedule" variant="filled" className="flex-1" />
          <PillButton
            label="Send message"
            variant="outline"
            className="flex-1"
            onPress={() => router.push('/chatbot')}
          />
        </View>
      </SurfaceCard>
    </View>
  );
}
