import { View, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle } from 'lucide-react-native';
import { LogoHeartify } from '@/assets/icons';
import { Button } from '@/components/ui/Button';

export default function SignUpSuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-between p-6">
        {/* Top Content */}
        <View className="w-full flex-1 items-center pt-20">
          <View className="mb-4">
            <LogoHeartify width={195} height={56} />
          </View>
          <Text className="mb-8 text-center font-qu-bold text-h3 text-neutral-black-500">
            Track your health{'\n'}Understand yourself better
          </Text>

          <View className="mb-8 items-center justify-center">
            <Image
              source={require('@/assets/images/bubu-create-account-successful.png')}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <View className="mb-4 flex-row items-center">
            <CheckCircle size={24} color="#22C55E" />
            <Text className="ml-2 font-qu-bold text-xl text-green-500">
              Account created successfully
            </Text>
          </View>

          <Text className="px-4 text-center font-qu-medium text-base text-primary-800">
            Your account is ready.{'\n'}Let’s begin your journey to a healthier
            lifestyle.
          </Text>
        </View>

        {/* Footer */}
        <View className="w-full pb-8">
          <Button
            className="w-full rounded-3xl bg-primary-500"
            onPress={() => router.push('/(auth)/log-in')}
          >
            <Text className="font-qu-bold text-base text-white">
              Get Started
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
