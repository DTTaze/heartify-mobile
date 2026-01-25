import InfoIcon from '@/components/icons/InfoIcon';
import Section from '@/components/ui/Section';
import Textarea from '@/components/ui/Textarea';
import { TextCustom } from '@/components/ui/TextCustom';

export default function NotesSection() {
  return (
    <Section
      title="Notes (optional)"
      subtitle="Add any additional context about this record, such as measurement conditions or relevant symptoms"
    >
      <Textarea numberOfLines={4} />
      <TextCustom className="flex flex-row items-center gap-2">
        <InfoIcon size={36} />
        Do not use this field for urgent medical concerns.
      </TextCustom>
    </Section>
  );
}
