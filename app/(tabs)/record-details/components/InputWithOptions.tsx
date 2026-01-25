import { TextCustom } from '@/components/ui/TextCustom';
import UnitOption from '@/components/ui/UnitOption';
import { useState } from 'react';
import { TextInput, View } from 'react-native';

type InputWithOptionsProps<T extends string> = {
  label: string;
  options: T[];
  defaultValue?: T;
  inputWidth?: number;
};

export function InputWithOptions<T extends string>({
  label,
  options,
  defaultValue,
  inputWidth = 80,
}: InputWithOptionsProps<T>) {
  const [selected, setSelected] = useState<T>(defaultValue ?? options[0]);

  return (
    <View className="mb-5">
      <TextCustom className="mb-1 text-sm font-semibold text-neutral-black-500">
        {label}
      </TextCustom>

      <View className="flex-row items-center gap-4">
        <TextInput
          keyboardType="numeric"
          className="rounded-xl border border-gray-300 px-4 py-3 text-base text-neutral-black-500"
          style={{ width: inputWidth }}
        />

        <View style={{ flex: 1 }} className="flex-row items-center gap-6">
          {options.map((option) => (
            <UnitOption
              key={option}
              label={option}
              selected={selected === option}
              onPress={() => setSelected(option)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
