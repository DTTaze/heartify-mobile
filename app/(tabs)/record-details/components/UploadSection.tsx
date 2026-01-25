import Section from '@/components/ui/Section';
import { Pressable, Text, View } from 'react-native';

import FileIcon from '@/components/icons/FileIcon';
import HandIcon from '@/components/icons/HandIcon';
import ScanIcon from '@/components/icons/ScanIcon';

const ACTIONS = [
  {
    label: 'Scan',
    Icon: ScanIcon,
  },
  {
    label: 'Type',
    Icon: HandIcon,
  },
  {
    label: 'Upload',
    Icon: FileIcon,
  },
];

export default function UploadSection() {
  return (
    <Section title="">
      <View className="mb-5 py-2">
        <Text className="text-center font-bold text-xl text-primary-700">
          Record Details
        </Text>

        <Text className="mt-1 text-center font-semibold text-base text-gray-600">
          Complete your health profile by filling in the details from your
          medical report.
        </Text>
      </View>

      <View className="mt-4 flex-row gap-3">
        {ACTIONS.map(({ label, Icon }) => (
          <Pressable
            key={label}
            className="flex-1 items-center rounded-lg border border-neutral-white-500 p-6 shadow-sm"
          >
            <Icon size={28} />

            <Text className="mt-2 font-medium text-gray-600">{label}</Text>
          </Pressable>
        ))}
      </View>
    </Section>
  );
}
