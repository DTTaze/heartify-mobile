import { View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight, ChevronLeft } from 'lucide-react-native';

import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Progress } from '@/components/ui/progress';
import { useSignUp } from '../context';

export default function SignUpNameScreen() {
  const router = useRouter();
  const { data, updateData } = useSignUp();

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
                10%
              </Text>
            </View>
          </View>
          <Progress
            value={10}
            className="h-1 bg-primary-100"
            indicatorClassName="bg-primary-500"
          />
        </View>

        {/* Content */}
        <View className="flex-1">
          <Text className="mb-8 text-center font-qu-bold text-2xl text-neutral-black-500">
            What is your name?
          </Text>

          <View className="flex-row gap-4">
            <View className="flex-1">
              <Input
                label="Last name"
                placeholder=""
                inputClassName="rounded-xl border-primary-200"
                value={data.lastName || ''}
                onChangeText={(text) => updateData({ lastName: text })}
              />
            </View>
            <View className="flex-1">
              <Input
                label="First name"
                placeholder=""
                inputClassName="rounded-xl border-primary-200"
                value={data.firstName || ''}
                onChangeText={(text) => updateData({ firstName: text })}
              />
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="pb-8">
          <Button
            className="w-full rounded-3xl bg-primary-500"
            disabled={!data.firstName || !data.lastName}
            onPress={() => router.push('/sign-up/dob' as any)}
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
