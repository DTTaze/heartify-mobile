import { Search } from '@/assets/icons';
import { Icon } from '@/components/icons/Icon';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import RecipeCard, { RecipeCardProps } from './components/RecipeCard';
import RecipesSelect from './components/RecipesSelect';

const categories = [
  'Fried rice',
  'Sandwich',
  'Sandwich',
  'Tofu',
  'Grilled chicken',
  'Nut salad',
];

export const FAKE_DATA: RecipeCardProps[] = [
  {
    id: 'ffffdf87c9f04e5430b5d40e75fd6dc32f2be16bbfc6286a22092a446e52d3eb',
    name: 'Pan-Seared Chicken & Nut Salad',
    description:
      'This dish combines lean protein and heart-healthy fats to support cardiovascular health.',
    imageUrl: require('@/assets/images/mock-meal-1.png'),
    prepTime: '5 mins - 10 mins',
    serves: '1-2 people',
    difficulty: 'Quick & simple',
  },
  {
    id: 'fffe05dac9a7cdff4ead0fa21cc51c213e1f9a273a41853b8decb1fd44d8c033',
    name: 'Grilled Salmon with Asparagus',
    description:
      'Fresh Atlantic salmon grilled to perfection with a side of crispy seasoned asparagus.',
    imageUrl: require('@/assets/images/mock-meal-1.png'),
    prepTime: '15 mins - 20 mins',
    serves: '2 people',
    difficulty: 'Intermediate',
  },
  {
    id: 'fff36296cc62e0bff6da4a85687bbc71f86ceae2bfc146c277d818e1107a196d',
    name: 'Classic Beef Burger',
    description:
      'Juicy beef patty with melted cheddar, fresh lettuce, and our secret house sauce.',
    imageUrl: require('@/assets/images/mock-meal-1.png'),
    prepTime: '10 mins - 15 mins',
    serves: '1 person',
    difficulty: 'Easy',
  },
  {
    id: 'fff30cd8f1b44d39947749032ea09fefdc002fbace0f37c5531f423685675fa5',
    name: 'Vegan Buddha Bowl',
    description:
      'A colorful mix of quinoa, roasted chickpeas, avocado, and tahini dressing.',
    imageUrl: require('@/assets/images/mock-meal-1.png'),
    prepTime: '20 mins',
    serves: '1-2 people',
    difficulty: 'Simple',
  },
];

const RecipesSegment = () => {
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

      <RecipesSelect />

      <View className="mt-3 py-1">
        <Text className="text-center font-qu-bold text-xl text-neutral-black-500">
          Nutritious Bites
        </Text>
      </View>

      <View className="mt-4 flex gap-4">
        {FAKE_DATA.map((item) => (
          <RecipeCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            prepTime={item.prepTime}
            serves={item.serves}
            difficulty={item.difficulty}
          />
        ))}
      </View>
    </View>
  );
};

export default RecipesSegment;
