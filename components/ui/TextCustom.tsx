import { cn } from '@/lib/utils';
import { Text, TextProps } from 'react-native';

type TextCustomProps = TextProps & {
  className?: string;
};

export function TextCustom({ className, ...props }: TextCustomProps) {
  return (
    <Text
      className={cn(`text-black, font-qu-regular ${className}`)}
      {...props}
    />
  );
}
