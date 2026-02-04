import * as Slot from '@rn-primitives/slot';
import { SlottableTextProps, TextRef } from '@rn-primitives/types';

import { createContext, forwardRef, useContext } from 'react';
import { Text as RNText } from 'react-native';

import { cn } from '@/lib/utils';

const TextClassContext = createContext<string | undefined>(undefined);

export interface TextProps {
  /**
   * The text to display if not using children.
   */
  text?: string;
}

const Text = forwardRef<TextRef, SlottableTextProps & TextProps>(
  ({ className, asChild = false, text, children, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    const content = text ?? children;

    return (
      <Component
        ref={ref}
        className={cn(
          'text-neutral-black font-qu-regular text-base',
          textClass,
          className,
        )}
        {...props}
      >
        {content}
      </Component>
    );
  },
);

Text.displayName = 'Text';

export { Text, TextClassContext };
