import { Text, View } from 'react-native';

function Dot({ color }: { color: string }) {
  return <View className={`h-2 w-2 rounded-full ${color}`} />;
}

export function HealthRiskLegend() {
  return (
    <View className="gap-3">
      <Text className="font-qu-bold text-h3 text-neutral-black-500">
        Health Risk Levels
      </Text>

      <Text className="font-qu-semibold text-2 text-neutral-white-900">
        Risk levels are for health awareness only and do not replace
        professional medical advice.
      </Text>

      <View className="flex-row items-center gap-2">
        <Dot color="bg-[#009966]" />
        <Text className="font-qu-semibold text-2">
          <Text className="font-qu-semibold text-2">Low:</Text> Within safe
          range, low health risk
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        <Dot color="bg-[#FEE41C]" />
        <Text className="font-qu-semibold text-2">
          <Text className="font-qu-semibold text-2">Borderline:</Text> Near
          threshold, early awareness only
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        <Dot color="bg-[#FFD06E]" />
        <Text className="font-qu-semibold text-2">
          <Text className="font-qu-semibold text-2">Moderate:</Text> Moderate
          risk, lifestyle adjustments recommended
        </Text>
      </View>

      <View className="flex-row items-center gap-2">
        <Dot color="bg-[#E7000B]" />
        <Text className="font-qu-semibold text-2">
          <Text className="font-qu-semibold text-2">High:</Text> High risk,
          closer monitoring and medical consultation advised
        </Text>
      </View>
    </View>
  );
}
