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

  // State for form fields
  const [isSmoker, setIsSmoker] = useState<boolean | null>(null);
  const [hasDiabetes, setHasDiabetes] = useState<boolean | null>(null);
  const [hasHighBP, setHasHighBP] = useState<boolean | null>(null);

  const [allergies, setAllergies] = useState<string[]>([]);
  const [otherAllergy, setOtherAllergy] = useState('');

  const [hasMedications, setHasMedications] = useState<boolean | null>(null);
  const [medicationName, setMedicationName] = useState('');
  const [showMedicationInfo, setShowMedicationInfo] = useState(false);

  const [limitations, setLimitations] = useState<string[]>([]);
  const [otherLimitation, setOtherLimitation] = useState('');
  const [showLimitationInfo, setShowLimitationInfo] = useState(false);

  const [consents, setConsents] = useState({
    emergency: false,
    ai: false,
  });

  const toggleAllergy = (item: string) => {
    if (item === 'none') {
      setAllergies(['none']);
      setOtherAllergy('');
    } else {
      let newAllergies = allergies.includes(item)
        ? allergies.filter((i) => i !== item)
        : [...allergies, item];

      // Remove 'none' if other items are selected
      if (newAllergies.includes('none')) {
        newAllergies = newAllergies.filter((i) => i !== 'none');
      }
      setAllergies(newAllergies);
    }
  };

  const toggleLimitation = (item: string) => {
    if (item === 'no') {
      setLimitations(['no']);
      setOtherLimitation('');
    } else {
      let newLimitations = limitations.includes(item)
        ? limitations.filter((i) => i !== item)
        : [...limitations, item];

      // Remove 'no' if other items are selected
      if (newLimitations.includes('no')) {
        newLimitations = newLimitations.filter((i) => i !== 'no');
      }
      setLimitations(newLimitations);
    }
  };

  const isNextEnabled =
    isSmoker !== null &&
    hasDiabetes !== null &&
    hasHighBP !== null &&
    consents.emergency &&
    consents.ai;

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
              {/* Smoking */}
              <Section title="Smoking" subtitle="Do you smoke?">
                <CheckBoxRow
                  label="Yes"
                  isChecked={isSmoker === true}
                  onPress={() => setIsSmoker(true)}
                />
                <CheckBoxRow
                  label="No"
                  isChecked={isSmoker === false}
                  onPress={() => setIsSmoker(false)}
                />
              </Section>

              {/* Diabetes */}
              <Section title="Diabetes" subtitle="Do you have diabetes?">
                <CheckBoxRow
                  label="Yes"
                  isChecked={hasDiabetes === true}
                  onPress={() => setHasDiabetes(true)}
                />
                <CheckBoxRow
                  label="No"
                  isChecked={hasDiabetes === false}
                  onPress={() => setHasDiabetes(false)}
                />
              </Section>

              {/* Blood Pressure */}
              <Section
                title="Blood Pressure"
                subtitle="Have you ever been (or are you currently) being treated for high blood pressure?"
              >
                <CheckBoxRow
                  label="Yes"
                  isChecked={hasHighBP === true}
                  onPress={() => setHasHighBP(true)}
                />
                <CheckBoxRow
                  label="No"
                  isChecked={hasHighBP === false}
                  onPress={() => setHasHighBP(false)}
                />
              </Section>

              {/* Allergies */}
              <Section
                title="Allergies & Sensitivities"
                subtitle="Do you have any allergies or sensitivities?"
              >
                <CheckBoxRow
                  label="None"
                  isChecked={allergies.includes('none')}
                  onPress={() => toggleAllergy('none')}
                />
                <CheckBoxRow
                  label="Food (optional - e.g. peanuts, seafood)"
                  isChecked={allergies.includes('food')}
                  onPress={() => toggleAllergy('food')}
                />
                <CheckBoxRow
                  label="Medication"
                  isChecked={allergies.includes('medication')}
                  onPress={() => toggleAllergy('medication')}
                />
                <CheckBoxRow
                  label="Other"
                  isChecked={allergies.includes('other')}
                  onPress={() => toggleAllergy('other')}
                />
                {allergies.includes('other') && (
                  <TextInput
                    className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                    placeholder="Please specify"
                    value={otherAllergy}
                    onChangeText={setOtherAllergy}
                  />
                )}
              </Section>

              {/* Medications */}
              <Section
                title="Medications (Optional)"
                subtitle="Are you taking any medications regularly?"
              >
                <View className="absolute right-0 top-0 z-50">
                  <Pressable
                    onPress={() => setShowMedicationInfo(!showMedicationInfo)}
                  >
                    <Info size={20} color="#6B7280" />
                  </Pressable>
                  {showMedicationInfo && (
                    <View className="absolute right-0 top-6 z-50 w-60 rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm">
                      <Text className="font-qu-regular text-xs text-neutral-black-500">
                        No dosage needed.{'\n'}
                        This is only to avoid conflicting suggestions
                      </Text>
                    </View>
                  )}
                </View>
                <CheckBoxRow
                  label="No"
                  isChecked={hasMedications === false}
                  onPress={() => {
                    setHasMedications(false);
                    setMedicationName('');
                  }}
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
                  value={medicationName}
                  onChangeText={setMedicationName}
                  style={{ opacity: hasMedications === true ? 1 : 0.5 }}
                />
              </Section>

              {/* Physical Limitations */}
              <Section
                title="Physical Limitations or Injuries"
                subtitle="Do you have any physical limitations or recent injuries?"
              >
                <View className="absolute right-0 top-0 z-50">
                  <Pressable
                    onPress={() => setShowLimitationInfo(!showLimitationInfo)}
                  >
                    <Info size={20} color="#6B7280" />
                  </Pressable>
                  {showLimitationInfo && (
                    <View className="absolute right-0 top-6 z-50 w-60 rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm">
                      <Text className="mb-1 font-qu-semibold text-xs text-neutral-black-500">
                        BuBu will use this to:
                      </Text>
                      <Text className="font-qu-regular text-xs text-neutral-black-500">
                        • Avoid overly intense activity suggestions
                      </Text>
                      <Text className="font-qu-regular text-xs text-neutral-black-500">
                        • Use gentler guidance if you may be at higher risk
                      </Text>
                    </View>
                  )}
                </View>
                <CheckBoxRow
                  label="No"
                  isChecked={limitations.includes('no')}
                  onPress={() => toggleLimitation('no')}
                />
                <CheckBoxRow
                  label="Back or neck pain"
                  isChecked={limitations.includes('back')}
                  onPress={() => toggleLimitation('back')}
                />
                <CheckBoxRow
                  label="Knee or leg issues"
                  isChecked={limitations.includes('knee')}
                  onPress={() => toggleLimitation('knee')}
                />
                <CheckBoxRow
                  label="Recent injury"
                  isChecked={limitations.includes('injury')}
                  onPress={() => toggleLimitation('injury')}
                />
                <CheckBoxRow
                  label="Other"
                  isChecked={limitations.includes('other')}
                  onPress={() => toggleLimitation('other')}
                />
                {limitations.includes('other') && (
                  <TextInput
                    className="mt-2 rounded-lg border border-gray-200 p-2 font-qu-semibold text-sm"
                    placeholder="Please specify"
                    value={otherLimitation}
                    onChangeText={setOtherLimitation}
                  />
                )}
              </Section>

              {/* Emergency Awareness */}
              <Section
                title="Emergency Awareness"
                subtitle="When should you seek medical help?"
                required
              >
                <Text className="mb-2 text-center text-sm text-gray-600">
                  Always remember
                  {'\n'}
                  Bubu does not replace{' '}
                  <Text className="text-primary-500 underline">a doctor</Text>
                </Text>
                <Text className="mb-4 text-sm text-gray-600">
                  If you experience serious symptoms (such as chest pain or
                  prolonged dizziness)
                  {'\n'}
                  Please seek medical assistance immediately.
                </Text>
                <CheckBoxRow
                  label="I understand"
                  isChecked={consents.emergency}
                  onPress={() =>
                    setConsents({ ...consents, emergency: !consents.emergency })
                  }
                />
              </Section>

              {/* AI Personalization Consent */}
              <Section title="AI Personalization Consent" required>
                <Text className="mb-4 text-sm text-gray-600">
                  Please keep your information up to date to ensure accurate AI
                  suggestions.
                </Text>
                <CheckBoxRow
                  label="I understand"
                  isChecked={consents.ai}
                  onPress={() => setConsents({ ...consents, ai: !consents.ai })}
                />
              </Section>
            </View>

            {/* Footer */}
            <View className="pb-8 pt-4">
              <Button
                disabled={!isNextEnabled}
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
  required,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  required?: boolean;
}) => (
  <View className="relative mb-6">
    <View className="mb-1 flex-row items-center justify-between">
      <Text className="font-qu-bold text-lg text-neutral-black-500">
        {title}
      </Text>
      {required && <Text className="text-xl text-neutral-black-500">*</Text>}
    </View>
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
