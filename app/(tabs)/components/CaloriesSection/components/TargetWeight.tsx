import { Calendar, Pencil, WeightScale } from '@/assets/icons';
import { Progress } from '@/components/ui/progress';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const TargetWeight = () => {
  const [text, setText] = useState('Target Weight');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View className="flex w-1/2 items-center justify-between">
      {isEditing ? (
        <TextInput
          value={text}
          onChangeText={setText}
          autoFocus
          onBlur={() => setIsEditing(false)}
          onSubmitEditing={() => setIsEditing(false)}
          className="border-b border-neutral-400 px-1 font-qu-bold text-xl text-neutral-black-500"
        />
      ) : (
        <View className="w-full flex-row items-center justify-between">
          <Text className="font-qu-bold text-xl text-neutral-black-500">
            {text}
          </Text>

          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Pencil />
          </TouchableOpacity>
        </View>
      )}

      <View className="mt-3 w-full flex-row items-center justify-between">
        <Text className="font-qu-semibold text-sm text-black">
          Progress bar
        </Text>
        <Text className="text-primary-600">60%</Text>
      </View>
      <Progress
        value={60}
        indicatorClassName="bg-secondary-500"
        className="bg-neutral-white-300"
      />
      <View className="mt-2 w-full flex-row items-center justify-between">
        <View className="flex-row items-center justify-between gap-1 rounded-full bg-neutral-white-400 p-1 font-qu-semibold text-sm text-neutral-black-500">
          <WeightScale />
          <Text>56kg</Text>
        </View>
        <View className="flex-row items-center justify-between gap-1 rounded-full bg-neutral-white-400 p-1 font-qu-semibold text-sm text-neutral-black-500">
          <Calendar />
          <Text>20/1/2027</Text>
        </View>
      </View>
    </View>
  );
};

export default TargetWeight;
