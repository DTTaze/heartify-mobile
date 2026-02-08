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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, KeyRound, X } from 'lucide-react-native';
import { useState, useRef } from 'react';

import { Button } from '@/components/ui/Button';
import { authApi } from '@/src/api/auth.api';

export default function SignUpVerifyEmailScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const isSubmittingRef = useRef(false);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Reset error on type
    if (isError) setIsError(false);
  };

  const handleBackspace = (text: string, index: number) => {
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = async () => {
    const fullCode = code.join('');
    if (fullCode.length < 6) return;

    if (isSubmittingRef.current || isLoading) return;
    isSubmittingRef.current = true;
    setIsLoading(true);

    try {
      if (!email) {
        Alert.alert('Error', 'Email not found');
        return;
      }

      const response = await authApi.verifyOtp({
        usernameOrEmail: email,
        code: fullCode,
        action: 'register',
      });

      if (response.ok && response.data?.success) {
        router.push('/sign-up/success');
      } else {
        setIsError(true);
        const errorData = response.data as any;
        const message =
          errorData?.message ||
          response.problem ||
          'Verification failed. Please check the code and try again.';
        Alert.alert('Verification Failed', message);
      }
    } catch (error) {
      console.error('Verification error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      isSubmittingRef.current = false;
    }
  };

  const handleResendCode = async () => {
    if (isResending) return;
    setIsResending(true);
    try {
      if (!email) {
        Alert.alert('Error', 'Email not found');
        return;
      }

      const response = await authApi.resendEmail(email);

      if (response.ok && response.data?.success) {
        Alert.alert(
          'Success',
          'Verification code has been resent to your email.',
        );
      } else {
        const errorData = response.data as any;
        const message =
          errorData?.message || response.problem || 'Failed to resend email.';
        Alert.alert('Error', message);
      }
    } catch (error) {
      console.error('Resend error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setIsResending(false);
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
            <View className="flex-1 items-center pt-4">
              <Text className="mb-8 font-qu-bold text-2xl text-neutral-black-500">
                Verify your Email
              </Text>

              <View className="mb-8 h-[138px] w-[138px] items-center justify-center rounded-full bg-primary-50">
                <KeyRound size={74} color="#4892D3" />
              </View>

              <Text className="mb-8 px-4 text-center font-qu-bold text-xl leading-5 text-neutral-black-500">
                A verification code has been sent to your email. Enter the code
                below to verify your account.
              </Text>

              <View className="mb-4 flex-row gap-4">
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    className="h-14 w-12 rounded-xl border border-neutral-black-500 text-center font-qu-bold text-xl text-neutral-black-500"
                    maxLength={1}
                    keyboardType="number-pad"
                    value={digit}
                    onChangeText={(text) => handleCodeChange(text, index)}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        handleBackspace(digit, index);
                      }
                    }}
                  />
                ))}
              </View>

              <Pressable onPress={handleResendCode} disabled={isResending}>
                <Text className="mt-3 font-qu-semibold text-sm text-neutral-black-500">
                  {isResending ? 'Sending...' : 'Send again'}
                </Text>
              </Pressable>

              {isError && (
                <View className="mt-8 w-full items-center rounded-xl border border-red-200 bg-red-50 p-4">
                  <View className="mb-2 h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <X size={16} color="#DC2626" />
                  </View>
                  <Text className="font-qu-semibold text-sm text-red-500">
                    Incorrect verification code
                  </Text>
                </View>
              )}
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                className="w-full flex-row items-center justify-center rounded-3xl bg-primary-500"
                onPress={handleConfirm}
                disabled={isLoading}
              >
                <Text className="font-qu-bold text-base text-white">
                  {isLoading ? 'Verifying...' : 'Confirm'}
                </Text>
                {isLoading && (
                  <ActivityIndicator
                    size="small"
                    color="white"
                    className="ml-2"
                  />
                )}
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
