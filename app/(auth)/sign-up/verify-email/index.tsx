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
import { ChevronLeft, KeyRound, X } from 'lucide-react-native';
import { useState, useRef } from 'react';

import { Button } from '@/components/ui/Button';

export default function SignUpVerifyEmailScreen() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const [isError, setIsError] = useState(false);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < 3) {
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

  const handleConfirm = () => {
    const fullCode = code.join('');
    if (fullCode.length < 4) return;

    // Mock validation
    if (fullCode === '1234') {
      router.push('/sign-up/create-password');
    } else {
      setIsError(true);
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
                    className="h-14 w-14 rounded-xl border border-neutral-black-500 text-center font-qu-bold text-xl text-neutral-black-500"
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

              <Pressable onPress={() => console.log('Resend code')}>
                <Text className="mt-3 font-qu-semibold text-sm text-neutral-black-500">
                  Send again
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
                className="w-full rounded-3xl bg-primary-500"
                onPress={handleConfirm}
              >
                <Text className="font-qu-bold text-base text-white">
                  Confirm
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
