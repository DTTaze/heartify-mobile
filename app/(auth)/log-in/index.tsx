import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield } from 'lucide-react-native';
import React, { useState } from 'react';

import { LogoHeartify } from '@/assets/icons';
import { Button } from '@/components/ui/Button';
import { authApi } from '@/src/api/auth.api';
import { useAuth } from '@/src/context/auth';

export default function LoginScreen() {
  const { signIn } = useAuth(); // Use useAuth hook
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!emailOrUsername || !password) {
      Alert.alert('Error', 'Please enter both username/email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await authApi.login({
        usernameOrEmail: emailOrUsername,
        password,
      });

      if (response.ok && response.data) {
        // Success
        const token = response.data.data.accessToken;
        if (token) {
          await signIn(token); // Use context signIn
          // No need to redirect manually, the useEffect in _layout will handle it
        } else {
          // Handle case where no token (unexpected but response.ok)
          Alert.alert('Login Failed', 'Authentication token not received.');
        }
      } else {
        // Error
        const errorMessage =
          (response.data as any)?.message ||
          'Login failed. Please check your credentials.';
        Alert.alert('Login Failed', errorMessage);
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = emailOrUsername.length > 0 && password.length > 0;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ImageBackground
        source={require('@/assets/images/background-auth.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        resizeMode="cover"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-1 p-6">
            {/* Header */}
            <View className="mb-8 flex-row items-center justify-center">
              <Shield size={16} color="#1E293B" />
              <Text className="ml-1 font-qu-semibold text-sm text-neutral-black-500">
                Your health data is private and securely protected.
              </Text>
            </View>

            {/* Logo Section */}
            <View className="mb-10 mt-24 items-center">
              <View className="mb-2">
                <LogoHeartify />
              </View>
              <Text className="text-center font-qu-bold text-h3 text-neutral-black-500">
                Track your health{'\n'}Understand yourself better
              </Text>
            </View>

            {/* Form Section */}
            <View className="mb-8 gap-6">
              {/* Username/Email Input */}
              <View>
                <Text className="mb-2 font-qu-semibold text-base text-neutral-black-500">
                  User name/ Email
                </Text>
                <TextInput
                  className="rounded-xl border border-primary-200 bg-white px-4 py-3 text-base text-neutral-black-500"
                  placeholder=""
                  value={emailOrUsername}
                  onChangeText={setEmailOrUsername}
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View>
                <Text className="mb-2 font-qu-semibold text-base text-neutral-black-500">
                  Password
                </Text>
                <View className="relative justify-center">
                  <TextInput
                    className="rounded-xl border border-primary-200 bg-white px-4 py-3 pr-16 text-base text-neutral-black-500"
                    placeholder=""
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                  />
                  <Pressable
                    className="absolute right-4"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="font-qu-bold text-sm text-neutral-black-500">
                      {showPassword ? 'Hide' : 'Show'}
                    </Text>
                  </Pressable>
                </View>
                <View className="mt-2 items-end">
                  {/* <Link href="/(auth)/forgot-password" asChild> */}
                  <Text className="font-qu-semibold text-sm text-neutral-black-500">
                    Forgot password
                  </Text>
                  {/* </Link> */}
                </View>
              </View>
            </View>

            {/* Actions */}
            <View className="mt-auto gap-4 pb-4">
              <Button
                disabled={!isFormValid || isLoading}
                className={`w-full rounded-3xl ${
                  isFormValid ? 'bg-primary-500' : 'bg-primary-300'
                }`}
                onPress={handleLogin}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="font-qu-semibold text-base text-white">
                    Log in
                  </Text>
                )}
              </Button>

              <Button
                className="w-full flex-row items-center justify-center rounded-3xl border border-white bg-white shadow-sm"
                style={{
                  // Adding shadow specifically for iOS/Android if class doesn't cover it well enough
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
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
              <View className="flex-row items-center justify-center">
                <Text className="font-qu-semibold text-base text-neutral-black-500">
                  Don&apos;t have an account?{' '}
                </Text>
                <Link href="/(auth)/sign-up" asChild>
                  <Text className="font-qu-semibold text-base text-primary-500">
                    Sign up
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
