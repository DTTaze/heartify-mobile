import { HealthRiskLevel } from '@/app/(tabs)/health-record/types/health';

export const RISK_CONFIG: Record<
  HealthRiskLevel,
  { label: string; color: string; activeColor: string; borderColor: string }
> = {
  low: {
    label: 'Feeling Good',
    color: '#D3EADD',
    activeColor: '#219653',
    borderColor: '#A6D5BA',
  },
  borderline: {
    label: 'A Bit Off',
    color: '#FFFCE8',
    activeColor: '#FEE41C',
    borderColor: '#FEE41C',
  },
  moderate: {
    label: 'Could Be Better',
    color: '#FFECC5',
    activeColor: '#FFD06E',
    borderColor: '#FFD06E',
  },
  high: {
    label: 'Needs Support',
    color: '#FBDDDD',
    activeColor: '#EB5757',
    borderColor: '#EB5757',
  },
};
