import { Text, TextProps } from 'react-native';

type TextCustomProps = TextProps & {
  className?: string;
};

export function TextCustom({ className, ...props }: TextCustomProps) {
  return (
    <Text className={`font-sans text-black ${className ?? ''}`} {...props} />
  );
}
