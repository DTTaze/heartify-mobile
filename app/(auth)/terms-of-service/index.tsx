import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {
  ChevronLeft,
  FileText,
  User,
  Settings,
  Shield,
  Megaphone,
  Heart,
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsOfServiceScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 p-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header / Back Button */}
        <View className="flex-row items-center justify-between py-4">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center rounded-full bg-primary-400 px-3 py-1.5"
          >
            <ChevronLeft size={20} color="white" />
            <Text className="ml-1 font-qu-bold text-sm text-white">Back</Text>
          </Pressable>
        </View>

        {/* --- Privacy Policy Section --- */}
        <Text className="mb-4 font-qu-bold text-2xl text-neutral-black-500">
          Privacy Policy
        </Text>

        <Text className="mb-4 font-qu-semibold text-base leading-6 text-neutral-black-500">
          Your privacy is important to us. This policy explains how we handle
          your data.
        </Text>

        <View className="mb-6 space-y-3">
          <BulletPoint text="We collect personal and health-related information that you choose to provide, such as profile details or health metrics." />

          <View className="flex-row items-start">
            <Text className="mr-2 font-qu-semibold text-base text-neutral-black-500">
              •
            </Text>
            <View>
              <Text className="font-qu-semibold text-base leading-6 text-neutral-black-500">
                Your data is used to:
              </Text>
              <View className="ml-2 mt-1">
                <BulletPoint text="Personalize your experience" />
                <BulletPoint text="Provide insights and recommendations" />
                <BulletPoint text="Improve app performance and features" />
              </View>
            </View>
          </View>

          <BulletPoint text="We do not sell your personal data to third parties." />
          <BulletPoint text="Your information may be shared with trusted service providers only when necessary to operate the app securely." />
          <BulletPoint text="You can access, edit, or delete your data at any time in the app settings." />
          <BulletPoint text="We use reasonable security measures to protect your information." />
        </View>

        <Text className="mb-8 font-qu-semibold text-base text-neutral-black-500">
          By using the app, you agree to this Privacy Policy.
        </Text>

        {/* --- Cookie Policy Section --- */}
        <Text className="mb-4 font-qu-bold text-2xl text-slate-800">
          Cookie Policy
        </Text>

        <Text className="mb-4 font-qu-semibold text-base leading-6 text-neutral-black-500">
          We use cookies and similar technologies to improve your experience.
        </Text>

        <View className="mb-6 space-y-3">
          <BulletPoint text="Cookies help us remember your preferences and settings." />
          <BulletPoint text="They allow us to understand how users interact with the app so we can improve usability." />
          <BulletPoint text="Some cookies are essential for the app to function properly." />
          <BulletPoint text="You can control or disable cookies through your device or browser settings, but some features may not work correctly." />
        </View>

        <Text className="font-qu-semibold text-base leading-6 text-neutral-black-500">
          By continuing to use the app, you consent to the use of cookies as
          described.
        </Text>

        <View className="mb-8 mt-8">
          <Text className="mb-4 font-qu-bold text-2xl text-slate-800">
            Terms of Service
          </Text>

          <Text className="mb-6 font-qu-semibold text-base text-neutral-black-500">
            Key points you should know
          </Text>

          <View className="">
            {/* Item 1: Display and personalize content */}
            <KeyPointRow
              Icon={FileText}
              text="We use your information to display and personalize content that may be relevant to you. This information also helps us improve our services through research and innovation, including supporting community well-being and the public interest."
            />

            {/* Item 2: Health data privacy */}
            <KeyPointRow
              Icon={User}
              text="Your health data is private and not visible to other users. This app is designed for personal use only and does not include social or public sharing features."
            />

            {/* Item 3: Control of information */}
            <KeyPointRow
              Icon={Settings}
              text="You are in control of your information. You can access, update, or delete your personal data at any time in the app settings."
            />

            {/* Item 4: Data protection */}
            <KeyPointRow
              Icon={Shield}
              text="We protect your data. Your information is securely stored and handled in accordance with applicable privacy and data protection laws."
            />

            {/* Item 5: Notifications */}
            <KeyPointRow
              Icon={Megaphone}
              text="You may receive important notifications or emails related to your account or health insights. You can opt out of non-essential communications at any time."
            />

            {/* Item 6: Anonymized data */}
            <KeyPointRow
              Icon={Heart}
              text="We may use anonymized data for research and app improvement to enhance health features and overall performance. This data cannot be used to identify you."
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Component hiển thị gạch đầu dòng để tái sử dụng
const BulletPoint = ({
  text,
  subBullet = false,
}: {
  text: string;
  subBullet?: boolean;
}) => (
  <View className={`flex-row items-start ${subBullet ? 'mb-1' : ''}`}>
    <Text
      className={`mr-2 text-neutral-black-500 ${subBullet ? 'text-sm' : 'text-lg'}`}
    >
      {subBullet ? '-' : '•'}
    </Text>
    <Text className="flex-1 font-qu-semibold text-base leading-6 text-neutral-black-500">
      {text}
    </Text>
  </View>
);

const KeyPointRow = ({ Icon, text }: { Icon: any; text: string }) => (
  <View className="mb-6 flex-row items-start">
    <View className="mr-3 mt-1 w-6 items-center">
      <Icon size={24} color="#1e293b" strokeWidth={2} />
    </View>
    <Text className="flex-1 text-justify font-qu-semibold text-base leading-6 text-neutral-black-500">
      {text}
    </Text>
  </View>
);
