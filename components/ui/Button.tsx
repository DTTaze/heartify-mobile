import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useMemo,
} from 'react';
import { ActivityIndicator, Pressable } from 'react-native';

import { Href, Link } from 'expo-router';

import { cva, type VariantProps } from 'class-variance-authority';
import { ClassNameValue } from 'tailwind-merge';

import { cn } from '@/lib/utils';

import { Text, TextClassContext } from './Text';

const buttonVariants = cva(
  'group flex items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-primary active:bg-primary-700 disabled:bg-primary-500/30',
        destructive: 'bg-danger active:bg-danger-700 disabled:bg-neutral-100',
        outline:
          'active:bg-accent rounded-lg border border-primary-300 bg-transparent active:border-neutral-700 disabled:border-neutral-100',
        secondary: 'bg-secondary active:opacity-80',
        ghost: 'active:bg-accent',
        link: '',
      },
      size: {
        default: 'native:h-12 native:px-5 native:py-3 h-12 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'native:h-14 h-11 px-8',
        icon: 'h-10 w-10',
        flat: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonTextVariants = cva('font-be-medium text-sm', {
  variants: {
    variant: {
      default: 'text-white',
      destructive: 'text-white',
      outline: 'group-active:text-neutral-700',
      secondary: 'text-secondary-foreground',
      ghost: '',
      link: 'text-primary group-active:underline',
    },
    size: {
      default: '',
      sm: '',
      lg: 'native:text-lg',
      icon: '',
      flat: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

export type ButtonPropsWithHref = ButtonProps & {
  /**
   * URL when variant="link"
   */
  href?: Href;
  /**
   * Text content (if not using children)
   */
  text?: string;
  /**
   * Show loading spinner & disable button
   */
  loading?: boolean;
  /**
   * Extra class for button text
   */
  textClassName?: ClassNameValue;
};

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonPropsWithHref>(
  (
    {
      className,
      variant = 'default',
      size,
      href,
      text,
      loading,
      textClassName,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const isLink = variant === 'link' && href;

    const renderChildren = useMemo(() => {
      if (loading) {
        return <ActivityIndicator size="small" />;
      }

      if (text) {
        return (
          <Text
            className={cn(
              'leading-normal',
              disabled && 'text-neutral-300',
              textClassName,
            )}
            text={text}
          />
        );
      }

      if (typeof children === 'function') return null;

      return children ?? null;
    }, [loading, text, children, disabled, textClassName]);

    return (
      <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
        {isLink ? (
          // @ts-ignore – expo-router typing
          <Link
            href={href}
            role="button"
            className={cn(buttonVariants({ variant, size, className }))}
            aria-disabled={disabled || loading}
            {...props}
          >
            {renderChildren}
          </Link>
        ) : (
          <Pressable
            ref={ref}
            role="button"
            disabled={disabled || loading}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
          >
            {renderChildren}
          </Pressable>
        )}
      </TextClassContext.Provider>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
