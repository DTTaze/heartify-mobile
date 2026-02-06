import { View, Image, Text } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpWelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-1 p-4">
        {/* Header Text */}
        <View className="items-center pt-8">
          <View className="mb-2 flex-row items-center justify-center">
            {/* Assuming a Heartify logo text or component here if needed,
                for now using Text based on screenshot "Heartify" */}
            <Text className="font-logo text-4xl text-primary-700">
              Heartify
            </Text>
          </View>
          <Text className="text-center font-qu-bold text-lg text-neutral-black-500">
            Track your health{'\n'}Understand yourself better
          </Text>
        </View>

        {/* Hero Image */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={require('@/assets/images/bubu-main.png')}
            style={{ width: 240, height: 240 }}
            resizeMode="contain"
          />
        </View>

        {/* Description */}
        <View className="mb-8">
          <Text className="text-center font-qu-medium text-sm text-neutral-black-500">
            Simple check-ins, clear insights, and gentle guidance for a
            healthier you.
          </Text>
        </View>

        {/* Actions */}
        <View className="gap-4 pb-4">
          <Button
            className="w-full rounded-3xl bg-primary-500"
            onPress={() => router.push('/sign-up/name')}
          >
            <Text className="font-qu-semibold text-base text-white">
              Create new account
            </Text>
          </Button>

          <Button
            variant="outline"
            className="w-full flex-row items-center justify-center rounded-3xl border-primary-500"
          >
            <Image
              source={require('@/assets/images/google-logo.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text className="ml-2 font-qu-semibold text-base text-neutral-black-500">
              Sign up with Google
            </Text>
          </Button>

          <View className="flex-row justify-center pt-4">
            <Text className="font-qu-regular text-neutral-black-200">
              Already had account?{' '}
            </Text>
            <Link href="/(tabs)" asChild>
              <Text className="font-qu-semibold text-base text-primary-600">
                Log in
              </Text>
            </Link>
          </View>
        </View>

        {/* Top Warning (Mock) */}
        <View className="absolute left-0 right-0 top-12 items-center">
          {/* This would be the "Your health data is private..." toast usually,
               but for the welcome screen it seems static in the design.
               Positioning absolute for now or could be part of header. */}
        </View>
      </View>
    </SafeAreaView>
  );
}
