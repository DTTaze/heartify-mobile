import Input from '@/components/ui/Input';
import Section from '@/components/ui/Section';
import Textarea from '@/components/ui/Textarea';
import { TextCustom } from '@/components/ui/TextCustom';

export default function ManualEntrySection() {
  return (
    <Section title="">
      <TextCustom className="text-center font-semibold text-h1 text-primary-700">
        Manual Entry
      </TextCustom>
      <Input
        labelClassName="text-neutral-black-500 font-semibold"
        label="Record name"
        placeholder="December lab 2025"
      />
      <Input
        labelClassName="text-neutral-black-500 font-semibold"
        label="Doctor name"
        placeholder="Dr. Smith"
      />
      <Input
        labelClassName="text-neutral-black-500 font-semibold"
        label="Facility / Hospital name"
      />
      <Textarea
        labelClassName="text-neutral-black-500 font-semibold"
        label="Reason for visit"
      />
    </Section>
  );
}
