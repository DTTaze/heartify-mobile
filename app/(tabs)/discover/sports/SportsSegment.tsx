import { Search } from '@/assets/icons';
import ArrowCircleLeftIcon from '@/components/icons/ArrowCircleLeftIcon';
import ArrowCircleRightIcon from '@/components/icons/ArrowCircleRightIcon';
import { Icon } from '@/components/icons/Icon';
import { ExercisesApi } from '@/src/api/exercises.api';
import { Exercise } from '@/src/types/exercises';
import { capitalize, guessCalories, guessDifficulty } from '@/utils/helper';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SportCard, { SportCardProps } from './components/SportCard';

const PAGE_SIZE = 5;

const categories = [
  'Push up',
  'Stretch',
  'Walk',
  'Exercise',
  'Yoga',
  'Breathing',
  'Light cardio',
];

const SportsSegment = () => {
  const [data, setData] = useState<SportCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await ExercisesApi.getPaginatedExercises();

        if (res.ok && res.data?.success) {
          const exercises = res.data.data.rows;

          const mapped: SportCardProps[] = exercises.map((item: Exercise) => ({
            id: item.id,
            name: capitalize(item.name),
            description: item.instructions?.[0] ?? 'No description',
            imageUrl: { uri: item.gifUrl },
            prepTime: '5–10 mins',
            difficult: guessDifficulty(item.bodyPart, item.equipment),
            calories: guessCalories(item.bodyPart),
          }));

          setData(mapped);
        }
      } catch (e) {
        console.error('Fetch exercises error', e);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [data]);

  const totalPages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  }, [data, page]);

  return (
    <View>
      <View className="flex-row items-center rounded-full border border-slate-400 p-1">
        <Icon icon={Search} size={24} />
        <TextInput
          placeholder="Search exercises"
          placeholderTextColor="#738197"
          className="ml-3 p-0 font-qu-semibold text-sm text-neutral-black-200"
        />
      </View>

      <View className="mt-3 flex-row flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            className="rounded-full border border-slate-400 px-2 py-1"
          >
            <Text className="font-qu-semibold text-sm text-neutral-black-100">
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="mt-4 flex-row items-center justify-between px-6">
        <Pressable
          disabled={page === 1}
          onPress={() => setPage((p) => Math.max(1, p - 1))}
        >
          <ArrowCircleLeftIcon size={24} />
        </Pressable>

        <Text className="text-center font-qu-bold text-xl text-neutral-black-500">
          Active moves
        </Text>

        <Pressable
          disabled={page === totalPages}
          onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          <ArrowCircleRightIcon size={24} />
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator className="mt-6" />
      ) : (
        <>
          <View className="mt-4 gap-4">
            {pageData.map((item) => (
              <SportCard key={item.id} {...item} />
            ))}
          </View>
        </>
      )}

      <Text className="font-qu-semibold text-sm text-neutral-black-400">
        Page {page} / {totalPages}
      </Text>
    </View>
  );
};

export default SportsSegment;
