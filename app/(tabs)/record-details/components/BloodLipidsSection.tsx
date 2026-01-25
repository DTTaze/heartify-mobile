import Section from '@/components/ui/Section';
import { InputWithOptions } from './InputWithOptions';

export default function BloodLipidsSection() {
  return (
    <Section
      title="Blood Lipids"
      subtitle="Blood fat levels that affect heart health"
    >
      <InputWithOptions
        label="Total Cholesterol"
        options={['mg/dL', 'mmol/L']}
      />

      <InputWithOptions
        label="HDL Cholesterol (HDL-C)"
        options={['mg/dL', 'mmol/L']}
      />

      <InputWithOptions
        label="LDL Cholesterol (optional)"
        options={['mg/dL', 'mmol/L']}
      />
    </Section>
  );
}
