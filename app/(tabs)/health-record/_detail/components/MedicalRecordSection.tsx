import CalendarIcon from '@/components/icons/CalendarIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import Input from '@/components/ui/Input';
import Section from '@/components/ui/Section';
import Textarea from '@/components/ui/Textarea';
import { TextCustom } from '@/components/ui/TextCustom';
import { View } from 'react-native';

type RecordType = 'GENERAL_CHECKUP' | 'HOME_MEASUREMENT' | 'HOSPITAL_VISIT';

interface MedicalRecordSectionProps {
  recordName: string;
  date: string;
  location: string;
  type: RecordType;
}

export default function MedicalRecordSection({
  recordName,
  date,
  location,
  type,
}: MedicalRecordSectionProps) {
  return (
    <Section title="GENERAL_CHECKUP">
      <TextCustom className="text-[24px] font-bold text-neutral-black-500">
        {recordName}
      </TextCustom>

      <View className="mt-1 flex flex-row gap-4">
        <View className="flex flex-row items-center gap-1">
          <CalendarIcon />
          <TextCustom className="text-1">{date}</TextCustom>
        </View>

        <View className="flex flex-row items-center gap-1">
          <LocationIcon />
          <TextCustom className="text-1">{location}</TextCustom>
        </View>
      </View>

      {type === 'HOME_MEASUREMENT' && (
        <>
          <TextCustom className="mt-4 text-2 text-neutral-black-100">
            Reason for measurement
          </TextCustom>

          <View className="mt-1 rounded-lg border border-neutral-black-100 p-3">
            <TextCustom className="text-1">
              I had chest pain and shortness of breath. Sometimes, I feel
              fatigue.
            </TextCustom>
          </View>
        </>
      )}

      {type === 'HOSPITAL_VISIT' && (
        <>
          <Input
            labelClassName="text-neutral-black-500 font-semibold"
            label="Doctor name"
            placeholder="Dr. David Nguyen"
          />

          <Input
            labelClassName="text-neutral-black-500 font-semibold"
            label="Facility / Hospital name"
            placeholder="City General Hospital"
          />

          <Textarea
            labelClassName="text-neutral-black-500 font-semibold"
            label="Reason for visit (optional)"
            placeholder="Periodic heart health evaluation based on recent risk assessment."
          />
        </>
      )}
    </Section>
  );
}
