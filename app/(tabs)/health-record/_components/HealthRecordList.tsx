import React, { useMemo, useState, useEffect } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import ArrowCircleLeftIcon from '@/components/icons/ArrowCircleLeftIcon';
import ArrowCircleRightIcon from '@/components/icons/ArrowCircleRightIcon';
import SortAndFilterBar, { SortType } from './SortAndFilterBar';
import RiskColorFilter from './RiskColorFilter';
import HealthRecordCard from './HealthRecordCard';
import { api } from '@/src/services/api.instance';
import {
  HealthRecord,
  HealthRiskLevel,
} from '@/app/(tabs)/health-record/types/health';
import { HealthRecordApi } from '@/src/api/healthRecord.api';
const PAGE_SIZE = 50;

export default function HealthRecordList() {
  const [riskFilter, setRiskFilter] = useState<HealthRiskLevel | 'all'>('all');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortType>('latest');
  const [records, setRecords] = useState<HealthRecord[]>([]);
  // const [loading, setLoading] = useState(false);

  const fetchRecords = async () => {
    try {
      // setLoading(true);
      const response = await HealthRecordApi.getRecords({
        offset: 0,
        limit: PAGE_SIZE,
      });

      if (response.ok && response.data && response.data.data) {
        const rows = response.data.data.rows ?? [];
        const mapped: HealthRecord[] = rows.map((item: any) => ({
          id: item.id,
          healthRecordName: item.healthRecordName,
          medicalFacilityName: item.medicalFacilityName,
          date: item.recordedAt,
          riskPercentage: item.riskPercentage,
          bloodPressure: `${item.systolicBp}/${item.diastolicBp}`,
          risk: item.riskLevel,

          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          userId: item.userId,
          recordedAt: item.recordedAt,

          ageAtRecord: item.ageAtRecord,

          systolicBp: item.systolicBp,
          diastolicBp: item.diastolicBp,

          totalCholesterol: item.totalCholesterol,
          hdlCholesterol: item.hdlCholesterol,

          isSmoker: item.isSmoker,
          isDiabetic: item.isDiabetic,
          isTreatedHypertension: item.isTreatedHypertension,

          measurements: {
            bmi: Number(item.measurements?.bmi ?? 0),
            height: {
              unit: item.measurements?.height?.unit ?? '',
              value: Number(item.measurements?.height?.value ?? 0),
            },
            weight: {
              unit: item.measurements?.weight?.unit ?? '',
              value: Number(item.measurements?.weight?.value ?? 0),
            },
          },

          riskLevel: item.riskLevel,
          riskScore: item.riskScore,
          riskAlgorithm: item.riskAlgorithm,

          identifiedRiskFactors: item.identifiedRiskFactors,
        }));

        setRecords(mapped);
      }
    } catch (error) {
      console.error('Failed to fetch health records', error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    api.setAuthToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyYjVkZTc5LTVmMzAtNDUzMi05MTA2LTAwNzVlNjkyYWYwNCIsImlhdCI6MTc3MDUzMjg2NiwiZXhwIjoxODAyMDY4ODY2fQ.zOqrrUiFMqXOtlqZujIAuplAGmVZPANRJk_eJFCZUbU',
    );
    fetchRecords();
  }, []);

  const filteredData = useMemo(() => {
    if (riskFilter === 'all') return records;
    return records.filter((i) => i.risk === riskFilter);
  }, [riskFilter, records]);

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
