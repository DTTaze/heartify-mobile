import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export const QUICK_ACTIONS = [
  {
    id: 'recipes',
    label: 'Recipes',
    routeName: 'RecipesScreen',
    icon: require('@/assets/images/recipes.png'),
  },
  {
    id: 'sports',
    label: 'Sports',
    routeName: 'SportsScreen',
    icon: require('@/assets/images/shoe.png'),
  },
  {
    id: 'coupons',
    label: 'Coupons',
    routeName: 'CouponsScreen',
    icon: require('@/assets/images/coupon.png'),
  },
];

const QuickAccessSection = () => {
  return (
    <View className="flex gap-[10px] rounded-xl bg-primary-500 p-4">
      <View className="mb-6 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image
            source={require('@/assets/images/mock-avatar.png')}
            className="h-12 w-12 rounded-full"
          />
          <Text className="font-qu-bold text-xl text-white">Barchen</Text>
        </View>
        <View className="flex-row items-center rounded-full bg-white/90 px-4 py-2">
          <Text className="mr-1 text-yellow-500">⭐</Text>
          <Text className="font-bold">2400</Text>
        </View>
      </View>
      <View className="flex-row justify-between gap-3 px-4 py-2">
        {QUICK_ACTIONS.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex-1 items-center rounded-2xl bg-white py-4 shadow-2xl"
          >
            <Image source={item.icon} className="h-8 w-8 rounded-full" />
            <Text className="font-qu-semibold text-sm">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickAccessSection;
