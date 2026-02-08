import {
  View,
  Pressable,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ArrowRight, Weight, Ruler } from 'lucide-react-native';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';

export default function SignUpMeasurementsScreen() {
  const router = useRouter();

  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');

  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');

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

            {/* Progress */}
            <View className="mb-20 mt-2">
              <View className="relative mb-2 w-full flex-row justify-center">
                <View className="absolute -top-8 left-[70%] -translate-x-1/2 items-center">
                  <View className="mb-1 rounded-md bg-neutral-100 px-2 py-0.5">
                    <Text className="font-qu-bold text-xs text-neutral-black-500">
                      70%
                    </Text>
                  </View>
                </View>
              </View>
              <Progress
                value={70}
                className="h-1 bg-primary-100"
                indicatorClassName="bg-primary-500"
              />
            </View>

            {/* Content */}
            <View className="mt-4 flex-1">
              <View className="mb-8">
                <Text className="mb-2 font-qu-bold text-2xl text-neutral-black-500">
                  Height & Weight
                </Text>
                <Text className="font-qu-semibold text-base leading-5 text-neutral-black-500">
                  We&apos;ll use this info to tailor your experience. You can
                  update this anytime
                </Text>
              </View>

              <View>
                {/* Weight Input */}
                <View className="flex-row items-center justify-between self-stretch border-b border-t border-neutral-black-50 py-4">
                  <View className="w-1/3 flex-row items-center gap-3">
                    <Weight size={24} color="#4B5563" />
                    <Text className="font-qu-semibold text-base text-neutral-black-500">
                      Weight
                    </Text>
                  </View>

                  <View className="flex-1 flex-row items-center justify-between gap-11">
                    <View className="w-1/3">
                      <TextInput
                        className="w-full rounded-lg border border-gray-300 py-2 text-center font-qu-bold text-xl text-neutral-black-500"
                        placeholder="0"
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                      />
                    </View>

                    <View className="w-2/3 flex-row items-center justify-start gap-3">
                      <Pressable
                        onPress={() => setWeightUnit('kg')}
                        className="flex-row items-center"
                      >
                        <View
                          className={cn(
                            'mr-1 h-4 w-4 items-center justify-center rounded-full border border-gray-400',
                            weightUnit === 'kg' && 'border-primary-500',
                          )}
                        >
                          {weightUnit === 'kg' && (
                            <View className="h-2 w-2 rounded-full bg-primary-500" />
                          )}
                        </View>
                        <Text className="font-qu-medium text-sm text-gray-600">
                          kg
                        </Text>
                      </Pressable>

                      <Pressable
                        onPress={() => setWeightUnit('lb')}
                        className="flex-row items-center"
                      >
                        <View
                          className={cn(
                            'mr-1 h-4 w-4 items-center justify-center rounded-full border border-gray-400',
                            weightUnit === 'lb' && 'border-primary-500',
                          )}
                        >
                          {weightUnit === 'lb' && (
                            <View className="h-2 w-2 rounded-full bg-primary-500" />
                          )}
                        </View>
                        <Text className="font-qu-medium text-sm text-gray-600">
                          lb
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>

                {/* Height Input */}
                <View className="flex-row items-center justify-between self-stretch border-b border-neutral-black-50 py-4">
                  <View className="w-1/3 flex-row items-center gap-3">
                    <Ruler size={24} color="#4B5563" />
                    <Text className="font-qu-semibold text-base text-neutral-black-500">
                      Height
                    </Text>
                  </View>

                  <View className="flex-1 flex-row items-center justify-between gap-11">
                    <View className="w-1/3">
                      <TextInput
                        className="w-full rounded-lg border border-gray-300 py-2 text-center font-qu-bold text-xl text-neutral-black-500"
                        placeholder="0"
                        keyboardType="numeric"
                        value={height}
                        onChangeText={setHeight}
                      />
                    </View>

                    <View className="w-2/3 flex-row items-center justify-start gap-3">
                      <Pressable
                        onPress={() => setHeightUnit('cm')}
                        className="flex-row items-center"
                      >
                        <View
                          className={cn(
                            'mr-1 h-4 w-4 items-center justify-center rounded-full border border-gray-400',
                            heightUnit === 'cm' && 'border-primary-500',
                          )}
                        >
                          {heightUnit === 'cm' && (
                            <View className="h-2 w-2 rounded-full bg-primary-500" />
                          )}
                        </View>
                        <Text className="font-qu-medium text-sm text-gray-600">
                          cm
                        </Text>
                      </Pressable>

                      <Pressable
                        onPress={() => setHeightUnit('ft')}
                        className="flex-row items-center"
                      >
                        <View
                          className={cn(
                            'mr-1 h-4 w-4 items-center justify-center rounded-full border border-gray-400',
                            heightUnit === 'ft' && 'border-primary-500',
                          )}
                        >
                          {heightUnit === 'ft' && (
                            <View className="h-2 w-2 rounded-full bg-primary-500" />
                          )}
                        </View>
                        <Text className="font-qu-medium text-sm text-gray-600">
                          ft/in
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={!weight || !height}
                className="w-full rounded-3xl bg-primary-500"
                onPress={() => router.push('/sign-up/medical-history' as any)}
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
