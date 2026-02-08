import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight, Eye, EyeOff } from 'lucide-react-native';
import { useState, useRef } from 'react';

import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { authApi } from '@/src/api/auth.api';

export default function SignUpEmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isSubmittingRef = useRef(false);

  const isPasswordValid =
    password.length >= 8 &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const passwordsMatch = password === confirmPassword;

  const canProceed =
    email.length > 0 &&
    username.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0 &&
    isPasswordValid &&
    passwordsMatch;

  const handleNextStep = async () => {
    if (isSubmittingRef.current || isLoading) return;

    isSubmittingRef.current = true;
    setIsLoading(true);
    try {
      const response = await authApi.register({
        email,
        username,
        password,
      });

      if (response.ok && response.data?.success) {
        router.push({
          pathname: '/sign-up/verify-email',
          params: { email },
        });
      } else {
        // Since we don't have the exact error structure from API yet,
        // we'll try to display what's available or a generic message.
        // Adjust 'any' cast if api response types improve.
        const errorData = response.data as any;
        const message =
          errorData?.message ||
          response.problem ||
          'Registration failed. Please try again.';
        Alert.alert('Registration Failed', message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      isSubmittingRef.current = false;
    }
  };

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
            <View className="mt-5 flex-1">
              <View className="mb-6">
                <Text className="mb-2 font-qu-bold text-2xl text-neutral-black-500">
                  Create Account
                </Text>
                <Text className="font-qu-semibold text-base leading-5 text-neutral-black-500">
                  Enter your email and create a password to set up your account.
                </Text>
              </View>

              <View>
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

                <Input
                  label="User name"
                  labelClassName="font-qu-semibold text-base text-neutral-black-500"
                  placeholder="David"
                  inputClassName="rounded-xl border-primary-200"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="words"
                />

                {/* Password Field */}
                <View className="mb-4">
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

                {/* Confirm Password Field */}
                <View className="mb-4">
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

                <Text className="font-qu-regular text-xs text-neutral-black-500">
                  Use at least 8 characters, including a number and a special
                  character.
                </Text>
              </View>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={!canProceed}
                className={`w-full rounded-3xl ${
                  canProceed ? 'bg-primary-500' : 'bg-primary-300'
                }`}
                onPress={handleNextStep}
              >
                <View className="flex-row items-center space-x-2">
                  <Text className="mr-2 font-qu-bold text-base text-white">
                    {isLoading ? 'Processing...' : 'Next step'}
                  </Text>
                  {!isLoading && <ArrowRight size={24} color="white" />}
                  {isLoading && (
                    <ActivityIndicator size="small" color="white" />
                  )}
                </View>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
