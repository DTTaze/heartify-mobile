import { Stack } from 'expo-router';
import { SignUpProvider } from './context';

export default function SignUpLayout() {
  return (
    <SignUpProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="name" />
        <Stack.Screen name="username" />
        <Stack.Screen name="dob" />
        <Stack.Screen name="gender" />
        <Stack.Screen name="measurements" />
        <Stack.Screen name="medical-history" />
        <Stack.Screen name="intensity" />
        <Stack.Screen name="sport" />
      </Stack>
    </SignUpProvider>
  );
}
