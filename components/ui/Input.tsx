import { cn } from '@/app/lib/cn';
import { Text, TextInput, View, TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  label?: string;

  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function Input({
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  ...props
}: InputProps) {
  return (
    <View className={cn('mb-4', containerClassName)}>
      {label && (
        <Text className={cn('mb-1 text-sm text-gray-700', labelClassName)}>
          {label}
        </Text>
      )}

      <TextInput
        placeholderTextColor="#9CA3AF"
        className={cn(
          'rounded-xl border border-gray-300 px-4 py-3 text-base text-neutral-black-500',
          inputClassName,
        )}
        {...props}
      />
    </View>
  );
}
