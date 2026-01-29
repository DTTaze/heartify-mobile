import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react-native';
import { useState } from 'react';
import { FlatList, Modal, Pressable, Text, View } from 'react-native';

export type FilterOption<T> = {
  label: string;
  value?: T;
};

type FilterSelectProps<T> = {
  options: FilterOption<T>[];
  value?: T;
  onChange?: (value?: T) => void;

  className?: string;
};

export function FilterSelect<T>({
  options,
  value,
  onChange,
  className,
}: FilterSelectProps<T>) {
  const [visible, setVisible] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <>
      {/* Trigger */}
      <Pressable
        onPress={() => setVisible(true)}
        className={cn(
          'flex-row items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2',
          className,
        )}
      >
        <Text
          className={
            value !== undefined
              ? 'font-medium text-primary-600'
              : 'text-gray-700'
          }
        >
          {selected?.label ?? 'All'}
        </Text>

        <ChevronDown color={'#000'} size={18} />
      </Pressable>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <Pressable
          className="flex-1 justify-center bg-black/30 px-6"
          onPress={() => setVisible(false)}
        >
          <View className="max-h-[60%] rounded-xl bg-white p-3">
            <FlatList
              data={options}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({ item }) => {
                const isActive =
                  item.value === value ||
                  (item.value === undefined && value === undefined);

                return (
                  <Pressable
                    onPress={() => {
                      onChange?.(item.value);
                      setVisible(false);
                    }}
                    className={`rounded-lg px-3 py-3 ${
                      isActive ? 'bg-primary-100' : ''
                    }`}
                  >
                    <Text
                      className={
                        isActive
                          ? 'font-semibold text-primary-600'
                          : 'text-gray-800'
                      }
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
