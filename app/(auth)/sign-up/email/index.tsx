import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight } from 'lucide-react-native';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SignUpEmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 p-4">
            {/* Header */}
            <View className="flex-row items-center justify-between py-4">
              <Pressable
                onPress={() => router.back()}
                className="flex-row items-center rounded-full bg-primary-400 px-3 py-1.5"
              >
                <ChevronLeft size={20} color="white" />
                <Text className="ml-1 font-qu-bold text-sm text-white">
                  Back
                </Text>
              </Pressable>
            </View>

            {/* Content */}
            <View className="mt-20 flex-1">
              <View className="mb-6">
                <Text className="mb-2 font-qu-bold text-2xl text-neutral-black-500">
                  Enter Your Email
                </Text>
                <Text className="font-qu-semibold text-base leading-5 text-neutral-black-500">
                  We&apos;ll use your email to create your account and send a
                  verification code.
                </Text>
              </View>

              <View className="mb-6">
                <Input
                  label="Email"
                  labelClassName="font-qu-semibold text-base text-neutral-black-500"
                  placeholder="abcd@gmail.com"
                  inputClassName="rounded-xl border-primary-200"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={!email}
                className="w-full rounded-3xl bg-primary-500"
                onPress={() => router.push('/sign-up/verify-email')}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
