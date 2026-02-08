import { Bookmark, Clock, Cook, Serve } from '@/assets/icons';
import { Icon } from '@/components/icons/Icon';
import { useRouter } from 'expo-router';
import { Heart } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export interface RecipeCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: any;
  prepTime: string;
  serves: string;
  difficulty: string;
}

const RecipeCard = ({
  id,
  description,
  difficulty,
  imageUrl,
  name,
  prepTime,
  serves,
}: RecipeCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/discover/recipes/${id}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      className="rounded-lg border border-sky-200 bg-white p-4 shadow-sm"
    >
      <Text className="mb-2 font-qu-bold text-xl text-primary-800">{name}</Text>

      <Text className="mb-4 font-qu-semibold text-sm text-black">
        {description}
      </Text>

      <View className="mb-6 flex-row">
        <Image
          source={imageUrl}
          className="h-24 w-24 rounded-md"
          resizeMode="cover"
        />

        <View className="ml-4 flex-1 justify-around py-1">
          <View className="flex-row items-center">
            <Icon icon={Clock} size={16} />
            <Text className="ml-2 font-qu-semibold text-neutral-black-300">
              {prepTime}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Icon icon={Serve} size={16} />
            <Text className="ml-2 font-qu-semibold text-neutral-black-300">
              Serves: {serves}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Icon icon={Cook} size={16} />
            <Text className="ml-2 font-qu-semibold text-neutral-black-300">
              {difficulty}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center rounded-lg bg-primary-300 px-4 py-2"
          onPress={(e) => e.stopPropagation()}
        >
          <Heart color="#fff" size={20} />
          <Text className="ml-2 font-qu-semibold text-white">
            Recommend for you!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={(e) => e.stopPropagation()}>
          <Icon icon={Bookmark} size={32} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
