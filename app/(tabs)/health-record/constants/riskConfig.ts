import {
  HealthRiskLevel,
  RiskLevel,
} from '@/app/(tabs)/health-record/types/health';

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

export const RISK_LEVELS: RiskLevel[] = [
  {
    min: 0,
    max: 10,
    label: 'Low Risk',
    feeling: 'Feeling Good',
    heartColor: '#4DAB75',
    bgColor: '#D3EADD',
    borderColor: '#A6D5BA',
    dotColor: '#009966',
  },
  {
    min: 10,
    max: 15,
    label: 'Moderate Risk',
    feeling: 'A Bit Off',
    heartColor: '#FEEF77',
    bgColor: '#FFFCE8',
    borderColor: '#FEE41C',
    dotColor: '#FEE41C',
  },
  {
    min: 15,
    max: 30,
    label: 'High Risk',
    feeling: 'Could Be Better',
    heartColor: '#FFD98B',
    bgColor: '#FFECC5',
    borderColor: '#FFD06E',
    dotColor: '#FFD06E',
  },
  {
    min: 30,
    max: Infinity,
    label: 'Very High Risk',
    feeling: 'Needs Support',
    heartColor: '#EB5757',
    bgColor: '#FBDDDD',
    borderColor: '#EB5757',
    dotColor: '#EB5757',
  },
];
