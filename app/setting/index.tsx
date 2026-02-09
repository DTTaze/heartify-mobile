import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Switch,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  X,
  Smartphone,
  Bell,
  Globe,
  Shield,
  User,
  HelpCircle,
  Heart,
  LogOut,
  ChevronRight,
  Sun,
  Moon,
  Settings as SettingsIcon,
} from 'lucide-react-native';

import { useAuth } from '@/src/context/auth';

export default function SettingScreen() {
  const router = useRouter();
  const { signOut } = useAuth();
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      // The auth context state change will trigger the layout redirection
      router.replace('/(auth)/sign-up');
    } catch (error) {
      console.error('Logout failed:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const SectionTitle = ({ title }: { title: string }) => (
    <Text className="mb-4 mt-6 font-qu-bold text-sm uppercase tracking-wider text-neutral-500">
      {title}
    </Text>
  );

  const SettingItem = ({
    icon: Icon,
    label,
    rightElement,
    onPress,
  }: {
    icon: any;
    label: string;
    rightElement?: React.ReactNode;
    onPress?: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      className="mb-6 flex-row items-center justify-between"
    >
      <View className="flex-row items-center gap-4">
        <Icon size={24} color="#1E293B" />
        <Text className="font-qu-medium text-base text-neutral-800">
          {label}
        </Text>
      </View>
      {rightElement || <ChevronRight size={20} color="#94A3B8" />}
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mb-6 flex-row items-center justify-between py-4">
          <View className="flex-row items-center gap-2">
            <SettingsIcon size={24} color="#1E293B" />
            <Text className="font-qu-bold text-xl text-neutral-800">
              Setting
            </Text>
          </View>
          <Pressable onPress={() => router.back()}>
            <X size={24} color="#1E293B" />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* GENERAL */}
          <SectionTitle title="GENERAL" />

          {/* Theme Application */}
          <SettingItem
            icon={Smartphone}
            label="Theme application"
            rightElement={
              <View className="h-8 flex-row items-center rounded-full bg-neutral-100 p-1">
                <Pressable
                  onPress={() => setIsThemeDark(false)}
                  className={`mr-1 rounded-full p-1 ${
                    !isThemeDark ? 'bg-blue-500 shadow-sm' : ''
                  }`}
                >
                  <Sun
                    size={16}
                    color={!isThemeDark ? 'white' : '#94A3B8'}
                    strokeWidth={2.5}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setIsThemeDark(true)}
                  className={`rounded-full p-1 ${
                    isThemeDark ? 'bg-blue-500 shadow-sm' : ''
                  }`}
                >
                  <Moon
                    size={16}
                    color={isThemeDark ? 'white' : '#94A3B8'}
                    strokeWidth={2.5}
                  />
                </Pressable>
              </View>
            }
          />

          {/* Notification */}
          <SettingItem
            icon={Bell}
            label="Notification"
            rightElement={
              <Switch
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor={'#FFFFFF'}
                ios_backgroundColor="#E2E8F0"
                onValueChange={setIsNotificationEnabled}
                value={isNotificationEnabled}
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              />
            }
          />

          {/* Language */}
          <SettingItem
            icon={Globe}
            label="Language"
            onPress={() => {}}
            rightElement={
              <View className="flex-row items-center gap-2">
                <Text className="font-qu-medium text-sm text-neutral-500">
                  English
                </Text>
                <ChevronRight size={20} color="#94A3B8" />
              </View>
            }
          />

          {/* ACCOUNT & PRIVACY */}
          <SectionTitle title="ACCOUNT & PRIVACY" />

          <SettingItem
            icon={Shield}
            label="Privacy & Security"
            onPress={() => {}}
          />
          <SettingItem
            icon={User}
            label="Personal information"
            onPress={() => {}}
          />

          {/* SUPPORT & INFO */}
          <SectionTitle title="SUPPORT & INFO" />

          <SettingItem
            icon={HelpCircle}
            label="Support & Help"
            onPress={() => {}}
          />
          <SettingItem
            icon={Heart}
            label="About us"
            onPress={() => router.push('/(tabs)/profile')} // Example or placeholder
          />

          {/* Log out Button */}
          <Pressable
            onPress={handleLogout}
            disabled={isLoggingOut}
            className="mt-8 flex-row items-center justify-center rounded-3xl bg-blue-500 py-4 shadow-sm active:bg-blue-600"
          >
            {isLoggingOut ? (
              <ActivityIndicator color="white" />
            ) : (
              <>
                <LogOut size={20} color="white" className="mr-2" />
                <Text className="font-qu-bold text-base text-white">
                  Log out
                </Text>
              </>
            )}
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
