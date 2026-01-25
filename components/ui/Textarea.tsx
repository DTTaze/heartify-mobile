import { cn } from '@/app/lib/cn';
import { Text, TextInput, View } from 'react-native';

type TextareaProps = {
  label?: string;
  placeholder?: string;
  numberOfLines?: number;

  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function Textarea({
  label,
  placeholder,
  numberOfLines = 4,
  containerClassName,
  labelClassName,
  inputClassName,
}: TextareaProps) {
  return (
    <View className={cn('mb-4', containerClassName)}>
      {label && (
        <Text className={cn('mb-1 text-sm text-gray-700', labelClassName)}>
          {label}
        </Text>
      )}

      <TextInput
        multiline
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        placeholder={placeholder}
        className={cn(
          'min-h-[100px] rounded-xl border border-gray-300 px-4 py-3 text-base text-neutral-black-500',
          inputClassName,
        )}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
}
