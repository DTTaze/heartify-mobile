import { RISK_CONFIG } from '@/app/(tabs)/health-record/constants/riskConfig';
import { HealthRiskLevel } from '@/app/(tabs)/health-record/types/health';
import { View, Text } from 'react-native';

export default function RiskBadge({ risk }: { risk: HealthRiskLevel }) {
  return (
    <View
      className="rounded-[4px] border p-2"
      style={{
        backgroundColor: RISK_CONFIG[risk].color,
        borderColor: RISK_CONFIG[risk].borderColor,
      }}
    >
      <Text className="text-xs font-medium">{RISK_CONFIG[risk].label}</Text>
    </View>
  );
}
