import Input from '@/components/ui/Input';
import Section from '@/components/ui/Section';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function BloodPressureSection() {
  const [onMedication, setOnMedication] = useState<'yes' | 'no' | null>(null);

  return (
    <Section
      title="Blood Pressure (mmHg)"
      subtitle="Measures the force of blood against artery walls"
    >
      <Input
        labelClassName="text-sm font-semibold"
        label="Systolic (The top number)"
      />

      <Input
        labelClassName="text-sm font-semibold"
        label="Diastolic (The bottom number)"
      />

      <View className="mt-4">
        <Text className="mb-2 text-sm font-semibold text-neutral-black-500">
          Currently on blood pressure medication?
        </Text>

        {['yes', 'no'].map((value) => {
          const isSelected = onMedication === value;

          return (
            <Pressable
              key={value}
              onPress={() => setOnMedication(value as 'yes' | 'no')}
              className="mb-2 flex-row items-center"
            >
              <View
                className={`mr-3 h-3 w-3 items-center justify-center rounded-full border
                ${isSelected ? 'border-primary-600' : 'border-gray-400'}`}
              >
                {isSelected && (
                  <View className="h-3 w-3 rounded-full bg-primary-600" />
                )}
              </View>

              <Text className="text-base capitalize">{value}</Text>
            </Pressable>
          );
        })}
      </View>
    </Section>
  );
}
