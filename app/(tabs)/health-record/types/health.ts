export type HealthRiskLevel = 'low' | 'borderline' | 'moderate' | 'high';

export interface HealthRecord {
  id: string;
  date: string;
  bmi: string;
  heartRate: string;
  bloodPressure: string;
  location: string;
  risk: HealthRiskLevel;
}

export interface RiskLevel {
  min: number;
  max: number;
  label: string;
  feeling: string;
  heartColor: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
}
