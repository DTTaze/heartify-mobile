import { BalooBhai2_700Bold } from '@expo-google-fonts/baloo-bhai-2';
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from '@expo-google-fonts/quicksand';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';
import './global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, useSegments, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/src/context/auth';

export const unstable_settings = {
  initialRouteName: 'index',
};

function RootLayoutNav() {
  const { session, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inTabsGroup = segments[0] === '(tabs)';

    // Check if at root
    const atRoot =
      (segments as string[]).length === 0 ||
      (segments.length === 1 && (segments[0] as string) === 'index');

    // Define routes within (auth) that are allowed for authenticated users (profile setup)
    // segments example: ['(auth)', 'sign-up', 'name']
    const isProfileSetupRoute =
      segments[0] === '(auth)' &&
      segments[1] === 'sign-up' &&
      [
        'name',
        'dob',
        'gender',
        'measurements',
        'medical-history',
        'intensity',
        'sport',
      ].includes(segments[2] as string);

    if (session) {
      // If authenticated
      if (atRoot) {
        // Redirect root  to tabs
        router.replace('/(tabs)');
      } else if (inAuthGroup && !isProfileSetupRoute) {
        // If in auth group but NOT in profile setup, redirect to tabs
        // This covers login, sign-up index, email, verify-email for already logged in users
        router.replace('/(tabs)');
      }
      // If inTabsGroup, do nothing (allow)
      // If isProfileSetupRoute, do nothing (allow)
    } else {
      // If NOT authenticated
      if (inTabsGroup || atRoot) {
        router.replace('/(auth)/sign-up');
      }
      // If inAuthGroup, allow
    }
  }, [session, segments, isLoading, router]);

  if (isLoading) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    'Quicksand-Light': Quicksand_300Light,
    'Quicksand-Regular': Quicksand_400Regular,
    'Quicksand-Medium': Quicksand_500Medium,
    'Quicksand-SemiBold': Quicksand_600SemiBold,
    'Quicksand-Bold': Quicksand_700Bold,
    'Baloo-Bold': BalooBhai2_700Bold,
  });

  if (!loaded) return null;

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
