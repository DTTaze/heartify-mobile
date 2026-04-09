import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { cn } from '@/lib/utils';

type NutritionSection = {
  accentClassName: string;
  lines: string[];
  title: string;
};

type NutritionTab = 'Nutrition' | 'Lifestyle' | 'Sport';

const tabContent: Record<
  NutritionTab,
  { headline: string; sections: NutritionSection[]; summary: string }
> = {
  Nutrition: {
    headline: 'AI suggestions',
    summary: 'Add 1 serving of fruit today',
    sections: [
      {
        title: 'More-friendly foods',
        accentClassName: 'text-success-500',
        lines: ['Leafy greens', 'Low-fat dairy', 'Nuts'],
      },
      {
        title: 'Less',
        accentClassName: 'text-error-500',
        lines: ['Alcohol', 'High-sodium foods'],
      },
    ],
  },
  Lifestyle: {
    headline: 'Recovery focus',
    summary: 'Try 15 minutes away from screens before bed tonight',
    sections: [
      {
        title: 'Keep',
        accentClassName: 'text-success-500',
        lines: ['A short evening walk', 'Water nearby during work'],
      },
      {
        title: 'Reduce',
        accentClassName: 'text-error-500',
        lines: ['Late caffeine', 'Skipping stretch breaks'],
      },
    ],
  },
  Sport: {
    headline: 'Movement plan',
    summary: 'Aim for one more light cardio session this week',
    sections: [
      {
        title: 'Recommended',
        accentClassName: 'text-success-500',
        lines: ['20 min brisk walk', 'Mobility warm-up', 'Easy cycling'],
      },
      {
        title: 'Watch out',
        accentClassName: 'text-error-500',
        lines: ['Back-to-back intense sessions', 'Skipping cooldown'],
      },
    ],
  },
};

export default function WellnessBlueprintSection() {
  const [activeTab, setActiveTab] = useState<NutritionTab>('Nutrition');

  return (
    <View className="gap-3">
      <Text className="font-qu-bold text-h3 text-neutral-black-500">
        Daily Wellness Blueprint
      </Text>

      <View className="rounded-full border border-primary-100 bg-white p-1">
        <View className="flex-row">
          {(['Nutrition', 'Lifestyle', 'Sport'] as NutritionTab[]).map(
            (tab) => (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={cn(
                  'flex-1 rounded-full px-3 py-2',
                  activeTab === tab ? 'bg-primary-500' : 'bg-white',
                )}
              >
                <Text
                  className={cn(
                    'text-center font-qu-semibold text-xs',
                    activeTab === tab ? 'text-white' : 'text-neutral-black-200',
                  )}
                >
                  {tab}
                </Text>
              </Pressable>
            ),
          )}
        </View>
      </View>

      <BlueprintContent activeTab={activeTab} />
    </View>
  );
}

function BlueprintContent({ activeTab }: { activeTab: NutritionTab }) {
  const activeContent = tabContent[activeTab];

  return (
    <View className="gap-3">
      <Text className="font-qu-semibold text-sm text-neutral-black-500">
        {activeContent.headline}
      </Text>

      <View className="flex-row items-start gap-2 rounded-2xl bg-white p-3">
        <View className="mt-1 h-2 w-2 rounded-full bg-error-500" />
        <View className="flex-1 gap-3">
          <View>
            <Text className="font-qu-semibold text-sm text-neutral-black-500">
              Today&apos;s suggestion
            </Text>
            <Text className="mt-1 font-qu-semibold text-sm text-success-500">
              {activeContent.summary}
            </Text>
          </View>

          {activeContent.sections.map((section) => (
            <View key={section.title} className="gap-1">
              <Text
                className={cn(
                  'font-qu-semibold text-xs',
                  section.accentClassName,
                )}
              >
                {section.title}
              </Text>
              {section.lines.map((line) => (
                <Text
                  key={line}
                  className="font-qu-regular text-xs text-neutral-black-300"
                >
                  {`- ${line}`}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
