import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
};

export default function Button({
  title,
  onPress,
  className = '',
  textClassName = '',
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center rounded-3xl bg-primary-600 py-4 ${className}`}
    >
      <Text className={`font-semibold text-base text-white ${textClassName}`}>
        {title}
      </Text>
    </Pressable>
  );
}
