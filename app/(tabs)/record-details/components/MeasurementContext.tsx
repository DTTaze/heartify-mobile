import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type MeasurementType = 'GENERAL' | 'HOME' | 'HOSPITAL';

function OptionButton({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center gap-4 rounded-[4px] px-2 py-3 ${
        active ? 'bg-[#485D81]' : 'bg-neutral-black-100'
      }`}
    >
      <View
        className={`h-4 w-4 rounded-full border-2 ${
          active ? 'border-white bg-white' : 'border-white bg-transparent'
        }`}
      />

      <Text className="font-qu-semibold text-2 text-white">{label}</Text>
    </TouchableOpacity>
  );
}

export default function MeasurementContext() {
  const [selected, setSelected] = useState<MeasurementType>('GENERAL');

  const isActive = (type: MeasurementType) => selected === type;

  const inputClass = (active: boolean) =>
    `rounded-lg border p-3 text-sm ${
      active
        ? 'border-neutral-black-300 text-neutral-black-500'
        : 'border-neutral-black-200 text-neutral-black-300'
    }`;

  return (
    <View className="gap-4 px-4">
      <View className="flex flex-row justify-between">
        <Text className="font-qu-semibold text-1 text-black">
          Measurement context
        </Text>

        <Text className="text-neutral-black-500">*</Text>
      </View>

      <View className="gap-2">
        <Text className="font-qu-semibold text-2 text-neutral-black-500">
          Choose one option
        </Text>

        <View className="gap-5">
          <OptionButton
            label="General Check-up"
            active={isActive('GENERAL')}
            onPress={() => setSelected('GENERAL')}
          />

          <TextInput
            editable={isActive('GENERAL')}
            placeholder="Reason for measurement (optional)"
            multiline
            className={inputClass(isActive('GENERAL'))}
          />

          <OptionButton
            label="Home Measurement"
            active={isActive('HOME')}
            onPress={() => setSelected('HOME')}
          />

          <TextInput
            editable={isActive('HOME')}
            placeholder="Reason for measurement (optional)"
            multiline
            className={inputClass(isActive('HOME'))}
          />

          <OptionButton
            label="Hospital Visit"
            active={isActive('HOSPITAL')}
            onPress={() => setSelected('HOSPITAL')}
          />

          <View className="gap-2">
            <TextInput
              editable={isActive('HOSPITAL')}
              placeholder="Doctor name"
              className={inputClass(isActive('HOSPITAL'))}
            />

            <TextInput
              editable={isActive('HOSPITAL')}
              placeholder="Facility / Hospital name"
              className={inputClass(isActive('HOSPITAL'))}
            />

            <TextInput
              editable={isActive('HOSPITAL')}
              placeholder="Reason for visit (optional)"
              multiline
              className={inputClass(isActive('HOSPITAL'))}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
