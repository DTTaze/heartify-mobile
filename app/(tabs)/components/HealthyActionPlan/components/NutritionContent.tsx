import { BubuRecommend, Cheese } from '@/assets/icons';
import Button from '@/components/ui/Button';
import { Clock } from 'lucide-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const recipes = [
  {
    id: '1',
    title: 'Pan-Seared Chicken & Nut Salad',
    time: '10mins',
    calories: '350 kcal',
    image: require('@/assets/images/mock-meal-1.png'),
  },
  {
    id: '2',
    title: 'Berry-Walnut Overnight Oats',
    time: '5mins',
    calories: '290 kcal',
    image: require('@/assets/images/mock-meal-2.png'),
  },
];

export default function NutritionContent() {
  return (
    <View className="rounded-lg border border-[#B6D3ED] p-4">
      <View className="rounded-xl bg-white">
        <Text className="mb-3 font-qu-semibold text-base">
          🍎 <Text>Today’s suggestion</Text>
          {'\n'}
          Add 1 serving of fruit today
        </Text>

        <Text className="mb-1 font-qu-semibold">🥬 Heart-friendly foods</Text>
        <View className="mb-3 ml-4">
          <Text className="font-qu-semibold">• Leafy greens</Text>
          <Text className="font-qu-semibold">• Oats</Text>
          <Text className="font-qu-semibold">• Nuts</Text>
        </View>

        <Text className="mb-1 font-qu-semibold">🚫 Limit</Text>
        <View className="ml-4">
          <Text className="font-qu-semibold">• Alcohol</Text>
          <Text className="font-qu-semibold">• High-sodium foods</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute bottom-1 right-5 flex-row items-center"
        >
          <View className="z-10 mb-4 mr-[-6px] rounded-full bg-neutral-black-200 px-2 py-1">
            <Text className="font-qu-medium text-xs text-white">Ask BuBu</Text>
          </View>

          <View className="h-6 w-6 items-center justify-center rounded-full bg-white shadow-2xl">
            <BubuRecommend />
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-6 rounded-xl bg-primary-50 p-3 shadow-sm">
        <View className="flex-row items-center justify-between">
          <Text className="mb-3 font-qu-bold text-xl text-primary-700">
            Suggested recipe
          </Text>
          <Button
            title="View all ->"
            className="rounded-full bg-primary-100 px-3 py-2"
            textClassName="text-neutral-black-400"
          />
        </View>

        <View className="mt-3 gap-3">
          {recipes.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              className="flex-row items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
            >
              {/* Ảnh món ăn */}
              <Image
                source={item.image}
                className="h-20 w-20 rounded-[4px] bg-gray-200"
                resizeMode="cover"
              />

              {/* Thông tin món ăn */}
              <View className="ml-4 w-full flex-1 justify-center">
                <Text
                  className="mb-2 font-qu-semibold text-base text-neutral-black-500"
                  numberOfLines={2}
                >
                  {item.title}
                </Text>

                <View className="flex-row items-center">
                  <View className="mr-5 flex-row items-center justify-start">
                    <Clock size={18} color="#576379" />
                    <Text className="ml-1 font-qu-semibold text-base text-neutral-black-300">
                      {item.time}
                    </Text>
                  </View>

                  <View className="flex-row items-center">
                    <Cheese />
                    <Text className="ml-1 font-qu-semibold text-base text-neutral-black-300">
                      {item.calories}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
