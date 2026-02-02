import { Search } from '@/assets/icons';
import { Icon } from '@/components/icons/Icon';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import SportCard, { SportCardProps } from './components/SportCard';

const categories = [
  'Fried rice',
  'Sandwich',
  'Sandwich',
  'Tofu',
  'Grilled chicken',
  'Nut salad',
];

export const FAKE_DATA: SportCardProps[] = [
  {
    id: '1',
    name: 'Morning Running',
    description:
      'A light cardio exercise to warm up the body and improve endurance.',
    imageUrl: require('@/assets/images/mock-workout.png'),
    prepTime: '10 mins',
    difficult: 'Easy',
    calories: '200 kcal',
  },
  {
    id: '2',
    name: 'Push Ups',
    description:
      'Strengthens chest, shoulders, and arms. Can be done anywhere.',
    imageUrl: require('@/assets/images/mock-workout.png'),
    prepTime: '5 mins',
    difficult: 'Medium',
    calories: '150 kcal',
  },
  {
    id: '3',
    name: 'Sit Ups',
    description: 'Focuses on core muscles and helps build abdominal strength.',
    imageUrl: require('@/assets/images/mock-workout.png'),
    prepTime: '8 mins',
    difficult: 'Medium',
    calories: '180 kcal',
  },
  {
    id: '4',
    name: 'Plank',
    description:
      'A full-body exercise that improves posture and core stability.',
    imageUrl: require('@/assets/images/mock-workout.png'),
    prepTime: '4 mins',
    difficult: 'Hard',
    calories: '120 kcal',
  },
  {
    id: '5',
    name: 'Jump Rope',
    description:
      'A high-intensity workout that burns calories and improves coordination.',
    imageUrl: require('@/assets/images/mock-workout.png'),
    prepTime: '6 mins',
    difficult: 'Hard',
    calories: '300 kcal',
  },
];

const SportsSegment = () => {
  return (
    <View>
      <View className="flex-row items-center rounded-full border border-slate-400 p-1">
        <Icon icon={Search} size={24} />
        <TextInput
          placeholder="Search recipes"
          placeholderTextColor="#738197"
          className="ml-3 p-0 font-qu-semibold text-sm text-neutral-black-200"
        />
      </View>

      <View className="mt-3 flex-row flex-wrap justify-center gap-2">
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="rounded-full border border-slate-400 px-2 py-1"
            activeOpacity={0.7}
          >
            <Text className="font-qu-semibold text-sm text-neutral-black-100">
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <RecipesSelect /> */}

      <View className="mt-3 py-1">
        <Text className="text-center font-qu-bold text-xl text-neutral-black-500">
          Active moves
        </Text>
      </View>

      <View className="mt-4 flex gap-4">
        {FAKE_DATA.map((item) => (
          <SportCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            prepTime={item.prepTime}
            calories={item.calories}
            difficult={item.difficult}
          />
        ))}
      </View>
    </View>
  );
};

export default SportsSegment;
