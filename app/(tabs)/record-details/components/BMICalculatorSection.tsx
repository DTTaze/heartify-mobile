import Section from '@/components/ui/Section';
import { InputWithOptions } from './InputWithOptions';

export default function BMICalculatorSection() {
  return (
    <Section
      title="BMI (Body Mass Index)"
      subtitle="Calculated from height and weight"
    >
      <InputWithOptions label="Weight" options={['kg', 'lb']} />

      <InputWithOptions label="Height" options={['cm', 'ft/in']} />
    </Section>
  );
}
