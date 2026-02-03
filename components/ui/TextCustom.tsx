import { cn } from '@/app/lib/cn';
import { Text, TextProps } from 'react-native';

type TextCustomProps = TextProps & {
  className?: string;
};

export function TextCustom({ className, ...props }: TextCustomProps) {
  return (
    <Text
      className={cn(`font-qu-regular text-black ${className}`)}
      {...props}
    />
  );
}
