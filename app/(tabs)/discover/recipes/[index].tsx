import { Clock, Cook, Serve } from '@/assets/icons';
import { Icon } from '@/components/icons/Icon';
import { DiscorverApi } from '@/src/api/discover.api';
import { Recipe } from '@/src/types/discover';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RecipeDetail() {
  const { index } = useLocalSearchParams<{ index: string }>();

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!index) return;

    const fetchDetail = async () => {
      try {
        const res = await DiscorverApi.getFoodDetail(index);
        if (res.ok && res.data?.data) {
          setRecipe(res.data.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [index]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Recipe not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-white px-4">
      <View className="gap-6">
        <View className="gap-2">
          <View className="gap-3 py-1">
            <View className="gap-3">
              <Text className="text-center font-qu-bold text-h3 text-neutral-black-500">
                {recipe.recipeName}
              </Text>
            </View>

            <View className="mt-3 flex-row flex-wrap gap-2">
              {recipe.healthLabels.slice(0, 3).map((label) => (
                <View
                  key={label}
                  className="rounded-full bg-green-100 px-3 py-1"
                >
                  <Text className="text-xs font-medium text-green-700">
                    {label}
                  </Text>
                </View>
              ))}

              <TouchableOpacity className="ml-auto flex-row items-center gap-2.5 rounded-[4px] bg-primary-400 px-3 py-1">
                <Ionicons name="bookmark-outline" size={20} color="#fff" />

                <Text className="text-1 text-neutral-white-100">Save</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-4">
            <Image
              source={{ uri: recipe.imageUrl }}
              className="h-48 w-full rounded-xl"
              resizeMode="cover"
            />
          </View>

          <View className="gap-2 px-2.5">
            <View className="flex-row items-center gap-1">
              <Icon icon={Clock} size={20} />

              <Text className="text-1 text-neutral-black-400">
                Prep: 5 mins - Cook: 10 mins
              </Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Icon icon={Serve} size={20} />

              <Text className="text-1 text-neutral-black-400">
                Serves: {recipe.servings} people
              </Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Icon icon={Cook} size={20} />

              <Text className="text-1 text-neutral-black-400">
                Quick & simple
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-4 ">
          <Text className="font-qu-bold text-h3 font-semibold text-neutral-black-400">
            Ingredients
          </Text>
          {recipe.ingredientLines.map((item, i) => (
            <Text
              key={i}
              className="font-qu-semibold text-1 text-neutral-black-500"
            >
              • {item.replace(/^\*\s*/, '')}
            </Text>
          ))}
        </View>

        <View className="gap-1">
          <Text className="font-qu-semibold text-h3 text-neutral-black-400">
            Nutrition facts
          </Text>
          <Text className="font-qu-semibold text-1 text-neutral-black-500">
            • Calories: {Math.round(recipe.calories)} kcal
          </Text>
          <Text className="font-qu-semibold text-1 text-neutral-black-500">
            • Protein: {Math.round(recipe.totalNutrients.PROCNT?.quantity)}g
          </Text>
          <Text className="font-qu-semibold text-1 text-neutral-black-500">
            • Fat: {Math.round(recipe.totalNutrients.FAT?.quantity)}g
          </Text>
          <Text className="font-qu-semibold text-1 text-neutral-black-500">
            • Carbs: {Math.round(recipe.totalNutrients.CHOCDF?.quantity)}g
          </Text>
          <Text className="font-qu-semibold text-1 text-neutral-black-500">
            • Fiber: {Math.round(recipe.totalNutrients.FIBTG?.quantity)}g
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
