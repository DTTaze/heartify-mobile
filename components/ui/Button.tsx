import { cn } from '@/lib/utils';
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
      className={cn('items-center rounded-3xl bg-primary-600 py-4', className)}
    >
      <Text
        className={cn('font-qu-semibold text-base text-white', textClassName)}
      >
        {title}
      </Text>
    </Pressable>
  );
}
