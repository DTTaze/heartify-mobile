import { Pressable, Text, View } from 'react-native';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import FilterIcon from '@/components/icons/FilterIcon';

export type SortType = 'latest' | 'oldest';

interface Props {
  sort: SortType;
  onToggleSort: () => void;
}

export default function SortAndFilterBar({ sort, onToggleSort }: Props) {
  return (
    <View className="flex-row items-center justify-between px-2">
      <Pressable
        className="flex-row items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2"
        onPress={onToggleSort}
      >
        <Text className="text-sm font-medium">
          {sort === 'latest' ? 'Latest' : 'Oldest'}
        </Text>
        <ChevronDownIcon size={16} />
      </Pressable>

      <Pressable className="rounded-lg p-2">
        <FilterIcon size={20} />
      </Pressable>
    </View>
  );
}
