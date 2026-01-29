import { TextCustom } from '@/components/ui/TextCustom';
import { TouchableOpacity } from 'react-native';

export default function SegmentTab({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className={`rounded-full border border-neutral-white-500 px-9 py-2 ${
        active ? 'bg-primary-500' : 'bg-neutral-white-200'
      }`}
    >
      <TextCustom
        className={
          active
            ? 'font-qu-semibold text-sm text-white'
            : 'font-qu-semibold text-sm text-neutral-black-300'
        }
      >
        {label}
      </TextCustom>
    </TouchableOpacity>
  );
}
