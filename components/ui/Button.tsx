import { cn } from '@/lib/utils';
import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

export default function Button({
  title,
  onPress,
  className = '',
  textClassName = '',
  prefix,
  suffix,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'flex flex-row items-center justify-center rounded-3xl bg-primary-600 py-4',
        className,
      )}
    >
      {prefix}
      <Text
        className={cn('font-qu-semibold text-base text-white', textClassName)}
      >
        {' '}
        {title}{' '}
      </Text>
      {suffix}
    </Pressable>
  );
}
