import { Pressable, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import InfoCircleIcon from '@/components/icons/InfoCircleIcon';
import { cn } from '@/lib/utils';

export type HomeMetricItem = {
  icon: React.ReactNode;
  label: string;
  unit: string;
  value: string;
};

export function SurfaceCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={cn('rounded-[24px] bg-white shadow-card', className)}>
      {children}
    </View>
  );
}

export function SectionHeader({
  actionLabel,
  onPress,
  showInfoIcon = false,
  title,
}: {
  actionLabel?: string;
  onPress?: () => void;
  showInfoIcon?: boolean;
  title: string;
}) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="font-qu-bold text-h3 text-neutral-black-500">
        {title}
      </Text>
      {actionLabel ? (
        <Pressable onPress={onPress} className="flex-row items-center gap-1">
          <Text className="font-qu-regular text-sm text-neutral-black-200">
            {actionLabel}
          </Text>
          {showInfoIcon ? <InfoCircleIcon size={16} color="#A8BBDC" /> : null}
        </Pressable>
      ) : null}
    </View>
  );
}

export function MetaRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <View className="flex-row items-center gap-1.5">
      {icon}
      <Text className="font-qu-regular text-xs text-neutral-black-200">
        {text}
      </Text>
    </View>
  );
}

export function PillButton({
  className,
  label,
  onPress,
  variant,
}: {
  className?: string;
  label: string;
  onPress?: () => void;
  variant: 'filled' | 'outline';
}) {
  const filled = variant === 'filled';

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'items-center rounded-full border px-4 py-2.5',
        filled
          ? 'border-primary-500 bg-primary-500'
          : 'border-primary-200 bg-white',
        className,
      )}
    >
      <Text
        className={cn(
          'font-qu-semibold text-sm',
          filled ? 'text-white' : 'text-primary-500',
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function StatusChip({
  backgroundClassName,
  label,
  showDot = false,
  textClassName,
}: {
  backgroundClassName: string;
  label: string;
  showDot?: boolean;
  textClassName: string;
}) {
  return (
    <View
      className={cn(
        'flex-row items-center gap-1 rounded-full px-3 py-1.5',
        backgroundClassName,
      )}
    >
      <Text className={cn('font-qu-regular text-xs', textClassName)}>
        {label}
      </Text>
      {showDot ? (
        <View className="h-1.5 w-1.5 rounded-full bg-success-500" />
      ) : null}
    </View>
  );
}

export function BubbleCallout({ text }: { text: string }) {
  return (
    <View className="flex-row items-start gap-2">
      <View className="h-7 w-7 items-center justify-center rounded-2xl border border-neutral-white-400 bg-white">
        <Text className="font-qu-bold text-[10px] text-primary-500">AI</Text>
      </View>
      <View className="flex-1 rounded-lg border border-neutral-white-400 bg-white px-3 py-2">
        <Text className="font-qu-regular text-sm text-neutral-black-500">
          {text}
        </Text>
      </View>
    </View>
  );
}

export function MetricCard({
  fullWidth = false,
  item,
}: {
  fullWidth?: boolean;
  item: HomeMetricItem;
}) {
  return (
    <View
      className={cn(
        'rounded-2xl border border-neutral-white-400 bg-white p-3',
        fullWidth ? 'w-full' : 'w-[48%]',
      )}
    >
      <View className="flex-row items-start justify-between gap-2">
        <View className="rounded-full bg-primary-50 p-2">{item.icon}</View>
        <InfoCircleIcon size={16} color="#A8BBDC" />
      </View>

      <Text className="mt-3 font-qu-semibold text-sm text-neutral-black-500">
        {item.label}
      </Text>

      <View className="mt-2 flex-row items-end gap-1">
        <Text className="font-qu-bold text-[32px] leading-[40px] text-neutral-black-500">
          {item.value}
        </Text>
        <Text className="pb-1 font-qu-regular text-xs text-neutral-black-200">
          {item.unit}
        </Text>
      </View>
    </View>
  );
}

export function ProgressRing({
  progress,
  unit,
  value,
}: {
  progress: number;
  unit: string;
  value: string;
}) {
  const size = 104;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#DCE4F1"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2761E6"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>

      <View className="absolute items-center">
        <Text className="font-qu-semibold text-lg text-neutral-black-500">
          {value}
        </Text>
        <Text className="font-qu-regular text-xs text-neutral-black-200">
          {unit}
        </Text>
      </View>
    </View>
  );
}

export function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <View className="gap-1">
      <Text className="font-qu-regular text-xs text-neutral-black-200">
        {label}
      </Text>
      <Text className="font-qu-bold text-[32px] leading-[40px] text-neutral-black-500">
        {value}
      </Text>
    </View>
  );
}

export function StarIcon() {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Circle cx={7} cy={7} r={6.5} fill="#E9EFFC" stroke="#A9C0F5" />
      <Circle cx={7} cy={7} r={2.2} fill="#2761E6" />
    </Svg>
  );
}
