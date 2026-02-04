import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import ArrowCircleLeftIcon from '@/components/icons/ArrowCircleLeftIcon';
import ArrowCircleRightIcon from '@/components/icons/ArrowCircleRightIcon';
import SortAndFilterBar, { SortType } from './SortAndFilterBar';
import RiskColorFilter from './RiskColorFilter';
import HealthRecordCard from './HealthRecordCard';
import {
  HealthRecord,
  HealthRiskLevel,
} from '@/app/(tabs)/health-record/types/health';

const PAGE_SIZE = 4;

const DATA: HealthRecord[] = [
  {
    id: '4',
    date: 'October 08, 2025',
    bmi: '75/80 kg/m²',
    heartRate: '75 bpm',
    bloodPressure: '115/75 mmHg',
    location: 'Hospital visit',
    risk: 'low',
  },
  {
    id: '3',
    date: 'October 12, 2025',
    bmi: '75/80 kg/m²',
    heartRate: '75 bpm',
    bloodPressure: '115/75 mmHg',
    location: 'Home',
    risk: 'borderline',
  },
  {
    id: '2',
    date: 'October 12, 2025',
    bmi: '75/80 kg/m²',
    heartRate: '75 bpm',
    bloodPressure: '115/75 mmHg',
    location: 'Home',
    risk: 'moderate',
  },
  {
    id: '1',
    date: 'October 12, 2025',
    bmi: '75/80 kg/m²',
    heartRate: '75 bpm',
    bloodPressure: '115/75 mmHg',
    location: 'General check-up',
    risk: 'high',
  },
];

export default function HealthRecordList() {
  const [riskFilter, setRiskFilter] = useState<HealthRiskLevel | 'all'>('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortType>('latest');

  const filteredData = useMemo(() => {
    if (riskFilter === 'all') return DATA;
    return DATA.filter((i) => i.risk === riskFilter);
  }, [riskFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, page]);

  return (
    <View className="gap-3 py-2">
      <View className="flex-row items-center justify-between py-2">
        <Pressable disabled={page === 1} onPress={() => setPage(page - 1)}>
          <ArrowCircleLeftIcon size={24} />
        </Pressable>

        <RiskColorFilter
          value={riskFilter}
          onChange={(risk) => {
            setRiskFilter(risk);
            setPage(1);
          }}
        />

        <Pressable
          disabled={page === totalPages}
          onPress={() => setPage(page + 1)}
        >
          <ArrowCircleRightIcon size={24} />
        </Pressable>
      </View>

      <SortAndFilterBar
        sort={sort}
        onToggleSort={() =>
          setSort((p) => (p === 'latest' ? 'oldest' : 'latest'))
        }
      />

      <FlatList
        data={pageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HealthRecordCard item={item} />}
      />

      <Text className="font-qu-semibold text-2 text-neutral-black-500">
        Page {page} / {totalPages}
      </Text>
    </View>
  );
}
