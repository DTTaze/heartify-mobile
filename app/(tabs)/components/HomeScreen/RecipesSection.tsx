import { Image, Pressable, Text, View } from 'react-native';

import { Bookmark, Clock, Cookie } from '@/assets/icons';
import { useRouter } from 'expo-router';

import { recipes, RecipeItem } from './data';
import { MetaRow, SectionHeader, SurfaceCard } from './shared';

export default function RecipesSection() {
  const router = useRouter();

  return (
    <View className="gap-3">
      <SectionHeader
        title="Recipes"
        actionLabel="View all"
        onPress={() => router.push('/discover')}
        showInfoIcon
      />

      <View className="gap-2">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </View>

      <View className="items-center gap-3">
        <View className="flex-row gap-2">
          <View className="h-1 w-5 rounded-full bg-primary-500" />
          <View className="h-1 w-5 rounded-full bg-primary-100" />
          <View className="h-1 w-5 rounded-full bg-primary-100" />
        </View>

        <Pressable
          onPress={() => router.push('/chatbot')}
          className="flex-row items-center gap-2 self-end rounded-full bg-primary-500 px-3 py-2"
        >
          <View className="h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <Text className="font-qu-bold text-[10px] text-white">AI</Text>
          </View>
          <Text className="font-qu-semibold text-sm text-white">Ask BuBu</Text>
        </Pressable>
      </View>
    </View>
  );
}

function RecipeCard({ recipe }: { recipe: RecipeItem }) {
  return (
    <SurfaceCard className="flex-row items-start gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-2 shadow-none">
      <Image source={recipe.image} className="h-[72px] w-[72px] rounded-lg" />

      <View className="flex-1 gap-2">
        <Text
          numberOfLines={2}
          className="font-qu-semibold text-sm leading-5 text-neutral-black-500"
        >
          {recipe.title}
        </Text>

        <View className="flex-row items-center gap-3">
          <MetaRow
            icon={<Clock width={16} height={16} />}
            text={recipe.duration}
          />
          <MetaRow
            icon={<Cookie width={16} height={16} />}
            text={recipe.calories}
          />
        </View>
      </View>

      <Pressable className="p-1">
        <Bookmark width={14} height={18} />
      </Pressable>
    </SurfaceCard>
  );
}
