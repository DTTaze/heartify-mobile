import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';

export default function SignUpCreatePasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                  Create Password
                </Text>
                <Text className="font-qu-semibold text-base leading-5 text-neutral-black-500">
                  Use at least 8 characters, including a number and a special
                  character.
                </Text>
              </View>

              <View>
                <View className="mb-6">
                  <Text className="mb-1 font-qu-semibold text-base text-neutral-black-500">
                    Password
                  </Text>
                  <View className="relative justify-center">
                    <TextInput
                      className="rounded-xl border border-gray-300 px-4 py-3 pr-12 text-base text-neutral-black-500"
                      placeholder=""
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                    />
                    <Pressable
                      className="absolute right-4"
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} color="#9CA3AF" />
                      ) : (
                        <Eye size={20} color="#9CA3AF" />
                      )}
                    </Pressable>
                  </View>
                </View>

                <View className="mb-6">
                  <Text className="mb-1 font-qu-semibold text-base text-neutral-black-500">
                    Confirm password
                  </Text>
                  <View className="relative justify-center">
                    <TextInput
                      className="rounded-xl border border-gray-300 px-4 py-3 pr-12 text-base text-neutral-black-500"
                      placeholder=""
                      secureTextEntry={!showConfirmPassword}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                    <Pressable
                      className="absolute right-4"
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} color="#9CA3AF" />
                      ) : (
                        <Eye size={20} color="#9CA3AF" />
                      )}
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={!password || !confirmPassword}
                className="w-full rounded-3xl bg-primary-500"
                onPress={() => router.push('/sign-up/success')}
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
