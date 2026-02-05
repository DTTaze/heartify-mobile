import { RISK_CONFIG } from '@/app/(tabs)/health-record/constants/riskConfig';
import { HealthRiskLevel } from '@/app/(tabs)/health-record/types/health';
import { Pressable, View } from 'react-native';

interface Props {
  value: HealthRiskLevel | 'all';
  onChange: (risk: HealthRiskLevel | 'all') => void;
}

export default function RiskColorFilter({ value, onChange }: Props) {
  return (
    <View className="flex-row items-center justify-center gap-3 rounded-[4px] border border-primary-300 p-2">
      {(Object.keys(RISK_CONFIG) as HealthRiskLevel[]).map((risk) => {
        const active = value === risk;

        return (
          <Pressable
            key={risk}
            onPress={() => {
              onChange(active ? 'all' : risk);
            }}
            style={{
              width: 18,
              height: 18,
              borderRadius: 18,
              backgroundColor: active
                ? RISK_CONFIG[risk].activeColor
                : RISK_CONFIG[risk].color,
              opacity: active ? 1 : 0.4,
            }}
          />
        );
      })}
    </View>
  );
}
