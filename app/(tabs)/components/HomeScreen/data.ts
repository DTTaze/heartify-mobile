import { ImageSourcePropType } from 'react-native';

export type RecipeItem = {
  calories: string;
  duration: string;
  id: string;
  image: ImageSourcePropType;
  title: string;
};

export type WeeklyProgressItem = {
  day: string;
  value: number;
};

export const checkupAvatar: ImageSourcePropType = require('@/assets/images/mock-avatar.png');
export const bubuImage: ImageSourcePropType = require('@/assets/images/Bubu-low-risk.png');

const recipeImageOne = require('@/assets/images/mock-meal-1.png');
const recipeImageTwo = require('@/assets/images/mock-meal-2.png');
const recipeImageThree = require('@/assets/images/recipes.png');

export const recipes: RecipeItem[] = [
  {
    id: 'recipe-1',
    title: 'Pan-Seared Chicken & Nut Salad',
    duration: '10mins',
    calories: '350kcal',
    image: recipeImageOne,
  },
  {
    id: 'recipe-2',
    title: 'Pan-Seared Chicken & Nut Salad',
    duration: '10mins',
    calories: '350kcal',
    image: recipeImageTwo,
  },
  {
    id: 'recipe-3',
    title: 'Grilled Chicken Avocado Salad',
    duration: '10mins',
    calories: '350kcal',
    image: recipeImageThree,
  },
];

export const weeklyProgress: WeeklyProgressItem[] = [
  { day: 'Mon', value: 0.72 },
  { day: 'Tue', value: 0.58 },
  { day: 'Wed', value: 0.64 },
  { day: 'Thu', value: 0.78 },
  { day: 'Fri', value: 0.54 },
  { day: 'Sat', value: 0.85 },
  { day: 'Sun', value: 0.7 },
];
