import { cn } from '@/app/lib/cn';
import { Text, TextInput, View } from 'react-native';

type InputProps = {
  label?: string;
  placeholder?: string;

  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function Input({
  label,
  placeholder,
  containerClassName,
  labelClassName,
  inputClassName,
}: InputProps) {
  return (
    <View className={cn('mb-4', containerClassName)}>
      {label && (
        <Text className={cn('mb-1 text-sm text-gray-700', labelClassName)}>
          {label}
        </Text>
      )}

      <TextInput
        placeholder={placeholder}
        className={cn(
          'rounded-xl border border-gray-300 px-4 py-3 text-base text-neutral-black-500',
          inputClassName,
        )}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}
