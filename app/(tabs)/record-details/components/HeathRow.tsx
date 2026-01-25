import { TextCustom } from '@/components/ui/TextCustom';
import UnitOption from '@/components/ui/UnitOption';
import { useState } from 'react';
import { View } from 'react-native';

type Status = 'Yes' | 'No';

export function HeathRow({ label }: { label: string }) {
  const [unit, setUnit] = useState<Status>('Yes');

  return (
    <View className="mb-5">
      <TextCustom className="mb-1 text-sm font-semibold text-neutral-black-500">
        {label}
      </TextCustom>

      <View className="flex-row items-center gap-4">
        <View style={{ flex: 1 }} className="flex-row items-center gap-6">
          <UnitOption
            label="Yes"
            selected={unit === 'Yes'}
            onPress={() => setUnit('Yes')}
          />

          <UnitOption
            label="No"
            selected={unit === 'No'}
            onPress={() => setUnit('No')}
          />
        </View>
      </View>
    </View>
  );
}
