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
import { ChevronLeft, ArrowRight, Info } from 'lucide-react-native';
import { useState } from 'react';
import { Checkbox } from 'expo-checkbox';

import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';

export default function SignUpMedicalHistoryScreen() {
  const router = useRouter();

  // State for form fields (simplified for UI demo)
  const [allergies, setAllergies] = useState<string[]>([]);
  const [medicalConditions, setMedicalConditions] = useState<string[]>([]);
  const [hasMedications, setHasMedications] = useState<boolean | null>(null);
  const [limitations, setLimitations] = useState<string[]>([]);
  const [consents, setConsents] = useState({
    emergency: false,
    ai: false,
    accuracy: false,
  });

  const toggleSelection = (
    list: string[],
    setList: (l: string[]) => void,
    item: string,
  ) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
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

            {/* Progress */}
            <View className="mb-8 mt-2">
              <View className="relative mb-2 w-full flex-row justify-center">
                <View className="absolute -top-8 left-[80%] -translate-x-1/2 items-center">
                  <View className="mb-1 rounded-md bg-neutral-100 px-2 py-0.5">
                    <Text className="font-qu-bold text-xs text-neutral-black-500">
                      80%
                    </Text>
                  </View>
                </View>
              </View>
              <Progress
                value={80}
                className="h-1 bg-primary-100"
                indicatorClassName="bg-primary-500"
              />
            </View>

            {/* Content */}
            <View className="mt-0 flex-1">
              {/* Allergies */}
              <Section
                title="Allergies & Sensitivities"
                subtitle="Do you have any allergies or sensitivities?"
              >
                <CheckBoxRow
                  label="None"
                  isChecked={allergies.includes('none')}
                  onPress={() =>
                    toggleSelection(allergies, setAllergies, 'none')
                  }
                />
                <CheckBoxRow
                  label="Food (optional - e.g. peanuts, seafood)"
                  isChecked={allergies.includes('food')}
                  onPress={() =>
                    toggleSelection(allergies, setAllergies, 'food')
                  }
                />
                <CheckBoxRow
                  label="Medication"
                  isChecked={allergies.includes('medication')}
                  onPress={() =>
                    toggleSelection(allergies, setAllergies, 'medication')
                  }
                />
                <CheckBoxRow
                  label="Other"
                  isChecked={allergies.includes('other')}
                  onPress={() =>
                    toggleSelection(allergies, setAllergies, 'other')
                  }
                />
                <TextInput
                  className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                  placeholder="Optional text"
                />
              </Section>

              {/* Current Medical Treatment */}
              <Section
                title="Current Medical Treatment"
                subtitle="Are you currently being treated or monitored for any condition?"
              >
                <CheckBoxRow
                  label="No"
                  isChecked={medicalConditions.includes('no')}
                  onPress={() =>
                    toggleSelection(
                      medicalConditions,
                      setMedicalConditions,
                      'no',
                    )
                  }
                />
                <CheckBoxRow
                  label="High blood pressure"
                  isChecked={medicalConditions.includes('hbp')}
                  onPress={() =>
                    toggleSelection(
                      medicalConditions,
                      setMedicalConditions,
                      'hbp',
                    )
                  }
                />
                <CheckBoxRow
                  label="Heart related condition"
                  isChecked={medicalConditions.includes('heart')}
                  onPress={() =>
                    toggleSelection(
                      medicalConditions,
                      setMedicalConditions,
                      'heart',
                    )
                  }
                />
                <CheckBoxRow
                  label="Diabetes"
                  isChecked={medicalConditions.includes('diabetes')}
                  onPress={() =>
                    toggleSelection(
                      medicalConditions,
                      setMedicalConditions,
                      'diabetes',
                    )
                  }
                />
                <CheckBoxRow
                  label="Other (optional)"
                  isChecked={medicalConditions.includes('other')}
                  onPress={() =>
                    toggleSelection(
                      medicalConditions,
                      setMedicalConditions,
                      'other',
                    )
                  }
                />
                <TextInput
                  className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                  placeholder="Optional text"
                />

                <View className="mt-2 flex-row gap-2 rounded-lg bg-gray-50 p-3">
                  <Info size={16} color="#6B7280" className="mt-0.5" />
                  <View className="flex-1">
                    <Text className="mb-1 font-qu-semibold text-xs text-gray-500">
                      Bubu will use this to:
                    </Text>
                    <Text className="text-xs text-gray-500">
                      • Avoid overly intense activity suggestions
                    </Text>
                    <Text className="text-xs text-gray-500">
                      • Use gentler guidance if you may be at higher risk
                    </Text>
                  </View>
                </View>
              </Section>

              {/* Medications */}
              <Section
                title="Medications (Optional)"
                subtitle="Are you taking any medications regularly?"
              >
                <CheckBoxRow
                  label="No"
                  isChecked={hasMedications === false}
                  onPress={() => setHasMedications(false)}
                />
                <CheckBoxRow
                  label="Yes (optional: medication name)"
                  isChecked={hasMedications === true}
                  onPress={() => setHasMedications(true)}
                />
                <TextInput
                  className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                  placeholder=""
                  editable={hasMedications === true}
                />

                <View className="mt-2 flex-row gap-2">
                  <Info size={16} color="#6B7280" />
                  <Text className="flex-1 text-xs text-gray-500">
                    No dosage needed. {'\n'}This is only to avoid conflicting
                    suggestions.
                  </Text>
                </View>
              </Section>

              {/* Physical Limitations */}
              <Section
                title="Physical Limitations or Injuries"
                subtitle="Do you have any physical limitations or recent injuries?"
              >
                <CheckBoxRow
                  label="No"
                  isChecked={limitations.includes('no')}
                  onPress={() =>
                    toggleSelection(limitations, setLimitations, 'no')
                  }
                />
                <CheckBoxRow
                  label="Back or neck pain"
                  isChecked={limitations.includes('back')}
                  onPress={() =>
                    toggleSelection(limitations, setLimitations, 'back')
                  }
                />
                <CheckBoxRow
                  label="Knee or leg issues"
                  isChecked={limitations.includes('knee')}
                  onPress={() =>
                    toggleSelection(limitations, setLimitations, 'knee')
                  }
                />
                <CheckBoxRow
                  label="Recent injury"
                  isChecked={limitations.includes('injury')}
                  onPress={() =>
                    toggleSelection(limitations, setLimitations, 'injury')
                  }
                />
                <CheckBoxRow
                  label="Other"
                  isChecked={limitations.includes('other')}
                  onPress={() =>
                    toggleSelection(limitations, setLimitations, 'other')
                  }
                />
                <TextInput
                  className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                  placeholder=""
                />

                <View className="mt-2 flex-row gap-2">
                  <Info size={16} color="#6B7280" />
                  <Text className="flex-1 text-xs text-gray-500">
                    Especially important for exercise and movement
                    recommendations.
                  </Text>
                </View>
              </Section>

              {/* Emergency Awareness */}
              <Section
                title="Emergency Awareness"
                subtitle="When should you seek medical help?"
              >
                <Text className="mb-2 font-qu-semibold text-sm text-gray-600">
                  Bubu does not replace{' '}
                  <Text className="text-primary-500">a doctor.</Text>
                </Text>
                <Text className="mb-2 text-sm text-gray-600">
                  If you experience serious symptoms (such as chest pain or
                  prolonged dizziness). Please seek medical assistance
                  immediately.
                </Text>
                <CheckBoxRow
                  label="I understand"
                  isChecked={consents.emergency}
                  onPress={() =>
                    setConsents({ ...consents, emergency: !consents.emergency })
                  }
                />
              </Section>

              {/* AI Consent */}
              <Section title="AI Personalization Consent">
                <Text className="mb-2 text-sm text-gray-600">
                  Bubu uses this information only to personalize suggestions,
                  not for diagnosis.
                </Text>
                <CheckBoxRow
                  label="I understand"
                  isChecked={consents.ai}
                  onPress={() => setConsents({ ...consents, ai: !consents.ai })}
                />
              </Section>

              {/* Accuracy Consent */}
              <Section title="AI Personalization Consent">
                <Text className="mb-2 text-sm text-gray-600">
                  Please keep your information up to date to ensure accurate AI
                  suggestions.
                </Text>
                <CheckBoxRow
                  label="I understand"
                  isChecked={consents.accuracy}
                  onPress={() =>
                    setConsents({ ...consents, accuracy: !consents.accuracy })
                  }
                />
              </Section>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={
                  !consents.emergency || !consents.ai || !consents.accuracy
                } // Simple validation
                className="w-full rounded-3xl bg-primary-500"
                onPress={() => router.push('/sign-up/intensity' as any)}
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

const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <View className="mb-6">
    <Text className="mb-1 font-qu-bold text-lg text-neutral-black-500">
      {title}
    </Text>
    {subtitle && (
      <Text className="mb-3 font-qu-semibold text-sm text-neutral-black-500">
        {subtitle}
      </Text>
    )}
    {children}
  </View>
);

const CheckBoxRow = ({
  label,
  isChecked,
  onPress,
}: {
  label: string;
  isChecked: boolean;
  onPress: () => void;
}) => (
  <Pressable className="mb-3 flex-row items-center" onPress={onPress}>
    <Checkbox
      value={isChecked}
      onValueChange={onPress}
      color={isChecked ? '#4630EB' : undefined}
      style={{
        width: 20,
        height: 20,
        borderRadius: 4,
        marginRight: 10,
        borderColor: '#D1D5DB',
      }}
    />
    <Text className="flex-1 font-qu-semibold text-sm leading-5 text-neutral-black-500">
      {label}
    </Text>
  </Pressable>
);
