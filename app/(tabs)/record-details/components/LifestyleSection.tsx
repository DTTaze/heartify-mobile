import Section from '@/components/ui/Section';
import { HeathRow } from './HeathRow';

export default function LifestyleSection() {
  return (
    <Section
      title="Lifestyle & Medical History"
      subtitle="Calculated from height and weight"
    >
      <HeathRow label="Smoking Status" />
      <HeathRow label="Diabetes (diagnosed by a healthcare professional)" />
    </Section>
  );
}
