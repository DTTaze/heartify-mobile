import { FilterOption, FilterSelect } from '@/components/ui/Select';
import React, { useState } from 'react';
import { View } from 'react-native';

const cookingLevels: FilterOption<string>[] = [
  { label: 'All Levels', value: 'all_levels' },
  { label: 'Quick & simple', value: 'quick_simple' },
  { label: 'Take your time', value: 'take_your_time' },
  { label: 'Comfort cooking', value: 'comfort_cooking' },
];

const RecipesSelect = () => {
  const [status, setStatus] = useState<string>('all_levels');

  return (
    <View className="mt-6 flex-row items-center justify-end p-1">
      <View className="h-9 w-[160px] justify-center rounded-md border border-[#E5E5E5] bg-white">
        <FilterSelect
          options={cookingLevels}
          value={status}
          onChange={(value) => value !== undefined && setStatus(value)}
        />
      </View>
    </View>
  );
};

export default RecipesSelect;
