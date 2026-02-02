import LocationHeartMarkerIcon from '@/components/icons/LocationHeartMarkerIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type Props = {
  riskPercent?: number;
};

export default function HeartRiskIndex({ riskPercent = 8.45 }: Props) {
  return (
    <View className="flex gap-5 bg-white">
      <View className="flex flex-col items-center gap-2">
        <View className="flex flex-row items-center gap-2">
          <ShieldIcon size={28} />
          <Text className="text-h1 font-semibold text-primary-700">
            Heart Risk Index
          </Text>
        </View>
        <Text className="text-1 text-neutral-black-300">
          A 10-year cardiovascular risk score
        </Text>
      </View>

      <View className="flex-row items-center justify-between px-3 py-1">
        <Text className="text-h3 font-medium text-neutral-black-500">
          Heart Status
        </Text>

        <View className="flex flex-row rounded-[4px] border border-success-200 bg-success-100 px-3 py-1">
          <Text className="p-1 text-2 font-semibold text-neutral-black-500">
            Low Risk{' '}
          </Text>
          <Text className="self-center pb-1 text-[#009966]">●</Text>
        </View>
      </View>

      <View className="mb-6 items-center">
        <View className="h-36 w-36 items-center justify-center rounded-full">
          <Ionicons name="heart" size={140} color={'#4DAB75'} />
          <Text className="absolute text-2xl font-bold text-neutral-black-500">
            {riskPercent.toFixed(2)}%
          </Text>
        </View>
      </View>

      <Text className="px-4 py-1 text-center text-2 text-neutral-black-500">
        This percentage shows how likely you are to develop heart disease in the
        next 10 years
      </Text>

      <View className="gap-5 px-4 py-2">
        <View>
          <Text className="text-h3 text-neutral-black-500">Risk Level Bar</Text>

          <Text className="text-2 text-neutral-black-500">
            This bar shows how your heart risk compares to standard levels
          </Text>
        </View>

        <View className="w-full">
          <View className="relative h-8">
            <View
              style={{ left: '10%' }}
              className="absolute -top-5 z-50 -translate-x-1/2"
            >
              <LocationHeartMarkerIcon />
            </View>
          </View>
          <View className="h-3 flex-row overflow-hidden rounded-full">
            <View className="flex-[10] bg-green-500" />
            <View className="flex-[15] bg-yellow-400" />
            <View className="flex-[30] bg-red-500" />
          </View>

          <View className="mt-2 flex-row justify-between">
            <Text className="text-xs text-gray-500">10%</Text>
            <Text className="text-xs text-gray-500">15%</Text>
            <Text className="text-xs text-gray-500">30%</Text>
          </View>
        </View>
        <View className="mt-6 space-y-2">
          <Legend color="bg-success-500 " label="Low Risk" />
          <Legend color="bg-[#FEE41C]" label="Moderate Risk" />
          <Legend color="bg-[#E7000B]" label="High Risk" />
        </View>
      </View>
    </View>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <View className="flex-row items-center">
      <View className={`h-3 w-3 rounded-full ${color} mr-2`} />
      <Text className="text-sm text-gray-700">{label}</Text>
    </View>
  );
}
