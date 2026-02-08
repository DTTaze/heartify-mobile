import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight } from 'lucide-react-native';

import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Progress } from '@/components/ui/progress';

export default function SignUpUsernameScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-4">
        {/* Header */}
        <View className="flex-row items-center justify-between py-4">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center rounded-full bg-primary-400 px-3 py-1.5"
          >
            <ChevronLeft size={20} color="white" />
            <Text className="ml-1 font-qu-bold text-sm text-white">Back</Text>
          </Pressable>
        </View>

        {/* Progress */}
        <View className="mb-8 mt-2">
          <View className="mb-2 flex-row items-center">
            <View className="rounded-md bg-neutral-100 px-2 py-0.5">
              <Text className="font-qu-bold text-xs text-neutral-black-500">
                20%
              </Text>
            </View>
          </View>
          <Progress
            value={20}
            className="h-1 bg-primary-100"
            indicatorClassName="bg-primary-500"
          />
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="mb-8">
            <Text className="mb-2 font-qu-bold text-2xl text-neutral-black-500">
              User name
            </Text>
            <Text className="font-qu-medium text-sm text-neutral-black-500">
              Bubu will call you by your nick name
            </Text>
          </View>

          <Input
            label="User name"
            placeholder="David"
            inputClassName="rounded-xl border-primary-200"
          />
        </View>

        {/* Footer */}
        <View className="pb-8">
          <Button
            className="w-full rounded-3xl bg-primary-500 font-qu-semibold text-base text-white"
            onPress={() => router.push('/sign-up/dob')}
          >
            <View className="flex-row items-center space-x-2">
              <Text className="mr-2 font-qu-bold text-base text-white">
                Next step
              </Text>
              <ArrowRight size={24} color="white" />
            </View>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
